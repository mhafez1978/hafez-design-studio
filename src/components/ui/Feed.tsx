"use client";

import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface InstagramPost {
  id: string;
  caption: string;
  permalink: string;
  media_url: string;
  media_type: string;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const InstagramCarousel = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const accessToken = process.env.NEXT_PUBLIC_CLIENT_OAUTH_TOKEN as string;
  const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,permalink,media_url,media_type&access_token=${accessToken}`;

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch Instagram posts");
        }

        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [apiUrl]);

  const truncateCaption = (caption: string, maxLength: number = 100) => {
    return caption.length > maxLength
      ? `${caption.substring(0, maxLength)}...`
      : caption;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-xl">Loading Instagram Feed...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-xl">No posts found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto relative w-full py-10 z-20">
      <h2 className="text-3xl font-bold text-center mb-8 italic">
        Stay connected, follow us on Instagram.
      </h2>
      <div className="relative mx-4">
        {" "}
        {/* Adjusted container width */}
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          showDots={false}
          customTransition="transform 500ms ease-in-out"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="px-2 py-2"
          containerClass="relative"
          arrows={false}
          customLeftArrow={
            <button
              id="left-arrow"
              aria-label="Previous Slide"
              className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full z-50 hover:bg-gray-700"
            >
              &#8592;
            </button>
          }
          customRightArrow={
            <button
              id="right-arrow"
              aria-label="Next Slide"
              className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full z-50 hover:bg-gray-700"
            >
              &#8594;
            </button>
          }
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className="w-full bg-white border rounded shadow overflow-hidden h-[400px] flex flex-col justify-between"
            >
              {/* Media (Image or Video) */}
              {post.media_type === "IMAGE" ||
              post.media_type === "CAROUSEL_ALBUM" ? (
                <img
                  src={post.media_url}
                  alt={post.caption || "Instagram Post"}
                  className="w-full h-[60%] object-cover rounded-t"
                />
              ) : post.media_type === "VIDEO" ? (
                <video
                  controls
                  className="w-full h-[60%] object-cover rounded-t"
                >
                  <source src={post.media_url} type="video/mp4" />
                </video>
              ) : null}

              {/* Content */}
              <div className="p-4">
                <p className="text-sm text-gray-700 mb-4">
                  {truncateCaption(post.caption)}
                </p>
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View on Instagram
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default InstagramCarousel;
