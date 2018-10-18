import {BaseService} from "../../core/base.service";
import {Response} from "../../domain/response.domain";
import {WorkOrder} from "../../domain/workOrder.domain";
import {Alarm} from "../../domain/alarm.domain";
import {AlarmWithPosition} from "../../domain/alarmWithPosition.domain";

export class WorkOrderCreateService extends BaseService {

    private path: String = "workorder";

    public createWorkOrder(alarm:AlarmWithPosition, finishTime): Promise<Response> {
        return this.post(this.path + '/saveAdd',{alarmId:alarm.id,finishTime:finishTime});
    }

}
