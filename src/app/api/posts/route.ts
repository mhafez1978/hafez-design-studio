// import { NextResponse } from "next/server";

// export async function GET() {
//   const res = await fetch(
//     "https://api.hafezdesignstudio.com/wp-json/wp/v2/posts",
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   if (!res.ok) {
//     console.error(`Failed to fetch posts: ${res.statusText}`);
//     return NextResponse.json(
//       { message: "Failed to fetch posts", error: res.statusText },
//       { status: res.status }
//     );
//   }

//   const data = await res.json();

//   return NextResponse.json(data);
// }

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.hafezdesignstudio.com/wp-json/wp/v2/posts?_embed",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      console.error(`Failed to fetch posts: ${res.statusText}`);
      return NextResponse.json(
        { message: "Failed to fetch posts", error: res.statusText },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching posts:", error.message);
      return NextResponse.json(
        { message: "Internal Server Error", error: error.message },
        { status: 500 }
      );
    }

    // Handle unexpected non-Error exceptions
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
