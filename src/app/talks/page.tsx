import NextLink from 'next/link';

import { talksConfig } from '@/config';

import { LinkIcon } from '@/components/Icons';
import { Link } from '@/components/Link';
import { VideoEmbed } from '@/components/VideoEmbed';

import * as S from './styles';

export default function TalksPage() {
  return (
    <main>
      <S.Title>Talks</S.Title>

      <S.Paragraph>
        Essas são as gravações das palestras que eu apresentei. Se você acha que
        seria legal me ter palestrando em seu evento,{' '}
        <Link href="mailto:andrew.arosario@gmail.com">entre em contato</Link>{' '}
        comigo. 😃
      </S.Paragraph>

      {talksConfig.map((talk) => (
        <div key={talk.id} className="mb-10 mt-7">
          <h2
            id={talk.id}
            className="group mb-3 flex scroll-mt-20 items-center gap-2 border-b border-b-gray-700 text-xl text-gray-50"
          >
            {talk.title}
            <NextLink
              href={`#${talk.id}`}
              className="invisible text-gray-400 transition-colors duration-200 hover:text-link group-hover:visible"
            >
              <LinkIcon />
            </NextLink>
          </h2>
          <p className="text-gray-400">{talk.description}</p>

          <VideoEmbed src={talk.url} />
        </div>
      ))}
    </main>
  );
}
