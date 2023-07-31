import { Post } from 'contentlayer/generated';

import { slugify } from '@/functions';
import { BlogPost } from '@/types';

export const formatPosts = (posts: Post[]): BlogPost[] => {
  const formattedposts = posts.map((post) => {
    return {
      slug: slugify(post.slug),
      body: post.body,
      readingTime: Math.ceil(post.readingTime.minutes),
      frontmatter: {
        title: post.title,
        description: post.description,
        date: post.date,
        tags: post.tags,
        image: post.image
      }
    };
  });

  return formattedposts.sort((a, b) =>
    a.frontmatter.date < b.frontmatter.date ? 1 : -1
  );
};
