import { NgModule, ModuleWithProviders, Type, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import {
    LocationStrategy, Location, CommonModule,
    PathLocationStrategy, PlatformLocation,
    HashLocationStrategy
} from '@angular/common';
import {
    WE7_ROUTES, We7Route, We7Routes,
    We7RouterOutletComponent
} from './we7-router-outlet';

import { Subject } from 'rxjs/Subject';

export class MyLocation extends Location {
    change$: Subject<any> = new Subject();
    constructor(locationStrategy: LocationStrategy) {
        super(locationStrategy);
    }
    go(path: string, query?: string) {
        super.go(path, query);
        this.change$.next({
            path: path,
            query: query
        });
    }
}

import { We7RouterService } from './we7-router.service';
@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        We7RouterOutletComponent
    ],
    declarations: [
        We7RouterOutletComponent
    ],
    providers: [
        {
            provide: Location,
            useClass: MyLocation,
            deps: [LocationStrategy]
        },
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        },
        We7RouterService
    ],
})
export class We7RouterModule {
    public static forRoot(routes: We7Routes): ModuleWithProviders {
        return {
            ngModule: We7RouterModule,
            providers: [
                {
                    provide: WE7_ROUTES,
                    useValue: routes,
                    multi: true
                },
                {
                    provide: ANALYZE_FOR_ENTRY_COMPONENTS,
                    useValue: routes,
                    multi: true
                }
            ]
        };
    }
}
