"use client";
import React, { useEffect, useState, useCallback } from "react";

// Define the type for Instagram posts
interface InstagramPost {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  caption?: string;
}

const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]); // Explicitly define the type
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const accessToken = process.env.NEXT_PUBLIC_CLIENT_OAUTH_TOKEN as string; // Replace with your access token
  const userId = "Hafez_Design_Studio"; // Replace with your user ID

  // Memoize the fetchInstagramPosts function
  const fetchInstagramPosts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch Instagram posts");
      }
      const data = await response.json();
      setPosts(data.data); // Set the data correctly
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, [accessToken, userId]);

  useEffect(() => {
    fetchInstagramPosts();
  }, [fetchInstagramPosts]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Instagram Feed</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{ border: "1px solid #ccc", padding: "8px" }}
          >
            {post.media_type === "IMAGE" ||
            post.media_type === "CAROUSEL_ALBUM" ? (
              <img
                src={post.media_url}
                alt={post.caption || "Instagram Post"}
                style={{ width: "100%" }}
              />
            ) : post.media_type === "VIDEO" ? (
              <video controls style={{ width: "100%" }}>
                <source src={post.media_url} type="video/mp4" />
              </video>
            ) : null}
            <p>{post.caption}</p>
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
              View on Instagram
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
