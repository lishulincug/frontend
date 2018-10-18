import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FileUploadModule} from 'ng2-file-upload';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {HeaderLayoutComponent} from "../../../layout/layout_header/header-layout.component";
import {BaiduMapModule} from "angular2-baidu-map/dist/index";
import {PublicComponentsModule} from "../../../public/public-components.module";
import {PipelinepointManagementComponent} from "./pipelinepoint-management/pipelinepoint-management.component";
import {PipelinepointListComponent} from "./pipelinepoint-list/pipelinepoint-list.component";
import {PipelinepointSearcherComponent} from "./pipelinepoint-searcher/pipelinepoint-searcher.component";
import {PipelinepointManagementService} from "./pipelinepoint-management/pipelinepoint-management.service";
import {LayoutModule} from "../../../layout/layout.module";

const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', redirectTo: 'management', pathMatch: 'full'},
            {path: 'management', component: PipelinepointManagementComponent}
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
        PipelinepointManagementComponent,
        PipelinepointListComponent,
        PipelinepointSearcherComponent
    ],
    exports: [
        RouterModule,
    ],
    providers: [
        PipelinepointManagementService
    ]
})
export class PipelinePointModule {
}
