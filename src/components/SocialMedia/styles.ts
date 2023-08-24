import NextLink from 'next/link';

import tw from 'tailwind-styled-components';

export const Link = tw(NextLink)`
    p-2
    border
    border-gray-700
    rounded-full
    hover:bg-gray-700
    transition-colors
    duration-300
`;

export const Text = tw.p`
    ml-1
`;

export const List = tw.ul`
    flex
    gap-6
`;
