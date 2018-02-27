
import { Subject } from 'rxjs/Subject';

import { Location, LocationStrategy } from '@angular/common';
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