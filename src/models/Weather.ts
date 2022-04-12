import { Icons } from './Icons';

export interface ICurrentWeather {
  dt: number;
  weather: Icons[];
  temp: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  humidity: number;
  wind_speed: number;
  clouds: number;
}

export interface IDailyWeather extends Omit<ICurrentWeather, 'temp'> {
  temp: {
    day: number;
  };
}

export interface IFullWeather {
  current: ICurrentWeather;
  daily: IDailyWeather[];
}
