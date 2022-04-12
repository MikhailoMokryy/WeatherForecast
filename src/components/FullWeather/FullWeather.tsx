import { useState, createContext, useEffect } from 'react';
import { ScaleType } from '../../models/enums/ScaleType';
import { ICoordinates, ILocationOption } from '../../models/Location';
import { IFullWeather } from '../../models/Weather';
import { useGetWeatherQuery } from '../../services/weather';
import { loadState, saveState } from '../../store/localStorage';
import CurrentWeather from '../CurrentWeather';
import DailyWeatherList from '../DailyWeatherList';
import SearchBar from '../SearchBar';
import SwitchScale from '../SwitchScale';
import styles from './FullWeather.module.scss';

export const ScaleContext = createContext<ScaleType>(ScaleType.C);

export default function FullWeather() {
  const [selectedCity, setSelectedCity] = useState<ILocationOption | null>(() =>
    loadState<ILocationOption>('location')
  );

  const [weatherData, setWeatherData] = useState<IFullWeather | null>(() =>
    loadState<IFullWeather>('weather')
  );

  const [geoCoords, setGeoCoords] = useState<ICoordinates | null>(null);

  const [scaleType, setScaleType] = useState<ScaleType>(ScaleType.C);

  const { data, error } = useGetWeatherQuery(
    {
      lat: selectedCity?.value.lat ?? geoCoords?.lat ?? 0,
      lon: selectedCity?.value.lon ?? geoCoords?.lon ?? 0,
    },
    { pollingInterval: 60000, skip: !geoCoords && !selectedCity }
  );

  useEffect(() => {
    if (data) setWeatherData(data);
  }, [data, setWeatherData]);

  useEffect(() => {
    if (selectedCity) saveState(selectedCity, 'location');
  }, [selectedCity]);

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
      <SwitchScale onScaleChange={setScaleType} />
      <SearchBar
        city={selectedCity}
        onCityChange={setSelectedCity}
        onLocationChange={setGeoCoords}
      />
      {weatherData ? (
        <>
          <CurrentWeather {...weatherData.current} />
          <DailyWeatherList daily={weatherData.daily} />
        </>
      ) : (
        <div className={styles.info}>Please search city or use location.</div>
      )}
    </ScaleContext.Provider>
  );
}
