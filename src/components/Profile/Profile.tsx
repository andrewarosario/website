import Image from 'next/image';

import { site, socialLinks } from '@/config';

import { SocialMedia } from '../SocialMedia';
import * as S from './styles';

export const Profile = () => {
  return (
    <S.Container>
      <div>
        <S.Title>Olá, eu sou o Andrew Rosário</S.Title>
        <S.Subtitle>{site.subtitle}</S.Subtitle>
        <SocialMedia items={socialLinks} />
      </div>
      <Image
        src="/assets/images/profile.jpeg"
        alt="Imagem de perfil do Andrew"
        width={260}
        height={260}
        title="profile image"
        priority
        className="rounded-full"
      />
    </S.Container>
  );
};
