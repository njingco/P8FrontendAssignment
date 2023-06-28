export const getCurrenyLabel = (number: number, sign: string) => {
  let value: string = number.toString();

  if (number >= 1000 && number < 1000000) value = `${number / 1000}K`;
  else if (number > 1000000) value = `${number / 1000000}M`;

  return `${sign}${value}`;
};
