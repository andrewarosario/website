import { act, renderHook } from '@testing-library/react';

import { useBackToTop } from './useBackToTop';

describe('useBackToTop', () => {
  it('should initially return show as false', () => {
    const { result } = renderHook(() => useBackToTop());

    expect(result.current.show).toBe(false);
  });

  it('should set show to true when the user scrolls up', () => {
    const { result } = renderHook(() => useBackToTop());

    act(() => {
      window.scrollY = 200;
      window.dispatchEvent(new Event('scroll'));
    });

    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current.show).toBe(true);
  });

  it('should set show to false when the user scrolls down', () => {
    const { result } = renderHook(() => useBackToTop());

    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
    });

    act(() => {
      window.scrollY = 200;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current.show).toBe(false);
  });

  it('should keep show as false when the user is already at the top', () => {
    const { result } = renderHook(() => useBackToTop());

    act(() => {
      window.scrollY = 200;
      window.dispatchEvent(new Event('scroll'));
    });

    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
    });

    act(() => {
      window.scrollY = 0;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current.show).toBe(false);
  });

  it('should add and remove the scroll event listener', () => {
    jest.spyOn(window, 'addEventListener');
    jest.spyOn(window, 'removeEventListener');
    const { unmount } = renderHook(() => useBackToTop());

    expect(window.addEventListener).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    );

    unmount();

    expect(window.removeEventListener).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    );
  });
});
