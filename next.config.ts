import type { NextConfig } from "next";
// const withPWA = require("next-pwa");

const nextConfig: NextConfig = {
  /* config options here */
};

// export default nextConfig;
// module.exports = withPWA({
//   pwa: {
//     dest: "public", // Service worker will be generated in the `public` directory
//     disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
//   },
// });
const withPWA = require("next-pwa")({
  dest: "public", // Correct destination for the service worker
  disable: process.env.NODE_ENV === "development", // Disable PWA in development
});

module.exports = withPWA({});
