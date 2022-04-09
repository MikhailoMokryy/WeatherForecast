import { useGetWeatherQuery } from '../../services/weather';

export interface IAppProps {}

export default function CurrentWeather(props: IAppProps) {
  const { data, error, isLoading } = useGetWeatherQuery({
    lat: 42.9834,
    lon: -81.233,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return <div>{data?.current.dt}</div>;
}
