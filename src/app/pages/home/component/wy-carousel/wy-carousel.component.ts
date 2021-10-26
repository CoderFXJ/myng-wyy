import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less']
})
export class WyCarouselComponent implements OnInit {

  // 接收home组件传入的索引
  @Input() activeIndex = 0
  // 子组件项目组间传值:type
  @Output() changeSlide = new EventEmitter<'pre'|'next'>();

  @ViewChild('dot', { static: true })
  dotRef!: TemplateRef<any>;


  constructor() { }

  ngOnInit(): void {
  }

  // 点击切换轮播图
  onChangeSlide(type: 'pre'|'next'){
    this.changeSlide.emit(type)
  }

}
