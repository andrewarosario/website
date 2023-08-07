import Image from 'next/image';

import { Link } from '@/components/Link';

import * as S from './styles';

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
