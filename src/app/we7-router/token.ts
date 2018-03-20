import { Inject } from '@angular/core';

export interface EnvInterface {
    path: string;
    c: string;
    a: string;
    m: string;
}
export const ENV = new InjectionToken<EnvInterface>('env');