import { Icons } from './Icons';

export interface ICurrentWeather {
  dt: number;
  weather: Icons[];
  temp: number;
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
