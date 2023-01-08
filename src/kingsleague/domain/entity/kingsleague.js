import { Schema, model } from "mongoose";

const classificationShema = new Schema(
  {
    date: String,
    team: String,
    wins: Number,
    losses: Number,
    goalsScored: Number,
    goolsConceded: Number,
    yellowCard: Number,
    redCard: Number,
  },
  { timestamps: true }
);

const calendarShema = new Schema(
  {
    dateText: String,
  },
  {
    timestamps: true,
  }
);

export const CalendarModel = model('calendar', calendarShema);
export const ClassificationModel = model("classification", classificationShema);
