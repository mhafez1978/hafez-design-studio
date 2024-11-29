"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Correct import for Navigation
import "swiper/css";
import "swiper/css/navigation";

interface InstagramPost {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  caption?: string;
}

const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption&access_token=${process.env.NEXT_PUBLIC_CLIENT_OAUTH_TOKEN}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Instagram feed");
        }

        const data = await response.json();
        setPosts(data.data); // Instagram Graph API returns posts under "data"
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Instagram feed:", error);
      }
    };

    fetchInstagramFeed();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-xl">Loading Instagram Feed...</p>
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
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Instagram Feed</h2>
      <Swiper
        modules={[Navigation]} // Include the Navigation module explicitly
        navigation // Enable navigation arrows
        spaceBetween={16}
        breakpoints={{
          640: {
            slidesPerView: 1, // Small screens
          },
          768: {
            slidesPerView: 2, // Medium screens
          },
          1024: {
            slidesPerView: 6, // Large screens
          },
        }}
        className="instagram-slider"
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <a
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="rounded-lg overflow-hidden border shadow hover:shadow-lg transition-shadow">
                {post.media_type === "IMAGE" ||
                post.media_type === "CAROUSEL_ALBUM" ? (
                  <img
                    src={post.media_url}
                    alt={post.caption || "Instagram Post"}
                    className="w-full h-60 object-cover"
                  />
                ) : post.media_type === "VIDEO" ? (
                  <video controls className="w-full h-60 object-cover">
                    <source src={post.media_url} type="video/mp4" />
                  </video>
                ) : null}
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InstagramFeed;
