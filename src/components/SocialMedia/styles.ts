import NextLink from 'next/link';

import tw from 'tailwind-styled-components';

export const Link = tw(NextLink)`
    flex
    items-center
`;

export const Text = tw.p`
    ml-1
`;

export const List = tw.ul`
    flex
    gap-6
`;

export const ListItem = tw.li`
    p-2
    border
    border-gray-700
    rounded-full
`;
