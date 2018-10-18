import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ScheduledpatrolplanComponent} from "./scheduledpatrolplan.component";
import {ScheduledpatrolplanSearchComponent} from "./scheduledpatrolplan-search/scheduledpatrolplan-search.component";
import {ScheduledpatrolplanListComponent} from "./scheduledpatrolplan-list/scheduledpatrolplan-list.component";
import {ScheduledpatrolplanEditorComponent} from "./scheduledpatrolplan-editor/scheduledpatrolplan-editor.component";
import {ScheduledpatrolplanService} from "./scheduledpatrolplan.service";
import {PrivillegeService} from "../../../core/privillege.service";
import {PublicComponentsModule} from "../../../public/public-components.module";
import {PaginationModule} from "ngx-bootstrap";
import {FileUploadModule} from "ng2-file-upload";


const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', component: ScheduledpatrolplanComponent},
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        PublicComponentsModule,
        PaginationModule.forRoot(),
        FileUploadModule
    ],
    declarations: [
        ScheduledpatrolplanComponent,
        ScheduledpatrolplanSearchComponent,
        ScheduledpatrolplanListComponent,
        ScheduledpatrolplanEditorComponent
	],
	exports: [
		RouterModule,
	],
	providers: [
        ScheduledpatrolplanService,
        PrivillegeService
	]
})

export class ScheduledpatrolplanModule {

}
