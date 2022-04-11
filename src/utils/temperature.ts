import { ScaleType } from '../models/enums/ScaleType';

interface IFormatType {
  temp: number;
  type: ScaleType;
}

export const formatToTemperature = ({ temp, type }: IFormatType): string => {
  const formattedTemp: number =
    type === ScaleType.C ? temp : (temp * 9) / 5 + 32;
  return `${Math.ceil(formattedTemp)}${type}`;
};
