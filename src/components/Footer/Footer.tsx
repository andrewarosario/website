import Link from 'next/link';

import { siteConfig } from '@/config';
import { NavItem } from '@/types';

import { Layout } from '@/components/Layout';
import { Logo } from '@/components/Logo';

import * as S from './styles';

type FooterProps = {
  items: NavItem[];
};

export const Footer = ({ items }: FooterProps) => {
  const fullYear = new Date().getFullYear();

  return (
    <Layout>
      <S.Container>
        <S.Content>
          <S.Section role="contentinfo">
            <Logo />
            <S.Title>{siteConfig.title}</S.Title>
          </S.Section>

          <S.Section role="contentinfo">
            <S.Title>Redes</S.Title>
          </S.Section>

          <S.Section role="contentinfo">
            <S.Title>Sitemap</S.Title>

            <ul>
              {items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </S.Section>
        </S.Content>

        <S.CopyrightContainer>
          <S.Copyright>
            Todos os direitos reseverdos © Andrew Rosário {fullYear}
          </S.Copyright>
        </S.CopyrightContainer>
      </S.Container>
    </Layout>
  );
};
