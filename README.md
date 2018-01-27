> 当&do=***变化时，加载相应组件

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
// some page component
import { RunnerAppIndexComponent } from './runner/runner-index/runner-index';
import { RunnerPostComponent } from './runner/post/post';
import { We7RouterModule,We7RouterOutletComponent} from 'meepo-we7-router';
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
```