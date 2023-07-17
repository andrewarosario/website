'use client';

import Link from 'next/link';

import { HeaderNav } from '@/types';

import { ToggleButton } from './components';
import { useMainNav } from './hooks';
import * as S from './styles';

type MainNavProps = {
  items: HeaderNav;
};

export const MainNav = ({ items }: MainNavProps) => {
  const { isOpenMenu, handleToggleMenu } = useMainNav();

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

      {isOpenMenu && (
        <S.ContainerMobile>
          <S.NavMobile>
            <S.ListMobile>
              {items.mainNav.map((item) => (
                <S.ListItemMobile key={item.title}>
                  <Link href={item.href}>{item.title}</Link>
                </S.ListItemMobile>
              ))}
            </S.ListMobile>
          </S.NavMobile>
        </S.ContainerMobile>
      )}
    </>
  );
};
