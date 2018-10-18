import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PatrolworkorderService} from "./patrolworkorder.service";
import {PatrolWorkorder} from "../../../domain/patrol-workorder.domain";
import {Paginator} from "../../../domain/paginator.domain";
import {WorkOrderStatus} from "../../../domain/workOrderStatus.domain";


declare var $: any;
declare var layer: any;

@Component({
	selector: 'patrolworkorder-index',
	templateUrl: './patrolworkorder.component.html',
	styleUrls: ['./patrolworkorder.component.scss'],

})
export class PatrolworkorderComponent implements OnInit, OnDestroy {
    public paginator: Paginator = new Paginator(1, 10);
    public exampleList: PatrolWorkorder[] = [];
    public statusList: WorkOrderStatus[] = [];

    constructor(private activeRoute: ActivatedRoute, private patrolworkorderService: PatrolworkorderService) {

    }
    getWorkOrderStatus() {
        this.patrolworkorderService.getStatusData().then(res => {
            if (res.success) {
                this.statusList = res.data;
            }

        });
    }
    getList() {
        this.patrolworkorderService.getList(new PatrolWorkorder(), this.paginator).then(res=> {
            if (res.success) {
                this.exampleList = res.data.data;
                this.paginator = res.data.page;
            }
        })
    }
	ngOnInit(): void {
        this.getList();
        this.getWorkOrderStatus();
	}

	ngOnDestroy(): void {
	}

}
