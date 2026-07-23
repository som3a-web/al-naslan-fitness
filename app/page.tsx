import { MobileActionBar } from "@/components/MobileActionBar";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Analytics } from "@/components/sections/Analytics";
import { Cafe } from "@/components/sections/Cafe";
import { Classes } from "@/components/sections/Classes";
import { Facilities } from "@/components/sections/Facilities";
import { Footer } from "@/components/sections/Footer";
import { FreeTrial } from "@/components/sections/FreeTrial";
import { GymStats } from "@/components/sections/GymStats";
import { Hero } from "@/components/sections/Hero";
import { Membership } from "@/components/sections/Membership";
import { Nutrition } from "@/components/sections/Nutrition";
import { Partners } from "@/components/sections/Partners";
import { Programs } from "@/components/sections/Programs";
import { SocialProof } from "@/components/sections/SocialProof";
import { SwimKids } from "@/components/sections/SwimKids";
import { Trainers } from "@/components/sections/Trainers";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Facilities />
        <Partners />
        <Programs />
        <Membership />
        <FreeTrial />
        <Trainers />
        <Analytics />
        <Classes />
        <Nutrition />
        <Cafe />
        <SwimKids />
        <SocialProof />
        <GymStats />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </>
  );
}
