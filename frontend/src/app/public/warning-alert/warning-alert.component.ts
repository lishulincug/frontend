import {
    Component, OnDestroy, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewChecked,
    AfterViewInit
} from '@angular/core';

import 'rxjs/add/operator/toPromise';


import {ChangeDetectorRef} from '@angular/core';
import {SettingsService} from "../../core/settings/settings.service";
import {FaultType} from "../../domain/faultType.domain";
import {Alarm} from "../../domain/alarm.domain";
import {Dic} from "../../domain/dic.domain";
import {Pipeline} from "../../domain/pipeline.domain";
import {PipelinePoint} from "../../domain/pipelinePoint.domain";

declare var $: any;

@Component({
    selector: 'app-warning-alert',
    templateUrl: './warning-alert.component.html',
    styleUrls: ['./warning-alert.component.scss']
})
export class WarningAlertComponent implements OnInit, OnDestroy, AfterViewChecked {


    public timeOut;
    public dic = new Dic();

    constructor(private settingsService: SettingsService,
                private changeDetectorRef: ChangeDetectorRef,) {
    }


    @Output() location = new EventEmitter();


    _alarmList;
    @Input()
    set alarmList(list) {
        let arr = [];
        if (list) {
            arr = list.map((item) => {
                item.photos = item.photos ? item.photos.split(',') : [];
                return item;
            });
        }
        this._alarmList = arr;
    }

    get alarmList() {
        return this._alarmList;
    }

    public imageUr: string = 'HTTPLINK' + 'view/img?search=';
    public alarmType = new FaultType();
    _openSelf = false;
    set openSelf(v) {
        this._openSelf = v;
    }

    get openSelf() {
        return this._openSelf;
    }

    closeSelf() {
        this.openSelf = false;
    }

    toPosition(alarm: Alarm) {
        let posi;
        let obj = alarm.target.object;
        if (alarm.target.type === 'pipeline') {
            var pipeline: Pipeline = obj as Pipeline;
            posi = this.getCenterPoint(pipeline.startPoint.coordinate.longitude, pipeline.startPoint.coordinate.latitude, pipeline.endPoint.coordinate.longitude, pipeline.endPoint.coordinate.latitude);
        }
        else {
            var pipelinePoint: PipelinePoint = obj as PipelinePoint;
            posi = [pipelinePoint.coordinate.longitude, pipelinePoint.coordinate.latitude];
        }

        this.location.emit(posi);
    }

    getCenterPoint(a, b, a1, b1) {
        return [(parseFloat(a) + parseFloat(a1)) / 2, (parseFloat(b) + parseFloat(b1)) / 2];
    }

    ngOnInit() {
    }

    ngAfterViewChecked() {  //每次做完组件视图和子视图的变更检测之后调用。 (每次渲染视图完成之后调用)
        $('.warningAlertBox .content_area').niceScroll({
            cursorcolor: "#ccc",//#CC0071 光标颜色
            cursoropacitymax: .5, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
            touchbehavior: true, //使光标拖动滚动像在台式电脑触摸设备
            cursorwidth: "5px", //像素光标的宽度
            cursorborder: "0", // 游标边框css定义
            cursorborderradius: "5px",//以像素为光标边界半径
            autohidemode: true, //是否隐藏滚动条
            overflowx: false,
        });
    }

    ngOnDestroy() {

    }


}
