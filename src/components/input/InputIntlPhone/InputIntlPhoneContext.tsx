import type { CountryCode, PhoneNumber } from 'libphonenumber-js';
import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import type { CustomRegion } from './CountrySelector';
import { usePhoneParser } from './usePhoneParser';

type PhoneState = { countryCode?: CountryCode; phone?: PhoneNumber; intlE164: string };

const InputIntlPhoneContext = createContext<{
  phone: PhoneState;
  setPhone: Dispatch<{ countryCode?: CountryCode; typingE164?: string }>;
  customRegions?: CustomRegion[];
  isCountrySelectorOpen: boolean;
  setIsCountrySelectorOpen: Dispatch<SetStateAction<boolean>>;
} | null>(null);

export function InputIntlPhoneProvider({
  defaultRegion,
  defaultValue,
  customRegions,
  children,
}: {
  defaultRegion?: CountryCode;
  defaultValue?: string;
  customRegions?: CustomRegion[];
  children: ReactNode;
}) {
  const [isCountrySelectorOpen, setIsCountrySelectorOpen] = useState(false);
  const [phone, setPhone] = usePhoneParser({ defaultRegion, defaultValue });

  const value = useMemo(
    () => ({
      phone,
      setPhone,
      customRegions,
      isCountrySelectorOpen,
      setIsCountrySelectorOpen,
    }),
    [phone, setPhone, customRegions, isCountrySelectorOpen],
  );

  return <InputIntlPhoneContext value={value}>{children}</InputIntlPhoneContext>;
}

export function useInputIntlPhoneContext() {
  const context = useContext(InputIntlPhoneContext);
  if (!context) {
    throw new Error('useInputIntlPhoneContext must be used within <InputIntlPhoneProvider>');
  }
  return context;
}
