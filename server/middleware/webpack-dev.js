import WebpackDevMiddleware from 'webpack-dev-middleware';
import config               from '../../config';

const paths = config.utils_paths;
const debug = require('debug')('kit:server:webpack-dev');

export default function ({ compiler, publicPath }) {
  debug('Enable Webpack dev middleware.');

  return WebpackDevMiddleware(compiler, {
    publicPath,
    contentBase : paths.base(config.dir_client),
    hot         : true,
    quiet       : config.compiler_quiet,
    noInfo      : config.compiler_quiet,
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
    lazy        : false,
    stats       : {
      colors : true
    }
  });
}
