import { Icons } from './Icons';

export interface ICurrentWeather {
  dt: number;
  temp: number;
  weather: [Icons];
}

export interface IDailyWeather {
  dt: number;
  temp: number;
  weather: [Icons];
}

export interface IFullWeather {
  current: ICurrentWeather;
  daily: [IDailyWeather];
}
