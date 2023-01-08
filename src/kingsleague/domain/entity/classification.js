export class Classification {
  constructor(
    team,
    wins,
    loses,
    goalsScored,
    goolsConceded,
    redCard,
    yellowCard
  ) {
    this.team = team;
    this.wins = wins;
    this.loses = loses;
    this.goalsScored = goalsScored;
    this.goolsConceded = goolsConceded;
    this.redCard = redCard;
    this.yellowCard = yellowCard;
  }

  toJSON() {
    return {
      team: this.team,
      wins: this.wins,
      loses: this.loses,
      goalsScored: this.goalsScored,
      goolsConceded: this.goolsConceded,
      redCard: this.redCard,
      yellowCard: this.yellowCard,
    };
  }
}
