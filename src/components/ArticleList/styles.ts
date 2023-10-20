'use client';

import NextLink from 'next/link';

import tw from 'tailwind-styled-components';

import { ArrowRightIcon } from '../Icons';

export const Container = tw.section`
    w-full
`;

export const Link = tw(NextLink)`
    flex
    items-center
    gap-1
    group
    text-base
    duration-300
    transition-colors
    hover:text-link
`;

export const NextPageIcon = tw(ArrowRightIcon)`
    transition-transform
    duration-300
    ease-in-out
    text-link

    group-hover:translate-x-1
`;
