
import { PlotGenerator } from "./PlotGenerator";
import { ChracterGenerator } from "./CharacterGenerator";
import { CatchPhraseGenerator } from "./CatchPhraseGenerator";

class Generator {
  constructor() {
    this.needs = [];
    this.genre = "";
  }

  addNeed(need) {
    this.needs.push(need);
  }

  chooseGenre(genre) {
    this.genre = genre;
  }

  compileResults() {

  }
}
