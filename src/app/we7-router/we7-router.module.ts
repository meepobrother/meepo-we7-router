import { NgModule, ModuleWithProviders } from '@angular/core';
import { We7RouterService } from './we7-router.service';
import { We7UtilService } from './util.service';
import { ENV } from './token';
@NgModule({})
export class We7RouterModule {
    public static forRoot(env: any): ModuleWithProviders {
        return {
            ngModule: We7RouterModule,
            providers: [
                We7RouterService,
                We7UtilService,
                {
                    provide: ENV,
                    useValue: env
                }
            ]
        };
    }
}
