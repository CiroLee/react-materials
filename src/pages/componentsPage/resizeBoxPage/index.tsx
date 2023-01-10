import { FC } from 'react';
import ResizableBox from '@/components/resizableBox';
import { useNavigate } from 'react-router-dom';
import ReIcon from '@/components/reIcon';

const ResizeBoxPage: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ReIcon name="ri-arrow-left-line" size={24} color="#333" onClick={() => navigate(-1)} />
      <h2 className="text-lg">可调整大小盒子</h2>
      <div className="mt-4 w-full bg-red-200 overflow-hidden flex flex-col" style={{ height: '600px' }}>
        <ResizableBox className="bg-red-600" width="100%" height="64px" resize="vertical-bottom">
          <h1 className="flex h-full justify-center items-center">header</h1>
        </ResizableBox>
        <div className="flex flex-1 overflow-hidden relative w-full">
          <ResizableBox className="bg-purple-700" width="100px" height="100%" resize="horizontal-right">
            <div className="flex h-full justify-center items-center">aside</div>
          </ResizableBox>
          <main className="bg-orange-300  flex-1 flex justify-center items-center">main</main>
          <ResizableBox className="bg-pink-400 " width="100px" height="100%" resize="horizontal-left">
            <div className="flex h-full justify-center items-center">aside</div>
          </ResizableBox>
        </div>
        <ResizableBox width="100%" height="66px" resize="vertical-top">
          <div className="flex justify-center items-center h-full">footer</div>
        </ResizableBox>
      </div>
    </div>
  );
};

export default ResizeBoxPage;
