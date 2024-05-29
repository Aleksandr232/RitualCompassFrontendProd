const nextCors = require('next-cors');

const nextConfig = {
  images: {
    domains: process.env.NEXT_PUBLIC_API_URL
      ? [process.env.NEXT_PUBLIC_API_URL.split(':')[0]]
      : [],
  },
  webpack(config) {
    config.module.rules.push({
      test: /.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  /* Add CORS configuration */
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://www.ritualcompass.com',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};

export default nextCors(nextConfig);
