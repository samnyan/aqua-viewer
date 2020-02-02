import {NgModule} from '@angular/core';
import {DBConfig, NgxIndexedDBModule} from 'ngx-indexed-db';

const dbConfig: DBConfig = {
  name: 'Aqua',
  version: 1,
  objectStoresMeta: [
    {
      store: 'divaPv',
      storeConfig: {keyPath: 'pvId', autoIncrement: false},
      storeSchema: [
        {name: 'bpm', keypath: 'bpm', options: {unique: false}},
        {name: 'date', keypath: 'date', options: {unique: false}},
        {name: 'songName', keypath: 'songName', options: {unique: false}},
        {name: 'songNameEng', keypath: 'songNameEng', options: {unique: false}},
        {name: 'songNameReading', keypath: 'songNameReading', options: {unique: false}},
        {name: 'arranger', keypath: 'arranger', options: {unique: false}},
        {name: 'illustrator', keypath: 'illustrator', options: {unique: false}},
        {name: 'lyrics', keypath: 'lyrics', options: {unique: false}},
        {name: 'music', keypath: 'music', options: {unique: false}},
        {name: 'difficulty', keypath: 'difficulty', options: {unique: false}},
        {name: 'performerNumber', keypath: 'performerNumber', options: {unique: false}}
      ]
    }, {
      store: 'divaModule',
      storeConfig: {keyPath: 'id', autoIncrement: false},
      storeSchema: [
        {name: 'name', keypath: 'name', options: {unique: false}},
        {name: 'price', keypath: 'price', options: {unique: false}}
      ]
    }, {
      store: 'divaCustomize',
      storeConfig: {keyPath: 'id', autoIncrement: false},
      storeSchema: [
        {name: 'name', keypath: 'name', options: {unique: false}},
        {name: 'price', keypath: 'price', options: {unique: false}}
      ]
    }, {
      store: 'chuniMusic',
      storeConfig: {keyPath: 'musicId', autoIncrement: false},
      storeSchema: [
        {name: 'name', keypath: 'name', options: {unique: false}},
        {name: 'sotrName', keypath: 'sotrName', options: {unique: false}},
        {name: 'copyright', keypath: 'copyright', options: {unique: false}},
        {name: 'artistName', keypath: 'artistName', options: {unique: false}},
        {name: 'genre', keypath: 'genre', options: {unique: false}},
        {name: 'releaseVersion', keypath: 'releaseVersion', options: {unique: false}}
      ]
    },
  ]
};

@NgModule({
  declarations: [],
  imports: [
    NgxIndexedDBModule.forRoot(dbConfig)
  ]
})
export class DatabaseModule {
}
