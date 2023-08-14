import { headerConfig, siteConfig } from '@/config';

import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { MainNav } from '@/components/MainNav';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <Logo />

        <MainNav items={headerConfig.mainNav} />

        <Button
          className="hidden md:block"
          href={siteConfig.links.blog}
          target="_blank"
          rel="noreferrer"
        >
          Artigos
        </Button>
      </S.Content>
    </S.Container>
  );
};
