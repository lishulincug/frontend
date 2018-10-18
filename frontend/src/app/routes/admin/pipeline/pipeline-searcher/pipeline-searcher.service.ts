import {BaseService} from "../../../../core/base.service";
import {Response} from "../../../../domain/response.domain";

export class PipelineSearcherService extends BaseService {

	private path: String = "pipeline/";

	getMaterials():Promise<Response>{
		return this.get(this.path + 'materials');
	}

	getDiameters():Promise<Response>{
		return this.get(this.path + 'diameters');
	}

	getCreatedYears():Promise<Response>{
		return this.get(this.path + 'createdyears');
	}
}
