import type { CountryCode } from 'libphonenumber-js';
import { CountrySelector, type CustomRegion } from './CountrySelector';
import { InputField, type InputFieldProps } from './InputField';
import { InputIntlPhoneProvider } from './InputIntlPhoneContext';
import { SelectorOpener } from './SelectorOpener';

export type InputIntlPhoneProps = InputFieldProps & {
  defaultRegion?: CountryCode;
  defaultValue?: string;
  customRegions?: CustomRegion[];
};

export function InputIntlPhone(props: InputIntlPhoneProps) {
  const { defaultRegion, defaultValue, customRegions, ...phoneInputFieldProps } = props;
  return (
    <div style={{ position: 'relative' }}>
      <InputIntlPhoneProvider
        defaultRegion={defaultRegion}
        defaultValue={defaultValue}
        customRegions={customRegions}
      >
        <InputField {...phoneInputFieldProps} />
        <SelectorOpener>
          <CountrySelector />
        </SelectorOpener>
      </InputIntlPhoneProvider>
    </div>
  );
}
