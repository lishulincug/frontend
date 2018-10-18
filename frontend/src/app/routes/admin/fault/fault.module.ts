import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {PublicComponentsModule} from "../../../public/public-components.module";
import {FaultComponent} from "./fault.component";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {FaultService} from "./fault.service";
import {PrivillegeService} from "../../../core/privillege.service";
import {FaultSearchComponent} from "./fault-search/fault-search.component";
import {FaultListComponent} from "./fault-list/fault-list.component";
import {FaultDrillService} from "./fault-drill/fault-drill.service";
import {FaultDrillComponent} from "./fault-drill/fault-drill.component";
import {FaultListService} from "./fault-list/fault-list.service";


const routes: Routes = [

    {
        path: '',
        children: [
            {path: '', component: FaultComponent},
        ]
    },
];

@NgModule({
    imports: [
        NgZorroAntdModule.forRoot(),
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PublicComponentsModule,
        PaginationModule.forRoot()

    ],
    declarations: [
        FaultComponent,
        FaultSearchComponent,
        FaultListComponent,
        FaultDrillComponent,

    ],
    exports: [
        RouterModule,
    ],
    providers: [
        FaultService,
        PrivillegeService,
        FaultDrillService,
        FaultListService
    ]
})

export class FaultModule {

}
