import { render, screen } from '@testing-library/react';

import { VideoEmbed, VideoEmbedProps } from './VideoEmbed';

describe('VideoEmbed', () => {
  it('should render iframe element with correct src and title', () => {
    const src = 'https://www.example.com/embedded-video';
    const title = 'Embedded Video';

    render(<VideoEmbed src={src} title={title} />);

    const iframe = screen.getByTitle(title);
    expect(iframe).toBeVisible();
    expect(iframe).toHaveAttribute('src', src);
  });

  it('should render additional attributes on iframe element', () => {
    const src = 'https://www.example.com/embedded-video';
    const title = 'Embedded Video';
    const additionalProps: VideoEmbedProps = {
      width: '640',
      height: '360'
    };

    render(<VideoEmbed src={src} title={title} {...additionalProps} />);

    const iframeElement = screen.getByTitle(title);
    expect(iframeElement).toHaveAttribute('width', additionalProps.width);
    expect(iframeElement).toHaveAttribute('height', additionalProps.height);
  });
});
