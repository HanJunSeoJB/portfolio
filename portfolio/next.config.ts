import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export type User = {
  id: number;
  name: string;
  email: string;
};

export default nextConfig;
