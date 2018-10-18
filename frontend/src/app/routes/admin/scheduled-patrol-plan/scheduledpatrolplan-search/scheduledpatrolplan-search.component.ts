import { Component, OnInit, OnDestroy, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'scheduledpatrolplan-search',
	templateUrl: './scheduledpatrolplan-search.component.html',
	styleUrls: ['./scheduledpatrolplan-search.component.scss']
})
export class ScheduledpatrolplanSearchComponent implements OnInit, OnDestroy {

    constructor() {
    }
    @Output() addEE= new EventEmitter();
    add() {
        this.addEE.emit();
    }
	ngOnInit() {
    }

	ngOnDestroy(): void {}

}
