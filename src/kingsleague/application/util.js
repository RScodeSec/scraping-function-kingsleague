import path from "path";
const baseDomain = "https://kingsleague.pro";
export const basePath = `${path.resolve()}/src/kingsleague/infrastructure/file`;
export const urlClassification = `${baseDomain}/clasificacion/`;
export const urlCalendar = `${baseDomain}/calendario/`;
export const SELECTOR_CLASSIFICATION = {
  team: { selector: ".fs-table-text_3", typeOf: "string" },
  wins: { selector: ".fs-table-text_4", typeOf: "number" },
  losses: { selector: ".fs-table-text_5", typeOf: "number" },
  goalsScored: { selector: ".fs-table-text_6", typeOf: "number" },
  goolsConceded: { selector: ".fs-table-text_7", typeOf: "number" },
  yellowCard: { selector: ".fs-table-text_8", typeOf: "number" },
  redCard: { selector: ".fs-table-text_9", typeOf: "number" },
};
export const SELECTOR_CALENDAR = {
  dateText: { selector: "h3", typeOf: "string"}
};
