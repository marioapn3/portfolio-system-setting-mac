import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Brand logo SVGs are local, trusted assets.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
