import DailyWeather from './DailyWeather';
import { IDailyWeather } from '../../models/Weather';
import styles from './DailyWeatherList.module.scss';

interface IProps {
  daily: IDailyWeather[];
}

export default function DailyWeatherList({ daily }: IProps) {
  const weatherList = daily
    .slice(0, 7)
    .map((elem: IDailyWeather, index: number) => (
      <DailyWeather key={index} {...elem} />
    ));

  return (
    <div className={styles.weather}>
      <h5>Daily Weather</h5>
      <div className={styles.list}>{weatherList}</div>
    </div>
  );
}
