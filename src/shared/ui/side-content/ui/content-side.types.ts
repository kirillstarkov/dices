export interface ContentSideProps {
  side: 'left' | 'right';
  active?: boolean;
  onClose?: () => void;
  className?: string;
  children: React.ReactNode;
  title?: string;
}

export type ContentSideType = ContentSideProps
