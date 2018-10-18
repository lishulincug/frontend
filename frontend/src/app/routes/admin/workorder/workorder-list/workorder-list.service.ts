import {BaseService} from "../../../../core/base.service";
import {WorkOrder} from "../../../../domain/workOrder.domain";
import {Paginator} from "../../../../domain/paginator.domain";

export class WorkorderListService extends BaseService {

	private path: String = "workorder";
	getList(example: WorkOrder, paginator: Paginator): Promise<any>{
		let condition = "?pageNo=" + paginator.pageNo + "&pageSize=" + paginator.pageSize + "&status=" + example.status;
		return this.get(this.path + condition);
	}

    public postsave(data: any): Promise<any> {
        return this.post(this.path + '/save', data);
    }

}

