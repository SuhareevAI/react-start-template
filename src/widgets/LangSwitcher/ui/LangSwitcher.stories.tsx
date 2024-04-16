import React from 'react';
import type { Meta } from '@storybook/react';
import { LangSwitcher } from './LangSwitcher';
import { CartButton } from '../../../shared/ui/CartButton/CartButton';

const meta: Meta<typeof LangSwitcher> = {
  title: 'widgets/LangSwitcher',
  component: LangSwitcher,
  tags: ['autodocs'],
  subcomponents: { CartButton },
};

export default meta;

export const Primary = {
  render: () => (
    <>
      <CartButton count={0} />
      <LangSwitcher></LangSwitcher>
    </>
  ),
};
