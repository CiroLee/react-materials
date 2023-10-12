import { type FC, useEffect, useRef } from 'react';
import cn from 'classnames';
import './index.scss';

interface IndicatorProps {
  activeIndex?: number;
  num: number;
  style?: React.CSSProperties;
  className?: string;
}
const SIZE = 8; // dot size
const GAP = 4; // dot gap
const MAX = 5;
const Indicator: FC<IndicatorProps> = (props) => {
  const { num, activeIndex, style = {}, className } = props;
  const list = new Array(num).fill(0);
  const indParent = useRef<HTMLDivElement | null>(null);

  const calculateTransX = (index: number) => {
    if (index < 3) {
      return `translateX(0)`;
    } else if (index > 2 && index <= list.length - 3) {
      return `translateX(${-(index - 2) * (SIZE + GAP)}px)`;
    }

    return `translateX()`;
  };

  const calculateSibActive = () => {
    if (!indParent.current) return;

    const activeOne = indParent.current.getElementsByClassName('indicator-active')[0];
    // 剔除当前激活项目，其他reset
    Array.from(indParent.current?.childNodes || [])
      .filter((item) => !(item as HTMLElement).classList.contains('indicator-active'))
      .forEach((item) => {
        const _item = item as HTMLDivElement;
        _item.classList.remove('indicator-active-size');
      });
    if (!activeOne) return;
    const index = Number(activeOne.getAttribute('data-index'));
    const pre = indParent.current?.childNodes[index - 1] as HTMLDivElement;
    pre && pre.classList.add('indicator-active-size');
    // special
    if (index === 0) {
      const third = indParent.current?.childNodes[index + 2] as HTMLDivElement;
      third && third.classList.add('indicator-active-size');
    }
    if (index === list.length - 1) {
      const prevTwo = indParent.current?.childNodes[index - 2] as HTMLDivElement;
      prevTwo && prevTwo.classList.add('indicator-active-size');
    }
  };

  useEffect(() => {
    calculateSibActive();
  }, [activeIndex]);
  return (
    <div className={cn('r-indicator', className)} style={{ ...style, width: `${(SIZE + GAP) * MAX + 1}px` }}>
      <div ref={indParent} className="r-indicator__list" style={{ transform: calculateTransX(activeIndex || 0) }}>
        {list.map((_, index) => (
          <div
            data-index={index}
            className={cn('r-indicator__item', { 'indicator-active': activeIndex === index })}
            key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default Indicator;
