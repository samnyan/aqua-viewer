import {DivaPvRecord} from './DivaPvRecord';
import {DivaPv} from './DivaPv';
import {DivaModule} from './DivaModule';

export interface DivaRecordDetail {
  songInfo?: DivaPv;
  records: DivaPvRecord[];
  customize?: DivaPvCustomize;
}

export interface DivaPvCustomize {
  pvId: number;
  module: string;
  modulesInfo?: DivaModule[];
  customize: string;
  customizeFlag: string;
  skin: number;
  buttonSe: number;
  slideSe: number;
  chainSlideSe: number;
  sliderTouchSe: number;
}
