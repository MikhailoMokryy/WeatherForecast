import DailyWeather from './DailyWeather';
import { IDailyWeather } from '../../models/Weather';

interface IProps {
  daily: IDailyWeather[];
}

export default function DailyWeatherList({ daily }: IProps) {
  const weatherList = daily.map((elem: IDailyWeather, index: number) => (
    <DailyWeather key={index} {...elem} />
  ));

  return (
    <div>
      <h5>Daily Weather:</h5>
      {weatherList}
    </div>
  );
}
