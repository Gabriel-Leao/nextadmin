/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => { // eslint-disable-line
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      }
    ]
  }
}

export default nextConfig
