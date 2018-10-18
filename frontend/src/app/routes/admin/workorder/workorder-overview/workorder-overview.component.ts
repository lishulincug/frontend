import { Component, OnInit } from '@angular/core';
import {WorkOrderOverviewService} from "./workorder-overview.service";



@Component({
    selector: 'workorder-overview',
    templateUrl: './workorder-overview.component.html',
    styleUrls: []
})
export class WorkOrderOverviewComponent implements OnInit {

    public datalist: any;
    constructor(private workOrderOverviewService: WorkOrderOverviewService) {
    }

    ngOnInit() {
        this.getstatusnumber();
    }
    getstatusnumber() {
        this.workOrderOverviewService.getstatusnumber().then(res=>{
            if (res.success) {
                this.datalist = res.data;
            }
        })
    }
}
