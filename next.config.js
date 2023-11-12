/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    CUSTOMER_ORG_ID: 'org_2XuQJDQbkgAA6fxWidXlg2lFbf4'
  }
};

module.exports = nextConfig;
