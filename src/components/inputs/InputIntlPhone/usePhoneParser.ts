import {
  AsYouType,
  type CountryCode,
  type PhoneNumber,
  getCountryCallingCode,
} from 'libphonenumber-js';
import { useReducer } from 'react';

type PhoneState = { countryCode?: CountryCode; phone?: PhoneNumber; intlE164: string };

function reducer(
  pre: PhoneState,
  param: { countryCode?: CountryCode; typingE164?: string },
): PhoneState {
  const newCountryCode = param.countryCode;
  if (newCountryCode) {
    const nationalNumber = pre.phone?.nationalNumber.toString() || '';
    const newE164 = `+${getCountryCallingCode(newCountryCode) + nationalNumber}`;
    const asYouType = new AsYouType();
    const intlE164 = asYouType.input(newE164);
    return {
      countryCode: newCountryCode,
      phone: asYouType.getNumber(),
      intlE164,
    };
  }
  const typingE164 = param.typingE164;
  if (typingE164) {
    const asYouType = new AsYouType();
    const intlE164 = asYouType.input(typingE164);
    return {
      countryCode: asYouType.getCountry(),
      phone: asYouType.getNumber(),
      intlE164,
    };
  }
  return pre;
}

export function usePhoneParser(props: {
  defaultRegion?: CountryCode;
  defaultValue?: string;
}) {
  return useReducer(
    reducer,
    reducer(
      { intlE164: '+' },
      { countryCode: props.defaultRegion, typingE164: props.defaultValue },
    ),
  );
}
