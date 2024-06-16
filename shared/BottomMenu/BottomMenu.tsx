import React, { useEffect, useRef, useState } from 'react';
import s from './BottomMenu.module.scss';
import classNames from 'classnames/bind';
import { getMenuItemsMOB } from './menuItems';
import { useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { store } from '@src/store/store';
const cn = classNames.bind(s);

type MenuItemType = ReturnType<typeof getMenuItemsMOB> extends (infer U)[]
  ? U
  : never;

const MenuButton = ({ item }: { item: MenuItemType }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(item.key);
  };

  return (
    <div
      onClick={handleClick}
      className={cn('menu__button', { active: pathname === item.key })}>
      {React.cloneElement(item.icon, { style: { fontSize: 15 } })}
      <span className={cn('menu__button-text')}>{item.label}</span>
    </div>
  );
};

const BottomMenu = observer(() => {
  const menuItems = getMenuItemsMOB();

  return (
    <div className={cn('container')}>
      <div className={cn('menu')}>
        {menuItems.map((item) => (
          <>{item.icon && <MenuButton item={item} />}</>
        ))}
      </div>
    </div>
  );
});

export default BottomMenu;
