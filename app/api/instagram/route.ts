import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json({
      success: false,
      message: "INSTAGRAM_ACCESS_TOKEN environment variable not set. Using static fallback.",
      posts: [],
    });
  }

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp,like_count,comments_count&access_token=${token}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!res.ok) {
      throw new Error(`Instagram API error: ${res.statusText}`);
    }

    const data = await res.json();
    return NextResponse.json({
      success: true,
      posts: data.data || [],
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
      posts: [],
    });
  }
}
