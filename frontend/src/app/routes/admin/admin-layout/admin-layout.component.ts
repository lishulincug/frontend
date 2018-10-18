import {Component, OnInit, OnDestroy} from '@angular/core';
import {SettingsService} from "../../../core/settings/settings.service";
import {PrivillegeService} from "../../../core/privillege.service";
import {Router} from "@angular/router";
import {UserService} from "../../login/user.service";

declare var $:any;
@Component({
    selector: 'admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, OnDestroy {

    constructor(
        public settings: SettingsService,
        public privillegeService: PrivillegeService,
        public router: Router,
        public userService: UserService
    ) {}

    user = {};

    public sub_nav_list = [];


   getSubList() {
       let sub_nav_list = new Array();

       if (this.privillegeService.checkPrivillege('/admin/pipeline')){
           let obj={};
           obj['name'] = '管网数据';
           obj['link'] = '/admin/pipeline';
           let children = new Array();
           if (this.privillegeService.checkPrivillege('/admin/pipeline/management')) {
               let childrenobj = {};
               childrenobj['name'] = '管道管理';
               childrenobj['link'] = '/admin/pipeline/management';
               children.push(childrenobj);
           }
           if (this.privillegeService.checkPrivillege('/admin/pipeline-point/management')) {
               let childrenobj = {};
               childrenobj['name'] = '管井管理';
               childrenobj['link'] = '/admin/pipeline-point/management';
               children.push(childrenobj);
           }
           obj['children'] = children;
           sub_nav_list.push(obj);
       }

       if (this.privillegeService.checkPrivillege('admin/alarm/list')){
           let obj = {};
           obj['name'] = '故障管理';
           obj['link'] = '/admin/fault';
           sub_nav_list.push(obj);
       }
       let obj1 = {};
       obj1['name'] = '巡检计划';
       obj1['link'] = '/admin/scheduledpatrolplan';
       sub_nav_list.push(obj1);
       if (this.privillegeService.checkPrivillege('admin/workorder')){
           let obj={};
           obj['name'] = '工单管理';
           obj['link'] = '/admin/workorder/management';
           let children = new Array();
           if (this.privillegeService.checkPrivillege('admin/workorder/management')) {
               let childrenobj = {};
               childrenobj['name'] = '故障工单列表';
               childrenobj['link'] = '/admin/workorder/management';
               children.push(childrenobj);
           }
           if (this.privillegeService.checkPrivillege('admin/workorder/management')) {
               let childrenobj = {};
               childrenobj['name'] = '巡检工单列表';
               childrenobj['link'] = '/admin/patrolworkorder';
               children.push(childrenobj);
           }
           if (this.privillegeService.checkPrivillege('admin/workorder/stats')) {
               let childrenobj = {};
               childrenobj['name'] = '工单统计';
               childrenobj['link'] = '/admin/workorder/stats';
               children.push(childrenobj);
           }
           obj['children'] = children;
           sub_nav_list.push(obj);
       }

       let obj = {};
       obj['name'] = '工单概况';
       obj['link'] = '/admin/workorder-overview';
       sub_nav_list.push(obj);

       let obj2 = {};
       obj2['name'] = '阀值设置';
       obj2['link'] = '/admin/threshold';
       sub_nav_list.push(obj2);
       this.sub_nav_list = sub_nav_list;

       let obj3 = {};
       obj3['name'] = '设备管理';
       obj3['link'] = '/admin/sensor';
       sub_nav_list.push(obj3);
       this.sub_nav_list = sub_nav_list;

       let obj4 = {};
       obj4['name'] = '角色管理';
       obj4['link'] = '/admin/role';
       sub_nav_list.push(obj4);
       this.sub_nav_list = sub_nav_list;

       let obj5 = {};
       obj5['name'] = '人员管理';
       obj5['link'] = '/admin/user';
       sub_nav_list.push(obj5);
       this.sub_nav_list = sub_nav_list;

       let obj6 = {
           name: "日志管理",
           link: "/admin/log",
           children: [
               {
                   name: "登陆日志",
                   link: "/admin/log/system",
               }
           ]
       };
       sub_nav_list.push(obj6);
   }
    ngOnInit() {
        this.user = this.userService.user;
        this.getSubList();
    }


    ngOnDestroy(): void {

    }

}
