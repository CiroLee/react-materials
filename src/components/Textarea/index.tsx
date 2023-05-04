import { FC, useState, useEffect } from 'react';
import Whether from '../Whether';
import ReIcon from '../reIcon';
import classNames from 'classnames';
import './style/index.scss';
interface TextAreaProps {
  value?: string;
  placeholder?: string;
  className?: string;
  maxLength?: number;
  clearable?: boolean;
  showCount?: boolean;
  rows?: number;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onEnter?: () => void;
}

const Textarea: FC<TextAreaProps> = (props) => {
  const { value = '', placeholder, className, maxLength, clearable, rows = 5, showCount, disabled, onChange } = props;
  const [inputVal, setInputVal] = useState('');
  const [countStr, setCountStr] = useState('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (maxLength && e.target.value.length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }
    setInputVal(e.target.value);
    onChange?.(e.target.value);
    showCount && calcCountStr();
  };
  const clearInput = () => {
    setInputVal('');
    onChange?.('');
    showCount && calcCountStr('0');
  };

  const calcCountStr = (length?: string) => {
    if (maxLength) {
      setCountStr(`${length || inputVal.length}/${maxLength}`);
    } else {
      setCountStr(`${length || inputVal.length}`);
    }
  };

  useEffect(() => {
    setInputVal(String(value));
    if (showCount) {
      const lengthStr = String(value).length;
      calcCountStr(lengthStr.toString());
    }
  }, [value]);

  return (
    <div className={classNames('cy-textarea', className, { disabled })}>
      <textarea value={inputVal} rows={rows} disabled={disabled} placeholder={placeholder} onChange={onChangeHandler} />
      <Whether condition={!!clearable && !!inputVal.length}>
        <ReIcon name="ri-close-circle-fill" color="#a8a8a8" className="cy-textarea__clear" onClick={clearInput} />
      </Whether>
      <Whether condition={!!showCount}>
        <div className={classNames({ 'cy-textarea__count': showCount })}>{countStr}</div>
      </Whether>
    </div>
  );
};

export default Textarea;
