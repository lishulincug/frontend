import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FileUploadModule} from 'ng2-file-upload';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {HeaderLayoutComponent} from "../../../layout/layout_header/header-layout.component";
import {PipelineAnalysisLayoutComponent} from "../../pipeline-analysis/pipeline-analysis-layout/pipeline-analysis-layout.component";
import {PipelineManagementComponent} from "./pipeline-management/pipeline-management.component";
import {PipelineStatisticsComponent} from "../../pipeline-analysis/pipeline-statistics/pipeline-statistics.component";
import {PipelinepointManagementComponent} from "../pipeline-point/pipelinepoint-management/pipelinepoint-management.component";
import {PublicComponentsModule} from "../../../public/public-components.module";
import {LayoutModule} from "../../../layout/layout.module";
import {BaiduMapModule} from "angular2-baidu-map/dist/index";
import {PipelineListComponent} from "./pipeline-list/pipeline-list.component";
import {PipelineSearcherComponent} from "./pipeline-searcher/pipeline-searcher.component";
import {PipelineManagementService} from "./pipeline-management/pipeline-management.service";
import {PipelineSearcherService} from "./pipeline-searcher/pipeline-searcher.service";

const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', redirectTo: 'management', pathMatch: 'full'},
            {path: 'management', component: PipelineManagementComponent},
            {path: '**', redirectTo: 'management' }
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
        PipelineManagementComponent,
        PipelineListComponent,
        PipelineSearcherComponent,
    ],
    exports: [
        RouterModule,
    ],
    providers: [
        PipelineManagementService,
        PipelineSearcherService,
    ]
})
export class PipelineModule {
}
