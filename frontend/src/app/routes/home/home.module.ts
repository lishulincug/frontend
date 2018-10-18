import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FileUploadModule} from 'ng2-file-upload';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {HomeComponent} from "./home/home.component";
import {HomeService} from "./home/home.service";
import {LayoutModule} from "../../layout/layout.module";
import {PublicComponentsModule} from "../../public/public-components.module";

import {HeaderLayoutComponent} from "../../layout/layout_header/header-layout.component";

const routes: Routes = [
	{
		path: '',
		component: HeaderLayoutComponent,
		children: [
			{path: '', redirectTo: 'index', pathMatch: 'full'},
			{path: 'index', component: HomeComponent},
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
        HomeComponent
	],
	exports: [
		RouterModule,
	],
	providers: [
        HomeService
	]
})
export class HomeModule {
}
