import type { InputRef } from 'antd';
import type { CountryCode } from 'libphonenumber-js';
import { forwardRef } from 'react';
import { CountrySelector, type CustomRegion } from './CountrySelector';
import { InputField, type InputFieldProps } from './InputField';
import { InputIntlPhoneProvider } from './InputIntlPhoneContext';
import { SelectorOpener } from './SelectorOpener';

export type InputIntlPhoneProps = InputFieldProps & {
  defaultRegion?: CountryCode;
  defaultValue?: string;
  customRegions?: CustomRegion[];
};

export const InputIntlPhone = forwardRef<InputRef, InputIntlPhoneProps>((props, ref) => {
  const { defaultRegion, defaultValue, customRegions, ...phoneInputFieldProps } = props;
  return (
    <div style={{ position: 'relative' }}>
      <InputIntlPhoneProvider
        defaultRegion={defaultRegion}
        defaultValue={defaultValue}
        customRegions={customRegions}
      >
        <InputField {...phoneInputFieldProps} ref={ref} />
        <SelectorOpener>
          <CountrySelector />
        </SelectorOpener>
      </InputIntlPhoneProvider>
    </div>
  );
});
