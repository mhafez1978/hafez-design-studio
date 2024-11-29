import React, { ReactNode } from "react";
//import { FaCompassDrafting } from "react-icons/fa6";
//import { IoBusiness } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { MdKitchen } from "react-icons/md";
import { BsBuildingDown } from "react-icons/bs";
import { FiTable } from "react-icons/fi";
//import { RiFolderReceivedFill } from "react-icons/ri";
//import { MdOutlineManageHistory } from "react-icons/md";
import { FaTruckFront } from "react-icons/fa6";
import { TbBathFilled } from "react-icons/tb";

const FeaturedServices = () => {
  return (
    <div className="container mx-auto py-22 mt-[220px] mb-[250px]">
      <div className="px-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mb-[60px] lg:mb-[70px]">
            <span className="mb-2 block text-lg font-semibold text-black">
              Our Services
            </span>
            <h2 className="text-3xl font-bold leading-[1.2] text-dark mb-4 dark:text-white sm:text-4xl md:text-[40px]">
              Residential &amp; Commercial
            </h2>
            <p className="mb-14 w-full pr-[12vw]">
              Our clients are planning a kitchen or bathroom renovation,
              legalizing a basement, designing a commercial space, or upgrading
              their business environment, Hafez Design Studio is here to guide
              them. We understand that both residential and small commercial
              projects are significant investments, and we&apos;re dedicated to
              making the process as smooth and enjoyable as possible. As a
              boutique design firm, we help you explore all your options,
              visualize the space before construction begins, and manage every
              detail—from selecting finishes and materials to coordinating with
              contractors. Our goal is to save you time, eliminate stress, and
              ensure your project is completed on schedule, within budget, and
              with excellent craftsmanship. Whether it&apos;s your home or your
              business, let us bring your vision to life with a space
              that&apos;s functional, beautiful, and uniquely yours
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex grid grid-cols-3 mb-6 px-6">
        <ServiceCard
          title="Interior Design"
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
            <MdHomeWork color="white" size={35} />
          }
        />
        <ServiceCard
          title="Kitchen Renovations"
          details="Lorem Ipsum is simply dummy text of the printing and industry."
          btnLink="/#"
          btnText="Learn More"
          icon={<MdKitchen color="white" size={35} />}
        />
        <ServiceCard
          title="Legal Basement"
          details="Lorem Ipsum is simply dummy text of the printing and industry."
          btnLink="/#"
          btnText="Learn More"
          icon={<BsBuildingDown color="white" size={35} />}
        />
        <ServiceCard
          title="Millwork & Fit in"
          details="Lorem Ipsum is simply dummy text of the printing and industry."
          btnLink="/#"
          btnText="Learn More"
          icon={<FiTable color="white" size={35} />}
        />
        <ServiceCard
          title="Bath Renovations"
          details="Lorem Ipsum is simply dummy text of the printing and industry."
          btnLink="/#"
          btnText="Learn More"
          icon={<TbBathFilled color="white" size={35} />}
        />
        <ServiceCard
          title="Procurement"
          details="Lorem Ipsum is simply dummy text of the printing and industry."
          btnLink="/#"
          btnText="Learn More"
          icon={<FaTruckFront color="white" size={35} />}
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
