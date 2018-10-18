import {Component, EventEmitter, Input, OnDestroy, OnInit, Output,AfterViewChecked} from '@angular/core';
import {WorkOrder} from "../../domain/workOrder.domain";
import {Alarm} from "../../domain/alarm.domain";
import {WorkOrderStatus} from "../../domain/workOrderStatus.domain";
import {WorkorderEditService} from "./workorder-edit.service";
import {Patroller} from "../../domain/patroller.domain";

declare var $: any;
declare var layer: any;
declare var laydate:any;

@Component({
    selector: 'workorder-edit',
    templateUrl: './workorder-edit.component.html',
    styleUrls: ['./workorder-edit.component.scss'],

})
export class WorkorderEditComponent implements OnInit, OnDestroy, AfterViewChecked{

    public _showEditModel:boolean = false;
    public _alarm: Alarm = new Alarm();
    public _workorder: WorkOrder = new WorkOrder();
    public workorderStatus: WorkOrderStatus[] = [];
    public patrollerList: Patroller[] = [];

    @Input() set showEditModel(value: boolean){
        this._showEditModel = value;
    }

    @Input() set alarm(value: Alarm){
        this._alarm = value;
    }

    @Input() set workorder(value: WorkOrder){
        this._workorder = value;
    }

    get alarm(){
        return this._alarm;
    }

    get workorder(){
        return this._workorder;
    }

    @Output() submit = new EventEmitter();
    @Output() close = new EventEmitter();

    constructor(
        private workorderEditService: WorkorderEditService
    ) {
    }

    //保存工单
    saveWorkOrder() {
        if (this.checkWorkOrder()) {
            this._showEditModel = false;
           // this._workorder.alarm.id = this._alarm.id;
            this.submit.emit(this._workorder);
        }
    }

    checkWorkOrder(){
        // if(this.workorder.finishTime == undefined){
        //     layer.msg("请选择完成时间", {icon:5, time:1000});
        //     return false;
        // }

        //if(this.workorder.status.length == 0){
        //    layer.msg("请选择工单状态", {icon:5, time:1000});
        //    return false;
        //}
        return true;
    }

    //关闭对话框
    closeDialog(){
        this._showEditModel = false;
        this.close.emit();
    }

    //获取工单状态
    getWorkOrderStatus(){
        this.workorderEditService.getStatus().then( res =>{
            if (res.success) {
                this.workorderStatus = res.data;
            }
        });
    }

    //获取巡检员列表
    getPatroller(){
        this.workorderEditService.getPatroller(100).then( res=>{
            if(res.success){
                this.patrollerList = res.data.data;
            }
        });
    }

    ngAfterViewChecked(){
        laydate.render({
            elem: '#finish_time',
            type: 'datetime',
            done: function(value, date) {
                this.workorder.finishTime = value;
            }.bind(this)
        });
    }

    ngOnInit(): void {
        this.getWorkOrderStatus();
        this.getPatroller();
    }

    ngOnDestroy(): void {}

}
