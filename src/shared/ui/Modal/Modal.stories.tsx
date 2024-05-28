import type { Meta } from '@storybook/react';
import { ModalBase, ModalBaseProps } from './ModalBase';

const meta: Meta<typeof ModalBase> = {
  title: 'shared/Modal',
  component: ModalBase,
  tags: ['autodocs'],
  argTypes: {
    header: {
      type: 'string',
      description: 'Заголовок модального окна',
    },
    children: {
      description: 'Дочерний элемент модального окна',
    },
    visible: {
      type: 'boolean',
      description: 'Видимость модального окна',
    },
    onClose: {
      description: 'Функция закрытия модального окна',
    },
  },
};

export default meta;

export const Primary: { args: ModalBaseProps } = {
  args: {
    header: 'Lorem Ipsum',
    children:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
      'printer took a galley of type and scrambled it to make a type specimen book.',
    visible: true,
    onClose: () => undefined,
  },
};
