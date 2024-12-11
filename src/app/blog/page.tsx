import BlogRoll from "@/components/ui/BlogRoll";

const BlogPage = async () => {
  return (
    <div className="pb-[150px] ">
      <div className="container mx-auto text-left mb-6">
        <h2 className="text-5xl font-bold text-dark px-4">
          Our Latest News &amp; Articles
        </h2>
      </div>
      <div className="container mx-auto flex flex-wrap ">
        <BlogRoll />
      </div>
    </div>
  );
};

export default BlogPage;
