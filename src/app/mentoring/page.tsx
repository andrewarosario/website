import { Metadata } from 'next';
import Image from 'next/image';

import { site } from '@/config';

import { Link } from '@/components/Link';
import { Paragraph } from '@/components/Paragraph';

import * as S from './styles';

export const metadata: Metadata = {
  title: 'Mentoria Angular Pro'
};

export default function MentoringPage() {
  return (
    <main>
      <S.Container>
        <a href={site.links.mentoring}>
          <S.ImageContainer>
            <Image
              className="rounded-xl object-cover object-center"
              src="/assets/images/mentoria.png"
              alt="Logo da mentoria Angular Pro com Paolo Almeida e Andrew Rosário"
              title="Mentoria Angular Pro"
              fill
            />
          </S.ImageContainer>
        </a>
      </S.Container>

      <S.Subtitle>
        Nossa mentoria te ensinará o passo a passo para você chegar ao próximo
        nível na sua Carreira Frontend 🏆
      </S.Subtitle>

      <Paragraph>
        Meu objetivo é direcionar e ensinar Desenvolvedores(as)
        Frontend/Fullstack à alcançarem o próximo nível dentro de suas
        carreiras.
      </Paragraph>

      <Paragraph>Eu vou compartilhar com você MUITOS conteúdos:</Paragraph>

      <Paragraph>- Angular avançado</Paragraph>
      <Paragraph>- Formulários</Paragraph>
      <Paragraph>- RxJS</Paragraph>
      <Paragraph>- Gerenciamento de estado</Paragraph>
      <Paragraph>- Testes</Paragraph>
      <Paragraph>- Injeção de dependência avançada</Paragraph>
      <Paragraph>
        - E muitas técnicas que não encontramos em nenhum curso
      </Paragraph>

      <Paragraph>
        Eu abordo também muito o tema{' '}
        <strong>Arquitetura e boas práticas</strong>: Como pensar na arquitetura
        de uma aplicação desde o dia 1, focando nas melhores práticas, processos
        otimizados e qualidade de código.
      </Paragraph>

      <Paragraph>
        E essa é só a minha parte. O{' '}
        <Link href={'https://www.paoloalmeida.com/'}>Paolo Almeida</Link> também
        traz muitos temas como Human Skills, Network, Mindset Senior e diversas
        outras ferramentas.
      </Paragraph>

      <Paragraph>
        Mas para que a gente possa entregar todo esse conteúdo com máxima
        eficiência, nós temos vagas limitadas com turmas fechadas! Então pode
        ser que no momento que você esteja lendo isso, estejamos com vagas
        fechadas.
      </Paragraph>
      <Paragraph>
        Mas não se preocupe! Estamos sempre abrindo novas turmas e você pode se
        inscrever para participar da próxima!
      </Paragraph>

      <S.Container className="mt-8">
        <Link className="text-2xl font-bold" href={site.links.mentoring}>
          Quero participar!
        </Link>
      </S.Container>
    </main>
  );
}
