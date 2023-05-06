import { FC, useEffect, useState } from 'react';
import ReIcon from '../reIcon';
import classNames from 'classnames';
import './style/index.scss';

interface Option {
  label: string;
  value: string | number;
}
interface RadioProps {
  type?: 'checked' | 'circle';
  checked?: boolean;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

interface RadioGroupProps {
  type?: 'checked' | 'circle';
  direction?: 'horizontal' | 'vertical';
  defaultKey?: string | number;
  options: Option[];
  className?: string;
  onChange?: (item: Option, checked: boolean) => void;
}
const Radio: FC<RadioProps> = (props) => {
  const { type = 'checked', checked, disabled, className, children } = props;
  const [checkedVal, setCheckedVal] = useState(false);
  const toggleChecked = () => {
    if (disabled) return;
    setCheckedVal(!checkedVal);
    props.onChange?.(!checkedVal);
  };

  useEffect(() => {
    setCheckedVal(!!checked);
  }, [checked]);
  return (
    <div className={classNames('r-radio', className, { checked: checkedVal, disabled })} onClick={toggleChecked}>
      {type === 'circle' ? (
        <ReIcon name={checkedVal ? 'ri-radio-button-fill' : 'ri-checkbox-blank-circle-line'} size="18px" />
      ) : (
        <ReIcon name={checkedVal ? 'ri-checkbox-circle-fill' : 'ri-checkbox-blank-circle-line'} size="16px" />
      )}
      <div className={classNames('r-radio__content')}>{children}</div>
    </div>
  );
};

export const RadioGroup: FC<RadioGroupProps> = (props) => {
  const { defaultKey, type, options, direction = 'horizontal', className, onChange } = props;
  const [activeVal, setActiveVal] = useState<number | string>();
  const radioChangeHandler = (item: Option, checked: boolean) => {
    setActiveVal(item.value);
    onChange?.(item, checked);
  };

  useEffect(() => {
    setActiveVal(defaultKey);
  }, [defaultKey]);

  return (
    <div className={classNames('r-radio-group', direction, className)}>
      {options.map((item) => (
        <Radio
          key={item.value}
          type={type}
          checked={item.value === activeVal}
          onChange={(checked) => radioChangeHandler(item, checked)}>
          {item.label}
        </Radio>
      ))}
    </div>
  );
};

export default Radio;
