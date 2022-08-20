/** @type {import('next').NextConfig} */

const withLess = require('next-with-less')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      //接口请求
      { source: '/api/:path*', destination: `http://127.0.0.1:8443/:path*` }
    ]
  }
}

module.exports = withLess(nextConfig)
