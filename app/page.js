import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";


export default function Home() {
  return (
    <div className="md:px-16 lg:px-24 xl:36">
{/* header */}
<Header/> 
{/* hero */}
<Hero/>
    </div>
  );
}
