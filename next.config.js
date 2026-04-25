/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "vcfilling.wamender.com",
      },
      {
        hostname: "utfs.io",
      },
    ],
  },
};

module.exports = nextConfig
