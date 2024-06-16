import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Flex, Layout, Menu, Select, Space, Typography } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import s from './AsideMenu.module.scss';
import classNames from 'classnames/bind';
import { ReactComponent as Logo } from '@icons/logo.svg';
import LogoCollapsed from '/logoCollapsed.jpeg';
import { PassengerUrlEnum } from '@src/App.types';
import { UserRole } from '@src/store/store.types';
import { store } from '@src/store/store';
import { observer } from 'mobx-react-lite';
import { getMenuItems } from './menuItems';

const { Sider } = Layout;
const cn = classNames.bind(s);

interface AsideMenuProps {
  defaultPageUrl: PassengerUrlEnum;
}

const AsideMenu = observer(({ defaultPageUrl }: AsideMenuProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  const currentPage = pathname === '/' ? defaultPageUrl : pathname;

  return (
    <Sider
      width={250}
      theme="light"
      className={cn('nav-panel')}
      trigger={null}
      collapsible
      collapsed={collapsed}>
      {collapsed ? (
        <img
          className={cn('nav-panel__logo-collapsed')}
          src={LogoCollapsed}
          alt="logo"
        />
      ) : (
        <Logo className={cn('nav-panel__logo')} />
      )}

      <Flex vertical style={{ width: 200, margin: '0 auto', marginBottom: 25 }}>
        <Typography.Text style={{ maxWidth: 150, marginBottom: 10 }}>
          Выберите роль для тестирования:
        </Typography.Text>
        <Select
          value={store.userRole}
          onChange={(e) => {
            store.changeRole(e);
            const menuList = getMenuItems();
            if (menuList) {
              navigate(menuList[0].key);
            }
          }}
          placeholder="Выберите роль"
          options={[
            { value: UserRole.employee, label: 'Сотрудник' },
            { value: UserRole.operator, label: 'Оператор' },
            { value: UserRole.specialist, label: 'Специалист' },
            { value: UserRole.administrator, label: 'Администратор' },
          ]}
        />
      </Flex>

      <Menu
        className={cn('nav-panel__menu')}
        selectedKeys={[currentPage]}
        items={getMenuItems()}
        onClick={(e) => navigate(e.key)}
      />
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        className={cn('nav-panel__collapse-button')}
        style={{
          right: collapsed ? '30%' : '50%',
        }}
      />
    </Sider>
  );
});

export default AsideMenu;
