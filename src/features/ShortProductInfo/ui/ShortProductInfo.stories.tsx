import type { Meta } from '@storybook/react';
import { ShortProductInfo, ShortProductInfoProps } from './ShortProductInfo';

const meta: Meta<typeof ShortProductInfo> = {
  title: 'features/ShortProductInfo',
  component: ShortProductInfo,
  tags: ['autodocs'],
  argTypes: {
    cost: {
      type: 'number',
      description: 'Стоимость товара',
    },
    image: {
      type: 'string',
      description: 'Изображение товара',
    },
    title: {
      type: 'string',
      description: 'Наименование товара',
    },
    description: {
      type: 'string',
      description: 'Описание товара',
    },
  },
};

export default meta;

export const Primary: { args: ShortProductInfoProps } = {
  args: {
    cost: 1140,
    image: 'https://www.podpisnie.ru/upload/resize_cache/iblock/ec5/1263_576_1/l53d55o3h11s8wp9gqti6w2417cmh187.jpg',
    title: 'Лисьи Броды: роман',
    description:
      '«Лисьи Броды» — новый роман Анны Старобинец, приключенческий мистический триллер про затерянное на русско-маньчжурской границе проклятое место, ' +
      'в котором китайские лисы-оборотни встречаются с советскими офицерами, а беглые зэки — с даосом, владеющим тайной бессмертия. ' +
      'Захватывающее и страшное путешествие в сердце тьмы, где каждый находит то, что он заслужил: кто-то — любовь, иные — смерть,' +
      ' и абсолютно все — свою единственно верную, предначертанную то ли богом, то ли чертом судьбу.',
  },
};
