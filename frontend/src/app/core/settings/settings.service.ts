import {Injectable} from '@angular/core';
import {isNullOrUndefined} from "util";
import {Paginator} from "../../domain/paginator.domain";

declare var $: any;

@Injectable()
export class SettingsService {

    public user: any;
    public app: any;
    public baiduAk: string = 'xxqsFRwXb2gEEeHXucH7mMKCCvz6GhXV';
    public amapAk: string = 'f3cfcdc7262b6db0f223b3b9d57b120b';

    public static _unreadNewsNumber = 0;
    public set unreadNewsNumber(v) {
        SettingsService._unreadNewsNumber = v;
    }

    public get unreadNewsNumber() {
        return SettingsService._unreadNewsNumber;
    }

    constructor() {

        // User Settings
        // -----------------------------------
        this.user = {
            name: 'John',
            job: 'ng-developer',
            picture: 'assets/img/user/02.jpg'
        };

        // App Settings
        // -----------------------------------
        this.app = {
            name: 'phoenix',
            description: 'phoenix',
            year: ((new Date()).getFullYear())
        };

    }

    public sortNumber(paginator: Paginator, i) {
        return i + 1 + (paginator.pageNo - 1) * paginator.pageSize;
    }

    createTag(url: string, className, func = null) {  //定义方法
        if ($('.' + className).length) {
            func.bind(this)();
            return;
        }
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.className = className;
        script.onload = func.bind(this);
        document.body.appendChild(script);
    };

    scrollInit(namesString) {
        $(function () {
            $(namesString).niceScroll({
                cursorcolor: "#ccc",//#CC0071 光标颜色
                cursoropacitymax: .5, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
                touchbehavior: true, //使光标拖动滚动像在台式电脑触摸设备
                cursorwidth: "5px", //像素光标的宽度
                cursorborder: "0", // 游标边框css定义
                cursorborderradius: "5px",//以像素为光标边界半径
                autohidemode: true, //是否隐藏滚动条
                overflowx: false,
            });
        });
    }

    getFormObj(domName) {
        let formData = $(domName).serializeArray();  //这个方法将表单的name生成对象数组，需要转换为json对象
        let obj = {};
        formData.forEach(item => {
            obj[item.name] = item.value;
        });
        return obj;
    }

    // 编码汉字,将对象对象里面的汉字编码后，再转换成urlencode格式
    encodeObj(obj) {
        let params = new URLSearchParams();
        for (let item in obj) {
            if (obj[item] != '' && !isNullOrUndefined(obj[item]))
                params.append(item, obj[item]);
        }
        return params.toString();
    }

    // 不做编码处理（应为走浏览器发送）
    joinObj(obj) {
        let params = [];
        for (let item in obj) {
            if (obj[item] != '' && !isNullOrUndefined(obj[item]))
                params.push('&' + item + '=' + obj[item]);
        }
        return params.join('');
    }


}
