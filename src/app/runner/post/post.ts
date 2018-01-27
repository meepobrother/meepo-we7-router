import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'runner-index',
    templateUrl: './post.html'
})
export class RunnerPostComponent implements OnInit {
    constructor(
        private router: Location
    ) { }

    ngOnInit() { }

    goIndex() {
        this.router.go('/app/index.php?i=2&c=entry&do=index&m=meepo_wxapp');
    }
}
