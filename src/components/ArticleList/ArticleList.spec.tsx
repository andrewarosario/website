import { site } from '@/config';
import { mockArticles } from '@/mocks';
import { render, screen } from '@testing-library/react';

import { ArticleList } from './ArticleList';

describe('ArticleList', () => {
  it('should render the article list header', () => {
    render(<ArticleList articles={mockArticles} />);
    const heading = screen.getByText('Últimos artigos');
    expect(heading).toBeVisible();
  });

  it('should render the "Ver mais" link', () => {
    render(<ArticleList articles={mockArticles} />);
    const link = screen.getByText('Ver mais');
    expect(link).toBeVisible();
    expect(link).toHaveAttribute('href', site.links.blog);
  });

  it('should render one article card for each article in the list', () => {
    render(<ArticleList articles={mockArticles} />);
    expect(screen.getAllByRole('article')).toHaveLength(mockArticles.length);
  });
});
