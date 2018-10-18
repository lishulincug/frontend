
import {BaseService} from "../../core/base.service";
import {Response} from "../../domain/response.domain";

export class WorkorderAddeditService extends BaseService {

	private path: String = "workorder";

	public postsave(data: any): Promise<any> {
		return this.post(this.path + '/save', data);
	}

	public getStatusData(): Promise<Response> {
		return this.get(this.path + '/status');
	}

    public getPatroller(pageSize): Promise<Response> {
        return this.get('patroller/list?' + 'pageSize=' + pageSize);
    }
}

