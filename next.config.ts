import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: [
            "assets.aceternity.com",
            "images.unsplash.com",
            "tailwindui.com",
            "media.licdn.com",
            "api.microlink.io", // Image Preview
        ],
    },
};

export default nextConfig;
