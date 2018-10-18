import {BaseService} from "../../../core/base.service";
import {Paginator} from "../../../domain/paginator.domain";
import {SettingsService} from "../../../core/settings/settings.service";
import {ApiResponse} from "../../../domain/api-response.domain";
import {ApiPage} from "../../../domain/api-page.domain";

export class LogService extends BaseService {
    private path: string = "log/";

    getList(paginator: Paginator = new Paginator(1, 10), example): Promise<any> {
        let condition = "?pageNo=" + paginator.pageNo + "&pageSize=" + paginator.pageSize;
        let formData = this.settings.joinObj(example);
        condition += formData == '' ? '' : formData;
        return this.get(this.path + 'list' + condition);
    }

    getAddressByIp(ip:String):Promise<ApiResponse<any>>{
        return this.get(this.path + 'getAddressByIp?ip=' + ip);
    }
}
