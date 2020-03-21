import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {ChuniMusic} from '../model/ChuniMusic';
import {NgxIndexedDBService} from 'ngx-indexed-db';

@Component({
  selector: 'app-amazon-songlist',
  templateUrl: './amazon-songlist.component.html',
  styleUrls: ['./amazon-songlist.component.css']
})
export class AmazonSonglistComponent implements OnInit {

  dataSource = new MatTableDataSource();
  songList: ChuniMusic[] = [];
  displayedColumns: string[] = ['musicId', 'name', 'artistName'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private dbService: NgxIndexedDBService) {
  }

  ngOnInit() {
    this.dbService.getAll<ChuniMusic>('chuniMusic').then(
      x => {
        this.songList = x;
        this.dataSource.data = this.songList;
      }
    );
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
