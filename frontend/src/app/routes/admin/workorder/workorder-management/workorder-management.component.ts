import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {WorkOrder} from "../../../../domain/workOrder.domain";
import {Paginator} from "../../../../domain/paginator.domain";
import {WorkorderAddeditComponent} from "../../../../public/workorder-addedit/workorder-addedit.component";
import {FeedbackAddeditComponent} from "../feedback-addedit/feedback-addedit.component";
import {WorkorderListComponent} from "../workorder-list/workorder-list.component";
import {ActivatedRoute} from "@angular/router";


declare var $: any;
declare var layer: any;

@Component({
	selector: 'workorder-index',
	templateUrl: './workorder-management.component.html',
	styleUrls: ['./workorder-management.component.scss'],

})
export class WorkorderManagementComponent implements OnInit, OnDestroy {

    public condition: string;
	@ViewChild(WorkorderAddeditComponent) editor: WorkorderAddeditComponent;
	edit(value: WorkOrder) {
		this.editor.edit(value);
	}
    @ViewChild(FeedbackAddeditComponent) feedbackeditor: FeedbackAddeditComponent;

    feedback(value: number) {
	    this.feedbackeditor.add(value);
    }
    checkupworkorder(value: number) {
        this.feedbackeditor.checkupworkorder(value);
    }
    feedbackinfo(value: number){
        this.feedbackeditor.feedbackinfo(value);
    }
	constructor(private route: ActivatedRoute) {
	}

	ngOnInit(): void {
        this.condition = this.route.snapshot.queryParams['condition'];

        this.condition = this.condition == 'undefined'?null: this.condition;
        // console.log(this.condition);
         if (this.condition) {
             this.seachlist(this.condition);
         }
	}

	ngOnDestroy(): void {
	}
    @ViewChild(WorkorderListComponent) workorderlist: WorkorderListComponent;
    getlist() {
        this.workorderlist.listShow(true);
        //this.workorderlist.listShow(true);

    }
    seachlist(value: string){
        this.workorderlist.seachlist(value);
    }


	pageChanged(paginator: Paginator) {}

}
