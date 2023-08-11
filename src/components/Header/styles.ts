import tw from 'tailwind-styled-components';

export const Container = tw.header`
    fixed
    z-40
    flex
    h-20
    w-full
    items-center
    bg-primary/50
    shadow-lg
    backdrop-blur-md
    transition-all
    duration-300 
    ease-in-out
    border-b-[1px]
    border-b-gray-900
    border-opacity-[0.5]
`;

export const Content = tw.div`
    flex
    h-full
    w-full
    items-center
    justify-between
    px-4
`;
