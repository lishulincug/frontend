import {ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Input, Output} from "@angular/core";
import {Paginator} from "../../../../domain/paginator.domain";



declare var layer: any;
@Component({
    selector: 'sensor-del-index',
    templateUrl: './sensor-del.component.html',

})
export class SensorDelComponent implements OnInit, OnDestroy {

    public paginator: Paginator = new Paginator(1, 10);
    public showModal: Boolean = false;

    @Input() showDelete;

    @Output() closeDelete = new EventEmitter();

    @Output() delete = new EventEmitter();

    constructor(
        private changeDetectorRef: ChangeDetectorRef) {
    }

    ngOnInit() {

    }

    closeDeleteModel() {
        this.closeDelete.emit();
    }

    deleteSensor() {
        this.delete.emit();
    }

    ngOnDestroy(): void {}
}
