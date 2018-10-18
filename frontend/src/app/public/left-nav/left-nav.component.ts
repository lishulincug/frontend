import {Component, OnInit, OnDestroy,Input} from '@angular/core';
import {SettingsService} from "../../core/settings/settings.service";
import {PrivillegeService} from "../../core/privillege.service";
import {Router} from "@angular/router";

declare var $: any;

@Component({
    selector: 'left-nav',
    templateUrl: './left-nav.component.html',
    styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit, OnDestroy {




    constructor(public settings: SettingsService,
                public privillegeService: PrivillegeService,
                public router: Router,) {
    }
    public _sub_nav_list;
    @Input() set sub_nav_list(value) {
        this._sub_nav_list = value;
    };
    get sub_nav_list() {
        return this._sub_nav_list;
    }
    ngOnInit() {

        this.bindEvent()
    }
    bindEvent(){
        $(document).off('click', '.sub_nav > .item >.name');
        $(document).on('click', '.sub_nav > .item >.name',function () {
            $(this).next('.children').slideToggle();
        } )
    }
    public checkChildrenExist(name:string,obj:object){
        return obj.hasOwnProperty(name)
    }
    ngOnDestroy(): void {
    }

}
