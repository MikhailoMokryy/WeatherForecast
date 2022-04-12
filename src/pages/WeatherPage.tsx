import FullWeather from '../components/FullWeather';
import styles from './WeatherPage.module.scss';

export interface IAppProps {}

export default function WeatherPage(props: IAppProps) {
  return (
    <div className={styles.weather}>
      <h3 className={styles.weatherheader}>Weather Forecast</h3>
      <FullWeather />
    </div>
  );
}
