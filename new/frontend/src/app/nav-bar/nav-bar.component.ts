import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavBarItem } from '../models/navBarItem';
import { QuickFiltersComponent } from '../quick-filters/quick-filters.component';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
    navItems: NavBarItem[] = [
        { label: 'Home', path: '' },
        { label: 'Page 1', path: 'page-1' },
        { label: 'Page 2', path: 'page-2' },
        { label: 'Page 3', path: 'page-3' },
        { label: 'Page 4', path: 'page-4' },
    ];

    isQuickFiltersOpen = false;

    constructor(private router: Router) {}

    isDisabled(path: string): boolean {
        return `/${path}` === this.router.url;
    }

    getNavStyle(path: string): string {
        if (`/${path}` === this.router.url) {
            return 'nav-link active fw-bolder text-success-emphasis';
        }
        return 'nav-link';
    }

    toggleQuickFilters() {
        this.isQuickFiltersOpen = !this.isQuickFiltersOpen;
    }
}
