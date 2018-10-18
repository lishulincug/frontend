
import {BaseService} from "../../../core/base.service";
import {Paginator} from "../../../domain/paginator.domain";
import {Fault} from "../../../domain/fault.domain";


export class FaultService extends BaseService {
    private faultPath: String = "fault/";
    //private alarmPath: String = "alarm/";

    //故障检索
    searchAlarm(example: Fault, paginator: Paginator): Promise<any>{
        let condition = "?pageNo=" + paginator.pageNo + "&pageSize=" + paginator.pageSize;
        if (example.faultType != null) {
            condition += "&type=" + example.faultType;
        }
        return this.get(this.faultPath + 'list' + condition);
    }
    // //故障检索
    // getAlarmList( paginator: Paginator): Promise<Response>{
    //     let condition = "?pageNo=" + paginator.pageNo + "&pageSize=" + paginator.pageSize;
    //     return this.get(this.alarmPath + condition);
    // }
}
