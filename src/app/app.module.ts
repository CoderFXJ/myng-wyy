import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// 导入core 
import{CoreModule} from './core/core.module'


// import { NzIconModule } from 'ng-zorro-antd/icon';
// import { IconDefinition } from '@ant-design/icons-angular';
// import {SearchOutline} from '@ant-design/icons-angular/icons';
// const icons: IconDefinition[] = [  SearchOutline ];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    // NzIconModule.forRoot(icons)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
