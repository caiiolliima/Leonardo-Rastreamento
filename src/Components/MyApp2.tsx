import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import {Input} from 'antd';

const { Content, Sider } = Layout;

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `Menu ${key}`,

      children: new Array(1).fill(null).map((_, j) => {
        const subKey = index * 1 + j + 1;
        return {
          key: subKey,
          label: `SubMenus${subKey}`,
        };
      }),
    };
  },
);

const { Search } = Input;

const MyApp: React.FC = () => {
  const {
    token: { colorBgContainer, },
  } = theme.useToken();

  return (
    <Layout className='bg-black h-screen'>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout className=''>
          <Content className='p-[150px] m-0 min-h-96'>
            <Search placeholder="Código de Rastreio" enterButton="Search" size="large" className='border-2 border-black rounded-md text-black'/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MyApp;