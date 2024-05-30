import React, { FC, useContext, useEffect, useRef } from 'react';
import s from './RangeSlider.module.sass';
import { RangeSliderProps } from '../../types/RangeSliderTypes';
import ThemeContext from '../../../app/lib/ThemeContext';

export const RangeSlider: FC<RangeSliderProps> = ({ value, minValue, maxValue, onChange }) => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);

  const setValue = () => {
    if (value < minValue) {
      value = minValue;
    }

    if (value > maxValue) {
      value = maxValue;
    }

    return ((value - minValue) / (maxValue - minValue)) * 100 + '%';
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(Number(event.target.value));
  };

  const handleMouseDown = () => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    setRunnerValue(event.clientX);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setRunnerValue(event.clientX);
  };

  const handleTouchStart = () => {
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  };

  const handleTouchMove = (event: TouchEvent) => {
    setRunnerValue(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  };

  const setRunnerValue = (xPoint: number) => {
    const boundingClientRect = ref.current.getBoundingClientRect();
    const left = boundingClientRect.left;
    const width = boundingClientRect.width;
    const currentValue = xPoint - left;
    onChange((currentValue / width) * (maxValue - minValue) + minValue);
  };

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width < 500) {
        ref.current.classList.add(s.small);
      } else {
        ref.current.classList.remove(s.small);
      }
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  });

  return (
    <>
      <div
        className={[s.RangeSlider, s[theme]].join(' ')}
        ref={ref}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className={[s.RangeSlider__runner, s[theme]].join(' ')} style={{ left: setValue() }}></div>
      </div>
      <input className={s.RangeSlider__input} type="number" value={value} onChange={handleChange} />
    </>
  );
};
