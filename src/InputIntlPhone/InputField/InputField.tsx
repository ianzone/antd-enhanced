import { Input, type InputProps, type InputRef } from 'antd';
import { forwardRef, useEffect, useState } from 'react';
import { useInputIntlPhoneContext } from '../InputIntlPhoneContext';
import { FlagAddon } from './FlagAddon';

export type InputFieldProps = Omit<
  InputProps,
  'type' | 'addonBefore' | 'defaultValue' | 'value' | 'status'
>;

export const InputField = forwardRef<InputRef, InputFieldProps>((props, ref) => {
  const { onChange: customOnChange, onClear: customOnClear, ...rest } = props;
  const { phone: state, setPhone } = useInputIntlPhoneContext();
  const { phone, intlE164 } = state;
  const [status, setStatus] = useState<'error' | undefined>();

  useEffect(() => {
    setStatus(phone?.isValid() ? undefined : 'error');
  }, [phone]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    customOnChange?.(e);
    const value = e.target.value;
    setPhone({
      typingE164: value.length === 0 ? '+' : value,
    });
  };

  const onClear = () => {
    customOnClear?.();
    setPhone({
      typingE164: '+',
    });
  };
  return (
    <Input
      {...rest}
      ref={ref}
      type='tel'
      autoComplete='tel'
      allowClear
      addonBefore={<FlagAddon />}
      status={status}
      onChange={onChange}
      onClear={onClear}
      value={intlE164}
    />
  );
});
