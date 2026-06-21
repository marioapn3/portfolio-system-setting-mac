import { ImageResponse } from "next/og";
import { defaultLocale, getContent, isLocale, type Locale } from "@/lib/i18n";

export const alt = "Mario Aprilnino Prasetyo — Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamic Open Graph card — branded, per locale. Renders the name + role on a
 * dark gradient with the logo mark (the "M" squircle from the favicon). Satori
 * (via next/og) only supports flexbox + inline styles, so this is intentionally
 * laid out with flex containers.
 */
export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const { profile } = getContent(locale);
  const initials = profile.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #000000 0%, #07071a 55%, #0a1230 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "116px",
              height: "116px",
              borderRadius: "28px",
              background: "linear-gradient(135deg, #558eff, #002bff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "54px",
              fontWeight: 700,
              color: "#ffffff",
              marginRight: "32px",
            }}
          >
            {initials}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "30px",
              color: "#8e8e93",
              letterSpacing: "6px",
            }}
          >
            PORTFOLIO
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "78px",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-1px",
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "42px",
            fontWeight: 500,
            color: "#558eff",
            marginTop: "14px",
          }}
        >
          {profile.role}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "64px",
            fontSize: "26px",
            color: "#8e8e93",
          }}
        >
          Backend · Golang · NestJS · Fullstack
        </div>
      </div>
    ),
    { ...size },
  );
}
