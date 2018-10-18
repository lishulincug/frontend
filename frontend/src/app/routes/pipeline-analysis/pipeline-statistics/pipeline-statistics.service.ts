import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {BaseService} from "../../../core/base.service";

@Injectable()
export class PipelineStatisticsService extends BaseService{
    private path: String = "pipeline/";

    getPipelineStats(): Promise<any>{
        return this.get(this.path + "stats");
    }
}
