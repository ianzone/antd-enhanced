import { CountryFlag } from '../CountrySelector';
import { useInputIntlPhoneContext } from '../InputIntlPhoneContext';

export function FlagAddon() {
  const { phone: state, setIsCountrySelectorOpen } = useInputIntlPhoneContext();

  const onClick = () => {
    setIsCountrySelectorOpen((pre) => !pre);
  };

  return (
    <div style={{ width: 25, cursor: 'pointer' }} onClick={onClick} onKeyUp={onClick}>
      <CountryFlag countryCode={state.countryCode} />
    </div>
  );
}
