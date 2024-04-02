import type { Meta } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'Base/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        header : {
            type : "string",
            description: "Заголовок модального окна"
        },
        children : {
            description: "Дочерний элемент модального окна"
        },
        visible : {
            type : "boolean",
            description: "Видимость модального окна"
        }
    },
};

export default meta;

export const Primary = {
    args: {
        header: "Lorem Ipsum",
        children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
            "printer took a galley of type and scrambled it to make a type specimen book.",
        visible: true
    }
};