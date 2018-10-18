import {ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {Paginator} from "../../../domain/paginator.domain";
import {Fault} from "../../../domain/fault.domain";
import {FaultType} from "../../../domain/faultType.domain";
import {FaultService} from "./fault.service";
import {LoginService} from "../../login/login.service";


declare var layer: any;
@Component({
    selector: 'fault-index',
    templateUrl: './fault.component.html',

})
export class FaultComponent implements OnInit, OnDestroy {

    public faultType: FaultType = new FaultType();
    public faultList: Fault[] = [];
    public fault: Fault = new Fault();
    public paginator: Paginator = new Paginator(1, 10);
    public showModal: Boolean = false;

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private faultService: FaultService,
        private loginService: LoginService) {
    }

    //默认加载故障列表
    getAlarmList(){
        this.faultService.searchAlarm(this.fault, this.paginator).then(res=>{
            if (res.data != null) {
                this.faultList = res.data.data;
                this.paginator.totalResults = res.data.page.totalResults;
            }
        });
    }
    getDataList(){
        this.getAlarmList();
    }
    //故障类型切换
    typeSelected(selectedAlarmType: any){
        if(selectedAlarmType == ''){
            selectedAlarmType = null;
        }
        this.fault.faultType = selectedAlarmType;
        this.getAlarmList();
    }

    //分页切换
    pageChanged(paginator: Paginator){
        this.faultService.searchAlarm(this.fault, this.paginator).then(res=>{
            if (res.data != null) {
                this.faultList = res.data.data;
                this.paginator.totalResults = res.data.page.totalResults;
            }
        });
    }

    alarmCreated(){
        this.getAlarmList();
    }

    ngOnInit() {
        this.getAlarmList();
    }

    ngOnDestroy(): void {}
}
