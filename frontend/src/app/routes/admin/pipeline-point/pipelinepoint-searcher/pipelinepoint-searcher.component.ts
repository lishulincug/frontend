import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import {PipelinePoint} from "../../../../domain/pipelinePoint.domain";

@Component({
    selector: 'pipelinepoint-searcher',
    templateUrl: './pipelinepoint-searcher.component.html',
    styleUrls: ['./pipelinepoint-searcher.component.scss']
})
export class PipelinepointSearcherComponent implements OnInit, OnDestroy {

    public pipelinePoint: PipelinePoint = new PipelinePoint();

    @Output() searchEvent = new EventEmitter();

    search(){
        this.searchEvent.emit(this.pipelinePoint);
    }

    ngOnInit() {}

    ngOnDestroy(): void {}

}
