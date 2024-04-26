import Image from "next/image";
import bg from "../../../../public/background/projects-background.jpg";
import ProjectList from "@/components/projects/Index";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
//import Iphone from "@/components/models/Iphone";
import dynamic from "next/dynamic";

const Iphone = dynamic(() => import("@/components/models/Iphone"), {
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
      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-16 lg:top-20 lg:left-0 h-screen w-full lg:w-[28%] -z-10">
        <RenderModel>
          <Iphone />
        </RenderModel>
      </div>
    </>
  );
}
