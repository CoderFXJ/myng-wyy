import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'myng-wyy';

  constructor(private iconService:NzIconService){
    this.iconService.fetchFromIconfont({
      scriptUrl:'//at.alicdn.com/t/font_2893624_m7cdmqurx7l.js'
    })
  }
}
