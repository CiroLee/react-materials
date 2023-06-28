import { FC } from 'react';
import { useState } from 'react';
import ReIcon from '@/components/reIcon';
import Show from '@/components/Show';
import { RadioGroup } from '@/components/Radio';

import { useNavigate } from 'react-router-dom';
const LogicPage: FC = () => {
  const navigate = useNavigate();
  const [fruit, setFruit] = useState('apple');
  const options = [
    {
      label: 'apple',
      value: 'apple',
    },
    {
      label: 'pear',
      value: 'pear',
    },
  ];
  return (
    <div>
      <ReIcon name="ri-arrow-left-line" size={24} color="#333" onClick={() => navigate(-1)} />
      <h2 className="text-lg my-4">逻辑组件</h2>
      <h3 className="text-md my-2">Show组件</h3>
      <div>
        <RadioGroup options={options} defaultKey={fruit} onChange={(item) => setFruit(item.value as string)} />
        <Show
          if={fruit === 'apple'}
          else={
            <>
              <div>我喜欢吃冰镇鸭梨</div>
            </>
          }>
          我喜欢吃拔丝苹果
        </Show>
      </div>
    </div>
  );
};

export default LogicPage;
