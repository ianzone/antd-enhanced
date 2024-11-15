import { Input, type InputProps, type InputRef } from 'antd';
import { AsYouType, type CountryCode, isValidPhoneNumber } from 'libphonenumber-js';
import { forwardRef, useState } from 'react';

type InputFieldProps = Omit<InputProps, 'type' | 'defaultValue' | 'value' | 'status'>;

type InputPhoneProps = InputFieldProps & {
  countryCode: CountryCode;
  defaultValue?: string;
};

export const InputPhone = forwardRef<InputRef, InputPhoneProps>((props, ref) => {
  const { onChange: customOnChange, countryCode, defaultValue, ...rest } = props;
  const [status, setStatus] = useState<'error' | undefined>();
  const [value, setValue] = useState(defaultValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    customOnChange?.(e);
    const value = e.target.value;
    const asYouType = new AsYouType(countryCode);
    const number = asYouType.input(value);
    setValue(number);
    setStatus(isValidPhoneNumber(number, countryCode) ? undefined : 'error');
  };

  return (
    <Input
      {...rest}
      ref={ref}
      type='tel'
      autoComplete='tel-national'
      allowClear
      status={status}
      onChange={onChange}
      value={value}
    />
  );
});
