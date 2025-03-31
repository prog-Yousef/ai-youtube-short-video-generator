import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import VideoList from "./(main)/dashboard/_components/VideoList";

export default function Home() {
  return (
    <div className="md:px-16 lg:px-24 xl:px-36">
      {/* header  */}
      <Header />
      {/* Hero  */}
      <Hero />

      <VideoList explore={true} />
    </div>
  );
}
