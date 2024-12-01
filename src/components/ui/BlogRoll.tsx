"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Post {
  id: number;
  title: { rendered: string }; // Title is an object with a `rendered` property
  excerpt: { rendered: string }; // Excerpt is an object with a `rendered` property
  post_featured_image: string; // Custom field for featured image
}

export default function BlogRoll() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Fetch posts data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="w-screen bg-white">
      <div className="container mx-auto">
        {/* Posts Section */}
        <div className="w-full -mx-4 flex flex-wrap">
          {loading ? (
            <div className="w-full h-[50vh] flex flex-col items-center justify-center text-center">
              <p className="text-sky-600 text-2xl font-light">Loading...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="w-full h-[50vh] flex flex-col items-center justify-center text-center">
              <p className="text-gray-600 text-2xl font-light">
                No posts found.
              </p>
            </div>
          ) : (
            currentPosts.map((post) => (
              <BlogItem
                key={post.id}
                id={post.id}
                title={post.title.rendered} // Access the `rendered` property
                image={post.post_featured_image} // Use custom field for featured image
                paragraph={post.excerpt.rendered} // Access the `rendered` property
              />
            ))
          )}
        </div>

        {/* Pagination */}
        {posts.length > postsPerPage && (
          <div className="flex justify-center items-center mt-8 space-x-2">
            <button
              onClick={() =>
                currentPage > 1 && handlePageChange(currentPage - 1)
              }
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              &larr; Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded ${
                  index + 1 === currentPage
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                currentPage < totalPages && handlePageChange(currentPage + 1)
              }
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              Next &rarr;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

interface BlogItemProps {
  id: number;
  title: string;
  image: string;
  paragraph: string;
}

function BlogItem({ id, title, image, paragraph }: BlogItemProps) {
  return (
    <Link
      href={`/blog/article/${id}`}
      className="w-full px-4 md:w-1/2 lg:w-1/3"
    >
      <div className="w-full group mb-8 rounded-lg border border-stroke p-5 h-[450px] flex flex-col justify-between">
        <div className="w-full mb-4 overflow-hidden rounded h-[200px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center duration-200 group-hover:rotate-6 group-hover:scale-125"
          />
        </div>
        <div className="w-full flex flex-col justify-between flex-grow">
          <h3 className="mb-3 line-clamp-2 text-xl font-bold text-dark duration-200 hover:text-primary">
            {title}
          </h3>
          <div
            className="mb-2 line-clamp-3 text-base text-body-color"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
          <button
            type="button"
            className="inline-flex items-center gap-2 text-dark duration-200 hover:gap-3.5 hover:text-primary"
          >
            Read More
          </button>
        </div>
      </div>
    </Link>
  );
}
