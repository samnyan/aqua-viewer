export interface Contest {
  id: number;
  enable: boolean;
  startTime: Date;
  endTime: Date;
  name: string;
  description: string;
  league: ContestLeague;
  stars: number;
  minComplexity: number;
  maxComplexity: number;
  stages: number;
  stageLimit: ContestStageLimit;
  normaType: ContestNormaType;
  bronzeBorders: number;
  sliverBorders: number;
  goldBorders: number;
}

export enum ContestLeague {
  Beginner = 0,
  Intermediate = 1,
  Advanced = 2,
  Professional = 3,
}

export enum ContestStageLimit {
  Unlimited = 0,
  Limited = 1,
}

export enum ContestNormaType {
  Score = 0,
  Percentage = 1,
  CoolPercentage = 2,
}
