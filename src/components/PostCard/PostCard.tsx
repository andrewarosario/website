import Image from 'next/image';
import Link from 'next/link';

import { BlogPost } from '@/types';

import { Tag } from '@/components/Tag';

import * as S from './styles';

type PostCardProps = {
  post: BlogPost;
};

export const PostCard = ({ post }: PostCardProps) => {
  const { frontmatter, slug, readingTime } = post;
  const { title, description, image, date, tags } = frontmatter;
  return (
    <>
      <Link href={slug}>
        <S.ImageContainer>
          <Image
            priority
            className="rounded-xl object-cover object-center"
            src={image}
            alt="title"
            fill
          />
        </S.ImageContainer>

        <S.Content>
          <S.TagsContainer>
            {tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </S.TagsContainer>
        </S.Content>

        <S.Time>
          {date} • {readingTime} minutos de leitura
        </S.Time>

        <S.Title>{title}</S.Title>

        <S.Description>{description}</S.Description>
      </Link>
    </>
  );
};
