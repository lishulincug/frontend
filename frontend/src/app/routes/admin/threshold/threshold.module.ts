import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {PublicComponentsModule} from "../../../public/public-components.module";
import {FileUploadModule} from "ng2-file-upload";
import {ThresholdManagementComponent} from "./threshold-management/threshold-management.component";
import {ThresholdManagementService} from "./threshold-management/threshold-management.service";
import {ThresholdListComponent} from "./threshold-list/threshold-list.component";
import {ThresholdEditorComponent} from "./threshold-editor/threshold-editor.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', redirectTo: 'management', pathMatch: 'full'},
            {path: 'management', component: ThresholdManagementComponent},
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
        ThresholdManagementComponent,
        ThresholdListComponent,
        ThresholdEditorComponent
    ],
    exports: [
        RouterModule,
    ],
    providers: [
        ThresholdManagementService
    ]
})

export class ThresholdModule {

}
