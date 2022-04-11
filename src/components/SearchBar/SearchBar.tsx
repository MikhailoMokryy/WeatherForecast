import { useState, Dispatch, SetStateAction } from 'react';
import Select from 'react-select';
import { ILocation, ILocationOption } from '../../models/Location';
import { useGetLocationQuery } from '../../services/weather';

export interface IProps {
  city: ILocationOption | null;
  onCityChange: Dispatch<SetStateAction<ILocationOption | null>>;
}

export default function SearchBar({ city, onCityChange }: IProps) {
  const [selectInput, setSelectInput] = useState<string>('');

  const { data } = useGetLocationQuery(selectInput, {
    skip: !Boolean(selectInput),
  });

  const selectOptions: ILocationOption[] = data
    ? data.map((elem: ILocation) => ({
        value: elem,
        label: `${elem.name} [${elem.country}] ${elem?.state ?? ''}`,
      }))
    : [];

  return (
    <Select
      defaultValue={city}
      onChange={onCityChange}
      onInputChange={setSelectInput}
      options={selectOptions}
    />
  );
}
