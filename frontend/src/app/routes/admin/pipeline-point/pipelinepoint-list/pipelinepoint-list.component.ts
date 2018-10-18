import { Component, OnInit, OnDestroy, EventEmitter, ChangeDetectorRef, ViewChild, Input, Output } from '@angular/core';
import {Paginator} from "../../../../domain/paginator.domain";
import {PipelinePoint} from "../../../../domain/pipelinePoint.domain";

@Component({
    selector: 'pipelinepoint-list',
    templateUrl: './pipelinepoint-list.component.html',
    styleUrls: ['./pipelinepoint-list.component.scss']
})
export class PipelinepointListComponent implements OnInit, OnDestroy {

    public _paginator: Paginator = new Paginator(1, 10);
    public _pipelinepointList: Array<PipelinePoint> = [];

    @Input() set paginator(value: Paginator) {
        this._paginator = value;
    }

    @Input() set pipelinepointList(value: Array<PipelinePoint>) {
        this._pipelinepointList = value;
    }

    @Output() pageChange = new EventEmitter();

    get paginator(){
        return this._paginator;
    }

    get pipelinepointList(){
        return this._pipelinepointList;
    }

    public pageChanged(paginator: Paginator){
        this.pageChange.emit(paginator);
    }

    ngOnInit() {}

    ngOnDestroy(): void {}

}
