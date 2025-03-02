/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

async function rewrites() {
  return [
    {
      source: "/api/v1/:path*",
      destination: `${process.env.BACKEND_URL}/api/v1/:path*`,
    },
  ];
}

module.exports = {
  ...nextConfig,
  rewrites,
};
