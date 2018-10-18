import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {PatrolWorkorder} from "../../../../domain/patrol-workorder.domain";
import {Paginator} from "../../../../domain/paginator.domain";
import {WorkOrderStatus} from "../../../../domain/workOrderStatus.domain";
import {UserService} from "../../../login/user.service";



declare var $: any;
declare var layer: any;

@Component({
    selector: 'patrolworkorder-list',
    templateUrl: './patrolworkorder-list.component.html',
    styleUrls: ['./patrolworkorder-list.component.scss'],

})
export class PatrolworkorderListComponent implements OnInit, OnDestroy {
    public _exampleList: PatrolWorkorder[] = [];
    public _paginator: Paginator = new Paginator(1, 10);
    public _statusList: WorkOrderStatus[] = [];
    public myrole: string;
    @Input() set statusList(value: WorkOrderStatus[]) {
        this._statusList = value;
    }
    get statusList(){
        return this._statusList;
    }
    @Input() set exampleList(value: PatrolWorkorder[]) {
        this._exampleList = value;
    }
    get exampleList(){
        return this._exampleList;
    }
    @Input() set paginator(value: Paginator) {
        this._paginator = value;
    }
    get paginator(){
        return this._paginator;
    }
    constructor(public userService: UserService) {
    }
    ngOnDestroy(): void {
    }
    ngOnInit(): void {
        this.myrole = this.userService.user.role.code;
    }
    public listNum(i) {
        return i + 1 + (this.paginator.pageNo - 1) * this.paginator.pageSize;
    }

    getWorkOrderStatusName(value: string) {
        let name = "";
        this.statusList.map(e=> {
            if (value == e.code) {
                name = e.name;
            }
        })

        return name;
    }
}
