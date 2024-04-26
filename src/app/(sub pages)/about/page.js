import Image from "next/image";
import bg from "../../../../public/background/about-background.jpg";
import RenderModel from "@/components/RenderModel";
// import Visor from "@/components/models/Visor";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";


const Visor = dynamic(() => import("@/components/models/Visor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-[35%] -translate-y-1/2 left-0 ">
        <RenderModel>
          <Visor />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2 w-full">
          <h1 className="w-screen font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-7xl text-accent text-center">
            John Lanza
          </h1>
          <p className="font-light text-foreground text-xl py-2">
            Meet the developer behind this portfolio
          </p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
