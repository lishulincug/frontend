import {Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {SettingsService} from "../../../../core/settings/settings.service";
import {Paginator} from "../../../../domain/paginator.domain";
import {LoginLog} from "../../../../domain/login-log.domain";
import {LogService} from "../log.service";

declare var $: any;
declare var layer: any;
declare var laydate: any;
declare var AMapUI: any; //ui组件库加载器，已下载到本地

@Component({
    selector: 'app-system-log',
    templateUrl: './login-log.component.html',
    styleUrls: ['./login-log.component.scss']
})
export class LoginLogComponent implements OnInit, OnDestroy {

    public paginator = new Paginator(1, 10);
    public systemLogList: LoginLog[];
    public formData;

    constructor(public LogService: LogService,
                public router: Router,
                public settings: SettingsService
    ) {
    }

    submitForm($ev, form: any) {
        $ev.preventDefault();
        this.formData = this.settings.getFormObj(form);
        this.getSystemList();
    }


    public pageChanged(paginator: Paginator) {
        this.paginator = paginator;
        this.getSystemList();
    }

    getSystemList() {
        this.LogService.getList(this.paginator, this.formData)
            .then(res => {
                if (res.success && res.data.data) {
                    this.systemLogList = res.data.data;
                    this.paginator.totalResults = res.data.page.totalResults;
                }
            });
    }

    ngOnInit(): void {
        laydate.render({
            elem: '#timeArea'
            , type: 'datetime'
            , range: true
        });
        this.getSystemList();
    }


    ngOnDestroy(): void {
    }

    checkProperty(key, obj): Boolean {
        return obj.hasOwnProperty(key) ? true : false;
    }

    getAddress(item: LoginLog) {
        item['load'] = '';
        this.LogService.getAddressByIp(item.ip).then(res => {
            delete item['load'];
            if (res.success) {
                item.location = res.data;
            } else {
                item.location = res.msg;
            }
        })
    }
}
