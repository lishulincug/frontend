import {BaseService} from "../../../../core/base.service";
import {PipelinePoint} from "../../../../domain/pipelinePoint.domain";
import {Paginator} from "../../../../domain/paginator.domain";
import {Response} from "../../../../domain/response.domain";

export class PipelinepointManagementService extends BaseService {

    private path: String = "pipelinepoint";

    searchPipelinepoint(example: PipelinePoint, paginator: Paginator):Promise<Response>{
        let condition = "?pageNo=" + paginator.pageNo + "&pageSize=" + paginator.pageSize;
        if(example.serialNumber != null){
            condition += "&serialNumber=" + example.serialNumber;
        }
        return this.get(this.path + condition);
    }

}
