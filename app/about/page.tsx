import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about the author of this blog.",
};

const AboutPage = () => {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="size-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>ACE</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Software Developer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4 align-center">
          I am a software developer with a passion for creating software
          solutions that solve real-world problems. I have experience in
          developing web applications using technologies like React, Next.js,
          Node.js, and MongoDB. I am always eager to learn new technologies and
          improve my skills. I am also a tech enthusiast who loves to explore
          new technologies and share my knowledge with others.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
