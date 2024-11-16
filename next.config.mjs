/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enables extra logging in development mode
    swcMinify: true,       // Minimizes code (only affects production)
    output: 'standalone',  // Useful for seeing full logging in serverless setups
    webpack: (config, { isServer }) => {
      if (isServer) {
        config.externals = [...config.externals, 'next']; // Ensures Next.js server logs are visible
      }
      return config;
    },
  };
  
  export default nextConfig;
  