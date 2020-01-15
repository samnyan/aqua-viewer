import {DivaPvRecord} from './DivaPvRecord';
import {DivaPv} from './DivaPv';

export interface DivaRecordDetail {
  songInfo?: DivaPv;
  records: DivaPvRecord[];
  customize?: DivaPvCustomize;
}

export interface DivaPvCustomize {
  pvId: number;
  module: string;
  customize: string;
  customizeFlag: string;
  skin: number;
  buttonSe: number;
  slideSe: number;
  chainSlideSe: number;
  sliderTouchSe: number;
}
