import { Metadata } from 'next';
import NextLink from 'next/link';

import { talks } from '@/config';

import { LinkIcon } from '@/components/Icons';
import { Link } from '@/components/Link';
import { Paragraph } from '@/components/Paragraph';
import { Title } from '@/components/Title';
import { VideoEmbed } from '@/components/VideoEmbed';

export const metadata: Metadata = {
  title: 'Talks'
};

export default function TalksPage() {
  return (
    <main>
      <Title>Talks</Title>

      <Paragraph>
        Essas são as gravações das palestras que apresentei. Se você acha que
        seria legal ter uma palestra minha em seu evento,{' '}
        <Link href="mailto:andrew.arosario@gmail.com">entre em contato</Link>{' '}
        comigo. 😃
      </Paragraph>

      {talks.map((talk) => (
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
          <p className="mb-2 text-gray-400">{talk.description}</p>

          <VideoEmbed title={talk.title} src={talk.url} />
        </div>
      ))}
    </main>
  );
}
