import React from 'react';
import { HomeOutlined, SettingOutlined, GlobalOutlined, DollarOutlined, MessageOutlined, CustomerServiceOutlined } from '@ant-design/icons';


export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <HomeOutlined />,
    cName: 'nav-text'
  },
  {
    title: 'Network',
    path: '/network',
    icon: <GlobalOutlined />,
    cName: 'nav-text'
  },
  {
    title: 'Withdraw',
    path: '/withdrew',
    icon: <DollarOutlined />,
    cName: 'nav-text'
  },
  {
    title: 'Setting',
    path: '/setting',
    icon: <SettingOutlined />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <CustomerServiceOutlined />,
    cName: 'nav-text'
  }
];