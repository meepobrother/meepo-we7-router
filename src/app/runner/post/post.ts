import { Component, OnInit } from '@angular/core';
import { We7RouterService } from '../../we7-router/we7-router.service';

@Component({
    selector: 'runner-index',
    templateUrl: './post.html'
})
export class RunnerPostComponent implements OnInit {
    constructor(
        private router: We7RouterService
    ) { }

    ngOnInit() { }

    goIndex() {
        this.router.go('index');
    }
}
