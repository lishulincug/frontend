import { Component, OnInit, OnDestroy, EventEmitter, Input, Output, ChangeDetectorRef, ViewChild } from '@angular/core';
import {FaultType} from "../../../../domain/faultType.domain";
import {Fault} from "../../../../domain/fault.domain";
import {FaultDrillService} from "./fault-drill.service";
import {PipelinePoint} from "../../../../domain/pipelinePoint.domain";
import {Pipeline} from "../../../../domain/pipeline.domain";
import {Target} from "../../../../domain/target.domain";


declare var layer: any;

@Component({
    selector: 'fault-drill',
    templateUrl: './fault-drill.component.html',
    styleUrls: ['./fault-drill.component.scss']
})
export class FaultDrillComponent implements OnInit, OnDestroy {

    public faultType: FaultType = new FaultType();
    public _showDrill: Boolean = false;
    public pipelineList: Array<Pipeline> = [];
    public pipelinePointList: Array<PipelinePoint> = [];
    public _showPipelineList: boolean = true;
    public _showPipelinePointList: boolean = false;
    public fault: Fault = new Fault();
    public targetType: string = 'pipeline';
    public selectedPipelineId: number = 0;
    public selectedPipelinePointId: number = 0;

    @Output() created = new EventEmitter();

    constructor(
        private faultDrillService: FaultDrillService
    ) {
    }

    drill(){
        this._showDrill = true;
        this.targetType = 'pipeline';
        this.selectedPipelineId = 0;
        this.selectedPipelinePointId = 0;
        this.fault.faultType = '';
        this.fault.description = '';
    }

    getTargetList(){
        if(this.targetType == 'pipeline'){
            this._showPipelineList = true;
            this._showPipelinePointList = false;
        }
        if(this.targetType == 'pipelinePoint'){
            this._showPipelineList = false;
            this._showPipelinePointList = true;
        }
    }

    closeDialog(){
        this._showDrill = false;
    }

    saveFault() {
        let target = new Target();
        if (this.targetType == 'pipeline') {
            target.id = this.selectedPipelineId;
            target.type = "pipeline";
        }
        console.log('111sss11');
        if (this.targetType == 'pipelinePoint') {
            target.id = this.selectedPipelinePointId;
            target.type = "pipelinePoint";
        }
        this.fault.target = target;
        //this.fault.target.type = this.targetType;
        if (this.checkAlarm()) {
            this.faultDrillService.saveAlarm(this.fault).then(res=> {
                if(res.success){
                    this._showDrill = false;
                    layer.msg("故障创建成功", {icon:1, time:1000});
                    this.created.emit();
                }
            });
        }
    }

    checkAlarm(){
        if(this.fault.target.id == 0){
            layer.msg("请选择故障对象", {icon:5, time:1000});
            return false;
        }
        if(this.fault.faultType == ''){
            layer.msg("请选择故障类型", {icon:5, time:1000});
            return false;
        }
        if(this.fault.description == ''){
            layer.msg("请填写故障描述", {icon:5, time:1000});
            return false;
        }
        return true;
    }

    getPipelineList(){
        this.faultDrillService.getPipeline().then(res=>{
            if (res.data != null) {
                this.pipelineList = res.data.data;
            }
        });
    }

    getPipelinePointList(){
        this.faultDrillService.getPipelinePoint().then(res=>{
            if (res.data != null) {
                this.pipelinePointList = res.data.data;
            }
        });
    }

    ngOnInit() {
        this.getPipelineList();
        this.getPipelinePointList();
    }

    ngOnDestroy(): void {}

}
