import CurrentWeather from '../components/CurrentWeather';
import styles from './WeatherPage.module.scss';

export interface IAppProps {}

export default function WeatherPage(props: IAppProps) {
  return (
    <div>
      <h3>WeatherPage</h3>
      <CurrentWeather />
    </div>
  );
}
