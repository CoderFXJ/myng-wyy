import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playCount'
})
// 处理播放量的管道
export class PlayCountPipe implements PipeTransform {

  transform(value: number  ): unknown {
    if(value>10000){
      return Math.floor(value / 10000)+"万"
    }
    return value;
  }

}
