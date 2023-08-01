import NextLink from 'next/link';

import tw from 'tailwind-styled-components';

export const Link = tw(NextLink)`
    group
    flex
    items-center
    gap-1
    text-gray-400
`;

export const IconContainer = tw.div`
    flex
    h-8
    items-center
    justify-center
    rounded-full
    group-hover:text-gray-100
`;

export const Text = tw.p`
    duration-300
    ease-in-out
    group-hover:text-gray-100
`;
