import {  Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { Artist, Banner, HotTags, SongSheet } from 'src/app/services/data-types/common.types';
// import { HomeService } from 'src/app/services/home.service';
// import { ArtistsService } from 'src/app/services/artists.service'
import { map } from 'rxjs/internal/operators';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  // 指定变更检测策略为：@Input输入属性发生改变时才进行变更检测 (提升性能)
  // changeDetection:ChangeDetectionStrategy.OnPush

})
export class HomeComponent implements OnInit {
  // 轮播图默认索引，传入自定义轮播图组件
  carouselIndex = 0;
  banners: Banner[] = [];
  hotTags:HotTags[] = [];
  songSheetList:SongSheet[] = [];
  artists:Artist[] = []


  // 获取nz-carousel组件实例
  @ViewChild(NzCarouselComponent, { static: true })
  private nzCarousel!: NzCarouselComponent;

  constructor(
    private route:ActivatedRoute
    ) {
      this.route.data.pipe(map((res:any)=>res.homeDatas))
      .subscribe(([banners,hotTags,songSheetList,artists])=>{
        this.banners = banners
        this.hotTags = hotTags
        this.songSheetList = songSheetList
        this.artists = artists
        
      })
    // this.getBanners();
    // this.getHotTags();
    // this.getPerosonalSheetList();
    // this.getArtists();
   }

  ngOnInit(): void {
  }
  /**  初始版获取数据方式
   * 
      // 保存轮播数据
      private getBanners(){
        this.homeService.getBanners().subscribe(banners => {
          this.banners = banners
        //  console.log('this.banners: ', this.banners);
        })
      }
      // 接收HotTags数据
      private getHotTags(){
      this.homeService.getHotTags().subscribe(tags =>{
        this.hotTags = tags
        // console.log('热门标签: ', this.hotTags )
      })
      }

      // 接收推荐歌单数据
      private getPerosonalSheetList(){
        this.homeService.getPerosonalSheetList().subscribe(sheets =>{
          this.songSheetList = sheets
        // console.log('推荐歌单 : ', this.songSheetList );
      })
      } 
      
      // 接收入驻歌手
      private getArtists(){
        this.artistsService.getEnterArtists().subscribe(artists =>{
          this.artists = artists
          console.log('this.artists: ', this.artists);
        })
      }
 */
   
  // 切换轮播图之前回调函数
  onBeforeChange(e:any){
    this.carouselIndex = e.to
  }

  // 接收wy-carousel传来的点击箭头类型
  onChangeSlide(type:'pre'|'next'){
    // 调用nzCarousel组件的pre()或next方法
    this.nzCarousel[type]()
  }
}
