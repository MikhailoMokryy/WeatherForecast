import { useContext } from 'react';
import { ScaleType } from '../../models/enums/ScaleType';
import { ICurrentWeather } from '../../models/Weather';
import { formatToTime } from '../../utils/date';
import { formatToTemperature } from '../../utils/temperature';
import { ScaleContext } from '../FullWeather/FullWeather';
import styles from './CurrentWeather.module.scss';

export default function CurrentWeather(props: ICurrentWeather) {
  const scaleType: ScaleType = useContext(ScaleContext);

  return (
    <div className={styles.current}>
      <h5>Current Weather</h5>
      <div className={styles.time}>{formatToTime({ dateTime: props.dt })}</div>
      <div className={styles.temp}>
        {formatToTemperature({ temp: props.temp, type: scaleType })}
      </div>
      <i className={`wi wi-owm-${props.weather[0].id} ${styles.icon}`} />
      <div className={styles.label}>{props.weather[0].description}</div>

      <div className={styles.data}>
        <div className={styles.col}>
          <i className={`wi wi-barometer ${styles.iconsm}`}>
            {props.pressure} hPa
          </i>
          <i className={`wi wi-humidity ${styles.iconsm}`}>{props.humidity}%</i>
          <i className={`wi wi-sunrise ${styles.iconsm}`}>
            {formatToTime({ dateTime: props.sunrise })}{' '}
          </i>
        </div>

        <div className={styles.col}>
          <i className={`wi wi-cloud ${styles.iconsm}`}>{props.clouds}%</i>
          <i className={`wi wi-strong-wind ${styles.iconsm}`}>
            {props.wind_speed} m/s
          </i>
          <i className={`wi wi-sunset ${styles.iconsm}`}>
            {formatToTime({ dateTime: props.sunset })}
          </i>
        </div>
      </div>
    </div>
  );
}
