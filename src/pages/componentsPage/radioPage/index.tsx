import { FC, useState } from 'react';
import Radio, { RadioGroup } from '@/components/Radio';
import ReIcon from '@/components/reIcon';
import { useNavigate } from 'react-router-dom';
const RadioPage: FC = () => {
  const navigate = useNavigate();
  const [checkedFruit, setCheckedFruit] = useState('apple');
  const options = [
    {
      label: 'vue',
      value: 'vue',
    },
    {
      label: 'react',
      value: 'react',
    },
    {
      label: 'angular',
      value: 'angular',
    },
    {
      label: 'solid',
      value: 'solid',
    },
    {
      label: 'svelete',
      value: 'svelete',
    },
  ];
  return (
    <div>
      <ReIcon name="ri-arrow-left-line" size={24} color="#333" onClick={() => navigate(-1)} />
      <h2 className="text-lg">Radio</h2>
      <div className="mb-6 rounded-sm py-4">
        <div className="mb-4">
          <p className="mb-2">type=checked</p>
          <Radio type="checked" checked={checkedFruit === 'apple'} onChange={() => setCheckedFruit('apple')}>
            apple
          </Radio>
          <Radio
            type="checked"
            checked={checkedFruit === 'banana'}
            className="ml-2"
            onChange={() => setCheckedFruit('banana')}>
            banana
          </Radio>
          <Radio type="checked" checked disabled className="ml-2">
            bbq
          </Radio>
        </div>
        <div className="mb-4">
          <p className="mb-2">type=circle</p>
          <Radio type="circle" checked={checkedFruit === 'pear'} onChange={() => setCheckedFruit('pear')}>
            pear
          </Radio>
          <Radio
            type="circle"
            checked={checkedFruit === 'watermelon'}
            className="ml-2"
            onChange={() => setCheckedFruit('watermelon')}>
            watermelon
          </Radio>
        </div>
        <div className="mb-4">
          <p className="mb-2">RadioGroup direction=horizontal</p>
          <RadioGroup
            defaultKey="react"
            options={options}
            onChange={(item) => {
              console.log(item);
            }}
          />
        </div>
        <div className="mb-4">
          <p className="mb-2">RadioGroup direction=vertical</p>
          <RadioGroup
            direction="vertical"
            defaultKey="vue"
            options={options}
            onChange={(item) => {
              console.log(item);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RadioPage;
