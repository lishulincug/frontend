import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { NgZorroAntdModule } from "ng-zorro-antd";

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { RoutesModule } from './routes/routes.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule,
        BrowserModule,
        RoutesModule,
        LayoutModule,
        FormsModule,
        HttpClientModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NgZorroAntdModule.forRoot()
    ],

     providers: [],

     bootstrap: [AppComponent]
})
export class AppModule {
}
