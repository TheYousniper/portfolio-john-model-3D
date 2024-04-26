import React from "react";
import ItemLayout from "./ItemLayout";




const AboutDetails = () => {
  return (
    <section className="w-full -mt-60 lg:-mt-10">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"}>
          <h2 className=" text-xl md:text-2xl text-left w-full capitalize">
            Web Developer
          </h2>
          <p className="font-light text-justify text-xs sm:text-sm md:text-base">
            I am a passionate Front-End Developer with extensive experience in
            creating attractive and functional websites using HTML, CSS and
            JavaScript. My enthusiasm for continuous improvement motivates me to
            always be at the forefront of the latest technologies and trends in
            the world of web development. I consider myself a proactive and
            results-oriented person, always willing to face new challenges and
            overcome obstacles. Working as a team is one of my strengths, since
            I enjoy collaborating and contributing innovative ideas to achieve
            established objectives. In addition to being a passionate developer,
            I find great satisfaction in sharing my knowledge with others. I
            enjoy teaching and mentoring, which has allowed me to successfully
            lead talented teams and foster an environment of constant learning.
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=johalama2023&theme=transparent&hide_border=true&title_color=0096C7&text_color=FFFFFF&icon_color=FFFFFF&text_bold=false"
            alt="johalama2023"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=johalama2023&theme=transparent&hide_border=true&title_color=0096C7&text_color=FFFFFF&icon_color=FFFFFF&text_bold=false"
            alt="johalama2023"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=ae,angular,autocad,babel,bootstrap,codepen,css,express,figma,firebase,git,github,html,ai,js,jquery,less,materialui,mongodb,mysql,netlify,nextjs,nodejs,npm,ps,postgres,postman,prisma,react,redux,sass,sequelize,tailwind,threejs,vercel,visualstudio,vite,vscode,yarn"
            alt="johalama2023"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=TheYousniper&theme=dark&hide_border=true&background=EB545400&ring=0096C7&currStreakLabel=0096C7"
            alt="johalama2023"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=TheYousniper&repo=portafolio-nextjs&theme=transparent&hide_border=true&title_color=0096C7&text_color=FFFFFF&icon_color=FFFFFF&text_bold=false&description_lines_count=2"
            alt="johalama2023"
            loading="lazy"
          />
        </ItemLayout>
        
      </div>
    </section>
  );
};

export default AboutDetails;
