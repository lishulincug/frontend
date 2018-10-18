import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Paginator} from "../../../../domain/paginator.domain";
import {WorkOrder} from "../../../../domain/workOrder.domain";
import {BaseService} from "../../../../core/base.service";
import {Response} from "../../../../domain/response.domain";

@Injectable()
export class WorkorderStatsService extends BaseService{

    private path: String = "workorder/";

    getWorkorderStats(): Promise<any>{
        return this.get(this.path + "stats");
    }

}
