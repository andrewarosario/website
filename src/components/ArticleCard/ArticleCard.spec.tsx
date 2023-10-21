import { formatDate } from '@/functions';
import { mockArticles } from '@/mocks';
import { render, screen } from '@testing-library/react';

import { ArticleCard } from './ArticleCard';

describe('ArticleCard', () => {
  const [article] = mockArticles;

  it('should render the article title', () => {
    render(<ArticleCard article={article} />);

    expect(screen.getByText(article.title)).toBeVisible();
  });

  it('should render the article image', () => {
    render(<ArticleCard article={article} />);

    const articleImage = screen.getByAltText(article.title);
    expect(articleImage).toBeVisible();
  });

  it('should render the article tags', () => {
    render(<ArticleCard article={article} />);

    const tag1 = screen.getByText(article.tags[0]);
    const tag2 = screen.getByText(article.tags[1]);
    expect(tag1).toBeVisible();
    expect(tag2).toBeVisible();
  });

  it('should render the article published date', () => {
    render(<ArticleCard article={article} />);
    const articlePublishedDate = screen.getByText(
      formatDate(article.published_at)
    );
    expect(articlePublishedDate).toBeVisible();
  });

  it('should render the article with correct link', () => {
    const { container } = render(<ArticleCard article={article} />);
    const linkElement = container.querySelector('a');

    expect(linkElement).toHaveAttribute('href', article.url);
  });
});
