import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" w-screen h-screen bg-black text-white flex items-center">
        <div className="container mx-auto h-[20vh] flex flex-col justify-start items-start">
          <h1 className="text-3xl text-yellow-400 font-title">Hello World</h1>
          <p className="text-lg font-txt font-txt">
            Welcome to Hafez Design Studio, we&apos;re thrilled you stopped by.
            Currenlty we&apos;re undergoing a complete website overhaul. Please
            come back again when the website revamp project is complete
            we&apos;d love to hear your feedback
          </p>
        </div>
      </div>
    </>
  );
}
