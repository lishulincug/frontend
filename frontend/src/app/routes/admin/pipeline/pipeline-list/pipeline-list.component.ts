import { Component, OnInit, OnDestroy, EventEmitter, ChangeDetectorRef, ViewChild, Input, Output } from '@angular/core';
import {Paginator} from "../../../../domain/paginator.domain";
import {Pipeline} from "../../../../domain/pipeline.domain";

@Component({
	selector: 'pipeline-list',
	templateUrl: './pipeline-list.component.html',
	styleUrls: ['./pipeline-list.component.scss']
})
export class PipelineListComponent implements OnInit, OnDestroy {

	public _paginator: Paginator = new Paginator(1, 10);
	public _pipelineList: Array<Pipeline> = [];

	@Input() set paginator(value: Paginator) {
		this._paginator = value;
	}

	@Input() set pipelineList(value: Array<Pipeline>) {
		this._pipelineList = value;
	}

	@Output() pageChange = new EventEmitter();

	get paginator(){
		return this._paginator;
	}

	get pipelineList(){
		return this._pipelineList;
	}

	public pageChanged(paginator: Paginator){
		this.pageChange.emit(paginator);
	}

	setThreshold(sensorId: string){

	}

	ngOnInit() {}

	ngOnDestroy(): void {}

}
