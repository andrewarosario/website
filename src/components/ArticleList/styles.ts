'use client';

import NextLink from 'next/link';

import tw from 'tailwind-styled-components';

import { ArrowRightIcon } from '../Icons';

export const Container = tw.section`
    w-full
`;

export const Heading = tw.h2`
    mb-7
    flex
    items-center
    justify-between
    border-b
    border-b-gray-700
    pb-1
    text-2xl
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

export const LinkIcon = tw(ArrowRightIcon)`
    transition-transform
    duration-300
    ease-in-out
    text-link

    group-hover:translate-x-1
`;
