import {Component} from '@angular/core';
import {MatAnchor} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink, Router} from "@angular/router";
import {NavBarItem} from "../models/navBarItem";

@Component({
    selector: 'app-nav-bar',
    imports: [
        MatToolbar,
        MatAnchor,
        RouterLink
    ],
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
    constructor(private router: Router) {}

    navItems: NavBarItem[] = [
        {label: 'Home', path: ''},
        {label: 'Page1', path: 'page-1'}
    ];

    isDisabled(path: string): boolean {
        return `/${path}` === this.router.url;
    }
}
