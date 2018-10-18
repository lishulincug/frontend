import {BaseService} from "../../../../core/base.service";
import {Paginator} from "../../../../domain/paginator.domain";
import {Sensor} from "../../../../domain/sensor.domain";
import {SensorThreshold} from "../../../../domain/sensorThreshold.domain";

export class ThresholdManagementService extends BaseService {

    private path: string = "sensor-threshold";

    searchSensor(example: Sensor, paginator: Paginator){
        let condition = "?pageNo=" + paginator.pageNo + "&pageSize=" + paginator.pageSize;
        return this.get(this.path + condition);
    }

    searchSensorThreshold(sensorId: string){
        return this.get("/sensor/" + sensorId + "/threshold");
    }

    saveEdit(data: SensorThreshold){
        let saveData = {
            "sensorId": data.sensorId,
            "prewarningValueFrom": data.prewarning.valueFrom,
            "prewarningValueTo": data.prewarning.valueTo,
            "warningValueFrom": data.warning.valueFrom,
            "warningValueTo": data.warning.valueTo
        }
        return this.put(this.path, saveData);
    }
}