import { IframeHTMLAttributes } from 'react';

import * as S from './styles';

export type VideoEmbedProps = IframeHTMLAttributes<HTMLIFrameElement>;

export const VideoEmbed = ({ src, title, ...rest }: VideoEmbedProps) => {
  return (
    <S.Container>
      <S.Video src={src} title={title} {...rest}></S.Video>
    </S.Container>
  );
};
