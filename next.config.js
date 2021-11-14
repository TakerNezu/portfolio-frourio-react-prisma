const isProd = process.env.NODE_ENV === 'production';

const url = isProd ? 'https://takernezu.github.io/portfolio-frourio-react-prisma' : '';
module.exports = {
  assetPrefix: url,
}