import tw from 'tailwind-styled-components';

import { GridProps } from './Grid';

export const Container = tw.div<Pick<GridProps, 'threeColumns'>>`
    grid
    w-full
    grid-cols-1
    gap-10
    sm:grid-cols-1
    md:grid-cols-2
    lg:grid-cols-2

    ${({ threeColumns }) =>
      threeColumns &&
      `
        2xl:grid-cols-3
        md:[&>*:first-child]:col-span-2
        lg:[&>*:first-child]:col-span-2
        2xl:[&>*:first-child]:col-span-2
    `}
`;
