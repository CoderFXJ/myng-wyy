import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner, HotTags, SongSheet } from './data-types/common.types';
import { ServicesModule } from './services.module';
import { map } from 'rxjs/internal/operators'
import { API_CONFIG } from './services.module'

@Injectable({
  providedIn: ServicesModule
})
export class HomeService {
  banners: Banner[] = [];
  constructor(private http:HttpClient,@Inject(API_CONFIG) private uri :string) { }

  // 获取轮播图
  getBanners():Observable<Banner[]>{
    return this.http.get(this.uri +'banner')
    .pipe(map((res: any) => res.banners))
  }
  // 获取热门标签
  getHotTags():Observable<HotTags []>{
    return this.http.get(this.uri+'playlist/hot')
    .pipe(map((res: any) =>{
      // 排序后截取5个
      return res.tags.sort(
        (x:HotTags,y:HotTags)=>x.position-y.position
        ).slice(0,5)
    }))
  }
  // 获取热门歌单
  getPerosonalSheetList():Observable<SongSheet[]>{
    return this.http.get(this.uri+'personalized')
    .pipe(map((res:any) =>res.result.slice(0,16)))
  }
}
