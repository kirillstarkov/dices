import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const codebaBelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  const cssLoader = buildCssLoader(isDev);

  // const typescriptLoader = {
  //     test: /\.tsx?$/,
  //     use: 'ts-loader',
  //     exclude: /node_modules/,
  // };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$i/,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };
  return [
    fileLoader,
    svgLoader,
    codebaBelLoader,
    tsxCodeBabelLoader,
    // typescriptLoader,
    cssLoader];
}
