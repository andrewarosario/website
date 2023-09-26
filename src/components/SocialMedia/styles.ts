import tw from 'tailwind-styled-components';

export const List = tw.ul`
    flex
    items-center
    gap-6
`;

export const SocialMediaItem = tw.div`
    p-2
    border
    border-gray-700
    rounded-full
    hover:bg-gray-700
    transition-colors
    duration-300
`;
