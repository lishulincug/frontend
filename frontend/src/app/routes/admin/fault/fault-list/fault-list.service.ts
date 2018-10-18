import {BaseService} from "../../../../core/base.service";
import {WorkOrder} from "../../../../domain/workOrder.domain";
import {Response} from "../../../../domain/response.domain";


export class FaultListService extends BaseService{

    saveWorkOrder(workorder: WorkOrder):Promise<Response>{
       // var dateAsString = this.timeTrans(workorder.finishTime);

        var data = {
           // "workorderId": workorder.id,
            //"alarmId": workorder.alarm.id,
           // "finishTime": workorder.finishTime,
            //"status": workorder.status,
           // "assignedId": workorder.assigned.id
        };
        return this.post('workorder/saveAdd', data);
    }

    timeTrans(time){
        var date = new Date(time);//如果date为13位不需要乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
        return Y+M+D+h+m+s;
    }
}
