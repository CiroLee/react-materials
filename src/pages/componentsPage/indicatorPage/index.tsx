import { type FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReIcon from '@/components/reIcon';
import Indicator from '@/components/Indicator';
import RButton from '@/components/button';

const num = 10;
const IndicatorPage: FC = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const changeIndex = (step: number) => {
    const index = activeIndex + step;
    if (index >= num || index < 0) {
      return;
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <>
      <ReIcon name="ri-arrow-left-line" size={24} color="#333" onClick={() => navigate(-1)} />
      <h2 className="text-lg my-4">Indicator</h2>
      <div className="flex items-center">
        <RButton size="small" preffixIcon={<ReIcon name="ri-arrow-left-s-line" />} onClick={() => changeIndex(-1)} />
        <Indicator className="mx-3" num={num} activeIndex={activeIndex} />
        <RButton size="small" preffixIcon={<ReIcon name="ri-arrow-right-s-line" />} onClick={() => changeIndex(1)} />
      </div>
    </>
  );
};

export default IndicatorPage;
