import {OngekiSkill} from './OngekiSkill';
import {OngekiCharacter} from './OngekiCharacter';

export interface OngekiCard {
  id: number;
  name: string;
  nickName: string;
  attribute: string;
  charaId: number;
  characterInfo?: OngekiCharacter;
  school: string;
  gakunen: string;
  rarity: string;
  levelParam: string;
  skillId: number;
  skillInfo?: OngekiSkill;
  choKaikaSkillId: number;
  choKaikaSkillInfo?: OngekiSkill;
  cardNumber: string;
  version: string;
}
