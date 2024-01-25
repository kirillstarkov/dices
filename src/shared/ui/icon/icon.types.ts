export interface IconProps {
  pathToIcon: string;
  loadingSpin?: boolean;
  size: number;
  filter?: string;
  className?: string;
  onClick?: () => void;
}
export type IconType = IconProps
