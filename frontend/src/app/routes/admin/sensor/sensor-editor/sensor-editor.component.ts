import {ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Input, Output} from "@angular/core";
import {Paginator} from "../../../../domain/paginator.domain";
import {Sensor} from "../../../../domain/sensor.domain";



declare var layer: any;
@Component({
    selector: 'sensor-editor-index',
    templateUrl: './sensor-editor.component.html',

})
export class SensorEditorComponent implements OnInit, OnDestroy {

    public paginator: Paginator = new Paginator(1, 10);
    public _showEdit: Boolean = false;

    @Input() set showEdit(value: boolean) {
        this._showEdit = value;
    }

    @Input()  sensor: Sensor;

    @Output() closeEdit = new EventEmitter();

    @Output() saveEdit = new EventEmitter();

    constructor(
        private changeDetectorRef: ChangeDetectorRef) {
    }

    ngOnInit() {

    }

    public saveSensor() {
        this.saveEdit.emit(this.sensor);
    }

    public closeEditModel() {
        this.sensor = new Sensor();
        this.closeEdit.emit();
    }

    ngOnDestroy(): void {}
}
