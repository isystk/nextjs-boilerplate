import React from 'react';
import SideMenu from './index';
import useAppRoot from '@/states/useAppRoot';
import { JSX } from 'react';

const meta = {
  title: 'Components/Organisms/SideMenu',
  component: SideMenu,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
export default meta;

export const Default: { render: () => JSX.Element } = {
  render: () => {
    const Component = () => {
      const { state } = useAppRoot();
      if (!state) return <></>;
      return (
        <SideMenu
          text="メニュー"
          items={[
            { text: 'ホーム', onClick: () => console.log('ホーム') },
            { text: 'プロフィール', onClick: () => console.log('プロフィール') },
          ]}
        />
      );
    };
    return <Component />;
  },
};
