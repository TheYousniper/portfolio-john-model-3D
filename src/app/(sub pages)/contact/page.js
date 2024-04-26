import Image from "next/image";
import bg from "../../../../public/background/contact-background.jpg";
import Form from "@/components/contact/Form";

export default function Contact() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            contact me
          </h1>
          <p className="text-justify sm:text-center font-light text-sm xs:text-base">
            You should contact me because I have the experience and skill to
            create visually attractive and functional websites that meet the
            needs and objectives of my clients. Additionally, my
            commitment to open communication and collaboration ensures a
            positive experience for my clients throughout the website
            development process.
          </p>
          <Form />
        </div>
      </article>
    </>
  );
}
