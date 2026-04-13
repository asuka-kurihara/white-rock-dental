const config = {
  plugins: {
    autoprefixer: {},

    'postcss-preset-env': {
      stage: 0,
      features: {
        'custom-properties': false,
        'nesting-rules': true,
      },
    },

    ...(process.env.NODE_ENV === 'production' && {
      cssnano: {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true,
            },
            cssDeclarationSorter: false,
            mergeIdents: false,
            reduceIdents: false,
            zindex: false,
          },
        ],
      },
    }),
  },
};

export default config;
