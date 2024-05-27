const nextConfig = {
  images: {
    domains: process.env.NEXT_PUBLIC_API_URL ? [process.env.NEXT_PUBLIC_API_URL.split(":")[0]] : [],// Добавьте это поле
    /* domains: ['localhost'] */
  },
  webpack(config) {
    config.module.rules.push({
      test: /.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
