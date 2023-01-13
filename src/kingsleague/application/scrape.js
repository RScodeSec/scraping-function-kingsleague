import * as cheerio from "cheerio";
import { getResource } from "./http.js";
import {
  urlClassification,
  urlCalendar,
  SELECTOR_CLASSIFICATION,
  SELECTOR_CALENDAR,
} from "./util.js";
import { savetoJson } from "./file.js";
import { cleanText, todayPlays } from "./helper.js";
import { save,closeConnection } from "./../infrastructure/repository.js";
import {
  ClassificationModel,
  CalendarModel,
} from "./../domain/entity/kingsleague.js";

async function scrapeClassification() {
  let result = [];
  const classificationSelector = Object.entries(SELECTOR_CLASSIFICATION);
  const res = await getResource(urlClassification);
  const $ = cheerio.load(res);
  $("table tbody tr").each((_, element) => {
    const entries = classificationSelector.map(
      ([key, { selector, typeOf }]) => {
        const rawValue = $(element).find(selector).text();
        const cleanedValue = cleanText(rawValue);
        const value = typeOf === "number" ? Number(cleanedValue) : cleanedValue;
        return [key, value];
      }
    );
    result.push(Object.fromEntries(entries));
  });
  return result;
}

async function scrapeCalendar() {
  let result = [];
  const calendarSelector = Object.entries(SELECTOR_CALENDAR);
  const res = await getResource(urlCalendar);
  const $ = cheerio.load(res);
  $("div#calendarMatch").each((index, element) => {
    const entries = calendarSelector.map(([key, { selector, typeOf }]) => {
      const rawValue = $(element).find(selector).text();
      const value = cleanText(rawValue);
      return [key, value];
    });
    result.push(Object.fromEntries(entries));
  });
  return result;
}

export async function scrapedClassificationStart(scrapedCalendar, date) {
  if (todayPlays(scrapedCalendar)) {
    /* scrape classification table */
    save(await scrapeClassification(), ClassificationModel);
  } else {
    console.log("no game today");
    await closeConnection();
  }
}

export async function scrapedCalendarStart() {
  let scrapedResult = await scrapeCalendar();
  savetoJson(scrapedResult, "calendar");
  save(scrapedResult, CalendarModel);
}
