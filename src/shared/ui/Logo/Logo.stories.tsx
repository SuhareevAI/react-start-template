import type { Meta } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
    title: 'Base/Logo',
    component: Logo,
    tags: ['autodocs'],
    argTypes: {
        text : {
            type : "string",
            description : "Текст отображаемый в разделе логотипа"
        },
        width : {
            type : "number",
            description : "Ширина логотипа"
        },
        height : {
            type : "number",
            description : "Высота логотипа"
        }
    },
};

export default meta;

export const Primary = {
    args: {
        text: "Company name",
        width: 35,
        height: 35
    },
};