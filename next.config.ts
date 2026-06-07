import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next doesn't pick up a stray
  // lockfile higher up the tree (silences the multi-lockfile warning).
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
