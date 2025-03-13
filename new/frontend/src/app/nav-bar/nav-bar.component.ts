import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NavBarItem} from "../models/navBarItem";

@Component({
    selector: 'app-nav-bar',
    imports: [
        RouterLink
    ],
    templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
    navItems: NavBarItem[] = [
        {label: 'Home', path: ''},
        {label: 'Page 1', path: 'page-1'}
    ];

    constructor(private router: Router) {
    }

    isDisabled(path: string): boolean {
        return `/${path}` === this.router.url;
    }

    getNavStyle(path: string): string {
        if (`/${path}` === this.router.url) {
            return "nav-link active fw-bolder text-success-emphasis";
        }
        return "nav-link";
    }
}
