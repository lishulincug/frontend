import {BaseService} from "../../../core/base.service";
import {Paginator} from "../../../domain/paginator.domain";
import {ApiResponse} from "../../../domain/api-response.domain";
import {PagedResponse} from "../../../domain/paged-response";
import {PatrolWorkorder} from "../../../domain/patrol-workorder.domain";
import {WorkOrderStatus} from "../../../domain/workOrderStatus.domain";

export class PatrolworkorderService extends BaseService {
    private path: string = "workorder/";

    getList(example: any, paginator: Paginator): Promise<ApiResponse<PagedResponse<PatrolWorkorder[]>>> {
        let condition = "?pageNo=" + paginator.pageNo + "&pageSize=" + paginator.pageSize;

        return this.get(this.path + "patrolplan/" + condition);
    }

    public getStatusData(): Promise<ApiResponse<WorkOrderStatus[]>> {
        return this.get(this.path + 'status/');
    }
}
