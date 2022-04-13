import { useContext } from 'react';
import { ScaleType } from '../../../models/enums/ScaleType';
import { IDailyWeather } from '../../../models/Weather';
import { formatToDay } from '../../../utils/date';
import { formatToTemperature } from '../../../utils/temperature';
import { ScaleContext } from '../../FullWeather/FullWeather';
import styles from './DailyWeather.module.scss';

export default function DailyWeather({ dt, temp, weather }: IDailyWeather) {
  const scaleType: ScaleType = useContext(ScaleContext);

  return (
    <div className={styles.daily}>
      <div className={styles.time}>{formatToDay({ dateTime: dt })}</div>
      <div className={styles.temp}>
        {formatToTemperature({ temp: temp.day, type: scaleType })}
      </div>
      <i className={`wi wi-owm-${weather[0].id} ${styles.icon}`} />
      <div className={styles.label}>{weather[0].description}</div>
    </div>
  );
}
