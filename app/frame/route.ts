import { NextRequest, NextResponse } from "next/server";

let clicks = 0;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const clicked = searchParams.get("clicked");

  if (clicked === "1") {
    clicks++;
  }

  return NextResponse.json({
    frame: {
      version: "vNext",
      image: `https://your-deployment-url.com/frame-image?clicks=${clicks}`,
      buttons: [{ label: "Polska gurom", action: "post", target: "/frame?clicked=1" }]
    }
  });
}
