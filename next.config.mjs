/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // One address for Google: www → naslanfitnesscenter.com
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.naslanfitnesscenter.com" }],
        destination: "https://naslanfitnesscenter.com/:path*",
        permanent: true,
      },
      { source: "/personal-training", destination: "/personal-training-sharjah", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
