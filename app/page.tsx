import Hero from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import Image from "next/image";
import AboutUs from "@/components/landing/about";
import OurPrograms from "@/components/landing/programs";
import JoinMailingList from "@/components/landing/mailing-list";

export default function Home() {
  return (
    <div className="grid justify-center font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Hero />
      <OurPrograms />
      <AboutUs />
      <JoinMailingList />
    </div>
  );
}
