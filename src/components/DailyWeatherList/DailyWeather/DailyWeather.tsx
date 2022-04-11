import { useContext } from 'react';
import { ScaleType } from '../../../models/enums/ScaleType';
import { IDailyWeather } from '../../../models/Weather';
import { formatToDay } from '../../../utils/date';
import { formatToTemperature } from '../../../utils/temperature';
import { ScaleContext } from '../../FullWeather/FullWeather';

export default function DailyWeather({ dt, temp, weather }: IDailyWeather) {
  const scaleType: ScaleType = useContext(ScaleContext);

  return (
    <div>
      <div>DateTime: {formatToDay({ dateTime: dt })}</div>
      <div>
        Temperature: {formatToTemperature({ temp: temp.day, type: scaleType })}
      </div>
      <i className={`wi wi-owm-${weather[0].id}`} />
      <div>{weather[0].description}</div>
      <div>Scale type: {scaleType}</div>
    </div>
  );
}
