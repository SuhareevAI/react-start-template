import React, { FC, useLayoutEffect, useRef, useState } from 'react';
import { TooltipPosition, TooltipProps } from '../../types/TooltipTypes';
import s from './Tooltip.module.sass';
import { createPortal } from 'react-dom';

export const Tooltip: FC<TooltipProps> = ({ text, children }) => {
  const ref = useRef(null);
  const tooltipRef = useRef(null);
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  let isHideTooltip = true;

  const handleMouseOver = () => {
    isHideTooltip = false;
    setVisible(true);
  };

  const handleMouseOut = () => {
    setTimeout(() => {
      isHideTooltip && setVisible(false);
      isHideTooltip = true;
    }, 1000);
  };

  useLayoutEffect(() => {
    const tooltipHeight = tooltipRef.current.getBoundingClientRect().height;
    const tooltipWidth = tooltipRef.current.getBoundingClientRect().width;
    const { width, top, bottom, x } = ref.current.getBoundingClientRect();
    const xPosition = x + width / 2 - tooltipWidth / 2;

    if (top - tooltipHeight < 0) {
      setTooltipPosition({ x: xPosition, y: bottom });
    } else {
      setTooltipPosition({ x: xPosition, y: top - tooltipHeight });
    }
  }, [tooltipPosition.x, tooltipPosition.y]);

  return (
    <>
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} ref={ref} className={s.Tooltip__element}>
        {children}
      </div>
      {createPortal(
        <div
          ref={tooltipRef}
          style={{ top: `${tooltipPosition.y}px`, left: `${tooltipPosition.x}px` }}
          className={[s.Tooltip__label, !visible ? s.hide : ''].join(' ')}
        >
          {text}
        </div>,
        document.body
      )}
    </>
  );
};
