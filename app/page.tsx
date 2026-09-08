import { ChatWidget } from "@/components/ChatWidget";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Cafe } from "@/components/sections/Cafe";
import { Facilities } from "@/components/sections/Facilities";
import { Footer } from "@/components/sections/Footer";
import { FreeTrial } from "@/components/sections/FreeTrial";
import { Hero } from "@/components/sections/Hero";
import { Membership } from "@/components/sections/Membership";
import { Nutrition } from "@/components/sections/Nutrition";
import { Partners } from "@/components/sections/Partners";
import { Programs } from "@/components/sections/Programs";
import { SwimKids } from "@/components/sections/SwimKids";

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
        <Nutrition />
        <Cafe />
        <SwimKids />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatWidget />
      <MobileActionBar />
    </>
  );
}
