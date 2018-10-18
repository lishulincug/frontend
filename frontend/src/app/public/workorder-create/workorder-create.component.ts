import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, AfterViewChecked} from '@angular/core';
import {WorkOrder} from "../../domain/workOrder.domain";
import {Alarm} from "../../domain/alarm.domain";
import {WorkOrderStatus} from "../../domain/workOrderStatus.domain";
import {WorkOrderCreateService} from "./workorder-create.service";
import {Patroller} from "../../domain/patroller.domain";
import {AlarmWithPosition} from "../../domain/alarmWithPosition.domain";

declare var $: any;
declare var layer: any;
declare var laydate: any;

@Component({
    selector: 'workorder-create',
    templateUrl: './workorder-create.component.html',
    styleUrls: ['./workorder-create.component.scss'],

})
export class WorkorderCreateComponent implements OnInit, OnDestroy, AfterViewChecked {
    constructor(private workOrderCreateService: WorkOrderCreateService) {
    }
    public _showModel: boolean = false;
    public _alarm: AlarmWithPosition = new AlarmWithPosition();
    public finishTime;

    @Input()
    set showModel(value: boolean) {
        this._showModel = value;
    }

    @Input()
    set alarm(alarm: AlarmWithPosition) {
        this._alarm = alarm;
    }

    get alarm() {
        return this._alarm;
    }

    get showModel() {
        return this._showModel;
    }
    @Output() close = new EventEmitter();
    @Output() created = new EventEmitter();



    //保存工单
    createWorkOrder() {
        if (this.checkWorkOrder()) {
            this.workOrderCreateService.createWorkOrder(this.alarm,this.finishTime).then((res) => {
                if(res.success){
                    layer.msg(res.msg);
                    this.created.emit();
                    this.closeDialog();
                }
            })
        }
    }

    checkWorkOrder() {
        if (this.finishTime == undefined) {
            layer.msg("请选择完成时间", {icon: 5, time: 1000});
            return false;
        }
        return true;
    }

    //关闭对话框
    closeDialog() {
        this.close.emit();
    }

    ngAfterViewChecked() {
        laydate.render({
            elem: '#finish_time',
            type: 'datetime',
            done: function (value, date) {
                this.finishTime = value;
            }.bind(this)
        });
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

}
