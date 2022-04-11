import { useState, createContext } from 'react';
import Select from 'react-select';
import { ScaleType } from '../../models/enums/ScaleType';
import { ILocation, ILocationOption } from '../../models/Location';
import {
  useGetWeatherQuery,
  useGetLocationQuery,
} from '../../services/weather';
import CurrentWeather from '../CurrentWeather';
import DailyWeatherList from '../DailyWeatherList';
import SearchBar from '../SearchBar';

export const ScaleContext = createContext<ScaleType>(ScaleType.C);

export interface IAppProps {}

export default function FullWeather(props: IAppProps) {
  const [selectedCity, setSelectedCity] = useState<ILocationOption | null>(
    null
  );
  const [scaleType, setScaleType] = useState<ScaleType>(ScaleType.C);

  const { data, error, isLoading } = useGetWeatherQuery({
    lat: selectedCity?.value.lat ?? 0,
    lon: selectedCity?.value.lon ?? 0,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <h4>Something went wrong.</h4>
        {JSON.stringify(error, null, 2)}
      </div>
    );
  }

  return (
    <ScaleContext.Provider value={scaleType}>
      <SearchBar city={selectedCity} onCityChange={setSelectedCity} />
      <CurrentWeather {...data!.current} />
      <DailyWeatherList daily={data!.daily} />
    </ScaleContext.Provider>
  );
}
