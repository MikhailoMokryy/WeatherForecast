const formatToDay = ({ dateTime }: { dateTime: number }): string => {
  const timestamp: number = dateTime * 1000;
  return new Date(timestamp).toLocaleDateString();
};

const formatToTime = ({ dateTime }: { dateTime: number }): string => {
  const timestamp: number = dateTime * 1000;
  const date: Date = new Date(timestamp);
  return date.toLocaleTimeString().substring(0, 5);
};

export { formatToDay, formatToTime };
