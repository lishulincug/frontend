import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import {PipelineType} from "../../../../domain/pipelineType.domain";
import {Pipeline} from "../../../../domain/pipeline.domain";
import {PipelineSearcherService} from "./pipeline-searcher.service";

@Component({
	selector: 'pipeline-searcher',
	templateUrl: './pipeline-searcher.component.html',
	styleUrls: ['./pipeline-searcher.component.scss']
})
export class PipelineSearcherComponent implements OnInit, OnDestroy {

	public pipelineType: PipelineType = new PipelineType();
	public pipelineMaterials: Array<string> = [];
	public pipelineDiameters: Array<string> = [];
	public pipelineCreatedYears: Array<string> = [];
	public pipeline: Pipeline = new Pipeline();

	constructor(
		private changeDetectorRef: ChangeDetectorRef,
		private pipelineSearcherService: PipelineSearcherService
	) {
	}

	@Output() selectedEvent = new EventEmitter();

	getMaterials(){
		this.pipelineSearcherService.getMaterials().then(res=>{
			this.pipelineMaterials = res.data;
		});
	}

	getDiameters(){
		this.pipelineSearcherService.getDiameters().then(res=>{
			this.pipelineDiameters = res.data;
		});
	}

	getCreatedYears(){
		this.pipelineSearcherService.getCreatedYears().then(res=>{
			this.pipelineCreatedYears = res.data;
		});
	}

	typeChanged(type: string){
		this.pipeline.type = type;
		this.selectedEvent.emit(this.pipeline);
	}

	materialChanged(material: string){
		this.pipeline.material = material;
		this.selectedEvent.emit(this.pipeline);
	}

	diameterChanged(diameter: number){
		this.pipeline.diameter = diameter;
		this.selectedEvent.emit(this.pipeline);
	}

	createdYearChanged(createdYear: string){
		this.pipeline.createdYear = createdYear;
		this.selectedEvent.emit(this.pipeline);
	}

	ngOnInit() {
		this.getMaterials();
		this.getDiameters();
		this.getCreatedYears();
	}

	ngOnDestroy(): void {}

}
