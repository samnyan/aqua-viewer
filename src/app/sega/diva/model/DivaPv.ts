export interface DivaPv {
  pvId: number;
  bpm: number;
  date: string;
  songName: string;
  songNameEng?: string;
  songNameReading?: string;
  arranger?: string;
  illustrator?: string;
  lyrics?: string;
  music?: string;
  difficulty?: DivaPvDiffSet;
  performerNumber: number;
}

export interface DivaDifficulty {
  edition: number;
  level: string;
  version: number;
}

export interface DivaPvDiffSet {
  easy?: DivaDifficulty;
  normal?: DivaDifficulty;
  hard?: DivaDifficulty;
  extreme?: DivaDifficulty;
  extreme_extra?: DivaDifficulty;
}
