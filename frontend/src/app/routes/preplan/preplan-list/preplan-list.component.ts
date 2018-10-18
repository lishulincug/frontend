import {Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild} from '@angular/core';
import {SettingsService} from "../../../core/settings/settings.service";
import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router";
import {Paginator} from "../../../domain/paginator.domain";
import {Preplan} from "../../../domain/preplan.domain";
import {PreplanService} from "../preplan.service";
import {PreplanEditComponent} from "../preplan-edit/preplan-edit.component";
import {ConfirmComponent} from "../../../public/confirm/confirm.component";

declare var $: any;
declare var layer: any;
declare var echarts: any;
declare var AMapUI: any; //ui组件库加载器，已下载到本地
declare var CKobject: any; //ui组件库加载器，已下载到本地


@Component({
    selector: 'preplan-list',
    templateUrl: './preplan-list.component.html',
    styleUrls: ['./preplan-list.component.scss'],

})
export class PreplanListComponent implements OnInit, OnDestroy {


    constructor(private settings: SettingsService,
                private changeDetectorRef: ChangeDetectorRef,
                private preplanService: PreplanService,
                private router: Router) {
    }

    public paginator = new Paginator(1, 10);
    public formData;
    public preplanList: Preplan[];
    @ViewChild('edit_preplan') edit_preplan: PreplanEditComponent;
    @ViewChild('add_preplan') add_preplan: PreplanEditComponent;
    @ViewChild('delete_preplan') delete_preplan: ConfirmComponent;

    searchByExample($ev, form: any) {
        $ev.preventDefault();
        this.formData = this.settings.getFormObj(form);
        this.getExampleList();
    }

    detailPreplan(item) {
        this.edit_preplan.show(true);
        this.edit_preplan.example=item;
    }

    deleteExample(id) {
        this.delete_preplan.show(id);
    }

    saveDeleteExample(id) {
        this.preplanService.deleteExample(id).then((res) => {
            this.refreshPage(res, this.delete_preplan)
        });
    }

    refreshPage(res, model = null) {
        layer.msg(res.msg);
        if (res.success) {
            this.getExampleList();
            if (model != null) {
                model.hide();
            }
        }
    }

    addExample() {
        this.add_preplan.example = new Preplan();
        this.add_preplan.show();
    }

    saveAddExample(data) {
        this.preplanService.addExample(data).then((res) => {
            this.refreshPage(res, this.add_preplan)
        });
    }

    editExample(data) {
        this.edit_preplan.example = data;
        this.edit_preplan.show();
    }

    saveEditExample(data) {
        this.preplanService.updateExample(data).then((res) => {
            this.refreshPage(res, this.edit_preplan)
        });
    }

    getExampleList() {
        this.preplanService.listByExample(this.paginator, this.formData)
            .then(res => {
                if (res.success && res.data.data) {
                    this.preplanList = res.data.data;
                    this.paginator.totalResults = res.data.page.totalResults;
                }
            });
    }

    ngOnDestroy(): void {
    }

    ngOnInit() {
        this.getExampleList()
    }


}
