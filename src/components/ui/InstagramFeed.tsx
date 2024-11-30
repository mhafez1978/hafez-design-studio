// "use client";

// import React, { useEffect, useState } from "react";

// interface InstagramPost {
//   id: string;
//   caption: string;
//   permalink: string;
//   media_url: string;
//   media_type: string;
// }

// const InstagramFeed = () => {
//   const [posts, setPosts] = useState<InstagramPost[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [expandedPostId, setExpandedPostId] = useState<string | null>(null); // For "Read More"

//   const accessToken = process.env.NEXT_PUBLIC_CLIENT_OAUTH_TOKEN as string; // Replace with your access token
//   const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,permalink,media_url,media_type&access_token=${accessToken}`;

//   useEffect(() => {
//     const fetchInstagramPosts = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//           throw new Error("Failed to fetch Instagram posts");
//         }

//         const data = await response.json();
//         setPosts(data.data); // Instagram API returns posts under the "data" key
//       } catch (error) {
//         if (error instanceof Error) {
//           setError(error.message);
//           console.error(error.message);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchInstagramPosts();
//   }, [apiUrl]);

//   const toggleExpandCaption = (id: string) => {
//     setExpandedPostId((prevId) => (prevId === id ? null : id));
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <p className="text-gray-500 text-xl">Loading Instagram Feed...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <p className="text-red-500 text-xl">{error}</p>
//       </div>
//     );
//   }

//   if (!posts.length) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <p className="text-gray-500 text-xl">No posts found.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <h2 className="max-w-[450px] mx-auto text-3xl font-light text-center mb-8 italic">
//         Stay connected, stay social, follow me on Instagram.
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {posts.map((post) => (
//           <div
//             key={post.id}
//             className="p-4 border rounded shadow hover:shadow-lg transition-shadow"
//           >
//             {/* Media Section */}
//             {post.media_type === "IMAGE" ||
//             post.media_type === "CAROUSEL_ALBUM" ? (
//               <img
//                 src={post.media_url}
//                 alt={post.caption || "Instagram Post"}
//                 className="w-full h-60 object-cover mb-2 rounded"
//               />
//             ) : post.media_type === "VIDEO" ? (
//               <video controls className="w-full h-60 object-cover mb-2 rounded">
//                 <source src={post.media_url} type="video/mp4" />
//               </video>
//             ) : null}

//             {/* Caption Section */}
//             <p className="text-sm text-gray-700 mb-4">
//               {expandedPostId === post.id
//                 ? post.caption
//                 : post.caption
//                 ? post.caption.length > 120
//                   ? `${post.caption.substring(0, 120)}... `
//                   : post.caption
//                 : "No caption provided."}
//               {post.caption && post.caption.length > 120 && (
//                 <button
//                   onClick={() => toggleExpandCaption(post.id)}
//                   className="text-blue-500 underline hover:text-blue-700"
//                 >
//                   {expandedPostId === post.id ? "Show less" : "Read more"}
//                 </button>
//               )}
//             </p>

//             {/* Link to Instagram */}
//             <a
//               href={post.permalink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 underline hover:text-blue-700"
//             >
//               View on Instagram
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default InstagramFeed;

"use client";

import React, { useEffect, useState } from "react";

interface InstagramPost {
  id: string;
  caption: string;
  permalink: string;
  media_url: string;
  media_type: string;
}

const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedPostId, setExpandedPostId] = useState<string | null>(null); // For "Read More"

  const accessToken = process.env.NEXT_PUBLIC_CLIENT_OAUTH_TOKEN as string;
  const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,permalink,media_url,media_type&access_token=${accessToken}`;

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        console.log("Fetching Instagram posts...");
        setLoading(true);
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch Instagram posts: ${response.statusText}`
          );
        }

        const data = await response.json();
        console.log("API Response:", data);
        setPosts(data.data || []); // Handle cases where `data` might be undefined
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [apiUrl]);

  const toggleExpandCaption = (id: string) => {
    setExpandedPostId((prevId) => (prevId === id ? null : id));
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
    <div className="container mx-auto px-4 py-10">
      <h2 className="max-w-[450px] mx-auto text-3xl font-light text-center mb-8 italic">
        Stay connected, stay social, follow me on Instagram.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded shadow hover:shadow-lg transition-shadow"
          >
            {post.media_type === "IMAGE" ||
            post.media_type === "CAROUSEL_ALBUM" ? (
              <img
                src={post.media_url}
                alt={post.caption || "Instagram Post"}
                className="w-full h-60 object-cover mb-2 rounded"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder-image.jpg";
                }}
              />
            ) : post.media_type === "VIDEO" ? (
              <video controls className="w-full h-60 object-cover mb-2 rounded">
                <source src={post.media_url} type="video/mp4" />
              </video>
            ) : null}
            <p className="text-sm text-gray-700 mb-4">
              {expandedPostId === post.id
                ? post.caption
                : post.caption
                ? post.caption.length > 120
                  ? `${post.caption.substring(0, 120)}... `
                  : post.caption
                : "No caption provided."}
              {post.caption && post.caption.length > 120 && (
                <button
                  onClick={() => toggleExpandCaption(post.id)}
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  {expandedPostId === post.id ? "Show less" : "Read more"}
                </button>
              )}
            </p>
            <a
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              View on Instagram
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
