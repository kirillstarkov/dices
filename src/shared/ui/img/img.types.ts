interface ImgProps {
  src?: string;
  style?: Record<string, any>;
  className?: string;
  onClick?: CallableFunction;
  loadingSpin?: boolean;
  error?: string
}

export type ImgType = ImgProps;
