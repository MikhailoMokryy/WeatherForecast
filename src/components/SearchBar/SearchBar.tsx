import { useState, Dispatch, SetStateAction } from 'react';
import Select from 'react-select';
import {
  ICoordinates,
  ILocation,
  ILocationOption,
} from '../../models/Location';
import { useGetLocationQuery } from '../../services/weather';
import styles from './SearchBar.module.scss';

export interface IProps {
  city: ILocationOption | null;
  onCityChange: Dispatch<SetStateAction<ILocationOption | null>>;
  onLocationChange: Dispatch<SetStateAction<ICoordinates | null>>;
}

export default function SearchBar({
  city,
  onCityChange,
  onLocationChange,
}: IProps) {
  const [selectInput, setSelectInput] = useState<string>('');
  const [isGeolocationActive, setIsGeolocationActive] = useState<boolean>(true);

  const { data } = useGetLocationQuery(selectInput, {
    skip: !Boolean(selectInput),
  });

  const selectOptions: ILocationOption[] = data
    ? data.map((elem: ILocation) => ({
        value: elem,
        label: `${elem.name} [${elem.country}] ${elem?.state ?? ''}`,
      }))
    : [];

  const getLocation = () => {
    setIsGeolocationActive(false);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setSelectInput('');
          onCityChange(null);
          onLocationChange({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          setIsGeolocationActive(true);
        },
        () => {
          setIsGeolocationActive(true);
        }
      );
    }
  };

  return (
    <div className={styles.search}>
      <Select
        value={city}
        onChange={onCityChange}
        onInputChange={setSelectInput}
        options={selectOptions}
        className={styles.select}
      />

      <button
        className={styles.btn}
        onClick={getLocation}
        disabled={!isGeolocationActive}
      >
        <i className={`wi wi-wind-direction ${styles.icon}`} />
      </button>
    </div>
  );
}
