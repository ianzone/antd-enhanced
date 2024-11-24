import { Space } from 'antd';
import { CountryFlag } from '../../../';
import { useInputIntlPhoneContext } from '../InputIntlPhoneContext';
import type { OptionRender } from './types';

export const CountryRender: OptionRender = (props) => {
  const data = props.data;
  const { customRegions } = useInputIntlPhoneContext();
  const customEmoji = customRegions?.find((region) => region.value === data.value)?.emoji;

  return (
    <Space>
      <CountryFlag countryCode={data.value} emoji={customEmoji} width={24} />
      {data.label}
    </Space>
  );
};
