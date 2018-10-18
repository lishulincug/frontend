import {BaseService} from "../../../../core/base.service";
import {Pipeline} from "../../../../domain/pipeline.domain";
import {Paginator} from "../../../../domain/paginator.domain";
import {Response} from "../../../../domain/response.domain";

export class PipelineManagementService extends BaseService {

	private path: String = "pipeline";

	searchPipeline(example: Pipeline, paginator: Paginator):Promise<Response>{
		let condition = "?pageNo=" + paginator.pageNo + "&pageSize=" + paginator.pageSize;
		if (example.type != null) {
			condition += "&type=" + example.type;
		}
		if (example.material != null){
			condition += "&material=" + example.material;
		}
		if (example.diameter != null){
			condition += "&diameter=" + example.diameter;
		}
		if (example.createdYear != null){
			condition += "&createdYear=" + example.createdYear;
		}
		return this.get(this.path + condition);
	}

}
