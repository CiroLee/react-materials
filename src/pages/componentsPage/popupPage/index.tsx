import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReIcon from '@/components/reIcon';
import RButton from '@/components/button';
import Popup from '@/components/popup';
const PopupPage: FC = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [placement, setPlacement] = useState<'bottom' | 'top' | 'left' | 'right'>('bottom');
  return (
    <div>
      <ReIcon name="ri-arrow-left-line" size={24} color="#333" onClick={() => navigate(-1)} />
      <h2 className="text-lg my-4">popup</h2>
      <RButton
        type="primary"
        className="mr-2"
        onClick={() => {
          setShow(true);
          setPlacement('bottom');
        }}>
        open at: bottom
      </RButton>
      <RButton
        type="primary"
        className="mr-2"
        onClick={() => {
          setShow(true);
          setPlacement('top');
        }}>
        open at: top
      </RButton>
      <RButton
        type="primary"
        className="mr-2"
        onClick={() => {
          setShow(true);
          setPlacement('left');
        }}>
        open at: left
      </RButton>
      <RButton
        type="primary"
        onClick={() => {
          setShow(true);
          setPlacement('right');
        }}>
        open at: right
      </RButton>
      <Popup maskClosable show={show} cancel={() => setShow(false)} placement={placement}>
        <div className="p-4 bg-white w-full h-full">
          <div className="border-b border-solid border-gray-300">
            <ReIcon name="ri-close-line" size="20px" onClick={() => setShow(false)} />
          </div>
          <div>
            <p>some contents....</p>
            <p>some contents....</p>
            <p>some contents....</p>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default PopupPage;
