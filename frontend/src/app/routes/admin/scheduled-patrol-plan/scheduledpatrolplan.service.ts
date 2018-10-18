import {BaseService} from "../../../core/base.service";
import {ScheduledPatrolPlan} from "../../../domain/scheduled-patrol-plan.domain";
import {Paginator} from "../../../domain/paginator.domain";
import {ApiResponse} from "../../../domain/api-response.domain";
import {PagedResponse} from "../../../domain/paged-response";

export class ScheduledpatrolplanService extends BaseService {
    private path: string = "scheduledpatrolplan/";

    getList(example: ScheduledPatrolPlan, paginator: Paginator): Promise<ApiResponse<PagedResponse<ScheduledPatrolPlan[]>>> {
        let condition = "?pageNo=" + paginator.pageNo + "&pageSize=" + paginator.pageSize;
        return this.get(this.path + condition);
    }
    add(data: ScheduledPatrolPlan): Promise<ApiResponse<ScheduledPatrolPlan>> {
        return this.post(this.path, data);
    }
    edit(data: ScheduledPatrolPlan): Promise<ApiResponse<ScheduledPatrolPlan>> {
        let condition = this.path + data.id;
        return this.put(condition, data);
    }
    del(id: string): Promise<ApiResponse<ScheduledPatrolPlan>> {
        return this.delete(this.path +  id);
    }
}
