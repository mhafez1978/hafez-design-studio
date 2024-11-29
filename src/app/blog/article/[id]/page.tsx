// // "use client";

// // import React, { useEffect, useState } from "react";
// // import Image from "next/image";
// // import { useParams } from "next/navigation";

// // interface Tag {
// //   id: number;
// //   slug: string;
// //   name: string;
// // }

// // const Post = () => {
// //   const params = useParams();
// //   const id = params.id;

// //   const [post, setPost] = useState<any>(null);
// //   const [tagsData, setTagsData] = useState<Tag[]>([]);
// //   const [previousPost, setPreviousPost] = useState<any>(null);
// //   const [nextPost, setNextPost] = useState<any>(null);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         // Fetch the current post
// //         const postRes = await fetch(
// //           `https://api.hafezdesignstudio.com/wp-json/wp/v2/posts/${id}?_embed`
// //         );
// //         if (!postRes.ok) {
// //           throw new Error(`Post not found: ${postRes.status}`);
// //         }
// //         const post = await postRes.json();
// //         setPost(post);

// //         // Fetch all posts
// //         const allPostsRes = await fetch(
// //           `https://api.hafezdesignstudio.com/wp-json/wp/v2/posts`
// //         );
// //         const allPosts = await allPostsRes.json();

// //         // Find current, previous, and next posts
// //         const currentPostIndex = allPosts.findIndex(
// //           (p: { id: number }) => p.id === parseInt(id)
// //         );
// //         setPreviousPost(
// //           currentPostIndex > 0 ? allPosts[currentPostIndex - 1] : null
// //         );
// //         setNextPost(
// //           currentPostIndex < allPosts.length - 1
// //             ? allPosts[currentPostIndex + 1]
// //             : null
// //         );

// //         // Fetch tags
// //         if (post.tags.length > 0) {
// //           const tagsRes = await fetch(
// //             `https://api.hafezdesignstudio.com/wp-json/wp/v2/tags?include=${post.tags.join(
// //               ","
// //             )}`
// //           );
// //           const tags = await tagsRes.json();
// //           setTagsData(tags);
// //         }
// //       } catch (err: any) {
// //         console.error("Error fetching data:", err.message);
// //         setError(err.message);
// //       }
// //     };

// //     fetchData();
// //   }, [id]);

// //   if (error) {
// //     return <p>{error}</p>;
// //   }

// //   if (!post) {
// //     return <p>Loading...</p>;
// //   }

// //   const author = post._embedded?.author?.[0] || {
// //     name: "Unknown Author",
// //     avatar_urls: { 96: "https://placehold.co/40x40" },
// //   };

// //   const postImage =
// //     post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
// //     "https://via.placeholder.com/600x400.png";

// //   const sanitizedContent = post.content.rendered.trim();

// //   return (
// //     <section className="bg-white py-20 dark:bg-dark lg:py-[225px]">
// //       <div className="container mx-auto">
// //         {/* Main Post Content */}
// //         <div className="w-full px-4 lg:w-10/12 lg:mx-auto xl:w-8/12 xl:mx-auto">
// //           <h1 className="mb-6 text-[26px] font-bold">{post.title.rendered}</h1>
// //           <div>
// //             <div className="w-full mt-4 mb-4 border border-red-500">
// //               <img
// //                 src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
// //                 alt={post.title.rendered}
// //                 className="object-cover w-full h-full"
// //               />
// //             </div>
// //             <div
// //               dangerouslySetInnerHTML={{ __html: sanitizedContent }}
// //               className="mb-8"
// //             />
// //           </div>
// //         </div>

// //         {/* Previous and Next Posts */}
// //         <div className="flex justify-between">
// //           {previousPost && (
// //             <a href={`/latest-news/article/${previousPost.id}`}>
// //               Previous: {previousPost.title.rendered}
// //             </a>
// //           )}
// //           {nextPost && (
// //             <a href={`/latest-news/article/${nextPost.id}`}>
// //               Next: {nextPost.title.rendered}
// //             </a>
// //           )}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Post;

// // "use client";

// // import React, { useEffect, useState } from "react";
// // import Image from "next/image";
// // import { useParams } from "next/navigation";

// // interface Tag {
// //   id: number;
// //   slug: string;
// //   name: string;
// // }

// // const Post = () => {
// //   const params = useParams();
// //   const id = params.id;

// //   const [post, setPost] = useState<any>(null);
// //   const [tagsData, setTagsData] = useState<Tag[]>([]);
// //   const [previousPost, setPreviousPost] = useState<any>(null);
// //   const [nextPost, setNextPost] = useState<any>(null);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         // Fetch the current post
// //         const postRes = await fetch(
// //           `https://api.hafezdesignstudio.com/wp-json/wp/v2/posts/${id}?_embed`
// //         );
// //         if (!postRes.ok) {
// //           throw new Error(`Post not found: ${postRes.status}`);
// //         }
// //         const post = await postRes.json();
// //         setPost(post);

// //         // Fetch all posts
// //         const allPostsRes = await fetch(
// //           `https://api.hafezdesignstudio.com/wp-json/wp/v2/posts`
// //         );
// //         const allPosts = await allPostsRes.json();

// //         // Find current, previous, and next posts
// //         const currentPostIndex = allPosts.findIndex(
// //           (p: { id: number }) => p.id === parseInt(id)
// //         );
// //         setPreviousPost(
// //           currentPostIndex > 0 ? allPosts[currentPostIndex - 1] : null
// //         );
// //         setNextPost(
// //           currentPostIndex < allPosts.length - 1
// //             ? allPosts[currentPostIndex + 1]
// //             : null
// //         );

// //         // Fetch tags
// //         if (post.tags.length > 0) {
// //           const tagsRes = await fetch(
// //             `https://api.hafezdesignstudio.com/wp-json/wp/v2/tags?include=${post.tags.join(
// //               ","
// //             )}`
// //           );
// //           const tags = await tagsRes.json();
// //           setTagsData(tags);
// //         }
// //       } catch (err: any) {
// //         console.error("Error fetching data:", err.message);
// //         setError(err.message);
// //       }
// //     };

// //     fetchData();
// //   }, [id]);

// //   if (error) {
// //     return <p>{error}</p>;
// //   }

// //   if (!post) {
// //     return <p>Loading...</p>;
// //   }

// //   // Extract Author and Avatar with Fallbacks
// //   const author = post._embedded?.author?.[0] || {
// //     name: "Ihab Hafez",
// //     avatar_urls: { 96: "https://placehold.co/40x40" },
// //   };

// //   const avatarUrl = author.avatar_urls?.[96] || "https://placehold.co/40x40";

// //   // Extract Post Image
// //   const postImage =
// //     post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
// //     "https://via.placeholder.com/600x400.png";

// //   const sanitizedContent = post.content.rendered.trim();

// //   return (
// //     <section className="bg-white py-20 dark:bg-dark lg:py-[225px]">
// //       <div className="container mx-auto">
// //         {/* Main Post Content */}
// //         <div className="w-full px-4">
// //           <h1 className="mb-6 text-[26px] font-bold">{post.title.rendered}</h1>
// //           <div className="flex items-center mb-4">
// //             <Image
// //               src={avatarUrl}
// //               alt={author.name}
// //               width={40}
// //               height={40}
// //               className="rounded-full shadow-xl"
// //             />
// //             <p className="ml-2 text-sm">{author.name}</p>
// //           </div>
// //           <div className="w-full h-[40vh] mt-4 mb-4">
// //             <img
// //               src={postImage}
// //               alt={post.title.rendered}
// //               className="object-fill w-full h-full"
// //             />
// //           </div>
// //           <div
// //             id="post-content"
// //             dangerouslySetInnerHTML={{ __html: sanitizedContent }}
// //             className="mb-8"
// //           />
// //         </div>

// //         {/* Previous and Next Posts */}
// //         <div className="w-full px-4">
// //           <div className="flex justify-between font-black hover:underline">
// //             {previousPost && (
// //               <a href={`/blog/article/${previousPost.id}`}>
// //                 Previous: {previousPost.title.rendered}
// //               </a>
// //             )}
// //             <a href="/blog">All Articles</a>
// //             {nextPost && (
// //               <a href={`/blog/article/${nextPost.id}`}>
// //                 Next: {nextPost.title.rendered}
// //               </a>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Post;

// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { useParams } from "next/navigation";

// // Define the structure of a WordPress post
// interface EmbeddedAuthor {
//   name: string;
//   avatar_urls: {
//     96: string;
//   };
// }

// interface FeaturedMedia {
//   source_url: string;
// }

// interface Post {
//   id: number;
//   title: { rendered: string };
//   content: { rendered: string };
//   excerpt: { rendered: string };
//   tags: number[];
//   _embedded?: {
//     author?: EmbeddedAuthor[];
//     "wp:featuredmedia"?: FeaturedMedia[];
//   };
// }

// interface Tag {
//   id: number;
//   slug: string;
//   name: string;
// }

// const Post = () => {
//   const params = useParams();
//   const id = params.id;

//   const [post, setPost] = useState<Post | null>(null);
//   const [tagsData, setTagsData] = useState<Tag[]>([]);
//   const [previousPost, setPreviousPost] = useState<Post | null>(null);
//   const [nextPost, setNextPost] = useState<Post | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch the current post
//         const postRes = await fetch(
//           `https://api.hafezdesignstudio.com/wp-json/wp/v2/posts/${id}?_embed`
//         );
//         if (!postRes.ok) {
//           throw new Error(`Post not found: ${postRes.status}`);
//         }
//         const post: Post = await postRes.json();
//         setPost(post);

//         // Fetch all posts
//         const allPostsRes = await fetch(
//           `https://api.hafezdesignstudio.com/wp-json/wp/v2/posts`
//         );
//         const allPosts: Post[] = await allPostsRes.json();

//         // Find current, previous, and next posts
//         const currentPostIndex = allPosts.findIndex(
//           (p) => p.id === parseInt(id)
//         );
//         setPreviousPost(
//           currentPostIndex > 0 ? allPosts[currentPostIndex - 1] : null
//         );
//         setNextPost(
//           currentPostIndex < allPosts.length - 1
//             ? allPosts[currentPostIndex + 1]
//             : null
//         );

//         // Fetch tags
//         if (post.tags.length > 0) {
//           const tagsRes = await fetch(
//             `https://api.hafezdesignstudio.com/wp-json/wp/v2/tags?include=${post.tags.join(
//               ","
//             )}`
//           );
//           const tags: Tag[] = await tagsRes.json();
//           setTagsData(tags);
//         }
//       } catch (err) {
//         console.error("Error fetching data:", (err as Error).message);
//         setError((err as Error).message);
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (error) {
//     return <p>{error}</p>;
//   }

//   if (!post) {
//     return <p>Loading...</p>;
//   }

//   // Extract Author and Avatar with Fallbacks
//   const author = post._embedded?.author?.[0] || {
//     name: "Unknown Author",
//     avatar_urls: { 96: "https://placehold.co/40x40" },
//   };

//   const avatarUrl = author.avatar_urls?.[96] || "https://placehold.co/40x40";

//   // Extract Post Image
//   const postImage =
//     post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//     "https://via.placeholder.com/600x400.png";

//   const sanitizedContent = post.content.rendered.trim();

//   return (
//     <section className="bg-white py-20 dark:bg-dark lg:py-[225px]">
//       <div className="container mx-auto">
//         {/* Main Post Content */}
//         <div className="w-full px-4">
//           <h1 className="mb-6 text-[26px] font-bold">{post.title.rendered}</h1>
//           <div className="flex items-center mb-4">
//             <Image
//               src={avatarUrl}
//               alt={author.name}
//               width={40}
//               height={40}
//               className="rounded-full shadow-xl"
//             />
//             <p className="ml-2 text-sm">{author.name}</p>
//           </div>
//           <div className="w-full h-[40vh] mt-4 mb-4">
//             <img
//               src={postImage}
//               alt={post.title.rendered}
//               className="object-fill w-full h-full"
//             />
//           </div>
//           <div
//             id="post-content"
//             dangerouslySetInnerHTML={{ __html: sanitizedContent }}
//             className="mb-8"
//           />
//           <div>
//             {tagsData.map((tag, idx) => (
//               <span key={idx} className="mr-2">
//                 {tag.name}
//               </span>
//             ))}
//           </div>
//         </div>

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

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

// Define types for API responses
interface EmbeddedAuthor {
  name: string;
  avatar_urls: {
    96: string;
  };
}

interface FeaturedMedia {
  source_url: string;
}

interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  tags: number[];
  _embedded?: {
    author?: EmbeddedAuthor[];
    "wp:featuredmedia"?: FeaturedMedia[];
  };
}

interface Tag {
  id: number;
  slug: string;
  name: string;
}

const Post = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id; // Ensure `id` is a string

  const [post, setPost] = useState<Post | null>(null);
  const [tagsData, setTagsData] = useState<Tag[]>([]);
  const [previousPost, setPreviousPost] = useState<Post | null>(null);
  const [nextPost, setNextPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Invalid post ID");
      return;
    }

    const fetchData = async () => {
      try {
        // Fetch the current post
        const postRes = await fetch(
          `https://api.hafezdesignstudio.com/wp-json/wp/v2/posts/${id}?_embed`
        );
        if (!postRes.ok) {
          throw new Error(`Post not found: ${postRes.status}`);
        }
        const post: Post = await postRes.json();
        setPost(post);

        // Fetch all posts
        const allPostsRes = await fetch(
          `https://api.hafezdesignstudio.com/wp-json/wp/v2/posts`
        );
        const allPosts: Post[] = await allPostsRes.json();

        // Find current, previous, and next posts
        const currentPostIndex = allPosts.findIndex(
          (p) => p.id === parseInt(id)
        );
        setPreviousPost(
          currentPostIndex > 0 ? allPosts[currentPostIndex - 1] : null
        );
        setNextPost(
          currentPostIndex < allPosts.length - 1
            ? allPosts[currentPostIndex + 1]
            : null
        );

        // Fetch tags
        if (post.tags.length > 0) {
          const tagsRes = await fetch(
            `https://api.hafezdesignstudio.com/wp-json/wp/v2/tags?include=${post.tags.join(
              ","
            )}`
          );
          const tags: Tag[] = await tagsRes.json();
          setTagsData(tags);
        }
      } catch (err) {
        console.error("Error fetching data:", (err as Error).message);
        setError((err as Error).message);
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  if (!post) {
    return <p className="text-center">Loading...</p>;
  }

  // Extract Author and Avatar with Fallbacks
  const author = post._embedded?.author?.[0] || {
    name: "Unknown Author",
    avatar_urls: { 96: "https://placehold.co/40x40" },
  };

  const avatarUrl = author.avatar_urls?.[96] || "https://placehold.co/40x40";

  // Extract Post Image
  const postImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "https://via.placeholder.com/600x400.png";

  const sanitizedContent = post.content.rendered.trim();

  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[225px]">
      <div className="container mx-auto">
        {/* Main Post Content */}
        <div className="w-full px-4">
          <h1 className="mb-6 text-[26px] font-bold">{post.title.rendered}</h1>
          <div className="flex items-center mb-4">
            <Image
              src={avatarUrl}
              alt={author.name}
              width={40}
              height={40}
              className="rounded-full shadow-xl"
            />
            <p className="ml-2 text-sm">{author.name}</p>
          </div>
          <div className="w-full h-[40vh] mt-4 mb-4">
            <img
              src={postImage}
              alt={post.title.rendered}
              className="object-fill w-full h-full"
            />
          </div>
          <div
            id="post-content"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            className="mb-8"
          />
          <div>
            {tagsData.map((tag, idx) => (
              <span
                key={idx}
                className="mr-2 text-sm bg-gray-200 px-2 py-1 rounded"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Previous and Next Posts */}
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
