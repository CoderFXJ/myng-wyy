import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '../ng-zorro-antd/ng-zorro-antd.module'
import { WyUiModule } from './wy-ui/wy-ui.module';
// 图标
// import { NzIconModule } from 'ng-zorro-antd/icon';
// import { IconDefinition } from '@ant-design/icons-angular';
// import {  SearchOutline } from '@ant-design/icons-angular/icons';
// const icons: IconDefinition[] = [ SearchOutline ];


// import * as AllIcons from '@ant-design/icons-angular/icons';

// const antDesignIcons = AllIcons as {
//   [key: string]: IconDefinition;
// };
// const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

// 共享模块：导入公共的组件、模块、指令,并导出供其他组件使用
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    WyUiModule,
   
  ],
  exports:[
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    WyUiModule,

    // NzIconModule,
  ]
})
export class ShareModule { }
