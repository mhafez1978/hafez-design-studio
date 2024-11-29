import React, { ReactNode } from "react";
import { LuLampCeiling } from "react-icons/lu";
import { SiAffinitydesigner } from "react-icons/si";
import { MdSpaceDashboard } from "react-icons/md";
import { TbSection } from "react-icons/tb";
import { SiSketchup } from "react-icons/si";
import { SiTwinmotion } from "react-icons/si";

const FeaturedServices = () => {
  return (
    <div className="container mx-auto py-22 mt-[220px] mb-[250px]">
      <div className="px-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mb-[60px] lg:mb-[70px]">
            <span className="mb-2 block text-lg font-semibold text-black">
              Interior Designers
            </span>
            <h2 className="mb-4 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
              Generals Contractors
            </h2>
            <p className="mb-14 w-full pr-[12vw]">
              Who We Serve Interior Designers: Small to mid-sized design firms
              that lack in-house technical staff or can&apos;t afford to lose
              valuable time handling technical tasks, solo entrepreneurs who
              need extra hands to focus on creativity, established designers
              aiming to impress their clients with professional visualization
              and documentation, and design teams navigating high-demand,
              fast-paced environments. General Contractors: We collaborate with
              GCs who don&apos;t have in-house designers or whose design teams
              are stretched thin across multiple projects. Without proper
              planning, projects like kitchens can face significant delays due
              to unforeseen issues, costing time, money, and client
              satisfaction. By partnering with us, GCs can ensure a
              well-thought-out design process from the start, minimizing
              disruptions, optimizing timelines, and enhancing communication
              with clients. This leads to smoother projects, satisfied clients,
              positive reviews, and future referrals. If this sounds like you,
              look no further—let&apos;s bring your projects to life!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex grid grid-cols-3 mb-6 px-6">
        <ServiceCard
          title="As-Built Floor Plans"
          details="Lorem Ipsum is simply dummy text of the printing and industry."
          btnLink="/#"
          btnText="Learn More"
          icon={
            // <svg
            //   width="36"
            //   height="36"
            //   viewBox="0 0 24 24"
            //   fill="none"
            //   xmlns="http://www.w3.org/2000/svg"
            // >
            //   <path d="M12 3L2 12h3v9h6v-6h2v6h6v-9h3L12 3z" fill="white" />
            // </svg>
            <SiAffinitydesigner color="white" size={35} />
          }
        />
        <ServiceCard
          title="Space Planning"
          details="Lorem Ipsum is simply dummy text of the printing and industry."
          btnLink="/#"
          btnText="Learn More"
          icon={<MdSpaceDashboard color="white" size={35} />}
        />
        <ServiceCard
          title="Permit Drawings"
          details="Lorem Ipsum is simply dummy text of the printing and industry."
          btnLink="/#"
          btnText="Learn More"
          icon={<LuLampCeiling color="white" size={35} />}
        />
        <ServiceCard
          title="Sections & Elevations"
          details="Lorem Ipsum is simply dummy text of the printing and industry."
          btnLink="/#"
          btnText="Learn More"
          icon={<TbSection color="white" size={35} />}
        />
        <ServiceCard
          title="3D Modeling"
          details="Lorem Ipsum is simply dummy text of the printing and industry."
          btnLink="/#"
          btnText="Learn More"
          icon={<SiSketchup color="white" size={35} />}
        />
        <ServiceCard
          title="Renderings & Walkthroughs"
          details="Lorem Ipsum is simply dummy text of the printing and industry."
          btnLink="/#"
          btnText="Learn More"
          icon={<SiTwinmotion color="white" size={35} />}
        />
      </div>
    </div>
  );
};

export default FeaturedServices;

interface ServiceCardProps {
  icon: ReactNode; // ReactNode will cover any React elements, including SVGs
  title: string;
  details: string;
  btnText: string;
  btnLink: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  details,
  btnText,
  btnLink,
}) => {
  return (
    <div className="w-full px-4">
      <div className="group mb-12">
        <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-black xl:mb-[50px]">
          <span className="absolute left-0 top-0 z-[-1] flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-30 duration-300 group-hover:rotate-45"></span>
          {icon}
        </div>
        <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
          {title}
        </h4>
        <p className="mb-9 text-black">{details}</p>
        <a
          href={btnLink}
          className="text-base font-medium text-dark hover:text-primary dark:text-white"
        >
          {btnText}
        </a>
      </div>
    </div>
  );
};
