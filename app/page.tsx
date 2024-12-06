import Hero from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Hero />
    </div>
  );
}
