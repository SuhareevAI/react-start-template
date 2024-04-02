import type { Meta } from '@storybook/react';
import { CartButton } from './CartButton';

const meta: Meta<typeof CartButton> = {
    title: 'Base/CartButton',
    component: CartButton,
    tags: ['autodocs'],
    argTypes: {
        count : {
            type : "number",
            description : "Кол-во добавленного товара в корзину"
        }
    },
};

export default meta;

export const Primary = {
};