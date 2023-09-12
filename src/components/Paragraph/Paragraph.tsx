import { HTMLAttributes } from 'react';

type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode;
};

export const Paragraph = ({ children }: ParagraphProps) => {
  return <p className="mb-3 text-xl font-normal leading-relaxed">{children}</p>;
};
