/** @type {import('next').NextConfig} */

const isGithubPages = process.env.NODE_ENV === 'production';
const repo = 'my-portfolio'; // your GitHub repo name

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(isGithubPages && {
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
  }),
};

module.exports = nextConfig;
