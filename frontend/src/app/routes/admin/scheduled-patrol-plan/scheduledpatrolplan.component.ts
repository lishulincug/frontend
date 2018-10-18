import {Component, OnDestroy, OnInit} from '@angular/core';
import {ScheduledPatrolPlan} from "../../../domain/scheduled-patrol-plan.domain";
import {ScheduledpatrolplanService} from "./scheduledpatrolplan.service";
import {Paginator} from "../../../domain/paginator.domain";
import {isNullOrUndefined} from "util";


declare var $: any;
declare var layer: any;

@Component({
	selector: 'scheduledpatrolplan-index',
	templateUrl: './scheduledpatrolplan.component.html',
	styleUrls: ['./scheduledpatrolplan.component.scss'],

})
export class ScheduledpatrolplanComponent implements OnInit, OnDestroy {

    public searchData: ScheduledPatrolPlan = new ScheduledPatrolPlan();
    public paginator: Paginator = new Paginator(1, 10);
    public showModal: Boolean = false;
    public example: ScheduledPatrolPlan = new ScheduledPatrolPlan();
    public exampleList: ScheduledPatrolPlan[] = [];
    constructor(private scheduledpatrolplanService: ScheduledpatrolplanService) {
    }
    add() {
        this.example = new ScheduledPatrolPlan();
        this.showModal = true;
    }
    public open(value: ScheduledPatrolPlan) {
        this.example = value;
        this.showModal = true;
    }
    getList() {
        this.scheduledpatrolplanService.getList(this.searchData, this.paginator).then(res => {
            if (res.success) {
                this.exampleList = res.data.data;
                this.paginator = res.data.page;
            }else{
                layer.msg(res.msg);
            }
        });
    }
    public save(value: ScheduledPatrolPlan) {
        if (isNullOrUndefined(value.id) || value.id == '') {
            this.scheduledpatrolplanService.add(value).then( res => {
                if (res.success) {
                    this.getList();
                    layer.msg(res.msg);
                    this.close();
                }else {
                    layer.msg(res.msg);
                }
            });
        }else {
            this.scheduledpatrolplanService.edit(value).then( res => {
                if (res.success) {
                    this.getList();
                    layer.msg(res.msg);
                    this.close();
                }else {
                    layer.msg(res.msg);
                }
            });
        }

    }
    public close() {
        this.example = new ScheduledPatrolPlan();
        this.showModal = false;
    }
	ngOnInit(): void {
           this.getList();
	}

	ngOnDestroy(): void {
	}
    public deleteId(value: string): void {
        this.scheduledpatrolplanService.del(value).then( res => {
            if (res.success) {
                layer.msg(res.msg);
                this.getList();
            }else {
                layer.msg(res.msg);
            }
        });
    }

}
