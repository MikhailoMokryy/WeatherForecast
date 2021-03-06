import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICoordinates, ILocation } from '../models/Location';
import { IFullWeather } from '../models/Weather';
import { saveState } from '../store/localStorage';

//https://api.openweathermap.org/data/2.5/onecall?lat=42.9834&lon=-81.233&exclude=minutely,hourly,alerts&appid=00f96bb1225d69a3b731471600db2c96

const baseUrl = 'https://api.openweathermap.org/';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getWeather: builder.query<IFullWeather, ICoordinates>({
      query: (args: ICoordinates) => ({
        url: 'data/2.5/onecall',
        params: {
          ...args,
          exclude: 'minutely,hourly,alert',
          units: 'metric',
          appid: process.env?.REACT_APP_API_KEY,
        },
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          saveState(data, 'weather');
        } catch (err) {}
      },
    }),
    getLocation: builder.query<ILocation[], string>({
      query: (args: string) => ({
        url: 'geo/1.0/direct',
        params: { q: args, limit: 4, appid: process.env?.REACT_APP_API_KEY },
      }),
    }),
  }),
});

export const { useGetWeatherQuery, useGetLocationQuery } = weatherApi;
