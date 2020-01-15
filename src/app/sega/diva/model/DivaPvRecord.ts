import {DivaPv} from './DivaPv';

export interface DivaPvRecord {
  pvId: number;
  songInfo?: DivaPv;
  edition: Edition;
  difficulty: Difficulty;
  result: Result;
  maxScore: number;
  maxAttain: number;
  challengeKind: number;
  rgoPurchased: string;
  rgoPlayed: string;
}

export enum Edition {
  Original,
  Extra
}

export enum Difficulty {
  UNDEFINED = -1,
  Easy = 0,
  Normal = 1,
  Hard = 2,
  Extreme = 3,
}

export enum Result {
  NO_CLEAR = -1,
  MISS_TAKE = 0,
  CHEAP = 1,
  STANDARD = 2,
  GREAT = 3,
  EXCELLENT = 4,
  PERFECT = 5
}
