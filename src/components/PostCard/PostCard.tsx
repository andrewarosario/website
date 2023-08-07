import Image from 'next/image';

import { formatDate } from '@/functions';
import { BlogPost } from '@/types';

import { Tag } from '@/components/Tag';

import * as S from './styles';

type PostCardProps = {
  post: BlogPost;
  isMain?: boolean;
};

export const PostCard = ({ post, isMain = false }: PostCardProps) => {
  const { frontmatter, slug, readingTime } = post;
  const { title, description, image, date, tags } = frontmatter;
  const formattedDate = formatDate(date);
  return (
    <>
      <S.LinkContainer href={slug} $isMain={isMain}>
        <S.ImageContainer className={`${isMain && 'lg:mr-3'}`}>
          <Image
            priority
            className="rounded-xl object-cover object-center"
            src={image}
            alt="title"
            fill
          />
        </S.ImageContainer>

        <S.Content className={`${isMain && 'lg:pt-0'}`}>
          <S.TagsContainer>
            {tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </S.TagsContainer>
          <S.Time>
            {formattedDate} • {readingTime} minutos de leitura
          </S.Time>

          <S.Title>{title}</S.Title>

          <S.Description>{description}</S.Description>
        </S.Content>
      </S.LinkContainer>
    </>
  );
};
