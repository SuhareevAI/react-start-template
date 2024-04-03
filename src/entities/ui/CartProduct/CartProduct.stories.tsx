import type { Meta } from '@storybook/react';
import { CartProduct } from './CartProduct';

const meta: Meta<typeof CartProduct> = {
  title: 'Entities/CartProduct',
  component: CartProduct,
  tags: ['autodocs'],
  argTypes: {
    count: {
      type: 'number',
      description: 'Кол-во добавленного товара в корзину',
    },
  },
};

export default meta;

export const Primary = {
  args: {
    image: 'https://www.podpisnie.ru/upload/resize_cache/iblock/ec5/1263_576_1/l53d55o3h11s8wp9gqti6w2417cmh187.jpg',
    title: 'Лисьи Броды: роман',
    count: 1,
    cost: 1140,
  },
};
