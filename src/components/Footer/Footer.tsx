import { site, socialLinks } from '@/config';

import { Layout } from '@/components/Layout';
import { Logo } from '@/components/Logo';
import { SocialMedia } from '@/components/SocialMedia';

import * as S from './styles';

export const Footer = () => {
  const fullYear = new Date().getFullYear();

  return (
    <Layout>
      <S.Container>
        <S.Content>
          <S.Section role="contentinfo">
            <Logo />
            <S.Title>{site.title}</S.Title>
          </S.Section>

          <S.Section role="contentinfo">
            <S.SocialTitle>Redes</S.SocialTitle>
            <SocialMedia items={socialLinks} />
          </S.Section>
        </S.Content>

        <S.CopyrightContainer>
          <S.Copyright>
            Todos os direitos reservados © Andrew Rosário {fullYear}
          </S.Copyright>
        </S.CopyrightContainer>
      </S.Container>
    </Layout>
  );
};
