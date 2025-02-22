import Link from "next/link";
import React from "react";

interface heroProps {
  bgColor?: string;
  heroTitle?: string;
  heroText?: string;
  heroText2?: string;
  heroButtonText?: string;
}

const Hero: React.FC<heroProps> = ({
  bgColor,
  heroTitle,
  heroText,
  heroText2,
  heroButtonText,
}) => {
  const words = (heroText ? heroText.split(" ") : []) || null;

  // Check if there are at least 6 words
  const modifiedHeroText = words.map((word, index) => {
    if (index === 5) {
      // Wrap the 6th word with a <span> and apply the 'italic' class
      return (
        <span
          key={index}
          className="italic font-semibold leading-2 tracking-tight underline underline-offset-[20px]"
        >
          {word}
        </span>
      );
    }
    return word; // Return other words as they are
  });

  return (
    <div
      className={
        "relative w-screen h-[66vh] mt-[20vh] flex flex-col justify-center items-center z-10 " +
        bgColor
      }
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/hero-walk-through.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full object-cover bg-black/60 z-10"></div>
      {/* Overlay content */}
      <div className="w-[70%] min-h-1/2 mx-auto text-center z-30">
        <h2 className="text-xl text-white mb-4">{heroTitle}</h2>
        <p className="text-[2rem] font-semibold text-white mb-6 tracking-light lg:text-6xl">
          {modifiedHeroText.map((word, index) => (
            <React.Fragment key={index}>
              {word}&nbsp; {/* This adds a space after each word */}
            </React.Fragment>
          ))}
        </p>
        <p className="text-xl text-white mb-12">{heroText2}</p>
        <Link
          href="/new-lead"
          className="border border-white text-white rounded-lg py-4 px-12 hover:bg-white hover:text-black hover:ring-4 hover:ring-offset-slate-200	"
        >
          {heroButtonText}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
