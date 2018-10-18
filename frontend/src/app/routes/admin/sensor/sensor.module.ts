import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PaginationModule} from "ngx-bootstrap/pagination";
import {PublicComponentsModule} from "../../../public/public-components.module";
import {FileUploadModule} from "ng2-file-upload";
import {SensorComponent} from "./sensor.component";
import {SensorAddComponent} from "./sensor-add/sensor-add.component";
import {SensorEditorComponent} from "./sensor-editor/sensor-editor.component";
import {SensorDelComponent} from "./sensor-del/sensor-del.component";
import {SensorListComponent} from "./sensor-list/sensor-list.component";
import {SensorSearchComponent} from "./sensor-search/sensor-search.component";
import {SensorService} from "./sensor.service";
import {PrivillegeService} from "../../../core/privillege.service";

const routes: Routes = [

    {
        path: '',
        children: [
            {path: '', component: SensorComponent},
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
        SensorComponent,
        SensorAddComponent,
        SensorEditorComponent,
        SensorDelComponent,
        SensorListComponent,
        SensorSearchComponent
    ],
    exports: [
        RouterModule,
    ],
    providers: [
        SensorService,
        PrivillegeService,

    ]
})

export class SensorModule {

}
