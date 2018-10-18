import { Component, OnInit } from '@angular/core';
import {WorkorderStatsService} from "./workorder-stats.service";
import {WorkOrderStats} from "../../../../domain/workOrderStats.domain";
import {UserService} from "../../../login/user.service";
import {Dic} from "../../../../domain/dic.domain";

declare var $: any;
declare var echarts: any;
@Component({
    selector: 'workorderstats',
    templateUrl: './workorder-stats.component.html',
    // styleUrls: ['./warning_sinulation.component.scss']
})
export class WorkorderStatsComponent implements OnInit {

    constructor(private workorderStatsService: WorkorderStatsService,protected userService:UserService) { }

    public workorderStats: WorkOrderStats = new WorkOrderStats();
    public workorderId:string = "workorderId";
    public workorderName:string = "工单类型统计";

    ngOnInit() {
        this.getWorkorderStats();
    }

    getWorkorderStats() {
        this.workorderStatsService.getWorkorderStats()
        .then(res => {
            var status = new Dic();
            res.data.status.forEach(
                item=>{
                    item.name = status.workorderStatus[item.name];
                }
            );
            this.workorderStats = res.data.status;
        })
    }
}
