export class Calendar {
  constructor(day) {
    this.day = day;
  }
  toJSON() {
    return {
      'date': this.day,
    };
  }
}
