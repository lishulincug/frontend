import {ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Input, Output} from "@angular/core";
import {Paginator} from "../../../../domain/paginator.domain";
import {Sensor} from "../../../../domain/sensor.domain";



declare var layer: any;
@Component({
    selector: 'sensor-list-index',
    templateUrl: './sensor-list.component.html',

})
export class SensorListComponent implements OnInit, OnDestroy {

    public _paginator: Paginator = new Paginator(1, 10);
    public showEdit: Boolean = false;
    public showDelete: Boolean = false;
    public _sensorList: Sensor[] = [new Sensor()];
    public sensor: Sensor = new Sensor();
    public id: string = "";

    constructor(
        private changeDetectorRef: ChangeDetectorRef) {
    }

    @Input() set sensorList(value: Sensor[]){
        this._sensorList = value;
    }

    @Output() pageChange = new EventEmitter();

    @Output() editSensor= new EventEmitter();

    @Output() deleteSensor= new EventEmitter();

    @Input() paginator;

    ngOnInit() {

    }

    public listNum(i) {
        return i + 1 + (this.paginator.pageNo - 1) * this.paginator.pageSize;
    }

    public pageChanged(paginator: Paginator){
        this.pageChange.emit(paginator);
    }

    public showEditModel(sensor: Sensor) {
        this.showEdit = true;
        this.sensor = sensor;
    }

    public closeEditModel() {
        this.showEdit = false;
    }

    public saveEdit(sensor: Sensor) {
        this.sensor = new Sensor();
        this.showEdit = false;
        this.editSensor.emit(sensor);
    }

    public showDeleteModel(id: string) {
        this.showDelete = true;
        this.id = id;
    }

    public closeDeleteModel() {
        this.showDelete = false;
        this.id = "";
    }

    public delete() {
        this.showDelete = false;
        this.deleteSensor.emit(this.id);
        this.id = "";
    }
    ngOnDestroy(): void {}
}
