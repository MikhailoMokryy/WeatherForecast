export interface ICoordinates {
  lat: number;
  lon: number;
}

export interface ILocation extends ICoordinates {
  name: string;
  country: string;
  state?: string;
}

export interface ILocationOption {
  value: ILocation;
  label: string;
}
