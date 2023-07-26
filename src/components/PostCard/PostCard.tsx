import Image from 'next/image';
import Link from 'next/link';

import { BlogPost } from '@/types';

import { Tag } from '@/components/Tag';

type PostCardProps = {
  post: BlogPost;
};

export const PostCard = ({ post }: PostCardProps) => {
  const { frontmatter, slug, readingTime } = post;
  const { title, description, image } = frontmatter;
  return (
    <>
      <Link href={slug}>
        <div className="relative h-80 w-full">
          <Image
            priority
            className="rounded-xl object-cover object-center"
            src={image}
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
          13 de junho de 2023 • {readingTime} minutos de leitura
        </time>

        <p className="mt-2 max-w-md text-ellipsis text-2xl font-medium text-gray-50">
          {title}
        </p>

        <p className="mt-3 text-gray-400">{description}</p>
      </Link>
    </>
  );
};
