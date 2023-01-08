import * as fs from "node:fs";
import { basePath } from "./util.js";

export function savetoJson(item, namefile) {
  fs.writeFile(
    `${basePath}/${namefile}.json`,
    JSON.stringify(item),
    (err, data) => {
      if (err) throw err;
      console.log("The file was saved!");
    }
  );
}

export function readFile(nameFile) {
  try {
    return fs.readFileSync(`${basePath}/${nameFile}.json`, "utf8");
  } catch (error) {
    throw error;
  }
}


