import { Metadata } from 'next';
import Image from 'next/image';

import { site } from '@/config';

import { Link } from '@/components/Link';
import { Paragraph } from '@/components/Paragraph';
import { Title } from '@/components/Title';

import * as S from './styles';

export const metadata: Metadata = {
  title: 'Sobre mim'
};

export default function AboutPage() {
  return (
    <main>
      <Title>Sobre mim</Title>

      <S.ImageContainer>
        <Image
          className="rounded-xl object-cover object-center"
          src="/assets/images/andrew.jpg"
          alt="Eu em Portillo - Chile"
          fill
        />
      </S.ImageContainer>

      <S.Subtitle>Olá, muito prazer! 👋</S.Subtitle>

      <Paragraph>
        Sou um desenvolvedor frontend apaixonado por tecnologia e por
        compartilhar conhecimento.
      </Paragraph>

      <Paragraph>
        Já atuei em diversos projetos Web para várias empresas. Nesses projetos,
        liderei iniciativas, e atuei como mentor, disseminando boas práticas de
        desenvolvimento entre as equipes. Atualmente trabalho como Dev Frontend
        Senior no <Link href="https://picpay.com">PicPay</Link>, onde desempenho
        o papel de desenvolver produtos Web e também colaboro na Arquitetura do
        ecossistema Web da empresa como um todo.
      </Paragraph>

      <Paragraph>
        No PicPay também atuei como <strong>Frontend Skill Lead</strong>, com a
        responsabilidade de fomentar discussões entre os membros da comunidade,
        além de ser a principal frente no recrutamento e integração de novos
        desenvolvedores através de onboardings.
      </Paragraph>

      <Paragraph>
        Atuo também como{' '}
        <Link href="/mentoring">Mentor de Frontend e Angular</Link>, auxiliando
        pessoas desenvolvedoras a alavancar suas carreiras por meio de aulas
        técnicas semanais.
      </Paragraph>

      <Paragraph>
        Possuo um <Link href={site.links.blog}>Blog no Medium</Link> onde
        regularmente posto artigos relacionados ao mundo do desenvolvimento Web,
        Frontend e Angular.
      </Paragraph>

      <Paragraph>
        Já palestrei em diversos eventos como o{' '}
        <strong>TDC (The Developer&#39;s Conference)</strong>,{' '}
        <strong>NerdZão</strong>, <strong>Guilda de Angular do Itaú</strong> e{' '}
        <strong>AngularSP</strong>.
      </Paragraph>
    </main>
  );
}
