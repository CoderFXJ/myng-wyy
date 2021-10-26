import { InjectionToken, NgModule } from '@angular/core';

// 制作令牌作为key
export const API_CONFIG = new InjectionToken('ApiConfigToken')

@NgModule({
  declarations: [],
  imports: [
  ],
  providers:[
    {provide:API_CONFIG,useValue:'http://localhost:3000/'}
  ] 
})
export class ServicesModule { }
