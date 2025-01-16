"use client";
import React, { useState } from "react";

const accordionData = {
  phases: [
    {
      title: "Phase One: Project Initiation",
      details: [
        {
          step: "Discovery Call",
          description:
            "A 15-minute call to discuss the project's scope, understand the designer’s needs, and determine if we're a good fit regarding project complexity, style and lead time.",
        },
        {
          step: "Information Gathering",
          description:
            "We request the designer’s floor plan sketch with measurements, along with precedent research that reflects the desired style, including wall and ceiling details, furniture, and material preferences. Even if not finalized, we ask for links and images that represent their vision as accurately as possible.",
        },
        {
          step: "Kick-start Meeting",
          description:
            "We review the fee proposal, outline all deliverables, and discuss the lead time. Once everything is confirmed, the agreement is signed, a 50% deposit is made, and we officially begin the project.",
        },
      ],
    },
    {
      title: "Phase Two: Design Development",
      details: [
        {
          step: "As-Built Floor Plans",
          description:
            "We create accurate as-built floor plans to document the existing space, which serves as the foundation for all further design work.",
        },
        {
          step: "Floor Plans & Layouts",
          description:
            "We develop precise floor plans and layouts, focusing on space planning and ensuring optimal use of the area.",
        },
        {
          step: "Elevations & Sections",
          description:
            "Detailed elevations are created to show vertical dimensions and spatial relationships, providing clarity for contractors.",
        },
        {
          step: "Millwork Design & Fit-In",
          description:
            "Custom millwork designs are developed to suit the space, ensuring the design is functional, aesthetic, and tailored to client needs.",
        },
      ],
    },
    {
      title: "Phase Two: Visualization & Refinement",
      details: [
        {
          step: "3D Modeling",
          description:
            "Realistic 3D models are created to visualize the design, helping designers and clients see how the space will look.",
        },
        {
          step: "Realistic Renderings",
          description:
            "We provide high-quality renderings that accurately represent the design’s materials, textures, and lighting to give a true sense of the end results.",
        },
      ],
    },
    {
      title: "Phase Three: Final Review & Adjustments",
      details: [
        {
          step: "Presentation & Design Review",
          description:
            "We present the finalized designs, ensuring the layout, millwork, and visualizations meet your expectations. Any adjustments or refinements are made before proceeding to the final step.",
        },
        {
          step: "Final Approval & Handoff",
          description:
            "Once designs are approved, we provide a complete package of documentation and files, ready for construction and implementation.",
        },
      ],
    },
  ],
};

const AccordionProcess2 = () => {
  return (
    <section className="w-full bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[50px]">
      <div>
        <div className="w-full">
          {accordionData.phases.map((phase, index) => (
            <AccordionItem
              key={index}
              header={phase.title}
              content={phase.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccordionProcess2;

interface AccordionItemProps {
  header: string;
  content: { step: string; description: string }[];
}

const AccordionItem = ({ header, content }: AccordionItemProps) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => setActive(!active);

  return (
    <div className="w-full mb-10 rounded-lg bg-white px-7 py-6 shadow-[0px_4px_18px_0px_rgba(0,0,0,0.07)] dark:bg-dark-2 md:px-10 md:py-8">
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
