import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


import {routes} from './routes';
import {LoginComponent} from './login/login.component';
import {LoginService} from "./login/login.service";
import {CoreModule} from "../core/core.module";
import {BaseService} from "../core/base.service";
import {LayoutModule} from "../layout/layout.module";
import {PublicComponentsModule} from "../public/public-components.module";
import {UserService} from "./login/user.service";
import {FindPasswordComponent} from "./login/find-pwd/find-password.component";
import {FindPasswordService} from "./login/find-pwd/find-password.service";


@NgModule({
	imports: [
		RouterModule.forRoot(routes),
		FormsModule,
		CommonModule,
		CoreModule,
		ReactiveFormsModule,
		LayoutModule,
		PublicComponentsModule
	],
	declarations: [
		LoginComponent,
        FindPasswordComponent
	],
	exports: [
		RouterModule,
	],
	providers: [
		LoginService,
        UserService,
		BaseService,
        FindPasswordService
	]
})

export class RoutesModule {

	constructor() {
	}

}
