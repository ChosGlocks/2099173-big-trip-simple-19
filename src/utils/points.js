import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM DD';
const TIME_FORMAT = 'HH:mm';
const DATE_AND_TIME_FORMAT = 'DD/MM/YY HH:mm';

function humanizeDateInList(date) {
  return date ? dayjs(date).format(DATE_FORMAT) : '';
}

function humanizeTimeInList(date) {
  return date ? dayjs(date).format(TIME_FORMAT) : '';
}

function humanizeDateAndTimeInForm(date) {
  return date ? dayjs(date).format(DATE_AND_TIME_FORMAT) : '';
}

function isPointFuture(date) {
  return date && dayjs().isBefore(date, 'D');
}

function getWeightForNullDate(dateA, dateB) {
  if (dateA === null && dateB === null) {
    return 0;
  }

  if (dateA === null) {
    return 1;
  }

  if (dateB === null) {
    return -1;
  }

  return null;
}

function sortPointsDay(pointA, pointB) {
  const weight = getWeightForNullDate(pointA.dateFrom, pointB.dateFrom);

  return weight ?? dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom));
}

// function getWeightForNullPrice(priceA, priceB) {
//   if (priceA === null && priceB === null) {
//     return 0;
//   }

//   if (priceA === null) {
//     return 1;
//   }

//   if (priceB === null) {
//     return -1;
//   }

//   return null;
// }

function sortPointsPrice(pointA, pointB) {
  // const weight = getWeightForNullPrice(pointA.basePrice, pointB.basePrice);

  // return weight ??
  return pointB.basePrice - pointA.basePrice;
}

export {humanizeDateInList, humanizeTimeInList, humanizeDateAndTimeInForm, isPointFuture, sortPointsDay, sortPointsPrice};
