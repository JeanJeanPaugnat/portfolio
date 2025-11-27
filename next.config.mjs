/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'standalone', // Pour un déploiement optimisé
  trailingSlash: true,
  images: {
    unoptimized: true, // Peut être nécessaire selon la config Plesk
  },
};

export default nextConfig;
