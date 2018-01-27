import { Component, OnInit } from '@angular/core';
import { We7RouterService } from '../../we7-router/we7-router.service';
@Component({
    selector: 'runner-app-index',
    templateUrl: './runner-index.html'
})
export class RunnerAppIndexComponent implements OnInit {
    constructor(
        private router: We7RouterService
    ) { }

    ngOnInit() { }

    goPost() {
        this.router.go('post');
    }
}
