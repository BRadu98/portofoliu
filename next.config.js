const withPWA = require('next-pwa')
const runtimeCaching = require("next-pwa/cache")

const headers = async () => {
  return [
  {
    source: '/(.*)',
    headers: [
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff'
    },
    {
      key: 'X-Frame-Options',
      value: 'SAMEORIGIN'
    },
    {
      key: 'X-XSS-Protection',
      value: '1; mode=block'
    }
  ],
  },
  ]
}

module.exports = withPWA({
  reactStrictMode: true,
  
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
  },
  headers
})
