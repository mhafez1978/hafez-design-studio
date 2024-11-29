import BlogRoll from "@/components/ui/BlogRoll";

const BlogPage = async () => {
  return (
    <div className="py-[225px] ">
      <div className="container mx-auto text-left lg:mb-20">
        <span className="mb-2 block text-2xl font-semibold text-gray-600 px-4 italic">
          Our Blogs
        </span>
        <h2 className="mb-4 text-5xl font-bold text-dark px-4">
          Our Recent News
        </h2>
        {/* <p className="text-base text-body-color dark:text-dark-6">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p> */}
      </div>
      <div className="container mx-auto flex flex-wrap -mx-4">
        <BlogRoll />
      </div>
    </div>
  );
};

export default BlogPage;
