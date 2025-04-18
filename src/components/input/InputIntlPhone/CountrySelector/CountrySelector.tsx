import { Select } from 'antd';
import { useMemo } from 'react';
import { useInputIntlPhoneContext } from '../InputIntlPhoneContext';
import { CountryRender } from './CountryRender';
import { countries } from './countries';
import type { CustomRegion, FilterOption, OnSelect, Option, Value } from './types';

const filterOption: FilterOption = (inputValue, option) => {
  if (option === undefined) {
    return false;
  }
  const searchKey = inputValue.toLowerCase();
  const matchLabel = option.label.toLowerCase().includes(searchKey);
  const matchCode = option.value.toLowerCase().includes(searchKey);
  return matchLabel || matchCode;
};

export function CountrySelector() {
  const {
    setIsCountrySelectorOpen,
    phone: state,
    setPhone,
    customRegions,
  } = useInputIntlPhoneContext();

  const onSelect: OnSelect = (value) => {
    setPhone({ countryCode: value });
    setIsCountrySelectorOpen(false);
  };

  const options = useMemo(() => {
    if (customRegions?.length) {
      const map = new Map<Value, CustomRegion>();
      for (const region of customRegions) {
        map.set(region.value, region);
      }
      for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const region = map.get(country.value);
        if (region) {
          if (region.label) {
            country.label = region.label;
          }
          if (region.emoji) {
            country.emoji = region.emoji;
          }
          map.delete(country.value);
        }
        if (map.size === 0) {
          break;
        }
      }
      for (const pair of map) {
        const region = pair[1];
        countries.push({
          value: region.value,
          label: region.label || region.value,
          emoji: region.emoji,
        });
      }
    }
    return countries;
  }, [customRegions]);

  return (
    <Select<Value, Option>
      style={{ width: 'inherit' }}
      showSearch
      placeholder='Search Country'
      filterOption={filterOption}
      optionRender={(opt, info) => <CountryRender option={opt.data} key={info.index} />}
      onSelect={onSelect}
      options={options}
      value={state.countryCode}
    />
  );
}
