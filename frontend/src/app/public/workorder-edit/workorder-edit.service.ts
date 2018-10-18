import {BaseService} from "../../core/base.service";
import {Response} from "../../domain/response.domain";

export class WorkorderEditService extends BaseService{

    private path: String = "workorder";

    public getStatus(): Promise<Response> {
        return this.get(this.path + '/status');
    }

    public getPatroller(pageSize): Promise<Response> {
        return this.get('patroller/list?' + 'pageSize=' + pageSize);
    }

}
