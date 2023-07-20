import React from 'react';

export type NavItem = {
  title: string;
  href: string;
  icon?: React.ReactNode;
};

export type HeaderNav = {
  mainNav: NavItem[];
};
