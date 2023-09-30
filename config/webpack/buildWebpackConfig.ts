import {BuildOptions} from './types/config';
import path from 'path';
import {buildPlugins} from './buildPlugins';
import {buildLoaders} from './buildLoaders';
import {buildResolvers} from './buildResolvers';
import webpack from 'webpack';
import {buildDevServer} from './buildDevServer';


export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
  const {mode, paths, isDev} = options
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js',
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined,
  }
}