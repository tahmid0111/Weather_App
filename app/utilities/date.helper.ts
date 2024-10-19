import moment from "moment";

export const displayDate = (dateEpoch: number) => {
  const formattedDate: string = moment
    .unix(dateEpoch)
    .format("dddd, Do MMMM");

  return formattedDate;
};

export const displayDate2 = (dateEpoch: number) => {
  const formattedDate: string = moment
    .unix(dateEpoch)
    .format("dddd");

  return formattedDate;
};
