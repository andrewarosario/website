import { Metadata } from 'next';
import Image from 'next/image';

import { siteConfig } from '@/config';

import { Link } from '@/components/Link';

import * as S from './styles';

export const metadata: Metadata = {
  title: 'Sobre mim',
  description: 'Sobre mim',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    title: 'Sobre mim',
    url: '/about',
    description: 'Sobre mim',
    siteName: 'Sobre mim',
    images: [
      {
        url: `${siteConfig.url}/assets/images/image-post.jpeg`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre mim',
    description: 'Sobre mim',
    images: [`${siteConfig.url}/assets/images/image-post.jpeg`]
  }
};

export default function AboutPage() {
  return (
    <main>
      <S.Subtitle>Sobre mim</S.Subtitle>

      <S.ImageContainer>
        <Image
          className="rounded-xl object-cover object-center"
          src="/assets/images/background.jpg"
          alt="Foto de exemplo"
          fill
        />
      </S.ImageContainer>

      <S.Subtitle>Primeiramente, agradeço por estar aqui.</S.Subtitle>

      <S.Paragraph>
        Sou apaixonado por Frontend, toda a parte gráfica da aplicação,
        trabalhar com fontes, cores, interatividade... Passo horas trabalhando
        com tudo isso sem ver o tempo passar.
      </S.Paragraph>

      <S.Paragraph>Parágrafo, texto...</S.Paragraph>

      <S.Paragraph>
        Fiz alguns cursos específicos sobre Gatsby, Javascript ES6+, GraphQL,
        mas na maior parte do tempo, estou lendo documentações e tentando
        aprender algo novo.
        <Link
          href="https://www.google.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nome da empresa
        </Link>
      </S.Paragraph>

      <S.Paragraph>Parágrafo</S.Paragraph>
    </main>
  );
}
