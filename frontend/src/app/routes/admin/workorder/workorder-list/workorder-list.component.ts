import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {WorkOrder} from "../../../../domain/workOrder.domain";
import {Paginator} from "../../../../domain/paginator.domain";
import {WorkorderListService} from "./workorder-list.service";
import {WorkorderAddeditService} from "../../../../public/workorder-addedit/workorder-addedit.service";
import {UserService} from "../../../login/user.service";
import {User} from "../../../../domain/user.domain";


declare var $: any;
declare var layer: any;

@Component({
    selector: 'workorder-list',
    templateUrl: './workorder-list.component.html',
    styleUrls: ['./workorder-list.component.scss'],

})
export class WorkorderListComponent implements OnInit, OnDestroy {

    public workorderlist: WorkOrder[] = [];
    public paginator: Paginator = new Paginator(1, 10);
    public wokerorderStatus: any;

    public workorder: WorkOrder = new WorkOrder();
    public myrole: string;

    constructor(private workorderlistService: WorkorderListService,
                private workorderAddeditService: WorkorderAddeditService,
                private userService: UserService) {


    }

    public listShow(value: Boolean) {
        if (value) {
            this.getList();
        }

    }
    public staticObj={};


    @Output() editEvent = new EventEmitter();

    public edit(value: WorkOrder) {
        this.editEvent.emit(value);
    }

    receiveworkorder(value: WorkOrder) {
        let data = {};
       // data['alarmid'] = value.alarm.id;
        data['status'] = 'processing';
        data['workorderid'] = value.id;
       // data['assigned_id'] = value.assigned.id;
        this.workorderlistService.postsave(data).then(res => {
            if (res.success) {
                this.getList();
                layer.msg(res.msg,{icon:1, time:1000});

            } else {
                layer.msg(res.msg,{icon:5, time:1000});
            }
        });
    }

    @Output() feedbackinfoEvent = new EventEmitter();

    feedbackinfo(value: number) {
        this.feedbackinfoEvent.emit(value);
    }

    @Output() feedbackaddEvent = new EventEmitter();

    feedback(value: number) {
        this.feedbackaddEvent.emit(value);
    }

    @Output() checkupworkorderEvent = new EventEmitter();

    //审查工单是否通过
    checkupworkorder(value: number) {
        this.checkupworkorderEvent.emit(value);
    }

    ngOnInit(): void {

        this.myrole = this.userService.user.role.code;
        this.getWorkOrderStatus();

        this.getList();
    }

    ngOnDestroy(): void {
    }

    getWorkOrderStatus() {
        this.workorderAddeditService.getStatusData().then(res => {
            if (res.success) {
                this.wokerorderStatus = res.data;
                this.wokerorderStatus.forEach(item => {
                    this.staticObj[item.code] = item.name;
                });
            }

        });
    }

    getList() {
        this.getWorkOrderStatus();
        this.workorderlistService.getList(this.workorder, this.paginator).then(res => {
            if (res.success) {
                this.workorderlist = res.data.data;
                this.paginator.totalResults = res.data.page.totalResults;
            }
        });
    }

    seachlist(value: string) {
        this.workorder.status = value;
        this.getList();

    }
    pageChanged(paginator: Paginator){
        this.paginator = paginator;
        this.getList();
    }
}
