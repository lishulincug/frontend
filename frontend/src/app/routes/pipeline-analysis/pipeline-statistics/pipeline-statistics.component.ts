import { Component, OnInit } from '@angular/core';
import { PipelineStatisticsService } from "./pipeline-statistics.service";
import { PipelineStats } from "../../../domain/pipelineStats.domain";
import {DataStats} from "../../../domain/dataStats.domain";
declare var $: any;
declare var echarts: any;
@Component({
    selector: 'app-pipeline-statistics',
    templateUrl: './pipeline-statistics.component.html',
    // styleUrls: ['./warning_sinulation.component.scss']
})
export class PipelineStatisticsComponent implements OnInit {

    constructor(private pipelineStatisticsService: PipelineStatisticsService) { }

    public materialId:string = "materialId";
    public diameterId:string = "diameterId";
    public materialName:string = "管道材质";
    public diameterName:string = "管道口径";

    public statsMaterial: DataStats[] = [new DataStats()];
    public statsDiameter: DataStats[] = [new DataStats()];


    ngOnInit() {
        this.getPipelineStats();
    }

    getPipelineStats() {
        this.pipelineStatisticsService.getPipelineStats()
        .then(res => {
            this.statsMaterial = res.data.material;
            this.statsDiameter = res.data.diameter;
        })
    }
}
