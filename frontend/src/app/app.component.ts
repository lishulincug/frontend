import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { slideInDownAnimation } from './animations';

declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [slideInDownAnimation]
})
export class AppComponent implements OnInit {

    ngOnInit() {
        $(document).on('click', '[href="#"]', e => e.preventDefault());
    }

    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    // @HostBinding('style.position') position = 'absolute';
}
