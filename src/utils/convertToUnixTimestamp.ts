export function convertToUnixTimestamp(dateString: string): number {
  const [day, month, year] = dateString.split("/").map(Number);

  const date = new Date(year, month - 1, day);

  return Math.floor(date.getTime() / 1000);
}
