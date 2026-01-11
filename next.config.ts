import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.cyrilyamoah.com',
          },
        ],
        destination: 'https://cyrilyamoah.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
