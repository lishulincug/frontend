import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ScheduledPatrolPlan} from "../../../../domain/scheduled-patrol-plan.domain";
import {Paginator} from "../../../../domain/paginator.domain";
import {WeekdaySchedule} from "../../../../domain/weekday-schedule.domain";
declare var $: any;
declare var layer: any;

@Component({
    selector: 'scheduledpatrolplan-list',
    templateUrl: './scheduledpatrolplan-list.component.html',
    styleUrls: ['./scheduledpatrolplan-list.component.scss'],

})
export class ScheduledpatrolplanListComponent implements OnInit, OnDestroy {

    public _exampleList: ScheduledPatrolPlan[] = [];
    public _paginator: Paginator = new Paginator(1, 10);
    public weekdays: any;

    @Input() set paginator(value: Paginator) {
        this._paginator = value;
    }
    get paginator(){
        return this._paginator;
    }
    @Input() set exampleList(value: ScheduledPatrolPlan[]) {
        this.weekdays = new WeekdaySchedule().getList();
        this._exampleList = value;
    }
    get exampleList() {
        return this._exampleList;
    }

    @Output() openEE =  new EventEmitter();
    edit(value: ScheduledPatrolPlan) {
        this.openEE.emit(value);
    }

    @Output() deleteIdEE = new EventEmitter();
    deleteId(id: string) {
        layer.confirm('确定要删除该巡检计划吗？',e =>{
            this.deleteIdEE.emit(id);
        });

    }
    @Output() pageChangedEE = new EventEmitter();
    pageChanged(paginator: Paginator){

        this.pageChangedEE.emit(paginator);
    }
    constructor() {
    }
    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }
    public listNum(i) {
        return i + 1 + (this.paginator.pageNo - 1) * this.paginator.pageSize;
    }
    showSchedule (id: number) {
        let name = "";
        this.weekdays.map((e, index)=> {
            if (index == id) {
                name = e;
            }
        });
        return name;
    }
}
