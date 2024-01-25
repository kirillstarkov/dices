import {LinkProps} from "react-router-dom";

export interface AppLinkProps extends LinkProps{
  className?: string;
  children: React.ReactNode;
}

export type AppLinkType = AppLinkProps
