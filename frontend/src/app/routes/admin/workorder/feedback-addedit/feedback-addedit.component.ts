import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {FileUploader} from "ng2-file-upload";
import {WEB_URL_PREFIX} from "../../../../../assets/server/http-link.data";
import {FeedbackAddeditService} from "./feedback-addedit.service";
import {WorkOrder} from "../../../../domain/workOrder.domain";
import {WorkOrderFeedback} from "../../../../domain/workOrderFeedback.domain";


declare var $: any;
declare var layer: any;

@Component({
    selector: 'feedback-addedit',
    templateUrl: './feedback-addedit.component.html',
    styleUrls: ['./feedback-addedit.component.scss'],

})
export class FeedbackAddeditComponent implements OnInit, OnDestroy {

    public showFeedbackEditModal = false;
    private workorderid: number;
    public photos: string[] = [];
    public imgurl: string;
    public showFedddbackInfoModal = false;
    private feedbackone: WorkOrderFeedback;
    public showinfoModal = false;

    constructor(private feedbackAddeditService: FeedbackAddeditService) {
    }

    @Output() getListEvent = new EventEmitter();

    public closeFeedback() {
        this.showFeedbackEditModal = false;

    }

    public closeFedddbackInfo() {
        this.showFedddbackInfoModal = false;
    }

    public closeInfo(){
        this.showinfoModal = false;
    }
    public add(value: number) {
        this.workorderid = value;
        this.photos = [];
        this.showFeedbackEditModal = true;
    }

    public checkupworkorder(value: number) {

        this.feedbackAddeditService.getone(value).then(res => {
            if (res.success) {
                this.feedbackone = res.data;
                if (this.feedbackone.photos){
                    this.photos = (function () {
                        return this.feedbackone.photos.split(',');
                    }.bind(this)());
                }else{
                    this.photos = [];
                }
                this.showFedddbackInfoModal = true;
            } else {
                layer.msg(res.msg);
            }
        });
    }

    public feedbackinfo(value: number) {
        this.feedbackAddeditService.getone(value).then(res => {
            if (res.success) {
                this.feedbackone = res.data;
                if (this.feedbackone.photos){
                    this.photos = (function () {
                        return this.feedbackone.photos.split(',');
                    }.bind(this)());
                }else{
                    this.photos = [];
                }
                this.showinfoModal = true;
            } else {
                layer.msg(res.msg);
            }
        });
    }

    public uploader: FileUploader = new FileUploader({

        url: WEB_URL_PREFIX + "upload/img",

    });

    selectedFileOnChanged(event: any) {
        // 打印文件选择名称
        this.uploadFile();
    }

    // D: 定义事件，上传文件
    uploadFile() {
        // 上传
        this.uploader.queue[0].onSuccess = function (response, status, headers) {
            // 上传文件成功
            if (status == 200) {
                // 上传文件后获取服务器返回的数据
                let tempRes = JSON.parse(response);
                this.uploader.queue[0].remove();
                this.photos.push(tempRes.data.http_path);
                console.log(this.photos);
            } else {
                // 上传文件后获取服务器返回的数据错误
            }
        }.bind(this);

        this.uploader.queue[0].upload(); // 开始上传
    }


    getFormJson(domname) {
        let formdata = $(domname).serializeArray();
        let obj = {};
        formdata.forEach(item => {
            obj[item.name] = item.value;
        });
        return obj;
    }

    public colseSubmit() {

        var formdata = this.getFormJson('.editDeviceForm');

        if (this.checkfrom(formdata)) {
            formdata['photos'] = this.photos;
            this.feedbackAddeditService.postsave(formdata).then(res => {
                if (res.success) {
                    this.closeFeedback();
                    this.getList();
                    layer.msg(res.msg,{icon:1, time:1000});
                } else {
                    layer.msg(res.msg,{icon:5, time:1000});
                }
            });
        }
    }
    public changewokeorderstate(status: String) {
        var formdata = this.getFormJson('.editDeviceForm');
        formdata['status'] = status;
        this.feedbackAddeditService.changewokeorderstate(formdata).then(res => {
            if (res.success) {
                this.closeFedddbackInfo();
                this.getList();
                layer.msg(res.msg,{icon:1, time:1000});
            } else {
                layer.msg(res.msg,{icon:5, time:1000});
            }
        });
    }

    private getList() {
        this.getListEvent.emit();
    }

    private checkfrom(data: object) {
        data['workorderid'] = Number(data['workorderid']);
        if (data['workorderid'] == 0) {
            layer.msg('非法参数');
            return false;
        }
        if (data['cause'] == '') {
            layer.msg('反馈工单原因');
            return false;
        }
        if (data['action'] == '') {
            layer.msg('反馈工单处理的内容');
            return false;
        }
        return true;
    }


    // getfile(value: string) {
    //     this.feedbackAddeditService.getImg(value);
    //
    // }
    ngOnInit(): void {
        // this.getstatus();
        this.imgurl = WEB_URL_PREFIX + "upload/getimg?imgurl=";
    }

    ngOnDestroy(): void {
    }


}
