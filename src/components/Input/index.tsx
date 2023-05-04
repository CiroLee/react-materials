import { FC, useState, useEffect, useRef } from 'react';
import Whether from '../Whether';
import ReIcon from '../reIcon';
import classNames from 'classnames';
import './style/index.scss';
import { log } from 'console';
export interface InputProps {
  type?: 'text' | 'password';
  value?: string | number;
  placeholder?: string;
  className?: string;
  maxLength?: number;
  clearable?: boolean;
  showCount?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
}

const Input: FC<InputProps> = (props) => {
  const {
    type = 'text',
    value = '',
    disabled,
    placeholder,
    className,
    maxLength,
    clearable,
    showCount,
    onChange,
    onBlur,
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState('');
  const [focus, setFocus] = useState(false);
  const [countStr, setCountStr] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength && e.target.value.length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }
    setInputVal(e.target.value);
    onChange?.(e.target.value);
    showCount && calcCountStr();
  };

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocus(false);
    onBlur?.(e.target.value);
  };

  const clearInput = () => {
    setInputVal('');
    onChange?.('');
    showCount && calcCountStr('0');
  };
  const calcCountStr = (length?: string) => {
    if (maxLength) {
      setCountStr(`${length || String(inputVal).length}/${maxLength}`);
    } else {
      setCountStr(`${length || String(inputVal).length}`);
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
    <div className={classNames('r-input', className, { focus, disabled })}>
      <input
        ref={inputRef}
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        value={inputVal}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
      />
      <div className={classNames('r-input__trail', { 'r-input__count': showCount })} data-count={countStr}>
        <Whether condition={!!clearable && !!String(inputVal).length}>
          <ReIcon name="ri-close-circle-fill" className="r-input__btn" onClick={clearInput} />
        </Whether>
        <Whether condition={type === 'password'}>
          <ReIcon
            name={showPassword ? 'ri-eye-line' : 'ri-eye-close-line'}
            className="r-input__btn"
            style={{ marginRight: 0 }}
            onClick={() => setShowPassword(!showPassword)}
          />
        </Whether>
      </div>
    </div>
  );
};

export default Input;
