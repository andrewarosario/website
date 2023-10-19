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
        Já atuei em diversos projetos Web e Mobile para empresas como{' '}
        <strong>Cuca Fresca</strong>, <strong>Shift</strong> e{' '}
        <strong>CI&T</strong>. Atualmente trabalho como Dev Frontend Senior no{' '}
        <Link href="https://picpay.com">PicPay</Link>, onde desempenho o papel
        de desenvolver produtos Web e também colaboro na Arquitetura do
        ecossistema Web da empresa como um todo.
      </Paragraph>

      <Paragraph>
        No PicPay também atuei como <strong>Frontend Skill Lead</strong>, com a
        responsabilidade de fomentar discussões entre os membros da comunidade,
        além de ser a principal frente no recrutamento e integração de novos
        desenvolvedores através de onboardings.
      </Paragraph>

      <Paragraph>
        Logo no início da minha carreira, recebi muitos feedbacks positivos
        sobre como eu conseguia disseminar conhecimento dentro das empresas.
        Isso me motivou a criar um{' '}
        <Link href={site.links.blog}>Blog no Medium</Link> e um{' '}
        <Link href={site.links.youtube}>Canal no YouTube</Link>. Descobri que
        era apaixonado por compartilhar conteúdos, principalmente ao perceber
        que conseguia impactar muitas pessoas com eles.
      </Paragraph>

      <Paragraph>
        Já palestrei em diversos eventos como o{' '}
        <strong>TDC (The Developer&#39;s Conference)</strong>,{' '}
        <strong>NerdZão</strong>, <strong>Guilda de Angular do Itaú</strong> e{' '}
        <strong>Vindi Lovecoding</strong>. E minha primeira palestra foi
        realizada no <strong>AngularSP</strong>, um meetup que tenho muito
        apreço, pois além de ser uma comunidade focada no framework Angular
        (tecnologia que tenho maior expertise e é fonte da maioria dos meus
        conteúdos), também incentiva novos desenvolvedores a darem os primeiros
        passos como palestrantes.
      </Paragraph>
    </main>
  );
}
