import {ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Input, Output} from "@angular/core";
import {Paginator} from "../../../../domain/paginator.domain";
import {Fault} from "../../../../domain/fault.domain";
import {Sensor} from "../../../../domain/sensor.domain";



declare var layer: any;
@Component({
    selector: 'sensor-add-index',
    templateUrl: './sensor-add.component.html',

})
export class SensorAddComponent implements OnInit, OnDestroy {

    public paginator: Paginator = new Paginator(1, 10);
    public _showAdd: Boolean = false;
    public sensor: Sensor = new Sensor();

    @Input() set showAdd(value: boolean) {
        this._showAdd = value;
    }

    @Output() closeAdd = new EventEmitter();

    @Output() addSensor = new EventEmitter();

    constructor(
        private changeDetectorRef: ChangeDetectorRef) {
    }

    ngOnInit() {

    }

    ngOnDestroy(): void {}

    closeAddModel() {
        this._showAdd = false;
        this.sensor = new Sensor();
        this.closeAdd.emit();
    }

    saveSensor() {
        this.addSensor.emit(this.sensor)
    }
}
