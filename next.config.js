const { withAxiom } = require('next-axiom');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  }
}

module.exports = withAxiom(nextConfig);
