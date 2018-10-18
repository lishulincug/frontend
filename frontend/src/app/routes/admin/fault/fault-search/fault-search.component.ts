import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";

import {isNullOrUndefined} from "util";
import {Fault} from "../../../../domain/fault.domain";
import {PrivillegeService} from "../../../../core/privillege.service";
import {FaultType} from "../../../../domain/faultType.domain";
@Component({
    selector: 'fault-search',
    templateUrl: './fault-search.component.html',
    styleUrls: ['./fault-search.component.scss'],

})
export class FaultSearchComponent implements OnInit, OnDestroy {

    public _faultType: FaultType;
    public selectedType: string = '';

    @Input() set faultType(value: FaultType){
        this._faultType = value;
    }

    get faultType(){
        return this._faultType;
    }

    @Output() selectedEvent = new EventEmitter();
    @Output() alarmCreatedEvent = new EventEmitter();

    typeChanged(alarmType: string){
        this.selectedType = alarmType;
        this.selectedEvent.emit(alarmType);
    }

    alarmCreated(){
        this.alarmCreatedEvent.emit();
    }


    ngOnInit() {}

    ngOnDestroy(): void {}
}
