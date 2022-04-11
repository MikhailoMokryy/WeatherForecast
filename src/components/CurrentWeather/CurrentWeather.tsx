import { useContext } from 'react';
import { ScaleType } from '../../models/enums/ScaleType';
import { ICurrentWeather } from '../../models/Weather';
import { formatToTime } from '../../utils/date';
import { formatToTemperature } from '../../utils/temperature';
import { ScaleContext } from '../FullWeather/FullWeather';

export default function CurrentWeather({ dt, temp, weather }: ICurrentWeather) {
  const scaleType: ScaleType = useContext(ScaleContext);

  return (
    <div>
      <h5>Current Weather:</h5>

      <div>DateTime: {formatToTime({ dateTime: dt })}</div>
      <div>Temperature: {formatToTemperature({ temp, type: scaleType })}</div>
      <i className={`wi wi-owm-${weather[0].id}`} />
      <div>{weather[0].description}</div>
      <div>Scale type: {scaleType}</div>
    </div>
  );
}
