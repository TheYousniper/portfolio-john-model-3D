import Image from "next/image";
import bg from "../../public/background/mundo-it2.png"
import RenderModel from "@/components/RenderModel";
//import Laptop from "@/components/models/Laptop";
import Navigation from "@/components/navigation/Index";
import dynamic from "next/dynamic";


const Laptop = dynamic(() => import("@/components/models/Laptop"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image priority sizes="100vw" src={bg} alt="background-image" fill className="w-full h-full object-cover object-center opacity-15"/>
      <div className='w-full h-screen z-0'>
        {/* Navigation and 3D model */}
        <Navigation />
        <div className="w-full h-screen flex items-center justify-center">
          <div className='w-full h-[45%] xs:h-3/4 sm:h-screen'>
            <RenderModel>
                <Laptop/>
            </RenderModel>
          </div>
        </div>
      </div>
    </main>
  );
}
