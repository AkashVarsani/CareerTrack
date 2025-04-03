/** @type {import('next').NextConfig} */
const nextConfig =  {
    images: {
      domains: ['tailwindcss.com'],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**", // Allows all domains (not recommended for security)
        },
      ],
    },
  };

export default nextConfig;