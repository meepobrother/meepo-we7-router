import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
export interface EnvInterface {
    path: string;
    c: string;
    a: string;
    m: string;
}
export const ENV = new InjectionToken<EnvInterface>('env');
@Injectable()
export class We7RouterService {
    params: any = {};
    constructor(
        @Inject(ENV) private env: any,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.route.queryParams.subscribe(res => {
            this.params = res;
        });
    }

    go(__do: string, __pramas?: { [k: string]: string }) {
        this.router.navigate(['/', this.env.path, this.env.c, this.env.a, this.env.m, __do], { queryParams: __pramas });
    }

    get(name: string) {
        return this.params[name];
    }
}

