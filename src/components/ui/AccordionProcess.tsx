"use client";
import React, { useState } from "react";

const accordionData = {
  phases: [
    {
      title: "Project Initiation",
      details: [
        {
          step: "Discovery Call",
          description:
            "A 20-minute call to get to know each other and your project. We'll exchange questions to ensure we're a good fit before moving to the next step.",
        },
        {
          step: "Questionnaire",
          description:
            "We'll email you a detailed questionnaire to better understand your needs, style, and vision so we're well prepared for the in-person consultation.",
        },
        {
          step: "Consultation",
          description:
            "A focused meeting in the space to discuss your project in detail, explore ideas, and outline the scope of work in the design process.",
        },
      ],
    },
    {
      title: "Phase 1",
      details: [
        {
          step: "Retrieve Information/Measure & Documentation",
          description:
            "We begin by gathering all necessary details, including precise measurements and on-site documentation, to establish a solid foundation for the design process.",
        },
        {
          step: "Scope Identification & Fee Proposal docs",
          description:
            "We define the project scope and present a detailed fee proposal, ensuring clarity and alignment before moving forward.",
        },
        {
          step: "Kick-off Meeting & Precedent Research",
          description:
            "We hold a kick-off meeting to align on goals and gather inspiration through precedent research, setting the creative direction for your project.",
        },
        {
          step: "Layout, Budget and Timeline Review",
          description:
            "We present the proposed layout, budget, and timeline, ensuring everything aligns with your vision and expectations before proceeding.",
        },
      ],
    },
    {
      title: "Phase 2",
      details: [
        {
          step: "Design Concept",
          description:
            "We craft a cohesive design concept, blending your vision with our creative expertise to define the project's aesthetic and functional direction.",
        },
        {
          step: "Specifications",
          description:
            "Detailed selections for materials, finishes, and furnishings are outlined to ensure a seamless execution of the design.",
        },
        {
          step: "3D Renderings",
          description:
            "Realistic 3D renderings bring the design to life, offering a clear visual representation of your future space.",
        },
        {
          step: "Presentation & Design Review",
          description:
            "We present the complete design package for your review, ensuring every detail aligns with your vision before moving to the next step.",
        },
      ],
    },
    {
      title: "Phase 3",
      details: [
        {
          step: "Detailing & Design Fine Tuning",
          description:
            "We refine the design, perfecting every detail to ensure it meets the highest standards of quality and functionality.",
        },
        {
          step: "Construction Drawings",
          description:
            "Comprehensive drawings are prepared to guide contractors and ensure precise execution.",
        },
        {
          step: "Bidding Process",
          description:
            "We assist in coordinating the bidding process, connecting you with trusted contractors to achieve the best results.",
        },
        {
          step: "Finish Reviews",
          description:
            "A thorough review of all finishes is conducted to confirm selections to ensure alignment with the overall design vision. Starting the Fixtures and Finishes procurement process needed for construction.",
        },
      ],
    },
    {
      title: "Phase 4",
      details: [
        {
          step: "Construction Initiation",
          description:
            "We kick off the construction phase, ensuring that all necessary preparations are in place for a smooth build process.",
        },
        {
          step: "Project Management",
          description:
            "Ongoing oversight and coordination with contractors, vendors, and other stakeholders to ensure the project stays on track and budget.",
        },
        {
          step: "Furniture, Fixtures, and Equipment Procurement",
          description:
            "We source and procure all necessary furniture, fixtures, and equipment on your behalf ensuring quality and timely delivery for installation after construction.",
        },
        {
          step: "Installation, Final Touches, Cleaning",
          description:
            "The final phase includes installation, adding finishing touches, and thorough cleaning to prepare the space for its grand reveal/move-in.",
        },
      ],
    },
    {
      title: "Phase 5",
      details: [
        {
          step: "Photoshoot",
          description:
            "A professional photoshoot captures the completed space, showcasing the design's beauty and functionality.",
        },
        {
          step: "Performance Review",
          description:
            "We conduct a performance review to assess the project's success, gathering feedback and ensuring all objectives are met.",
        },
      ],
    },
  ],
};

const AccordionProcess = () => {
  return (
    <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our
              </span>
              <h2 className="text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Design Process
              </h2>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 xl:w-10/12">
            {accordionData.phases.map((phase, index) => (
              <AccordionItem
                key={index}
                header={phase.title}
                content={phase.details}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionProcess;

interface AccordionItemProps {
  header: string;
  content: { step: string; description: string }[];
}

const AccordionItem = ({ header, content }: AccordionItemProps) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => setActive(!active);

  return (
    <div className="mb-10 rounded-lg bg-white px-7 py-6 shadow-[0px_4px_18px_0px_rgba(0,0,0,0.07)] dark:bg-dark-2 md:px-10 md:py-8">
      <button
        className="faq-btn flex w-full items-center justify-between text-left"
        onClick={handleToggle}
      >
        <h4 className="mr-2 text-base font-semibold text-dark dark:text-white sm:text-lg md:text-xl lg:text-2xl">
          {header}
        </h4>
        <span className="icon inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary text-lg font-semibold text-primary">
          {active ? "-" : "+"}
        </span>
      </button>

      {active && (
        <div className="pt-6">
          <ul className="text-base text-body-color dark:text-dark-6">
            {content.map((item, idx) => (
              <li key={idx} className="mb-4">
                <h5 className="font-semibold">{item.step}</h5>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
