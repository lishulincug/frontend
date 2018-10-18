import { Component, OnInit, OnDestroy, EventEmitter, ChangeDetectorRef, ViewChild, Input, Output } from '@angular/core';
import {Paginator} from "../../../../domain/paginator.domain";
import {Sensor} from "../../../../domain/sensor.domain";

@Component({
    selector: 'threshold-list',
    templateUrl: './threshold-list.component.html',
    styleUrls: ['./threshold-list.component.scss']
})
export class ThresholdListComponent implements OnInit, OnDestroy {

    public _paginator: Paginator = new Paginator(1, 10);
    public _sensorList: Array<Sensor> = [];

    @Input() set paginator(value: Paginator) {
        this._paginator = value;
    }

    @Input() set sensorList(value: Array<Sensor>) {
        this._sensorList = value;
    }

    @Output() pageChange = new EventEmitter();
    @Output() editEvent = new EventEmitter();

    get paginator(){
        return this._paginator;
    }

    get sensorList(){
        return this._sensorList;
    }

    public pageChanged(paginator: Paginator){
        this.pageChange.emit(paginator);
    }

    setThreshold(value: string){
        this.editEvent.emit(value);
    }

    ngOnInit() {}

    ngOnDestroy(): void {}

}