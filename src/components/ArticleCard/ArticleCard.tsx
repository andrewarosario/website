import Image from 'next/image';

import { Article } from '@/types';

import { Tag } from '@/components/Tag';

import * as S from './styles';

type ArticleCardProps = {
  article: Article;
};

export const ArticleCard = ({ article }: ArticleCardProps) => {
  const { title, image_url, tags, url } = article;

  return (
    <a href={url}>
      <S.LinkContainer>
        <S.ImageContainer>
          <Image
            priority
            className="rounded-xl object-cover object-center"
            src={image_url}
            alt="title"
            fill
          />
        </S.ImageContainer>

        <S.Content>
          <S.TagsContainer>
            {tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </S.TagsContainer>
          {/* <S.Time>{formattedDate}</S.Time> */}

          <S.Title>{title}</S.Title>
        </S.Content>
      </S.LinkContainer>
    </a>
  );
};
