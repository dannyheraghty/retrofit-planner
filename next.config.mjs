/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/methodology", destination: "/how-it-works", permanent: true },
      { source: "/for-contractors", destination: "/", permanent: false }
    ];
  }
};

export default nextConfig;
