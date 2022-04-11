import { useState, createContext } from 'react';
import { ScaleType } from '../../models/enums/ScaleType';
import { useGetWeatherQuery } from '../../services/weather';
import CurrentWeather from '../CurrentWeather';
import DailyWeatherList from '../DailyWeatherList';
import SearchBar from '../SearchBar';

export const ScaleContext = createContext<ScaleType>(ScaleType.C);

export interface IAppProps {}

export default function FullWeather(props: IAppProps) {
  const [scaleType, setScaleType] = useState<ScaleType>(ScaleType.C);

  const { data, error, isLoading } = useGetWeatherQuery({
    lat: 50.4500336,
    lon: 30.5241361,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <ScaleContext.Provider value={scaleType}>
      <SearchBar />
      <CurrentWeather {...data!.current} />
      <DailyWeatherList daily={data!.daily} />
    </ScaleContext.Provider>
  );
}
