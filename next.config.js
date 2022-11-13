/** @type {import('next').NextConfig} */

const withLess = require('next-with-less')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // async rewrites() {
  //   return [
  //     //接口请求
  //     {
  //       source: '/api/:path*',
  //       destination: `http://47.104.176.170:8443/:path*`
  //     }
  //   ]
  // },
  images: {
    domains: ['localhost']
  }
}

module.exports = withLess(nextConfig)
