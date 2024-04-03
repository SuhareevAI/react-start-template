import type { Meta } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Base/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Дочерний элемент',
    },
  },
};

export default meta;

export const Primary = {};
