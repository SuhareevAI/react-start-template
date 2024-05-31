import type { Meta } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { TooltipProps } from '../../types/TooltipTypes';

const meta: Meta<typeof Tooltip> = {
  title: 'shared/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    text: {
      type: 'string',
      description: 'Текст всплывающей подсказки',
    },
    children: {
      description: 'Дочерний элемент',
    },
  },
};

export default meta;

export const Primary: { args: TooltipProps } = {
  args: {
    text: 'Lorem Ipsum',
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
};
