import type { Meta } from '@storybook/react';
import { ProductList } from './ProductList';
import { ProductListProps } from '../types/ProductList';

const meta: Meta<typeof ProductList> = {
  title: 'widgets/ProductList',
  component: ProductList,
  tags: ['autodocs'],
  argTypes: {
    useIntersectionObserver: {
      type: 'boolean',
      description: 'Использовать intersection observer',
    },
  },
};

export default meta;

export const Primary: { args: ProductListProps } = {
  args: {
    useIntersectionObserver: false,
  },
};
