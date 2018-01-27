import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { RunnerAppIndexComponent } from './runner/runner-index/runner-index';
import { RunnerPostComponent } from './runner/post/post';

import { We7RouterModule } from './we7-router/we7-router.module';
import { We7RouterOutletComponent } from './we7-router/we7-router-outlet';

@NgModule({
  declarations: [
    RunnerAppIndexComponent,
    RunnerPostComponent
  ],
  imports: [
    BrowserModule,
    We7RouterModule.forRoot([{
      path: 'index',
      component: RunnerAppIndexComponent
    }, {
      path: 'post',
      component: RunnerPostComponent
    }])
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [We7RouterOutletComponent]
})
export class AppModule { }
