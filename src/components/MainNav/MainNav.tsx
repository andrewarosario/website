'use client';

import Link from 'next/link';

import { NavItem } from '@/types';

import { List, ListItem } from '@/components/List';

import { ToggleButton } from './components';
import { useMainNav } from './hooks';
import * as S from './styles';

type MainNavProps = {
  items: NavItem[];
};

export const MainNav = ({ items }: MainNavProps) => {
  const { isOpenMenu, handleToggleMenu } = useMainNav();

  return (
    <>
      <S.Nav>
        <List>
          {items.map((item) => (
            <ListItem key={item.title}>
              <Link href={item.href}>{item.title}</Link>
            </ListItem>
          ))}
        </List>
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
              {items.map((item) => (
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
