const page = () => {
  return (
    <>
      <section className="w-screen pt-[180px] mb-[200px]">
        <div className="container mx-auto h-[65vh] overflow-hidden mb-12">
          <img
            src="/condo-renovation.png"
            alt="condo-renovation"
            className="object-cover object-bottom w-full h-full"
            width={800}
            height={450}
          />
        </div>
        <div className="container mx-auto">
          <div className="w-full flex flex-row mb-8">
            <div className="w-1/2">
              <h1 className="text-3xl font-black">Condo Renovation</h1>
              <h5 className="text-lg font-base mb-4 italic">
                Marsielle&apos; France
              </h5>
              <p className="mb-2 pr-6">
                For this E-design project, we revitalized a condo apartment in
                Marseille, France, focusing on aesthetics and functionality. The
                living room now features custom-built millwork and shelving
                behind the sofa, creating a stylish and practical focal point.
                Although not originally designed by us, the kitchen was given a
                refreshing coastal vibe with a soft blue paint job that
                perfectly matches the city&apos;s serene atmosphere.
              </p>
              <p className="mb-2 pr-6">
                Lastly, we enhanced the condo&apos;s functionality by relocating
                the washing machine from the kitchen to a newly created laundry
                room, making space for a dishwasher and adding additional
                storage. This thoughtful redesign improved the kitchen&apos;s
                utility and maximized storage and workspace in the laundry area,
                creating a cohesive and efficient living space.
              </p>
            </div>
            <div className="w-1/2">
              <div className="w-full flex flex-col">
                <img
                  src="/condo-reno-02.png"
                  alt="condo renovation"
                  className="object-cover object-bottom w-full h-[50%]"
                  width={800}
                  height={450}
                />
              </div>
            </div>
          </div>
          <div className="w-full h-[500px] flex flex-row gap-6">
            <div className="w-1/2 h-[800px]">
              <img
                src="/condo-reno-03.png"
                alt="condo renovation"
                className="object-cover w-full h-[50%]"
                width={800}
                height={450}
              />
            </div>
            <div className="w-1/2 h-[800px]">
              <img
                src="/condo-reno-04.png"
                alt="condo-renovation"
                className="object-cover  w-full h-[50%]"
                width={800}
                height={450}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
