import { monthNames } from "@/common/constants/months";

export const getLastMonth = () => {
  const date = new Date();
  const currentMonth = date.getMonth();

  const previousMonthIndex = currentMonth === 0 ? 11 : currentMonth - 1;

  return monthNames[previousMonthIndex];
};
