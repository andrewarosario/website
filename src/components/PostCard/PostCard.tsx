import Image from 'next/image';

import { formatDate } from '@/functions';
import { BlogPost } from '@/types';

import { Tag } from '@/components/Tag';

import * as S from './styles';

type PostCardProps = {
  post: BlogPost;
};

export const PostCard = ({ post }: PostCardProps) => {
  const { title, image, date, tags, url } = post;
  const formattedDate = formatDate(date);
  return (
    <>
      <S.LinkContainer href={url}>
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
          <S.Time>{formattedDate}</S.Time>

          <S.Title>{title}</S.Title>
        </S.Content>
      </S.LinkContainer>
    </>
  );
};
