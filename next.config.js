const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextTranslate = require('next-translate');

module.exports = nextTranslate(
  withBundleAnalyzer({
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    eslint: {
      dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
    },
    async redirects() {
      return [
        {
          source: '/resume',
          destination:
            'https://drive.google.com/file/d/1zn7AY7H7qoi3dBHJk6UciWDOOvsibOyN/view',
          permanent: true,
        },
        {
          source: '/curriculum',
          destination:
            'https://drive.google.com/file/d/1zn7AY7H7qoi3dBHJk6UciWDOOvsibOyN/view',
          permanent: true,
        },
        {
          source: '/cv',
          destination:
            'https://drive.google.com/file/d/1zn7AY7H7qoi3dBHJk6UciWDOOvsibOyN/view',
          permanent: true,
        },
      ];
    },
    experimental: { esmExternals: true },
    webpack: (config, { dev, isServer }) => {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|mp4)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              name: 'static/media/[name].[hash].[ext]',
            },
          },
        ],
      });

      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      if (!dev && !isServer) {
        // Replace React with Preact only in client production build
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat',
        });
      }
      return config;
    },
  }),
);
