import { NgModule, ModuleWithProviders } from '@angular/core';
import { We7RouterService, ENV } from './we7-router.service';
@NgModule({})
export class We7RouterModule {
    public static forRoot(env: any): ModuleWithProviders {
        return {
            ngModule: We7RouterModule,
            providers: [
                We7RouterService,
                {
                    provide: ENV,
                    useValue: env
                }
            ]
        };
    }
}
