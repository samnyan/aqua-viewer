import {OngekiMusic} from './OngekiMusic';
import {OngekiCard} from './OngekiCard';

export interface PlayerRatingItem {
  musicId: number;
  level: number;
  value: number;
  musicInfo?: OngekiMusic;
  bossCardInfo?: OngekiCard;
}
