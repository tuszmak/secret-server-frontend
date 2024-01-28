/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

async function rewrites() {
  return [
    {
      source: "/api/:path*",
      destination: `${process.env.BACKEND_URL}/api/:path*`,
    },
  ];
}

module.exports = {
  ...nextConfig,
  rewrites,
};
