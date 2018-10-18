import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {PublicComponentsModule} from "../../../public/public-components.module";
import {WorkorderManagementComponent} from "./workorder-management/workorder-management.component";
import {WorkorderListComponent} from "./workorder-list/workorder-list.component";
import {WorkorderListService} from "./workorder-list/workorder-list.service";
import {FeedbackAddeditComponent} from "./feedback-addedit/feedback-addedit.component";
import {FileUploadModule} from "ng2-file-upload";
import {FeedbackAddeditService} from "./feedback-addedit/feedback-addedit.service";
import {WorkorderStatsComponent} from "./workorder-stats/workorder-stats.component";
import {WorkorderStatsService} from "./workorder-stats/workorder-stats.service";
import {WorkorderSearchComponent} from "./workorder-search/workorder-search.component";


const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', redirectTo: 'management', pathMatch: 'full'},
            {path: 'management', component: WorkorderManagementComponent},
            {path: 'stats', component: WorkorderStatsComponent},
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FormsModule,
        CommonModule,
        PublicComponentsModule,
        PaginationModule.forRoot(),
        FileUploadModule
    ],
    declarations: [

        WorkorderManagementComponent,
        WorkorderListComponent,
        FeedbackAddeditComponent,
        WorkorderStatsComponent,
        WorkorderSearchComponent
	],
	exports: [
		RouterModule,
	],
	providers: [
		WorkorderListService,
        FeedbackAddeditService,
        WorkorderStatsService
	]
})

export class WorkOrderModule {

}
