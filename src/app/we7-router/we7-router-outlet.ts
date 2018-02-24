import {
    Attribute, ChangeDetectorRef, ComponentFactoryResolver,
    ComponentRef, Directive, EventEmitter, Injector, OnDestroy,
    OnInit, Output, ViewContainerRef, InjectionToken, Inject, Type,
    Component
} from '@angular/core';
import { Location } from '@angular/common';
export const WE7_ROUTES = new InjectionToken('WE7_ROUTES');
function flatten<T>(arr: T[][]): T[] {
    return Array.prototype.concat.apply([], arr);
}
import { parseURL } from './parseUrl';
export interface We7Route {
    path: string;
    component: Type<any>;
}
export type We7Routes = We7Route[];
import { We7RouterService } from './we7-router.service';
@Component({
    selector: 'we7-router-outlet',
    template: `<ng-container *ngComponentOutlet="component"></ng-container>`,
    exportAs: 'we7Outlet'
})
export class We7RouterOutletComponent {
    private routes: Map<string, Type<any>> = new Map();
    viewContainerRef: ViewContainerRef;
    componentFactoryResolver: ComponentFactoryResolver;
    component: Type<any>;
    constructor(
        _location: ViewContainerRef,
        _resolver: ComponentFactoryResolver,
        @Inject(WE7_ROUTES) routes: any,
        private location: Location,
        private service: We7RouterService
    ) {
        this.viewContainerRef = _location;
        this.componentFactoryResolver = _resolver;
        const routesFlatten = flatten(routes);
        routesFlatten.map((res: We7Route, index) => {
            this.routes.set(res.path, res.component);
        });
        console.log(this.location);
        (<any>this.location).change$.subscribe(res => {
            this.update();
        });
        this.location.subscribe(() => {
            this.update();
        });
        this.update();
    }

    update() {
        const params = parseURL();
        const _do = params.do || 'index';
        const component = this.routes.get(_do);
        this.component = component;
    }
}
