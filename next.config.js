/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  // i18n handled by middleware/dictionaries approach
}
module.exports = nextConfig;
