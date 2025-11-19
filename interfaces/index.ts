export interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}
