import { BaseService } from "../../../core/base.service";
import {Response} from "../../../domain/response.domain";
import {Paginator} from "../../../domain/paginator.domain";

export class SensorService extends BaseService {

    private path: string = "sensor/";

    getSensorList(paginator: Paginator): Promise<any> {
        let condition = '&page=' + paginator.pageNo + '&size=' + paginator.pageSize;
        return this.get(this.path + "?" +condition);
    }

    add(data: any): Promise<Response> {
        return this.post(this.path, data );
    }

    edit(data: any): Promise<any> {
        let condition = data.id;
        delete data.id;
        return this.put(this.path + condition, data);
    }

    del(condition: string): Promise<any> {
        return this.delete(this.path + condition);
    }

    getRole(): Promise<any> {
        return this.get("role/");
    }

    getRoleName(code: string): Promise<any> {
        return this.get("role/code/" + code);
    }

}
