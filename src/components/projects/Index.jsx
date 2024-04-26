"use client";

import { motion } from "framer-motion";
import ProyectLayout from "./ProyectLayout";



const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const ProjectList = ({ projects }) => {
  return (
    <motion.div 
    variants={container}
    initial="hidden"
    animate="show"
    className='w-full xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center'>
      {projects.map((project, index) => {
        return <ProyectLayout {...project} key={index} />;
      })}
    </motion.div>
  );
};

export default ProjectList;
