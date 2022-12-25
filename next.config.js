/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  cleanupOutdatedCaches: true,
});

module.exports = withPWA({
  // config
  reactStrictMode: true,
});
