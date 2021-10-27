import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { forkJoin, Observable } from "rxjs";
import { first } from "rxjs/internal/operators";
import { ArtistsService } from "src/app/services/artists.service";
import { Artist, Banner, HotTags, SongSheet } from "src/app/services/data-types/common.types";
import { HomeService } from "src/app/services/home.service";


type HomeDataType = [Banner [],HotTags[],SongSheet[],Artist[]]
@Injectable()
// 首页路由导航守卫，解决页面加载空白问题
export class HomeResolverService implements Resolve<HomeDataType > {
  constructor(
    private homeService:HomeService, 
    private artistsService: ArtistsService
    ){}

  resolve(): Observable<HomeDataType> {
    // 等待每一个 
    return forkJoin([
      this.homeService.getBanners(),
      this.homeService.getHotTags(),
      this.homeService.getPerosonalSheetList(),
      this.artistsService.getEnterArtists(),
    ]).pipe(first());
  }
}