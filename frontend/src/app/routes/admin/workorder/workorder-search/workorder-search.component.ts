import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import {Dic} from "../../../../domain/dic.domain";
import {WorkorderAddeditService} from "../../../../public/workorder-addedit/workorder-addedit.service";

@Component({
	selector: 'workorder-search',
	templateUrl: './workorder-search.component.html',
	styleUrls: ['./workorder-search.component.scss']
})
export class WorkorderSearchComponent implements OnInit, OnDestroy {
    public wokerorderStatus: any;
    constructor( private workorderAddeditService: WorkorderAddeditService) {
    }
    public selectedType: string = '';
    getWorkOrderStatus() {
        this.workorderAddeditService.getStatusData().then(res => {
            if (res.success) {
                this.wokerorderStatus = res.data;
                //console.log(res.data)
            }

        });
    }
    @Input() set selectedTypeModel(value: string){
        this.selectedType = value;
    }
    get selectedTypeModel(){
        return this.selectedType;
    }
    @Output() getsearcheEvent = new EventEmitter();
    typeChanged(value: string) {
        this.selectedType = value;
        this.getsearcheEvent.emit(value);
    }
	ngOnInit() {
        this.getWorkOrderStatus();
    }

	ngOnDestroy(): void {}

}
