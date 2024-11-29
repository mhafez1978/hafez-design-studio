// export async function GET() {
//   try {
//     const res = await fetch(
//       "http://api.hafezdesignstudio.com/wp-json/wp/v2/posts?_embed",
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     const data = await res.json();

//     // Process data to include the featured image URL directly
//     const processedData = data.map((post: any) => ({
//       ...post,
//       featured_image:
//         post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//         "https://via.placeholder.com/600x400.png",
//     }));

//     return new Response(JSON.stringify(processedData), { status: 200 });
//   } catch (error) {
//     console.error("Error fetching WordPress posts:", error);
//     return new Response("Internal Server Error", { status: 500 });
//   }
// }

export interface WordPressPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
  [key: string]: unknown; // To handle additional properties you may not explicitly define
}

export async function GET() {
  try {
    const res = await fetch(
      "http://api.hafezdesignstudio.com/wp-json/wp/v2/posts?_embed",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.statusText}`);
    }

    const data: WordPressPost[] = await res.json();

    // Process data to include the featured image URL directly
    const processedData = data.map((post) => ({
      ...post,
      featured_image:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        "https://via.placeholder.com/600x400.png",
    }));

    return new Response(JSON.stringify(processedData), { status: 200 });
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
