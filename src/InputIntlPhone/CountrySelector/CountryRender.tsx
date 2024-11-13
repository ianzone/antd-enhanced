import { Space } from 'antd';
import { CountryFlag } from './CountryFlag';
import type { OptionRender } from './types';

export const CountryRender: OptionRender = (props) => {
  const data = props.data;
  return (
    <Space>
      <CountryFlag countryCode={data.value} />
      {data.label}
    </Space>
  );
};
