import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import { RangeSlider } from './RangeSlider';
import { RangeSliderProps } from '../../types/RangeSliderTypes';

const Component = (props: RangeSliderProps) => {
  const [value, setValue] = useState<number>(0);

  return (
    <RangeSlider
      {...props}
      value={value}
      onChange={(value: number) => {
        setValue(Math.round(value));
      }}
    />
  );
};

const meta: Meta<typeof RangeSlider> = {
  title: 'shared/RangeSlider',
  component: Component,
  tags: ['autodocs'],
};

export default meta;

export const Primary = {
  args: {
    minValue: 0,
    maxValue: 100,
  },
};
