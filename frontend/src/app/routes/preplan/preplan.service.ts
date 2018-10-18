import {BaseService} from '../../core/base.service';
import {Response} from '../../domain/response.domain';
import {Paginator} from "../../domain/paginator.domain";
import {Preplan} from "../../domain/preplan.domain";
import {ApiResponse} from "../../domain/api-response.domain";
import {ApiPage} from "../../domain/api-page.domain";

export class PreplanService extends BaseService {
    private path: string = "preplan";

    getById(id: string): Promise<Response> {
        return this.get(this.path + '/' + id);
    }

    listByExample(paginator: Paginator = new Paginator(1, 10), example): Promise<ApiResponse<ApiPage<Preplan[]>>> {
        let condition = "?pageNo=" + paginator.pageNo + "&pageSize=" + paginator.pageSize;
        let formData = this.settings.joinObj(example);
        condition += formData == '' ? '' : formData;
        return this.get(this.path + '/list' + condition);
    }

    updateExample(example: Preplan): Promise<ApiResponse<any>> {
        return this.put(this.path, example);
    }

    addExample(example: Preplan): Promise<ApiResponse<any>> {
        return this.post(this.path, example);
    }

    deleteExample(id: any): Promise<ApiResponse<any>> {
        return this.delete(this.path + '/' + id);
    }
}
