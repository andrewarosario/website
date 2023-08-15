import tw from 'tailwind-styled-components';

export const Container = tw.div`
    relative
    w-full
    overflow-hidden
    after:block
    after:pt-[56.25%]
`;

export const Video = tw.iframe`
    absolute
    left-0
    top-0
    h-full
    w-full
`;
