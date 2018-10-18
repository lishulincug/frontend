import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {PaginationModule} from 'ngx-bootstrap/index';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {CoreModule} from "../../../core/core.module";
import {LayoutModule} from "../../../layout/layout.module";
import {PublicComponentsModule} from "../../../public/public-components.module";
import {LoginLogComponent} from "./login-log/login-log.component";
import {LogService} from "./log.service";

// 项目内公用组件模块
export const routes = [
    {path: '', redirectTo: 'system', pathMatch: 'full'},
    {path: 'system', component: LoginLogComponent},
    {path: '**', redirectTo: 'system'}
];

@NgModule({
    imports: [
        NgZorroAntdModule.forRoot(),
        RouterModule.forChild(routes),
        CommonModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        LayoutModule,
        PublicComponentsModule,
        PaginationModule.forRoot()
    ],
    providers: [LogService],
    declarations: [
        LoginLogComponent,
    ],
    exports: []
})
export class LogModule {
}
