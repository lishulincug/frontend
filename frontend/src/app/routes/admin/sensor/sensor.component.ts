import {ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {Paginator} from "../../../domain/paginator.domain";
import {Sensor} from "../../../domain/sensor.domain";
import {SensorService} from "./sensor.service";



declare var layer: any;
@Component({
    selector: 'sensor-index',
    templateUrl: './sensor.component.html',

})
export class SensorComponent implements OnInit, OnDestroy {

    public paginator: Paginator = new Paginator(1, 10);
    public showAdd: boolean =false;
    public sensorList: Sensor[] = [new Sensor()];

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private sensorService: SensorService) {
    }

    ngOnInit() {
        this.getSensorList();
    }

    ngOnDestroy(): void {}

    showAddModel() {
        this.showAdd = true;
        console.log(this.showAdd);
    }

    closeAddModel() {
        this.showAdd = false;
    }

    addSensor(sensor: Sensor) {
        this.sensorService.add(sensor).then(res => {
            if (res.success) {
                this.showAdd = false;
                this.getSensorList();
                layer.msg("设备创建成功", {icon:1, time:1000});
            }
        }).catch(res => {
            layer.msg("设备创建失败", {icon:1, time:1000});
        })
    }

    editSensor(sensor: Sensor) {
        this.sensorService.edit(sensor).then(res => {
            if (res.success) {
                this.getSensorList();
                layer.msg("设备更新成功", {icon:1, time:1000});
            }
        }).catch(res => {
            layer.msg("设备更新失败", {icon:1, time:1000});
        })
    }

    deleteSensor(id: string) {
        this.sensorService.del(id).then(res => {
            if (res.success) {
                this.getSensorList();
                layer.msg("设备删除成功", {icon:1, time:1000});
            }
        }).catch(res => {
            layer.msg("设备删除失败", {icon:1, time:1000});
        })
    }

    public getSensorList() {
        this.sensorService.getSensorList(this.paginator).then(res => {
            if(res.success) {
                this.sensorList = res.data.data;
                this.paginator = res.data.page;
            }
        })
    }

    //分页切换
    pageChanged(paginator: Paginator){
        this.sensorService.getSensorList(this.paginator).then(res => {
            if(res.success) {
                this.sensorList = res.data.data;
                this.paginator = res.data.page;
            }
        })
    }
}
