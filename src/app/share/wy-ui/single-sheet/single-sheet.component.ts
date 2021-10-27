import { Component, Input, OnInit } from '@angular/core';
import { SongSheet } from 'src/app/services/data-types/common.types';

@Component({
  selector: 'app-single-sheet',
  templateUrl: './single-sheet.component.html',
  styleUrls: ['./single-sheet.component.less']
})
export class SingleSheetComponent implements OnInit {


  // 接收单个歌单数据
  @Input() singleSheet!:SongSheet
  constructor() { }

  ngOnInit(): void {
  }

}
