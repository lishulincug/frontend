import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {CoreModule} from "../core/core.module";
import {SettingsService} from "../core/settings/settings.service";
import {HeaderLayoutComponent} from "./layout_header/header-layout.component";
import {FooterComponent} from "./footer/footer.component";
import {LeftComponent} from "./left/left.component";
import {PrivillegeService} from "../core/privillege.service";

@NgModule({
	imports: [
		RouterModule,
		CommonModule,
		CoreModule,
	],
	providers: [SettingsService,PrivillegeService],
	declarations: [
		HeaderLayoutComponent,
		HeaderComponent,
        FooterComponent,
        LeftComponent
	],
	exports: [
		HeaderLayoutComponent,
		HeaderComponent,
        FooterComponent,
        LeftComponent
	]
})
export class LayoutModule {
}
