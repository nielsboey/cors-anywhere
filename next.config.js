/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://localise.biz/:path*'
      }
    ]
  }
}

module.exports = nextConfig 