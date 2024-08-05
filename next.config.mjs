/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/nextjs-default-redirection-example-1",
        destination: "/",
        permanent: false,
      },
      {
        source: "/nextjs-default-redirection-example-2",
        destination: "/some-bad-url",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
