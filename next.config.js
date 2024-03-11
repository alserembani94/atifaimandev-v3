/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.fkul10-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/twitter',
        destination: 'https://twitter.com/alserembani',
        permanent: true
      },
      {
        source: '/facebook',
        destination: 'https://www.facebook.com/alserembani/',
        permanent: true
      },
      {
        source: '/github',
        destination: 'https://github.com/alserembani94',
        permanent: true
      },
      {
        source: '/behance',
        destination: 'https://www.behance.net/alserembani',
        permanent: true
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/atif-aiman/',
        permanent: true
      },
      {
        source: '/medium',
        destination: 'https://medium.com/@alserembani94',
        permanent: true
      },
      {
        source: '/devto',
        destination: 'https://dev.to/alserembani94',
        permanent: true
      },
      {
        source: '/buymeacoffee',
        destination: 'https://www.buymeacoffee.com/atifaiman',
        permanent: true
      },
      {
        source: '/threejs',
        destination: 'https://three.atifaiman.dev',
        permanent: true
      },
      {
        source: '/consult_resume',
        destination: 'https://kena.lol',
        permanent: true
      },
      {
        source: '/rick_roll',
        destination: 'https://link.tngdigital.com.my/JmgdVkzaG5MVQGoq6',
        permanent: true
      }
    ];
  },
};

module.exports = nextConfig


// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
  module.exports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: "atif-aiman",
    project: "atifaimandev-v3",
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors.
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  }
);
