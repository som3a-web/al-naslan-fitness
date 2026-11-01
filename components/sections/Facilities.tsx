"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";
import { Icon } from "@/lib/icons";
import { FACILITIES } from "@/lib/data";

type GalleryImage = {
  src: string;
  alt: string;
  label: string;
};

type LightboxState = {
  facilityName: string;
  imageIndex: number;
};

const GYM_FLOOR_IMAGES: GalleryImage[] = [
  {
    src: "/media/gym-floor/strength-floor-wide.jpg",
    alt: "Wide view of the NFC strength floor with plate-loaded machines and dumbbell racks",
    label: "Strength floor",
  },
  {
    src: "/media/gym-floor/plate-loaded-benches.jpg",
    alt: "Plate-loaded bench press stations in front of the dumbbell racks",
    label: "Plate-loaded benches",
  },
  {
    src: "/media/gym-floor/plate-loaded-windows.jpg",
    alt: "Row of plate-loaded strength machines beside floor-to-ceiling windows",
    label: "Plate-loaded machines",
  },
  {
    src: "/media/gym-floor/cable-station-wide.jpg",
    alt: "Multi-station cable machine on the gym floor with neon accent lighting",
    label: "Cable station",
  },
  {
    src: "/media/gym-floor/multi-station.jpg",
    alt: "Multi-station cable and pulley machine with exercise balls",
    label: "Multi-station",
  },
  {
    src: "/media/gym-floor/nfc-cable-machine.jpg",
    alt: "Cable machine beside the NFC logo wall, with the cardio room behind",
    label: "NFC cable machine",
  },
  {
    src: "/media/gym-floor/ski-erg-strength.jpg",
    alt: "SkiErg and assisted dip machine in front of the gym mirrors",
    label: "SkiErg & machines",
  },
  {
    src: "/media/gym-floor/welcome-entrance.jpg",
    alt: "Illuminated entrance corridor with a Welcome to our Gym sign",
    label: "Gym entrance",
  },
  {
    src: "/media/gym-floor/nfc-logo-wall.jpg",
    alt: "NFC Naslan Fitness Center logo on a brick wall",
    label: "NFC wall",
  },
  {
    src: "/media/gym-floor/gx-room.jpg",
    alt: "GX room studio with neon lighting, mirrors and a wooden floor",
    label: "GX room",
  },
  {
    src: "/media/gym-floor/stronger-than-yesterday.jpg",
    alt: "Stronger Than Yesterday neon sign above medicine ball racks in the GX room",
    label: "GX room",
  },
];

const CARDIO_ZONE_IMAGES: GalleryImage[] = [
  {
    src: "/media/cardio-zone/climb-beyond-limits.jpg",
    alt: "Treadmills under the Climb Beyond Limits neon sign",
    label: "Treadmills",
  },
  {
    src: "/media/cardio-zone/treadmills-pool-view.jpg",
    alt: "Treadmills overlooking the swimming pool through a glass wall",
    label: "Pool-view treadmills",
  },
  {
    src: "/media/cardio-zone/stair-climber.jpg",
    alt: "Stair climber and exercise bike in front of a motivational neon sign",
    label: "Stair climber",
  },
  {
    src: "/media/cardio-zone/bike-and-climber.jpg",
    alt: "Exercise bike and stair climber under an If It Doesn't Challenge You neon sign",
    label: "Bikes & climbers",
  },
  {
    src: "/media/cardio-zone/cross-trainer-mirrors.jpg",
    alt: "Cross trainer and cable machine in front of large gym mirrors",
    label: "Cross trainer",
  },
];

const SWIMMING_POOL_IMAGES: GalleryImage[] = [
  {
    src: "/media/swimming-pool/pool-nfc-wall.jpg",
    alt: "Indoor swimming pool beside the illuminated NFC logo mosaic wall",
    label: "NFC wall",
  },
  {
    src: "/media/swimming-pool/pool-gym-view.jpg",
    alt: "Indoor pool with the NFC logo and the gym floor visible behind glass",
    label: "Pool & gym view",
  },
  {
    src: "/media/swimming-pool/lap-pool-wide.jpg",
    alt: "Wide view of the indoor lap pool with natural light",
    label: "Lap pool",
  },
  {
    src: "/media/swimming-pool/pool-ladder.jpg",
    alt: "Swimming pool steps and ladder beside the NFC wall",
    label: "Pool deck",
  },
  {
    src: "/media/swimming-pool/loungers.jpg",
    alt: "Poolside loungers beside floor-to-ceiling windows",
    label: "Loungers",
  },
  {
    src: "/media/swimming-pool/pool-changing-area.jpg",
    alt: "Pool corner with direct access to the changing area",
    label: "Pool access",
  },
  {
    src: "/media/swimming-pool/pool-lifebuoy.jpg",
    alt: "Lifebuoys on the mosaic wall next to the NFC logo",
    label: "Lifeguard ready",
  },
];

const KIDS_POOL_IMAGES: GalleryImage[] = [
  {
    src: "/media/kids-pool/kids-round-pool.jpg",
    alt: "Round shallow kids pool beside the windows",
    label: "Kids pool",
  },
];

const LOCKER_IMAGES: GalleryImage[] = [
  {
    src: "/media/lockers/locker-room.jpg",
    alt: "Changing room with lockers, a bench and a backlit mirror",
    label: "Locker room",
  },
  {
    src: "/media/lockers/locker-corridor.jpg",
    alt: "Locker corridor leading to the showers with neon accents",
    label: "Locker corridor",
  },
  {
    src: "/media/lockers/enter-different-exit-stronger.jpg",
    alt: "Shower room doors beside an Enter Different Exit Stronger neon sign",
    label: "Shower rooms",
  },
  {
    src: "/media/lockers/you-look-amazing.jpg",
    alt: "Changing room corridor with a You Look Amazing neon mirror",
    label: "Changing rooms",
  },
];

const FACILITY_GALLERIES: Record<string, GalleryImage[]> = {
  "Main Gym Floor": GYM_FLOOR_IMAGES,
  "Cardio Zone": CARDIO_ZONE_IMAGES,
  "Swimming Pool": SWIMMING_POOL_IMAGES,
  "Kids Pool": KIDS_POOL_IMAGES,
  "Premium Lockers": LOCKER_IMAGES,
};

function moveLightbox(current: LightboxState | null, direction: number) {
  if (!current) return current;
  const images = FACILITY_GALLERIES[current.facilityName] ?? [];
  if (images.length < 2) return current;

  return {
    ...current,
    imageIndex: (current.imageIndex + direction + images.length) % images.length,
  };
}

export function Facilities() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const isLightboxOpen = lightbox !== null;
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const activeImages = lightbox ? FACILITY_GALLERIES[lightbox.facilityName] ?? [] : [];
  const selectedImage = lightbox ? activeImages[lightbox.imageIndex] : null;
  const hasMultipleImages = activeImages.length > 1;

  useEffect(() => {
    if (!isLightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowLeft") setLightbox((current) => moveLightbox(current, -1));
      if (event.key === "ArrowRight") setLightbox((current) => moveLightbox(current, 1));
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isLightboxOpen]);

  const openGallery = (facilityName: string, imageIndex = 0) => {
    setLightbox({ facilityName, imageIndex });
  };

  const showPreviousImage = () => {
    setLightbox((current) => moveLightbox(current, -1));
  };

  const showNextImage = () => {
    setLightbox((current) => moveLightbox(current, 1));
  };

  const jumpToImage = (imageIndex: number) => {
    setLightbox((current) => (current ? { ...current, imageIndex } : current));
  };

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStart.current || !hasMultipleImages) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;

    touchStart.current = null;

    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY)) return;
    if (deltaX > 0) showPreviousImage();
    else showNextImage();
  };

  return (
    <>
      <section id="facilities" className="section relative py-24">
        <SectionHeader
          eyebrow="World-Class Facilities"
          title="Everything under"
          highlight="one roof"
          subtitle="From the gym floor to the swimming pool — explore the spaces that make NFC a destination."
        />

        <div className="mt-14 grid auto-rows-[minmax(248px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FACILITIES.map((facility, index) => {
            const images = FACILITY_GALLERIES[facility.name] ?? [];
            const heroImage = images[0];
            const extraCount = images.length - 1;
            const hasGallery = images.length > 0;
            const cardClassName = `group/facility relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-ink-950 text-left text-white shadow-glass ${
              hasGallery
                ? "cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-flame-300"
                : ""
            }`;
            const cardContent = (
              <>
                {heroImage ? (
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    fill
                    sizes={index === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 100vw"}
                    className="object-cover transition duration-700 group-hover/facility:scale-[1.045]"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,#24252a_0%,#17181c_54%,#0e0f12_100%)]" />
                )}
                <div
                  className={`absolute inset-0 ${
                    heroImage
                      ? "bg-gradient-to-t from-ink-950 via-ink-950/72 to-ink-950/25"
                      : "bg-[linear-gradient(135deg,rgba(255,255,255,0.07),transparent_38%,rgba(0,0,0,0.24))]"
                  }`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_12%,rgba(255,106,0,0.25),transparent_18rem)]" />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,87,255,0.14),transparent_44%,rgba(224,48,30,0.15))] opacity-70" />

                <div className="tilt-inner relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-flame-gradient shadow-flame">
                      <Icon name={facility.icon} className="text-white" size={20} />
                    </div>
                    <span className="flex flex-col items-end gap-2">
                      <span className="whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-flame-200 backdrop-blur">
                        {facility.tag}
                      </span>
                      {extraCount > 0 ? (
                        <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-black/55 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-white backdrop-blur-md">
                          <Images size={13} />
                          +{extraCount} {extraCount === 1 ? "photo" : "photos"}
                        </span>
                      ) : null}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <h3 className={`font-display font-extrabold leading-tight text-white ${index === 0 ? "text-4xl sm:text-5xl" : "text-2xl"}`}>
                      {facility.name}
                    </h3>
                    <p className={`mt-1.5 line-clamp-2 leading-snug text-white/80 ${index === 0 ? "text-sm sm:text-base" : "text-[13px]"}`}>
                      {facility.desc}
                    </p>
                  </div>
                </div>
              </>
            );

            return (
              <Reveal
                key={facility.name}
                delay={index * 50}
                className={index === 0 ? "min-h-[360px] sm:col-span-2 sm:row-span-2 sm:min-h-0" : ""}
              >
                <TiltCard className="h-full" intensity={6}>
                  {hasGallery ? (
                    <button
                      type="button"
                      onClick={() => openGallery(facility.name)}
                      className={cardClassName}
                      aria-label={`Open ${facility.name} gallery`}
                    >
                      {cardContent}
                    </button>
                  ) : (
                    <div className={cardClassName}>
                      {cardContent}
                    </div>
                  )}
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      {lightbox && selectedImage ? (
        <div
          className="fixed inset-0 z-[90] bg-ink-950/94 px-3 py-4 text-white backdrop-blur-xl sm:px-6 sm:py-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.facilityName} photo gallery`}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-zoom-out"
            onClick={() => setLightbox(null)}
            aria-label="Close photo gallery"
          />

          <div className="group/lightbox relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-black uppercase tracking-[0.18em] text-flame-300">
                  {lightbox.facilityName}
                </p>
                <p className="mt-1 text-sm text-white/62">
                  {lightbox.imageIndex + 1} / {activeImages.length} - {selectedImage.label}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/18 focus:outline-none focus:ring-2 focus:ring-flame-300"
                aria-label="Close photo gallery"
              >
                <X size={20} />
              </button>
            </div>

            <div
              className="relative min-h-0 flex-1 overflow-hidden rounded-3xl border border-white/12 bg-black shadow-[0_24px_90px_rgba(0,0,0,0.55)]"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div key={`${lightbox.facilityName}-${lightbox.imageIndex}`} className="gallery-image-enter absolute inset-0">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {hasMultipleImages ? (
                <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-5">
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/45 text-white opacity-100 shadow-glass backdrop-blur transition hover:bg-black/65 focus:outline-none focus:ring-2 focus:ring-flame-300 sm:h-12 sm:w-12 sm:opacity-0 sm:group-hover/lightbox:opacity-100 sm:focus-visible:opacity-100"
                    aria-label="Show previous gallery photo"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/45 text-white opacity-100 shadow-glass backdrop-blur transition hover:bg-black/65 focus:outline-none focus:ring-2 focus:ring-flame-300 sm:h-12 sm:w-12 sm:opacity-0 sm:group-hover/lightbox:opacity-100 sm:focus-visible:opacity-100"
                    aria-label="Show next gallery photo"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              ) : null}
            </div>

            {hasMultipleImages ? (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                {activeImages.map((image, index) => {
                  const isActive = index === lightbox.imageIndex;

                  return (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => jumpToImage(index)}
                      className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-2xl border bg-white/5 transition focus:outline-none focus:ring-2 focus:ring-flame-300 sm:h-16 sm:w-24 ${
                        isActive
                          ? "border-flame-300 opacity-100 shadow-flame"
                          : "border-white/12 opacity-58 hover:border-white/35 hover:opacity-100"
                      }`}
                      aria-label={`Show ${image.label} photo`}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <Image src={image.src} alt={image.alt} fill sizes="112px" className="object-cover" />
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
