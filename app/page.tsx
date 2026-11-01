import { ChatWidget } from "@/components/ChatWidget";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Cafe } from "@/components/sections/Cafe";
import { Facilities } from "@/components/sections/Facilities";
import { FindUs } from "@/components/sections/FindUs";
import { Footer } from "@/components/sections/Footer";
import { JoinForm } from "@/components/sections/JoinForm";
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
        <JoinForm />
        <Nutrition />
        <Cafe />
        <SwimKids />
        <FindUs />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatWidget />
      <MobileActionBar />
    </>
  );
}
