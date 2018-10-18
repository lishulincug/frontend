import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FileUploadModule} from 'ng2-file-upload';
import {BaiduMapModule} from 'angular2-baidu-map';
import {PrivillegeService} from "../../core/privillege.service";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {LayoutModule} from "../../layout/layout.module";
import {PublicComponentsModule} from "../../public/public-components.module";
import {HeaderLayoutComponent} from "../../layout/layout_header/header-layout.component";
import {PipelineAnalysisLayoutComponent} from "./pipeline-analysis-layout/pipeline-analysis-layout.component";
import {PipelineStatisticsComponent} from "./pipeline-statistics/pipeline-statistics.component";
import {PipelineStatisticsService} from "./pipeline-statistics/pipeline-statistics.service";


const routes: Routes = [
	{
		path: '',
		component: HeaderLayoutComponent,
		children: [
            {
                path: '',
                component: PipelineAnalysisLayoutComponent,
                children: [
                    {path: '', redirectTo: 'statistics', pathMatch: 'full'},
					{path: 'statistics', component: PipelineStatisticsComponent},
                    { path: '**', redirectTo: 'statistics' }
                ]
            }
		]
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		FormsModule,
		CommonModule,
		BaiduMapModule,
		FileUploadModule,
		PaginationModule.forRoot(),
		NgZorroAntdModule,
		LayoutModule,
		PublicComponentsModule,
	],
	declarations: [
        PipelineAnalysisLayoutComponent,
        PipelineStatisticsComponent,
	],
	exports: [
		RouterModule,
	],
	providers: [
		PipelineStatisticsService,
    ]
})
export class PipelineAnalysisModule {
}
