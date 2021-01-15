import { getTime, format } from "date-fns";
import { DICTIONARY, SORT } from "../utils/const";

export const decodeDate = (date) => {
  if (!date) {
    return false;
  }
  const chunkDate = date.split(" ");
  return getTime(
    new Date(`${chunkDate[2]} ${DICTIONARY[chunkDate[1]]} ${chunkDate[0]}`)
  );
};
export const prepareData = (data) => {
  data.forEach((item) => {
    item.date = decodeDate(item.date);
  });
  return data;
};

export const dateFormater = (date) => {
  if (!date) {
    return false;
  }
  return format(new Date(date), "dd. MMM yyyy");
};

export const articlesSort = (a, b, order) => {
  if (a.date < b.date) {
    return order === SORT.DESC ? 1 : -1;
  }
  if (a.date > b.date) {
    return order === SORT.DESC ? -1 : 1;
  }
  return 0;
};
