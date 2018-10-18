import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild } from '@angular/core';
import {PipelineManagementService} from "../../pipeline/pipeline-management/pipeline-management.service";
import {Sensor} from "../../../../domain/sensor.domain";
import {Paginator} from "../../../../domain/paginator.domain";
import {ThresholdManagementService} from "./threshold-management.service";
import {SensorThreshold} from "../../../../domain/sensorThreshold.domain";

declare var $: any;
declare var layer: any;

@Component({
    selector: 'threshold-management',
    templateUrl: './threshold-management.component.html',
    styleUrls: ['./threshold-management.component.scss']
})
export class ThresholdManagementComponent implements OnInit, OnDestroy {

    public sensor: Sensor = new Sensor();
    public sensorList: Array<Sensor> = [];
    public paginator: Paginator = new Paginator(1, 10);
    public showEditor: boolean = false;
    public editorSensorThreshold: SensorThreshold = new SensorThreshold();

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private thresholdManagementService: ThresholdManagementService
    ) {}

    getSensorList(){
        this.thresholdManagementService.searchSensor(this.sensor, this.paginator).then(res => {
            if (res.data != null) {
                this.sensorList = res.data.data;
                this.paginator.totalResults = res.data.page.totalResults;
            }
        });
    }

    //分页切换
    pageChanged(paginator: Paginator){
        this.paginator = paginator;
        this.thresholdManagementService.searchSensor(this.sensor, this.paginator).then(res => {
            if (res.data != null) {
                this.sensorList = res.data.data;
                this.paginator.totalResults = res.data.page.totalResults;
            }
        });
    }

    edit(sensorId: string){
        this.thresholdManagementService.searchSensorThreshold(sensorId).then(res=>{
            if(res.success && res.data != null){
                this.editorSensorThreshold = res.data;
            }
            else{
                this.editorSensorThreshold.sensorId = sensorId;
            }
            this.showEditor = true;
        });
    }

    cancelEdit(value){
        this.showEditor = false;
        this.editorSensorThreshold = new SensorThreshold();
    }

    saveEdit(value: SensorThreshold){
        this.thresholdManagementService.saveEdit(value).then(res=>{
            layer.msg(res.msg,{time:1000},function(){
                this.getSensorList();
                this.showEditor = false;
            }.bind(this));
        });
    }

    ngOnInit() {
        this.getSensorList();
    }

    ngOnDestroy(): void {}

}
