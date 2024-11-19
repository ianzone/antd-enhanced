import { useInputIntlPhoneContext } from './InputIntlPhoneContext';

export function SelectorOpener({ children }: { children: React.ReactNode }) {
  const { isCountrySelectorOpen, setIsCountrySelectorOpen } = useInputIntlPhoneContext();
  return (
    <div
      style={{
        visibility: isCountrySelectorOpen ? 'visible' : 'hidden',
        width: '100%',
        top: 'auto',
        marginTop: '3px',
        position: 'absolute',
        zIndex: 100,
      }}
      onBlur={() => setIsCountrySelectorOpen(false)}
    >
      {children}
    </div>
  );
}
