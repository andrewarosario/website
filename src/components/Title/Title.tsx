import { HTMLAttributes } from 'react';

type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};

export const Title = ({ children }: TitleProps) => {
  return <h1 className="my-6 text-3xl font-bold">{children}</h1>;
};
