import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const item = {
  hidden: { opacity: 0, y:100 },
  show: { opacity: 1, y:0 },
};

const NavLink = motion(Link);

const ProyectLayout = ({ name, description, date, demoLink }) => {
  return (
    <NavLink
      variants={item}
      href={demoLink}
      className=" text-sm md:text-base flex items-center justify-between w-[300px] lg:w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
      target={"_blank"}
    >
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-foreground">{name}</h2>
        <p className="text-muted hidden sm:inline-block">{description}</p>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border border-b border-dashed border-muted" />
      <p className=" text-accent sm:text-foreground">
        {new Date(date).toDateString()}
      </p>
    </NavLink>
  );
};

export default ProyectLayout;
