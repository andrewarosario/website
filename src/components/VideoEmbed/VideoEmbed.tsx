import { IframeHTMLAttributes } from 'react';

import * as S from './styles';

type VideoEmbedProps = IframeHTMLAttributes<HTMLIFrameElement>;

export const VideoEmbed = ({ src, ...rest }: VideoEmbedProps) => {
  return (
    <S.Container>
      <S.Video src={src} {...rest}></S.Video>
    </S.Container>
  );
};
