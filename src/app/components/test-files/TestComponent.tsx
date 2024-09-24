import React from "react";

interface TestComponentProps {
  title?: string;
  description?: string;
}
const TestComponent: React.FC<TestComponentProps> = ({
  title,
  description,
}) => {
  return (
    <div className=" w-screen h-screen bg-black text-white flex items-center">
      <div className="container mx-auto min-h-[20vh] flex flex-col justify-start items-start border-2 border-emerald-500 rounded-md py-20 px-20">
        <h1 className="text-3xl text-yellow-400 font-title mb-2">{title}</h1>
        <p className="text-lg font-txt">{description}</p>
      </div>
    </div>
  );
};

export default TestComponent;
