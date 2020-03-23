import {Pipe, PipeTransform} from '@angular/core';
import {BattleRank} from '../model/OngekiEnums';

@Pipe({
  name: 'toBattleSprite'
})
export class ToBattleSpritePipe implements PipeTransform {


  transform(value: number): string {
    switch (BattleRank[value]) {
      case 'Yu':
        return 'SB_RES_ScoreStamp_Great.png';
      case 'Ryo':
        return 'SB_RES_ScoreStamp_Good.png';
      case 'Fuka':
        return 'SB_RES_ScoreStamp_NoGood.png';
      case 'Shu':
        return 'SB_RES_ScoreStamp_Excellent.png';
      case 'Ka':
        return 'SB_RES_ScoreStamp_Usually.png';
      case 'Goku':
        return 'SB_RES_ScoreStamp_Unbelievable.png';
      case 'Goku1':
        return 'SB_RES_ScoreStamp_Unbelievable.png';
      case 'Goku2':
        return 'SB_RES_ScoreStamp_Unbelievable.png';
      case 'Goku3':
        return 'SB_RES_ScoreStamp_Unbelievable.png';
      case 'Goku4':
        return 'SB_RES_ScoreStamp_Unbelievable.png';
      case 'Goku5':
        return 'SB_RES_ScoreStamp_Unbelievable.png';
    }
    return null;
  }

}
