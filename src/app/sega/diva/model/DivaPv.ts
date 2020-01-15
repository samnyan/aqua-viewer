export interface DivaPv {
  pvId: number;
  bpm: number;
  date: string;
  is_old_pv?: number;
  song_name: string;
  song_name_reading?: string;
  arranger?: string;
  illustrator?: string;
  lyrics?: string;
  music?: string;
  difficulty?: DivaPvDiffSet;
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
