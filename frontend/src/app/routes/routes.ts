import { LoginComponent } from "./login/login.component";
import {FindPasswordComponent} from "./login/find-pwd/find-password.component";
import {LoginService} from "./login/login.service";

export const routes = [
	{ path: '', redirectTo: 'map', pathMatch: 'full' },
	{ path: 'admin', canActivate: [LoginService], loadChildren: './admin/admin.module#AdminModule' },
	{ path: 'preplan', canActivate: [LoginService], loadChildren: './preplan/preplan.module#PreplanModule' },
	{ path: 'map',canActivate: [LoginService],   loadChildren: './map/map.module#MapModule' },
	{ path: 'home',canActivate: [LoginService],   loadChildren: './home/home.module#HomeModule' },
	{ path: 'pipeline-analysis',canActivate: [LoginService],   loadChildren: './pipeline-analysis/pipeline-analysis.module#PipelineAnalysisModule' },
    { path: 'login', component: LoginComponent },
    { path: 'find-password', component: FindPasswordComponent},
	{ path: '**',canActivate: [LoginService], redirectTo: 'login' }
];
//canActivate: [LoginService],
