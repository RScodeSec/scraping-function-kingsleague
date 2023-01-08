import {
  getDateNoWSpain,
  lastDayScraped,
} from "./src/kingsleague/application/helper.js";
import { readFile } from "./src/kingsleague/application/file.js";
import {
  scrapedCalendarStart,
  scrapedClassificationStart,
} from "./src/kingsleague/application/scrape.js";

export function syncProcess() {
  const date = new Date();
  const scrapedCalendar = readFile("calendar");

  /* check if today is the last day of the scraped match schedule */
  if (date > lastDayScraped(scrapedCalendar)) {
    console.log("scrape new dates to play");
    scrapedCalendarStart();
    scrapedClassificationStart(scrapedCalendar, date);
  } else {
    console.log("there are still dates to play");
    scrapedClassificationStart(scrapedCalendar, date);
  }
}

