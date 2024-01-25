export interface ItemCardProps {
  title: string;
  description?: React.ReactNode;
  leftBlock?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export type ItemCardType = ItemCardProps
