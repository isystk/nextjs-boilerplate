import { useState } from 'react';
import DropDown from './index';
import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Atoms/DropDown',
  component: DropDown,
  tags: ['autodocs'],
} as Meta<typeof DropDown>;

export const Default: StoryFn = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const items = [
    { text: '選択肢1', onClick: () => setSelected('選択肢1') },
    { text: '選択肢2', onClick: () => setSelected('選択肢2') },
    { text: '選択肢3', onClick: () => setSelected('選択肢3') },
  ];

  return (
    <div style={{ width: '160px' }}>
      <DropDown text="メニューを開く" items={items} />
      {selected && <p>選択された項目: {selected}</p>}
    </div>
  );
};
