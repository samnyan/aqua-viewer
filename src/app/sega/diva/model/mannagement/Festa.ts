import {Difficulty} from '../DivaPvRecord';

export interface Festa {
  id: number;
  enable: boolean;
  name: string;
  kind: FestaKind;
  difficulty: Difficulty;
  pvList: string;
  attributes: string;
  addVP: number;
  vpMultiplier: number;
  start: Date;
  end: Date;
  createDate: Date;
}

export enum FestaKind {
  PinkFesta = 0,
  GreenFesta = 1,
}
