import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
    selector: 'runner-app-index',
    templateUrl: './runner-index.html'
})
export class RunnerAppIndexComponent implements OnInit {
    constructor(
        private router: Location
    ) { }

    ngOnInit() { }

    goPost() {
        this.router.go('/app/index.php?i=2&c=entry&do=post&m=imeepos_runner');
    }
}
