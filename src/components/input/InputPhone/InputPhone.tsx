import { Input, type InputProps } from 'antd';
import { AsYouType, type CountryCode, isValidPhoneNumber } from 'libphonenumber-js';
import { useState } from 'react';

type InputFieldProps = Omit<InputProps, 'type' | 'defaultValue' | 'value' | 'status'>;

type InputPhoneProps = InputFieldProps & {
  countryCode: CountryCode;
  defaultValue?: string;
};

export function InputPhone(props: InputPhoneProps) {
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
      type='tel'
      autoComplete='tel-national'
      allowClear
      status={status}
      onChange={onChange}
      value={value}
    />
  );
}
