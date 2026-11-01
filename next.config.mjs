const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
if (basePath && (!basePath.startsWith('/') || basePath.endsWith('/'))) {
  throw new Error('NEXT_PUBLIC_BASE_PATH must start with / and must not end with /. Example: /messi-beyond-the-game');
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  poweredByHeader: false,
  experimental: { cpus: 2 },
};
export default nextConfig;
