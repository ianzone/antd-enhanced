import { Space } from 'antd';
import { CountryFlag } from 'src/components';
import { useInputIntlPhoneContext } from '../InputIntlPhoneContext';
import type { Option } from './types';

export function CountryRender(props: { option: Option }) {
  const option = props.option;
  const { customRegions } = useInputIntlPhoneContext();
  const customEmoji = customRegions?.find((region) => region.value === option.value)?.emoji;

  return (
    <Space>
      <CountryFlag countryCode={option.value} emoji={customEmoji} width={24} />
      {option.label}
    </Space>
  );
}
