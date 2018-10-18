import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FileUploadModule} from 'ng2-file-upload';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {PreplanListComponent} from "./preplan-list/preplan-list.component";
import {LayoutModule} from "../../layout/layout.module";
import {PublicComponentsModule} from "../../public/public-components.module";

import {HeaderLayoutComponent} from "../../layout/layout_header/header-layout.component";
import {PreplanLayoutComponent} from "./preplan-layout/preplan-layout.component";
import {PreplanService} from "./preplan.service";
import {PreplanEditComponent} from "./preplan-edit/preplan-edit.component";

const routes: Routes = [
    {
        path: '',
        component: HeaderLayoutComponent,
        children: [
            {
                path: '',
                component: PreplanLayoutComponent,
                children: [
                    {path: '', redirectTo: 'list', pathMatch: 'full'},
                    {path: 'list', component:PreplanListComponent},
                    { path: '**', redirectTo: 'list' }
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
		FileUploadModule,
		PaginationModule.forRoot(),
		NgZorroAntdModule,
		LayoutModule,
		PublicComponentsModule
	],
	declarations: [
        PreplanListComponent,
        PreplanLayoutComponent,
        PreplanEditComponent
	],
	exports: [
		RouterModule,
	],
	providers: [
        PreplanService
	]
})
export class PreplanModule {
}
