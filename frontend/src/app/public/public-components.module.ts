import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {CoreModule} from "../core/core.module";
import {AmapComponent} from "./amap/amap.component";
import {PaginatorComponent} from "./paginator/paginator.component";
import {PaginationModule} from "ngx-bootstrap/index";
import {WorkorderAddeditComponent} from "./workorder-addedit/workorder-addedit.component";
import {WorkorderAddeditService} from "./workorder-addedit/workorder-addedit.service";
import {WarningAlertComponent} from "./warning-alert/warning-alert.component";
import {PipelineHistoricDataComponent} from "./pipeline-historic-data/pipeline-historic-data.component";
import {WorkorderEditComponent} from "./workorder-edit/workorder-edit.component";
import {WorkorderEditService} from "./workorder-edit/workorder-edit.service";
import {StatsComponent} from "./stats/stats.component";
import {LeftNavComponent} from "./left-nav/left-nav.component";
import {WorkOrderCreateService} from "./workorder-create/workorder-create.service";
import {WorkorderCreateComponent} from "./workorder-create/workorder-create.component";
import {ConfirmComponent} from "./confirm/confirm.component";

// 项目内公用组件模块
@NgModule({
	imports: [
		RouterModule,
		CommonModule,
		CoreModule,
		FormsModule,
		PaginationModule.forRoot(),
	],
	providers: [
		WorkorderAddeditService,
        WorkorderEditService,
        WorkOrderCreateService
	],
	declarations: [
		AmapComponent,
		PaginatorComponent,
		WorkorderAddeditComponent,
		WarningAlertComponent,
		PipelineHistoricDataComponent,
        WorkorderEditComponent,
        StatsComponent,
        LeftNavComponent,
        WorkorderCreateComponent,
        ConfirmComponent
	],
	exports: [
		AmapComponent,
		PaginatorComponent,
		WorkorderAddeditComponent,
		WarningAlertComponent,
		PipelineHistoricDataComponent,
        WorkorderEditComponent,
        StatsComponent,
        LeftNavComponent,
        WorkorderCreateComponent,
        ConfirmComponent
	]
})
export class PublicComponentsModule {
}
