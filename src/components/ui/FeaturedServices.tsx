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
import { VscLayout } from "react-icons/vsc";
import { FaProjectDiagram } from "react-icons/fa";

const FeaturedServices = ({
  serviceTitle,
  serviceName,
  serviceDescription,
  serviceDescription2,
}: {
  serviceTitle: string;
  serviceName: string;
  serviceDescription: string;
  serviceDescription2: string;
}) => {
  return (
    <div className="container mx-auto py-22 mb-[25px]">
      <div className="px-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mb-[60px] lg:mb-[50px]">
            <span className="mb-2 block text-lg font-semibold text-black">
              {serviceTitle}
            </span>
            <h2 className="text-3xl font-bold leading-[1.2] text-dark mb-4 dark:text-white sm:text-4xl md:text-[40px]">
              {serviceName}
            </h2>
            <p className="mb-4 w-full pr-[12vw]">{serviceDescription}</p>
            <p className="w-full pr-[12vw]">{serviceDescription2}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex grid grid-cols-4 px-6">
        <ServiceCard
          title="Full-Service Interior Design"
          details="From concept to completion, we handle every detail of your residential project. This includes space planning, material selection, furniture, lighting, and décor, ensuring your home is all unified, reflects your style, and meets your needs. seamlessly."
          // btnLink="/#"
          // btnText="Learn More"
          icon={<MdHomeWork color="white" size={35} />}
        />
        <ServiceCard
          title="Kitchen Renovations"
          details="We craft functional and stylish kitchens tailored to your lifestyle. From layout planning to selecting finishes and cabinetry, our designs ensure your kitchen becomes the heart of your home, blending practicality with beauty."
          // btnLink="/#"
          // btnText="Learn More"
          icon={<MdKitchen color="white" size={35} />}
        />
        <ServiceCard
          title="Legal Basement"
          details="We specialize in designing legal basements that maximize functionality and meet building code requirements. Our designs combine practicality with a polished finish, whether for additional living space, rental income, or storage."
          // btnLink="/#"
          // btnText="Learn More"
          icon={<BsBuildingDown color="white" size={35} />}
        />
        <ServiceCard
          title="Millwork & Fit in"
          details="Our custom millwork designs add unique character and functionality to your space. From built-ins to cabinetry, we ensure seamless integration with your interior, enhancing both style and utility."
          // btnLink="/#"
          // btnText="Learn More"
          icon={<FiTable color="white" size={35} />}
        />
        <ServiceCard
          title="Bath Renovations"
          details="We create serene and functional bathroom spaces that cater to your needs. From efficient layouts to selecting luxurious fixtures and finishes, our designs transform your bathroom into a relaxing retreat."
          // btnLink="/#"
          // btnText="Learn More"
          icon={<TbBathFilled color="white" size={35} />}
        />
        <ServiceCard
          title="Procurement"
          details="We handle the sourcing and purchasing of furniture, fixtures, and materials, ensuring the best quality and value. Our streamlined process saves you time and delivers everything needed to bring your design to life."
          // btnLink="/#"
          // btnText="Learn More"
          icon={<FaTruckFront color="white" size={35} />}
        />
        <ServiceCard
          title="Layout & Furniture Selection"
          details="We design optimized layouts and curate furniture pieces that perfectly suit your space and style. Every element is selected to enhance comfort, functionality, and aesthetic appeal."
          // btnLink="/#"
          // btnText="Learn More"
          icon={<VscLayout color="white" size={35} />}
        />
        <ServiceCard
          title="Project Management"
          details="We oversee every aspect of your project, coordinating timelines, contractors, and deliveries to ensure a smooth process. Our hands-on approach guarantees your vision is executed flawlessly and on schedule."
          // btnLink="/#"
          // btnText="Learn More"
          icon={<FaProjectDiagram color="white" size={35} />}
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
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, details }) => {
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
      </div>
    </div>
  );
};
