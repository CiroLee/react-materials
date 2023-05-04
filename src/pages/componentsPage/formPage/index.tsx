import { FC } from 'react';
import ReIcon from '@/components/reIcon';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import { useNavigate } from 'react-router-dom';

const FormPage: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ReIcon name="ri-arrow-left-line" size={24} color="#333" onClick={() => navigate(-1)} />
      <h2 className="text-lg my-4">Form</h2>
      <div className="mb-6 rounded-sm p-4 border border-solid border-gray-200">
        <h2 className="text-lg">Input</h2>
        <div className="mt-4">
          <div className="mb-4">
            <p className="mb-2 text-md">基本用法</p>
            <Input placeholder="input something" />
          </div>
          <div className="mb-4">
            <p className="mb-2 text-md">disabled</p>
            <Input disabled placeholder="input something" />
          </div>
          <div className="mb-4">
            <p className="mb-2 text-md">允许清除</p>
            <Input clearable placeholder="input something" />
          </div>
          <div className="mb-4">
            <p className="mb-2 text-md">显示count</p>
            <Input clearable maxLength={20} showCount placeholder="input something" />
          </div>
        </div>
      </div>
      <div className="mb-6 rounded-sm p-4 border border-solid border-gray-200">
        <h2 className="text-lg">Textarea</h2>
        <div className="mt-4">
          <div className="mb-4">
            <p className="mb-2 text-md">基本用法</p>
            <Textarea placeholder="input something" />
          </div>
          <div className="mb-4">
            <p className="mb-2 text-md">disabled</p>
            <Textarea disabled placeholder="input something" />
          </div>
          <div className="mb-4">
            <p className="mb-2 text-md">允许清除</p>
            <Textarea clearable placeholder="input something" />
          </div>
          <div className="mb-4">
            <p className="mb-2 text-md">自定义行数 rows=2</p>
            <Textarea clearable rows={2} placeholder="input something" />
          </div>
          <div className="mb-4">
            <p className="mb-2 text-md">显示count</p>
            <Textarea clearable maxLength={20} showCount placeholder="input something" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
