import Image from 'next/image';
import Link from 'next/link';

import { Tag } from '@/components/Tag';

export const PostCard = () => {
  return (
    <>
      <Link href="#">
        <div className="relative h-80 w-full">
          <Image
            priority
            className="rounded-xl object-cover object-center"
            src="/assets/images/background.jpg"
            alt="title"
            fill
          ></Image>
        </div>

        <div className="pt-3">
          <div className="mb-3 flex flex-wrap gap-2">
            {['TS', 'JS', 'React'].map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>

        <time className="text-gray-400">
          13 de junho de 2023 • 4 minutos de leitura
        </time>

        <p className="mt-2 max-w-md text-ellipsis text-2xl font-medium text-gray-50">
          Confira as novidades do Angular 16
        </p>

        <p className="mt-3 text-gray-400">
          Vamos conhecer as principais novidades desta nova versão do framework!
        </p>
      </Link>
    </>
  );
};
