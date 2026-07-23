"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";

export function ThreeBrandScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.18, 6.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.08, 3),
      new THREE.MeshStandardMaterial({
        color: 0xff6a00,
        metalness: 0.35,
        roughness: 0.28,
        emissive: 0xe0301e,
        emissiveIntensity: 0.2,
      })
    );
    group.add(core);

    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xffb020,
      metalness: 0.72,
      roughness: 0.18,
      emissive: 0xff6a00,
      emissiveIntensity: 0.18,
      transparent: true,
      opacity: 0.72,
    });

    const rings = [0, 1, 2].map((i) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.62 + i * 0.28, 0.018, 12, 140), ringMaterial);
      ring.rotation.set(i * 0.7, i * 0.58, i * 0.22);
      group.add(ring);
      return ring;
    });

    const sparksGeometry = new THREE.BufferGeometry();
    const sparkCount = 130;
    const sparkPositions = new Float32Array(sparkCount * 3);
    for (let i = 0; i < sparkCount; i += 1) {
      const radius = 2.2 + Math.random() * 1.25;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      sparkPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      sparkPositions[i * 3 + 1] = radius * Math.cos(phi);
      sparkPositions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    sparksGeometry.setAttribute("position", new THREE.BufferAttribute(sparkPositions, 3));
    const sparks = new THREE.Points(
      sparksGeometry,
      new THREE.PointsMaterial({
        size: 0.035,
        color: 0xffcf58,
        transparent: true,
        opacity: 0.75,
      })
    );
    group.add(sparks);

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const key = new THREE.PointLight(0xff6a00, 22, 14);
    key.position.set(2.8, 2.6, 3.2);
    scene.add(key);
    const rim = new THREE.PointLight(0x4fd6ff, 7, 11);
    rim.position.set(-3.4, -1.8, 2.4);
    scene.add(rim);

    const resize = () => {
      const width = Math.max(1, mount.clientWidth);
      const height = Math.max(1, mount.clientHeight);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    resize();
    window.addEventListener("resize", resize);

    const timeline = gsap.timeline({ repeat: -1 });
    timeline.to(group.rotation, { y: Math.PI * 2, duration: 18, ease: "none" }, 0);
    timeline.to(core.scale, { x: 1.08, y: 1.08, z: 1.08, duration: 2.2, yoyo: true, repeat: -1, ease: "sine.inOut" }, 0);
    rings.forEach((ring, i) => {
      gsap.to(ring.rotation, {
        x: ring.rotation.x + Math.PI * 2,
        z: ring.rotation.z + Math.PI * 2,
        duration: 12 + i * 4,
        repeat: -1,
        ease: "none",
      });
    });

    let frame = 0;
    let raf = 0;
    const animate = () => {
      frame += 0.01;
      sparks.rotation.y += 0.0024;
      sparks.rotation.x = Math.sin(frame) * 0.08;
      core.rotation.x += 0.003;
      core.rotation.z += 0.004;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      timeline.kill();
      rings.forEach((ring) => ring.geometry.dispose());
      sparksGeometry.dispose();
      core.geometry.dispose();
      core.material.dispose();
      ringMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-24 z-[1] h-[40rem] w-[44rem] max-w-[58vw] opacity-80 mix-blend-screen sm:top-20"
    />
  );
}
