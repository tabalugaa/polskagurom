import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const clicks = req.nextUrl.searchParams.get("clicks") || "0";
  return new ImageResponse(
    (
      <div style={{ fontSize: 60, background: "white", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        🇵🇱 Polska gurom! 🔨<br />Kliknięć: {clicks}
      </div>
    ),
    { width: 600, height: 400 }
  );
}
