/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
      styledComponents: true
    }
  }
}

module.exports = nextConfig;
