import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Router } from '@angular/router';
export interface EnvInterface {
    path: string;
    c: string;
    a: string;
    m: string;
}
export const ENV = new InjectionToken<EnvInterface>('env');
@Injectable()
export class We7RouterService {

    constructor(
        @Inject(ENV) private env: any,
        private router: Router
    ) { }

    go(__do: string, __pramas?: { [k: string]: string }) {
        this.router.navigate(['/', this.env.path, this.env.c, this.env.a, this.env.m, __do], { queryParams: __pramas });
    }
}

