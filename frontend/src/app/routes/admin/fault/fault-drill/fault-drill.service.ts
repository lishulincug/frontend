import {BaseService} from "../../../../core/base.service";
import {Response} from "../../../../domain/response.domain";
import {Fault} from "../../../../domain/fault.domain";

export class FaultDrillService extends BaseService{

    getPipeline(): Promise<Response>{
        let condition = "?pageNo=1&pageSize=1000";
        return this.get('pipeline' + condition);
    }

    getPipelinePoint(): Promise<Response>{
        let condition = "?pageNo=1&pageSize=1000";
        return this.get('pipelinepoint' + condition);
    }

    saveAlarm(fault: Fault): Promise<Response>{
        var data= {
            "target_type": fault.target.type,
            "target_id": fault.target.id,
            "type": fault.faultType,
            "description": fault.description
        };
        return this.post('fault/saveAdd', data);
    }
}
