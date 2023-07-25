import { allPosts } from 'contentlayer/generated';

export const PostService = {
  getAll: () => {
    const formattedPosts = allPosts.map((post) => {
      return {
        slug: post._id,
        body: post.body,
        readingTime: 2,
        frontmatter: {
          title: post.title,
          description: post.description,
          date: post.date,
          tags: post.tags,
          image: post.image
        }
      };
    });

    return {
      posts: formattedPosts
    };
  }
};
