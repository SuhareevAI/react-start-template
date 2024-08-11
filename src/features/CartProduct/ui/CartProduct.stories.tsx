import type { Meta } from '@storybook/react';
import { CartProduct, CartProductProps } from './CartProduct';

const meta: Meta<typeof CartProduct> = {
  title: 'features/CartProduct',
  component: CartProduct,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Primary: { args: CartProductProps } = {
  args: {
    id: 'id',
    image: 'https://www.podpisnie.ru/upload/resize_cache/iblock/ec5/1263_576_1/l53d55o3h11s8wp9gqti6w2417cmh187.jpg',
    title: 'Лисьи Броды: роман',
    cost: 1140,
  },
};
