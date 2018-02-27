import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { parseURL } from './parseUrl';
@Injectable()
export class We7RouterService {

    constructor(
        private location: Location
    ) { }

    go(__do: string, __pramas?: { [k: string]: string }, isMobile: boolean = true) {
        __pramas = __pramas || {};
        __pramas = { ...__pramas, ...{ do: __do } };
        if (isMobile) {
            this.location.go(`/app/index.php${this.puts(__pramas)}`);
        } else {
            this.location.go(`/web/index.php${this.puts(__pramas)}`);
        }
    }

    get(name: string): string {
        const parse = parseURL();
        return parse[name] ? parse[name] : '';
    }

    put(name: string, value: any, loc?: string) {
        const parse = parseURL();
        loc = loc || location.search;
        if (loc.indexOf(`${name}=`) > -1) {
            loc = loc.replace(`${name}=${parse[name]}`, `${name}=${value}`);
        } else {
            loc = `${loc}&${name}=${value}`;
        }
        return loc;
    }

    puts(values: { [k: string]: string }) {
        let loc = location.search;
        for (const key in values) {
            loc = this.put(key, values[key], loc);
        }
        return loc;
    }
}

