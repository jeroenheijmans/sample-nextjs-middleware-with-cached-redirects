/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/nextjs-config-mjs-1",
        destination: "/",
        permanent: false,
      },
      {
        source: "/nextjs-config-mjs-2",
        destination: "/some-bad-url",
        permanent: false,
      },
      {
        source: "/nextjs-config-mjs-3",
        destination: "https://example.com",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
