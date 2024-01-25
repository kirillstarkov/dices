import React, {FC, useMemo} from 'react';
import CoolImg from 'react-cool-img'

import {ImgType} from "./img.types";

const retrySettings = { count: 0 }

export const Img: FC<ImgType> = (props: ImgType) => {
  const {src, style, className, error, onClick, loadingSpin = false} = props;

  return useMemo(() => (
      <CoolImg
          onClick={onClick}
          style={style}
          src={src}
          alt={"img"}
          placeholder={loadingSpin ? "Loading..." : ""}
          error={error ? error : "missingicon"}
          className={className}
          retry={retrySettings}
      />
      ),
      [src, style, className, loadingSpin, error, onClick]
  );
};
