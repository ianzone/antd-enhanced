import { CountryFlag } from 'src/components';
import { useInputIntlPhoneContext } from '../InputIntlPhoneContext';

export function FlagAddon() {
  const { phone: state, setIsCountrySelectorOpen, customRegions } = useInputIntlPhoneContext();

  const onClick = () => {
    setIsCountrySelectorOpen((pre) => !pre);
  };

  return (
    <div style={{ width: 25, cursor: 'pointer' }} onClick={onClick} onKeyUp={onClick}>
      <CountryFlag
        countryCode={state.countryCode}
        emoji={customRegions?.find((region) => state.countryCode === region.value)?.emoji}
      />
    </div>
  );
}
