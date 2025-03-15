import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: false,
    },
    output: process.env.GITHUB_ACTION ? "export" : undefined,
};

export default nextConfig;
