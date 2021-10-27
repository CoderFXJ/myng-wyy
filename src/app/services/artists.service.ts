import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { API_CONFIG, ServicesModule } from './services.module';
import { Artist } from './data-types/common.types'
// 歌手请求参数
type ArtistParams ={
  offset:number;
  limit:number;
}
// 默认参数
const defaultParams:ArtistParams={
  offset:0,
  limit:5,
}
@Injectable({
  providedIn: ServicesModule
})
export class ArtistsService {
  getArtists(): any {
    throw new Error("Method not implemented.");
  }

  constructor(private http:HttpClient,@Inject(API_CONFIG) private uri:string) { }
  // 请求入驻歌手数据
  getEnterArtists(args:ArtistParams=defaultParams):Observable<Artist[]>{
    // 
    const params  = new HttpParams({fromObject:args})
    return this.http.get(this.uri+'artist/list',{params})
    .pipe(map((res:any)=>res.artists))
  }
}
