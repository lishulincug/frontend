import {Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild, EventEmitter, Output} from '@angular/core';
import {SettingsService} from "../../../core/settings/settings.service";
import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router";
import {Paginator} from "../../../domain/paginator.domain";
import {Preplan} from "../../../domain/preplan.domain";
import {PreplanService} from "../preplan.service";

declare var $: any;
declare var layer: any;
declare var echarts: any;
declare var AMapUI: any; //ui组件库加载器，已下载到本地
declare var CKobject: any; //ui组件库加载器，已下载到本地


@Component({
    selector: 'preplan-edit',
    templateUrl: './preplan-edit.component.html',
    styleUrls: ['./preplan-edit.component.scss'],

})
export class PreplanEditComponent implements OnInit, OnDestroy {


    constructor(private settings: SettingsService,
                private changeDetectorRef: ChangeDetectorRef,
                private preplanService: PreplanService,
                private router: Router) {
    }

    public paginator = new Paginator(1, 10);
    public formData;
    private showSelf = false;
    public readOnly = false;

    public show(readOnly = false) {
        this.readOnly = readOnly;
        this.showSelf = true;
    };

    public hide() {
        this.showSelf = false;
    };

    public example: Preplan = new Preplan();

    @Output() save = new EventEmitter();

    saveExample() {
        this.save.emit(this.example);
    }

    ngOnDestroy(): void {
    }

    ngOnInit() {
    }


}
