import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild } from '@angular/core';
import {PipelinePoint} from "../../../../domain/pipelinePoint.domain";
import {Paginator} from "../../../../domain/paginator.domain";
import {PipelinepointManagementService} from "./pipelinepoint-management.service";

@Component({
    selector: 'pipelinepoint-management',
    templateUrl: './pipelinepoint-management.component.html',
    styleUrls: ['./pipelinepoint-management.component.scss']
})
export class PipelinepointManagementComponent implements OnInit, OnDestroy {

    public pipelinepoint: PipelinePoint = new PipelinePoint();
    public paginator: Paginator = new Paginator(1, 10);
    public pipelinepointList: Array<PipelinePoint> = [];

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private pipelinepointManagementService: PipelinepointManagementService
    ) {
    }

    //条件选择
    conditionSelected(pipelinepoint: PipelinePoint){
        this.pipelinepoint = pipelinepoint;
        this.getPipelinepointList();
    }

    //默认加载管道列表
    getPipelinepointList(){
        this.pipelinepointManagementService.searchPipelinepoint(this.pipelinepoint,this.paginator).then(res=>{
            if (res.data != null) {
                this.pipelinepointList = res.data.data;
                this.paginator.totalResults = res.data.page.totalResults;
            }
        });
    }

    //分页切换
    pageChanged(paginator: Paginator){
        this.pipelinepointManagementService.searchPipelinepoint(this.pipelinepoint, this.paginator).then(res=>{
            if (res.data != null) {
                this.pipelinepointList = res.data.data;
                this.paginator.totalResults = res.data.page.totalResults;
            }
        });
    }

    //检索
    search(pipelinepoint: PipelinePoint){
        this.pipelinepoint = pipelinepoint;
        this.getPipelinepointList();
    }

    ngOnInit() {
        this.getPipelinepointList();
    }

    ngOnDestroy(): void {}

}
