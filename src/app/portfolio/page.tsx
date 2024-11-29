import MasonryGridGallery from "@/components/ui/Gallery";

const PortfolioPage = () => {
  return (
    <>
      <div className="w-full mt-[225px] mb-[225px]">
        <div className="max-w-[680px] mx-auto flex flex-col justify-center mb-8 p-4">
          <h3 className="font-black text-3xl mb-4">Our Mission</h3>

          <ul>
            <li>
              <span className="font-black">Reliability:</span> Delivering
              consistent, precise work every time.
            </li>
            <li>
              <span className="font-black">Flexibility:</span> Offering services
              on an as-needed basis.
            </li>
            <li>
              <span className="font-black">Efficiency:</span> Saving designers
              and contractors time and money.
            </li>
            <li>
              <span className="font-black">Quality:</span> Producing
              high-calibre results that align with their standards.
            </li>
            <li>
              <span className="font-black">Support:</span> Acting as a trusted
              partner rather than just a service provider.
            </li>
          </ul>
        </div>

        <MasonryGridGallery />
        {/* <hr />
        <Gallery2 /> */}
      </div>
    </>
  );
};

export default PortfolioPage;
