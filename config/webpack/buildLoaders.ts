import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types/config';


export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
  const fileLoader = {
      test: /\.(png|jpe?g|gif|woff2|woff)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    }


  const SVGRLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }


  // If not use TS, have to add Babel loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // If dev mode use regular loader which add css to js files, in prod mode mini loader create separate css files
      isDev
        ? "style-loader"
        : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string): boolean => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base645',
          },
        }
      },
      "sass-loader",
    ],
    }

  return [
    typescriptLoader,
    scssLoader,
    SVGRLoader,
    fileLoader
  ]
}
