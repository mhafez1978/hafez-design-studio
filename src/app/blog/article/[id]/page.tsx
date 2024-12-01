// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { useParams } from "next/navigation";

// interface EmbeddedAuthor {
//   name: string;
//   avatar_urls: { 96: string };
// }

// interface FeaturedMedia {
//   source_url: string;
// }

// interface Post {
//   id: number;
//   title: { rendered: string };
//   content: { rendered: string };
//   tags: number[];
//   _embedded?: {
//     author?: EmbeddedAuthor[];
//     "wp:featuredmedia"?: FeaturedMedia[];
//   };
// }

// interface Tag {
//   id: number;
//   name: string;
// }

// const Post = () => {
//   const params = useParams();
//   const id = params.id;

//   const [post, setPost] = useState<Post | null>(null);
//   const [tagsData, setTagsData] = useState<Tag[]>([]);
//   const [featuredImage, setFeaturedImage] = useState<string | null>(null);
//   const [previousPost, setPreviousPost] = useState<Post | null>(null);
//   const [nextPost, setNextPost] = useState<Post | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const fetchPostData = async () => {
//     try {
//       // Fetch the main post data
//       const postRes = await fetch(
//         `https://api.hafezdesignstudio.com/wp-json/wp/v2/posts/${id}`
//       );
//       if (!postRes.ok) {
//         throw new Error(`Post not found: ${postRes.status}`);
//       }
//       const postData = await postRes.json();
//       setPost(postData);

//       // Fetch featured image
//       const featuredMedia =
//         postData.post_featured_image ||
//         "https://via.placeholder.com/600x400.png";
//       setFeaturedImage(featuredMedia);

//       // Fetch tags
//       if (postData.tags.length > 0) {
//         const tagsRes = await fetch(
//           `https://api.hafezdesignstudio.com/wp-json/wp/v2/tags?include=${postData.tags.join(
//             ","
//           )}`
//         );
//         if (!tagsRes.ok) {
//           throw new Error(`Tags not found: ${tagsRes.status}`);
//         }
//         const tags = await tagsRes.json();
//         setTagsData(tags);
//       }
//     } catch (err) {
//       console.error("Error fetching post data:", (err as Error).message);
//       setError((err as Error).message);
//     }
//   };

//   const fetchAdjacentPosts = async () => {
//     try {
//       const allPostsRes = await fetch(`/api/posts`);
//       if (!allPostsRes.ok) {
//         throw new Error(`Failed to fetch all posts: ${allPostsRes.status}`);
//       }
//       const allPosts: Post[] = await allPostsRes.json();

//       const currentPostIndex = allPosts.findIndex((p) => p.id === parseInt(id));
//       setPreviousPost(
//         currentPostIndex > 0 ? allPosts[currentPostIndex - 1] : null
//       );
//       setNextPost(
//         currentPostIndex < allPosts.length - 1
//           ? allPosts[currentPostIndex + 1]
//           : null
//       );
//     } catch (err) {
//       console.error("Error fetching adjacent posts:", (err as Error).message);
//       setError((err as Error).message);
//     }
//   };

//   useEffect(() => {
//     // Fetch all data initially
//     fetchPostData();
//     fetchAdjacentPosts();

//     // Set up revalidation interval
//     const interval = setInterval(() => {
//       fetchPostData();
//       fetchAdjacentPosts();
//     }, 60000); // 60,000ms = 1 minute

//     // Cleanup interval on component unmount
//     return () => clearInterval(interval);
//   }, [id, fetchPostData, fetchAdjacentPosts]);

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   if (!post) {
//     return <p>Loading...</p>;
//   }

//   // Extract author and avatar
//   const author = post._embedded?.author?.[0] ||
//     post.author_details || {
//       name: "Ihab Hafez",
//       avatar: "https://placehold.co/40x40",
//     };

//   // Accessing author details
//   const authorName = author.name || "Unknown Author";
//   const authorAvatar =
//     author.avatar || author.avatar_urls?.["96"] || "https://placehold.co/40x40";

//   const sanitizedContent = post.content.rendered.trim();

//   return (
//     <section className="bg-white py-20 dark:bg-dark lg:py-[225px]">
//       <div className="container mx-auto">
//         {/* Main Post Content */}
//         <div className="w-full px-4">
//           <h1 className="mb-6 text-[26px] font-bold">{post.title.rendered}</h1>
//           <div className="flex items-center mb-4">
//             <Image
//               src={authorAvatar}
//               alt={authorName}
//               width={40}
//               height={40}
//               className="rounded-full shadow-xl"
//             />
//             <p className="ml-2 text-sm">{author.name}</p>
//           </div>
//           <div className="w-full h-[40vh] mt-4 mb-4">
//             <img
//               src={featuredImage || "https://via.placeholder.com/600x400.png"}
//               alt={post.title.rendered}
//               className="object-fill w-full h-full"
//             />
//           </div>
//           <div
//             id="post-content"
//             dangerouslySetInnerHTML={{ __html: sanitizedContent }}
//             className="mb-8"
//           />
//         </div>

//         {/* Tags Section */}
//         {tagsData.length > 0 && (
//           <div className="w-full px-4 mb-8">
//             <h3 className="text-lg font-bold mb-4">Related Tags</h3>
//             <div className="max-w-[450px] flex flex-wrap gap-2">
//               {tagsData.map((tag) => (
//                 <span
//                   key={tag.id}
//                   className="text-sm bg-black text-white rounded py-2 px-4"
//                 >
//                   {tag.name}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Previous and Next Posts */}
//         <div className="w-full px-4">
//           <div className="flex justify-between font-black hover:underline">
//             {previousPost && (
//               <a href={`/blog/article/${previousPost.id}`}>
//                 Previous: {previousPost.title.rendered}
//               </a>
//             )}
//             <a href="/blog">All Articles</a>
//             {nextPost && (
//               <a href={`/blog/article/${nextPost.id}`}>
//                 Next: {nextPost.title.rendered}
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Post;

"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

interface EmbeddedAuthor {
  name: string;
  avatar_urls: { 96: string };
}

interface FeaturedMedia {
  source_url: string;
}

interface Post {
  author_details: EmbeddedAuthor | undefined;
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  tags: number[];
  _embedded?: {
    author?: EmbeddedAuthor[];
    "wp:featuredmedia"?: FeaturedMedia[];
  };
}

interface Tag {
  id: number;
  name: string;
}

const Post = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [post, setPost] = useState<Post | null>(null);
  const [tagsData, setTagsData] = useState<Tag[]>([]);
  const [featuredImage, setFeaturedImage] = useState<string | null>(null);
  const [previousPost, setPreviousPost] = useState<Post | null>(null);
  const [nextPost, setNextPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch main post data
  const fetchPostData = useCallback(async () => {
    try {
      const postRes = await fetch(
        `https://api.hafezdesignstudio.com/wp-json/wp/v2/posts/${id}`
      );
      if (!postRes.ok) {
        throw new Error(`Post not found: ${postRes.status}`);
      }
      const postData = await postRes.json();
      setPost(postData);

      // Set featured image
      const featuredMedia =
        postData.post_featured_image ||
        "https://via.placeholder.com/600x400.png";
      setFeaturedImage(featuredMedia);

      // Fetch tags
      if (postData.tags.length > 0) {
        const tagsRes = await fetch(
          `https://api.hafezdesignstudio.com/wp-json/wp/v2/tags?include=${postData.tags.join(
            ","
          )}`
        );
        if (!tagsRes.ok) {
          throw new Error(`Tags not found: ${tagsRes.status}`);
        }
        const tags = await tagsRes.json();
        setTagsData(tags);
      }
    } catch (err) {
      console.error("Error fetching post data:", (err as Error).message);
      setError((err as Error).message);
    }
  }, [id]);

  // Fetch adjacent posts
  const fetchAdjacentPosts = useCallback(async () => {
    try {
      const allPostsRes = await fetch(`/api/posts`);
      if (!allPostsRes.ok) {
        throw new Error(`Failed to fetch all posts: ${allPostsRes.status}`);
      }
      const allPosts: Post[] = await allPostsRes.json();

      const currentPostIndex = allPosts.findIndex(
        (p) => p.id === parseInt(id, 10)
      );
      setPreviousPost(
        currentPostIndex > 0 ? allPosts[currentPostIndex - 1] : null
      );
      setNextPost(
        currentPostIndex < allPosts.length - 1
          ? allPosts[currentPostIndex + 1]
          : null
      );
    } catch (err) {
      console.error("Error fetching adjacent posts:", (err as Error).message);
      setError((err as Error).message);
    }
  }, [id]);

  useEffect(() => {
    fetchPostData();
    fetchAdjacentPosts();

    const interval = setInterval(() => {
      fetchPostData();
      fetchAdjacentPosts();
    }, 60000); // 60 seconds

    return () => clearInterval(interval);
  }, [fetchPostData, fetchAdjacentPosts]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!post) {
    return <p>Loading...</p>;
  }

  // Extract author and avatar
  const author = post._embedded?.author?.[0] ||
    post.author_details || {
      name: "Ihab Hafez",
      avatar: "https://placehold.co/40x40",
    };

  const authorName = author.name || "Unknown Author";
  const authorAvatar =
    "avatar" in author
      ? author.avatar
      : author.avatar_urls?.["96"] || "https://placehold.co/40x40";

  const sanitizedContent = post.content.rendered.trim();

  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[225px]">
      <div className="container mx-auto">
        <div className="w-full px-4">
          <h1 className="mb-6 text-[26px] font-bold">{post.title.rendered}</h1>
          <div className="flex items-center mb-4">
            <Image
              src={authorAvatar}
              alt={authorName}
              width={40}
              height={40}
              className="rounded-full shadow-xl"
            />
            <p className="ml-2 text-sm">{author.name}</p>
          </div>
          <div className="w-full h-[40vh] mt-4 mb-4">
            <img
              src={featuredImage || "https://via.placeholder.com/600x400.png"}
              alt={post.title.rendered}
              className="object-fill w-full h-full"
            />
          </div>
          <div
            id="post-content"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            className="mb-8"
          />
        </div>

        {tagsData.length > 0 && (
          <div className="w-full px-4 mb-8">
            <h3 className="text-lg font-bold mb-4">Related Tags</h3>
            <div className="max-w-[450px] flex flex-wrap gap-2">
              {tagsData.map((tag) => (
                <span
                  key={tag.id}
                  className="text-sm bg-black text-white rounded py-2 px-4"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="w-full px-4">
          <div className="flex justify-between font-black hover:underline">
            {previousPost && (
              <a href={`/blog/article/${previousPost.id}`}>
                Previous: {previousPost.title.rendered}
              </a>
            )}
            <a href="/blog">All Articles</a>
            {nextPost && (
              <a href={`/blog/article/${nextPost.id}`}>
                Next: {nextPost.title.rendered}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
