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

export function getDayOfWeek(dateString: string) {
  const date = new Date(dateString);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayIndex = date.getDay();

  return daysOfWeek[dayIndex];
}
