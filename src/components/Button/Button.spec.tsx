import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('should render correctly', () => {
    render(<Button>My button</Button>);

    const button = screen.getByRole('button', { name: /my button/i });
    expect(button).toBeVisible();
  });

  it('should call callback function on button click', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>My button</Button>);

    const button = screen.getByRole('button', { name: /my button/i });
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });

  it('should pass props to anchor element', () => {
    render(<Button href="/page">My button</Button>);

    const anchor = screen.getByRole('button', { name: /my button/i });
    expect(anchor).toHaveAttribute('href', '/page');
  });
});
