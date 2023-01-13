function getUnduplicatedDates(scrapeDates = [], savedDates = []) {
  let newDates = [];
  scrapeDates.some((element, index) => {
    if (!savedDates.includes(element)) {
      newDates.push(element);
    }
  });
  return newDates;
}

export function getDateNoWSpain() {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date();
  const utcSpain = new Intl.DateTimeFormat("es-US", {
    timeZone: "Europe/Madrid",
  });
  const dateFormatSpain = utcSpain.format(date);
  const dateSpain = new Date(dateFormatSpain);
  return {
    dateText: dateSpain.toLocaleDateString("es-PE", options),
    date: dateSpain,
  };
}

export function todayPlays(scrapedCalendar) {
  const formattedDates = JSON.parse(scrapedCalendar).map((element) => {
    element.date = element.dateText.toLowerCase().replace(/\s/g, "");
    return element;
  });
  return formattedDates.includes(
    getDateNoWSpain().dateText.toLowerCase().replace(/\s/g, "")
  );
}

export function lastDayScraped(calendar) {
  const arrCalendar = JSON.parse(calendar);
  const localDate = arrCalendar[arrCalendar.length - 1].dateText.split("de");

  const day = localDate[0].replace(/\s/g, "");
  const month = getMonthOfString(localDate[1].replace(/\s/g, ""));
  const year = localDate[2].replace(/\s/g, "");
  return new Date(Date.UTC(year, month, day));
}

function getMonthOfString(monthText) {
  switch (monthText.toLowerCase()) {
    case "enero":
      return 1;
    case "febrero":
      return 2;
    case "marzo":
      return 3;
    case "abril":
      return 4;
    case "mayo":
      return 5;
    case "junio":
      return 6;
    case "julio":
      return 7;
    case "agosto":
      return 8;
    case "septiembre":
      return 9;
    case "octubre":
      return 10;
    case "noviembre":
      return 11;
    case "diciembre":
      return 12;
  }
}

export const cleanText = (text) =>
  text
    .replace(/\t|\n|\s:/g, "")
    .replace(/.*:/g, "")
    .trim();

