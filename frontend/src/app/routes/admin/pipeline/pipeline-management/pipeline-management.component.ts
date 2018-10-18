import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild } from '@angular/core';
import {Pipeline} from "../../../../domain/pipeline.domain";
import {PipelineType} from "../../../../domain/pipelineType.domain";
import {Paginator} from "../../../../domain/paginator.domain";
import {Response} from "../../../../domain/response.domain";
import {PipelineManagementService} from "./pipeline-management.service";

@Component({
	selector: 'pipeline-management',
	templateUrl: './pipeline-management.component.html',
	styleUrls: ['./pipeline-management.component.scss']
})
export class PipelineManagementComponent implements OnInit, OnDestroy {

	public pipeline: Pipeline = new Pipeline();
	public pipelineType: PipelineType = new PipelineType();
	public pipelineList: Array<Pipeline> = [];
	public paginator: Paginator = new Paginator(1, 10);

	constructor(
		private changeDetectorRef: ChangeDetectorRef,
		private pipelineManagementService: PipelineManagementService
	) {
	}

	//条件选择
	conditionSelected(pipeline: Pipeline){
		this.pipeline = pipeline;
		this.getPipelineList();
	}

	//默认加载管道列表
	getPipelineList(){
		this.pipelineManagementService.searchPipeline(this.pipeline,this.paginator).then(res=>{
			if (res.data != null) {
				this.pipelineList = res.data.data;
				this.paginator.totalResults = res.data.page.totalResults;
			}
		});
	}

	//分页切换
	pageChanged(paginator: Paginator){
		this.pipelineManagementService.searchPipeline(this.pipeline, this.paginator).then(res=>{
			if (res.data != null) {
				this.pipelineList = res.data.data;
				this.paginator.totalResults = res.data.page.totalResults;
			}
		});
	}

	ngOnInit() {
		this.getPipelineList();
	}

	ngOnDestroy(): void {}

}
