import { Injectable } from '@angular/core';
import {BaseService} from "../../../../core/base.service";

@Injectable()
export class WorkOrderOverviewService extends BaseService {

    private path: String = 'workorder';

    getstatusnumber(): Promise<any> {
        return this.get(this.path + '/statusnumber');
    }
}
