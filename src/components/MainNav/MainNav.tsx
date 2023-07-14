'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';

import { HeaderNav } from '@/types';

import { ToggleButton } from './components';
import * as S from './styles';

type MainNavProps = {
  items: HeaderNav;
};

export const MainNav = ({ items }: MainNavProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleToggleMenu = useCallback(() => {
    setIsOpenMenu((prevState) => !prevState);
  }, []);

  return (
    <>
      <S.Nav>
        <S.List>
          {items.mainNav.map((item) => (
            <S.ListItem key={item.title}>
              <Link href={item.href}>{item.title}</Link>
            </S.ListItem>
          ))}
        </S.List>
      </S.Nav>

      <S.Content>
        <ToggleButton
          isOpenMenu={isOpenMenu}
          handleToggleMenu={handleToggleMenu}
        />
      </S.Content>
    </>
  );
};
