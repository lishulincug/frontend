import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {PatrolworkorderComponent} from "./patrolworkorder.component";
import {PublicComponentsModule} from "../../../public/public-components.module";
import {FileUploadModule} from "ng2-file-upload";
import {PatrolworkorderService} from "./patrolworkorder.service";
import {PatrolworkorderSearchComponent} from "./patrolworkorder-search/patrolworkorder-search.component";
import {PatrolworkorderListComponent} from "./patrolworkorder-list/patrolworkorder-list.component";
import {UserService} from "../../login/user.service";



const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', component: PatrolworkorderComponent},

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
        PatrolworkorderComponent,
        PatrolworkorderSearchComponent,
        PatrolworkorderListComponent
	],
	exports: [
		RouterModule,
	],
	providers: [
        PatrolworkorderService,
        UserService
	]
})

export class PatrolworkorderModule {}
