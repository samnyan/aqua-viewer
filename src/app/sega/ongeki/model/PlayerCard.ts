import {OngekiCard} from './OngekiCard';
import {OngekiCharacter} from './OngekiCharacter';
import {OngekiSkill} from './OngekiSkill';

export interface PlayerCard {
  cardId: number;
  digitalStock: number;
  analogStock: number;
  level: number;
  maxLevel: number;
  exp: number;
  printCount: number;
  useCount: number;
  kaikaDate: string;
  choKaikaDate: string;
  skillId: number;
  created: string;
  isNew: boolean;
  isAcquired: boolean;
  cardInfo?: OngekiCard;
  characterInfo?: OngekiCharacter;
  skillInfo?: OngekiSkill;
}
