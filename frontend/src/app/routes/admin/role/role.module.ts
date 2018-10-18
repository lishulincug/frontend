import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {PublicComponentsModule} from "../../../public/public-components.module";
import {FileUploadModule} from "ng2-file-upload";
import {RoleComponent} from "./role.component";
import {RoleAddComponent} from "./role-add/role-add.component";
import {RoleEditorComponent} from "./role-editor/role-editor.component";
import {RoleDelComponent} from "./role-del/role-del.component";
import {RoleService} from "./role.service";
import {PrivillegeService} from "../../../core/privillege.service";
import {RoleListComponent} from "./sensor-list/role-list.component";

const routes: Routes = [

    {
        path: '',
        children: [
            {path: '', component: RoleComponent},
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
        RoleComponent,
        RoleAddComponent,
        RoleEditorComponent,
        RoleDelComponent,
        RoleListComponent,
    ],
    exports: [
        RouterModule,
    ],
    providers: [
        RoleService,
        PrivillegeService,

    ]
})

export class RoleModule {

}
