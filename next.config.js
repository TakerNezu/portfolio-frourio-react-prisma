const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
const url = isProd ? 'https://takernezu.github.io/portfolio-frourio-react-prisma' : '';

function generateIncludes(modules) {
  return [
    new RegExp(`(${modules.join('|')})$`),
    new RegExp(`(${modules.join('|')})/(?!.*node_modules)`),
  ]
}

const includes = generateIncludes([
  '@grapecity/activereports-localization',
  '@grapecity/activereports-react',
  '@grapecity/activereports/pdfexport',
  "@grapecity/activereports/htmlexport",
  "@grapecity/activereports/xlsxexport",
])

const config = {
  webpack: (config) => {
    config.externals = config.externals.map((external) => {
      if (typeof external !== 'function') return external
      return (context, request, callback) => {
        return includes.find((i) =>
          i.test(request.startsWith('.') ? path.resolve(context, request) : request)
        )
          ? callback() // i.e., not an external
          : external(context, request, callback)
      }
    })

    return config
  },
  assetPrefix: url,
  future: {
    webpack5: true,
  },
}

module.exports = config

// const withPlugins = require('next-compose-plugins');
// const withTM = require('next-transpile-modules')([
//   '@grapecity/activereports-react',
//   '@grapecity/activereports-localization',
// ]);

// module.exports = withPlugins([withTM], {
//   assetPrefix: url,
//   future: {
//     webpack5: true,
//   },
// });