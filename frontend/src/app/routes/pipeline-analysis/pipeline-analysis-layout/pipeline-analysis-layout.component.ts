import {Component, OnInit, OnDestroy} from '@angular/core';
import {SettingsService} from "../../../core/settings/settings.service";
import {PrivillegeService} from "../../../core/privillege.service";
import {Router} from "@angular/router";

declare var $:any;
@Component({
    selector: 'app-pipeline-analysis-layout',
    templateUrl: './pipeline-analysis-layout.component.html',
    styleUrls: ['./pipeline-analysis-layout.component.scss']
})
export class PipelineAnalysisLayoutComponent implements OnInit, OnDestroy {

    constructor(
        public settings: SettingsService,
        public privillegeService: PrivillegeService,
        public router: Router
    ) {}

    public sub_nav_list = [];

    getSubList() {
        let sub_nav_list = new Array();
        if (this.privillegeService.checkPrivillege('admin/pipeline/pipelinestats')){
            let obj = {};
            obj['name'] = '管网统计';
            obj['link'] = '/pipeline-analysis/statistics';
            sub_nav_list.push(obj);
        }
        this.sub_nav_list = sub_nav_list;
    }
    ngOnInit() {
        this.getSubList();
    }


    ngOnDestroy(): void {

    }

}
