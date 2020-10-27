const BASE_URL = process.env.NODE_ENV === 'production' ? '/m' : '/m';
module.exports = {
  publicPath: BASE_URL,
}
