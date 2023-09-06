import tw from 'tailwind-styled-components';

export const Container = tw.div`
    mb-16
    mt-10
    flex
    flex-col-reverse
    items-center
    justify-center
    gap-7
    sm:mt-14
    md:flex-row
    md:gap-20
`;

export const Title = tw.h1`
    my-3
    text-4xl
    font-bold
`;

export const Subtitle = tw.p`
    mb-6
    text-md
    text-gray-400
`;
