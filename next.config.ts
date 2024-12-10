const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? '/lbouri-web/' : '',
  basePath: isProd ? '/lbouri-web' : '',
};

export default nextConfig;