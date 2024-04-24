import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (restPath: string) => Boolean(restPath.includes('.module.')),
            localIdentName: isDev ? '[name]_[local]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };
}
