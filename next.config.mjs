/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shop.vinfastauto.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
