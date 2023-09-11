import { act, fireEvent, render, screen } from '@testing-library/react';

import { BackToTop } from './BackToTop';

function scroll(firstY: number, secondY: number): void {
  act(() => {
    window.scrollY = firstY;
    window.dispatchEvent(new Event('scroll'));
  });

  act(() => {
    window.scrollY = secondY;
    window.dispatchEvent(new Event('scroll'));
  });
}

describe('BackToTop', () => {
  beforeEach(() => jest.resetModules());

  it('should render back to top button when the user scrolls up', () => {
    render(<BackToTop />);

    scroll(200, 100);

    const backButton = screen.getByLabelText('Voltar ao topo');
    expect(backButton).toBeInTheDocument();
  });

  it('should call scrollTo function when clicking the button', () => {
    const scrollToMock = jest.fn();
    window.scrollTo = scrollToMock;

    render(<BackToTop />);

    scroll(200, 100);

    const backButton = screen.getByLabelText('Voltar ao topo');

    fireEvent.click(backButton);

    expect(scrollToMock).toHaveBeenCalledWith(0, 0);
  });

  it('should not render back to top button when the user scrolls down', () => {
    render(<BackToTop />);

    scroll(100, 200);

    const backButton = screen.queryByLabelText('Voltar ao topo');
    expect(backButton).not.toBeInTheDocument();
  });
});
