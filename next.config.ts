import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";
module.exports = {
  assetPrefix: isProd ? '/lbouri-web/' : '',
  basePath: isProd ? '/lbouri-web' : '',
};
const nextConfig: NextConfig = {
};

export default nextConfig;
