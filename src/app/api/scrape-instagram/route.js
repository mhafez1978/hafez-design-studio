// import puppeteer from "puppeteer";

export async function GET() {
  return new Response(JSON.stringify({ msg: "API ok" }), { status: 200 });
}
