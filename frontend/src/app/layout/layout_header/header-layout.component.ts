import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {SettingsService} from "../../core/settings/settings.service";

declare var $: any;

@Component({
    selector: 'app-header-layout',
    templateUrl: './header-layout.component.html',
    styleUrls: ['./header-layout.component.scss']
})
export class HeaderLayoutComponent {

    constructor() {
    }

    ngAfterViewChecked() {
        // this.settingService.scrollInit('app-left , .content_inner');
    }

    ngOnInit() {
    }

}
