export interface ContentSideProps {
  side: 'left' | 'right';
  children: React.ReactNode;
  active?: boolean;
  onClose?: () => void;
  className?: string;
  title?: string;
  activeClass?: string;
}

export type ContentSideType = ContentSideProps
