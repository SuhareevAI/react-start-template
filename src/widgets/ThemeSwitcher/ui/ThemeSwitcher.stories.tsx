import type { Meta } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
  argTypes: {
    width: {
      type: 'number',
      description: 'Ширина',
    },
    height: {
      type: 'number',
      description: 'Высота',
    },
  },
};

export default meta;

export const Primary = {
  args: {
    width: 30,
    height: 30,
  },
};
