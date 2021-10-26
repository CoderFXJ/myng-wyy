import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule } from '../services/services.module';
import { PagesModule } from '../pages/pages.module';
import { ShareModule } from '../share/share.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
//配置语言
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

// 引入一些一次性引入的模块，充当根模块
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServicesModule,
    BrowserAnimationsModule,
    PagesModule,
    ShareModule,
    AppRoutingModule,//注意：放在PagesModule后面
  ],
  exports:[
    ShareModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],


})

export class CoreModule { 

  // 保证CoreModule只被AppModule所引入
  // @SkipSelf()装饰器  跳过查找自身，避免死循环
  // @Optional()装饰器  CoreModule没找到时，会赋值ParentModule为null，避免报错
  constructor(@SkipSelf() @Optional() parentModule:CoreModule){
    if(parentModule){
      throw new Error('CoreModule只被AppModule所引入!')
    }
  }

}
