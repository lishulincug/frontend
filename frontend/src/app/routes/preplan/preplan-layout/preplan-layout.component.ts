import {Component, OnInit, OnDestroy} from '@angular/core';
import {SettingsService} from "../../../core/settings/settings.service";
import {PrivillegeService} from "../../../core/privillege.service";
import {Router} from "@angular/router";
import {UserService} from "../../login/user.service";

declare var $: any;

@Component({
    selector: 'preplan-layout',
    templateUrl: './preplan-layout.component.html',
    styleUrls: ['./preplan-layout.component.scss']
})
export class PreplanLayoutComponent implements OnInit, OnDestroy {

    constructor(public settings: SettingsService,
                public privillegeService: PrivillegeService,
                public router: Router,
                public userService: UserService) {
    }

    user = {};
    public sub_nav_list = [];

    getSubList() {

        let obj6 = {
            name: "预案管理",
            link: "/preplan/list"
        };
        this.sub_nav_list.push(obj6)
    }

    ngOnInit() {
        this.user = this.userService.user;
        this.getSubList();
    }


    ngOnDestroy(): void {

    }

}
