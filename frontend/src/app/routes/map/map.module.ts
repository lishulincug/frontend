import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FileUploadModule} from 'ng2-file-upload';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {PipeView2dComponent} from "./pipe-view-2d/pipe-view-2d.component";
import {PipeView2dService} from "./pipe-view-2d/pipe-view-2d.service";
import {LayoutModule} from "../../layout/layout.module";
import {PublicComponentsModule} from "../../public/public-components.module";
import {SettingsService} from "../../core/settings/settings.service";
import {PatrollerMapComponent} from "./patroller-map/patroller-map.component";
import {PatrollerMapService} from "./patroller-map/patroller-map.service";
import {Map3dComponent} from "./map-3d/map-3d.component";
import {HeaderLayoutComponent} from "../../layout/layout_header/header-layout.component";
import {AlarmService} from "../admin/alarm/alarm.service";

const routes: Routes = [
	{
		path: '',
		component: HeaderLayoutComponent,
		children: [
			{path: '', redirectTo: 'pipe-view-2d', pathMatch: 'full'},
			{path: 'pipe-view-2d', component: PipeView2dComponent},
			{path: 'patroller-map', component: PatrollerMapComponent},
			{path: 'map-3d', component: Map3dComponent},
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
		PipeView2dComponent,
		PatrollerMapComponent,
		Map3dComponent
	],
	exports: [
		RouterModule,
	],
	providers: [
	    AlarmService,
		PipeView2dService,
		SettingsService,
		PatrollerMapService,

	]
})
export class MapModule {
}
