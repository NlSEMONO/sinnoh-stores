/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'archives.bulbagarden.net',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
