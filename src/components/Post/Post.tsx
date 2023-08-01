import Image from 'next/image';

import { formatDate } from '@/functions';
import { BlogPost } from '@/types';

import { BackButton } from '@/components/BackButton';
import { Mdx } from '@/components/Mdx';

import * as S from './styles';

type PostProps = {
  post: BlogPost;
};

export const Post = ({ post }: PostProps) => {
  const { body, frontmatter, readingTime } = post;
  const { title, description, date, image } = frontmatter;
  const formattedDate = formatDate(date);

  return (
    <S.Container>
      <S.BackButtonContainer>
        <BackButton />
      </S.BackButtonContainer>
      <S.ImageContainer>
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="rounded-xl object-cover object-center"
        />
      </S.ImageContainer>

      <S.Content>
        <S.DateContainer>
          <S.Date>
            {formattedDate} - {readingTime} minutos de leitura
          </S.Date>
          <S.Title>{post.frontmatter.title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.DateContainer>
        <Mdx code={body.code} />
      </S.Content>
    </S.Container>
  );
};
