import { site } from '@/config';
import { render, screen } from '@testing-library/react';

import { Profile } from './Profile'; // Certifique-se de importar o componente corretamente

describe('Profile Component', () => {
  it('renders profile information correctly', () => {
    render(<Profile />);

    const title = screen.getByRole('heading', {
      name: /olá, eu sou o andrew rosário/i
    });
    const subtitle = screen.getByText(site.subtitle);
    const socialMediaList = screen.getByRole('list');
    const profileImage = screen.getByAltText('Imagem de perfil do Andrew');

    expect(title).toBeVisible();
    expect(subtitle).toBeVisible();
    expect(socialMediaList).toBeVisible();

    expect(profileImage).toBeVisible();
    expect(profileImage).toHaveAttribute('title', 'profile image');
    expect(profileImage).toHaveClass('rounded-full');
  });
});
