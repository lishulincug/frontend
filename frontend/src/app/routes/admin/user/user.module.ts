import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {PublicComponentsModule} from "../../../public/public-components.module";
import {FileUploadModule} from "ng2-file-upload";
import {UserComponent} from "./user.component";
import {UserAddComponent} from "./user-add/user-add.component";
import {UserEditorComponent} from "./user-editor/user-editor.component";
import {UserDelComponent} from "./user-del/user-del.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UserSearchComponent} from "./user-search/user-search.component";
import {UserService} from "./user.service";
import {PrivillegeService} from "../../../core/privillege.service";

const routes: Routes = [

    {
        path: '',
        children: [
            {path: '', component: UserComponent},
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
        UserComponent,
        UserAddComponent,
        UserEditorComponent,
        UserDelComponent,
        UserListComponent,
        UserSearchComponent
    ],
    exports: [
        RouterModule,
    ],
    providers: [
        UserService,
        PrivillegeService,

    ]
})

export class UserModule {

}
