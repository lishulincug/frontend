import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";
import {Paginator} from "../../../../domain/paginator.domain";
import {Fault} from "../../../../domain/fault.domain";
import {PrivillegeService} from "../../../../core/privillege.service";
import {FaultType} from "../../../../domain/faultType.domain";
import {WorkOrder} from "../../../../domain/workOrder.domain";
import {FaultService} from "../fault.service";
import {HandleStatus} from "../../../../domain/handle-status.domain";
import {FaultListService} from "./fault-list.service";
import {Alarm} from "../../../../domain/alarm.domain";


declare var layer: any;
@Component({
    selector: 'fault-list',
    templateUrl: './fault-list.component.html',
    styleUrls: ['./fault-list.component.scss'],

})
export class FaultListComponent implements OnInit, OnDestroy {
    public _paginator: Paginator = new Paginator(1, 10);
    public _faultList: Fault[] = [];
    public faultType: FaultType = new FaultType();
    public currentAlarm: Fault = new Fault();
    public currentWorkOrder: WorkOrder = new WorkOrder();
    public showEditModel: Boolean = false;
    public handleStatus: HandleStatus = new HandleStatus();

    @Input() set paginator(value: Paginator) {
        this._paginator = value;
    }

    @Input() set faultList(value: Array<Fault>) {
        this._faultList = value;
    }

    @Output() pageChange = new EventEmitter();

    get paginator(){
        return this._paginator;
    }

    get faultList(){
        return this._faultList;
    }

    constructor(
        private faultService: FaultService, private faultListService: FaultListService,
    ) {
    }

    public pageChanged(paginator: Paginator){
        this.pageChange.emit(paginator);
    }

    public addWorkOrder(editAlarm: Fault){
        this.currentAlarm = editAlarm;
        this.currentWorkOrder.status = "pending";
        this.showEditModel = true;
    }

    public saveWorkOrder(workorder: WorkOrder){
        this.showEditModel = false;
        this.faultListService.saveWorkOrder(workorder).then(res=>{
            if(res.success){
                layer.msg("工单创建成功", {icon:1, time:1500});
                this.getDataList();
            }
            else{
                layer.msg(res.msg, {icon:5, time:1500});
            }
            this.currentWorkOrder = new WorkOrder();
            this.currentAlarm = new Fault();
        });
    }
    @Output() getDataListEE = new EventEmitter();
    getDataList(){
        this.getDataListEE.emit();
    }
    public closeWorkOrder(){
        this.showEditModel = false;
        this.currentWorkOrder = new WorkOrder();
        // this.currentAlarm = new Alarm();
    }

    ngOnInit() {}

    ngOnDestroy(): void {}
}
