import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FileUploadModule} from 'ng2-file-upload';
import {BaiduMapModule} from 'angular2-baidu-map';
import {PrivillegeService} from "../../core/privillege.service";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {UserService} from "./user/user.service";
import {LayoutModule} from "../../layout/layout.module";
import {PublicComponentsModule} from "../../public/public-components.module";
import {WorkOrderOverviewComponent} from "./workorder/workorder-overview/workorder-overview.component";
import {WorkOrderOverviewService} from "./workorder/workorder-overview/workorder-overview.service";
import {HeaderLayoutComponent} from "../../layout/layout_header/header-layout.component";
import {AdminLayoutComponent} from "./admin-layout/admin-layout.component";
import {AlarmService} from "./alarm/alarm.service";


const routes: Routes = [
	{
		path: '',
		component: HeaderLayoutComponent,
		children: [
			{
				path: '',
				component: AdminLayoutComponent,
				children: [
					{path: '', redirectTo: 'log', pathMatch: 'full'},
					{path: 'workorder', loadChildren: './workorder/workorder.module#WorkOrderModule'},
					{path: 'workorder-overview', component: WorkOrderOverviewComponent},
					{path: 'fault', loadChildren: './fault/fault.module#FaultModule'},
					{path: 'threshold', loadChildren: './threshold/threshold.module#ThresholdModule'},
					{path: 'log', loadChildren: './log/log.module#LogModule'},
					{path: 'sensor', loadChildren: './sensor/sensor.module#SensorModule'},
                    {path: 'pipeline', loadChildren: './pipeline/pipeline.module#PipelineModule'},
                    {path: 'pipeline-point', loadChildren: './pipeline-point/pipeline-point.module#PipelinePointModule'},
					{path: 'role', loadChildren: './role/role.module#RoleModule'},
					{path: 'user', loadChildren: './user/user.module#UserModule'},
                    {path: 'scheduledpatrolplan', loadChildren: './scheduled-patrol-plan/scheduledpatrolplan.module#ScheduledpatrolplanModule'},
                    {path: 'patrolworkorder', loadChildren: './patrol-workorder/patrolworkorder.module#PatrolworkorderModule'},
                    { path: '**', redirectTo: 'log' }
				]
			}
		]
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		FormsModule,
        ReactiveFormsModule,
		CommonModule,
		BaiduMapModule,
		FileUploadModule,
		PaginationModule.forRoot(),
		NgZorroAntdModule,
		LayoutModule,
		PublicComponentsModule,
	],
	declarations: [
		AdminLayoutComponent,
        WorkOrderOverviewComponent,
	],
	exports: [
		RouterModule,
	],
	providers: [
	    AlarmService,
		PrivillegeService,
		UserService,
        WorkOrderOverviewService,
	]
})
export class AdminModule {
}
