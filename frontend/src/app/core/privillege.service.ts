import { Injectable } from "@angular/core";
import {LoginService} from "../routes/login/login.service";
import {UserService} from "../routes/login/user.service";

@Injectable()
export class PrivillegeService {

    constructor(private userService: UserService) {
    }
    private  ADMIN = "admin";               // 账户管理
    private  MAP = "map";   // 组织机构

// <li nz-menu-item (click)="goToUrl('/admin/alarm')">故障列表</li>
// <li nz-menu-item (click)="goToUrl('/admin/workorder/management')">工单列表</li>
// <li nz-menu-item (click)="goToUrl('/admin/workorder/stats')">工单统计</li>
// <li nz-menu-item (click)="goToUrl('/admin/pipeline')">管道列表</li>
// <li nz-menu-item (click)="goToUrl('/admin/pipelinepoint')">井点列表</li>
// <li nz-menu-item (click)="goToUrl('/admin/pipelinestats')">管网统计</li>
    private  PRIVILLEGE_LIST = {
        'patroller': [
            this.ADMIN,
            // this.ADMIN + "/alarm",
            // this.ADMIN + "/alarm/list",
            this.ADMIN + "/workorder",
            this.ADMIN + "/workorder/management",
            // this.ADMIN + "/workorder/stats",
            // this.ADMIN + "/pipeline",
            // this.ADMIN + "/pipeline/list",
            // this.ADMIN + "/pipeline/pipelinepoint",
            // this.ADMIN + "/pipeline/pipelinestats",
            this.MAP
        ],
        'schoolmaster': [
            this.ADMIN,
            this.ADMIN + "/alarm",
            this.ADMIN + "/alarm/list",
            this.ADMIN + "/workorder",
            this.ADMIN + "/workorder/management",
            this.ADMIN + "/workorder/stats",
            this.ADMIN + "/pipeline",
            this.ADMIN + "/pipeline/list",
            this.ADMIN + "/pipeline/pipelinepoint",
            this.ADMIN + "/pipeline/pipelinestats",
            this.MAP

        ],
        'supervisor': [
            this.ADMIN,
            this.ADMIN + "/alarm",
            this.ADMIN + "/alarm/list",
            this.ADMIN + "/workorder",
            this.ADMIN + "/workorder/management",
            this.ADMIN + "/workorder/stats",
            this.ADMIN + "/pipeline",
            this.ADMIN + "/pipeline/list",
            this.ADMIN + "/pipeline/pipelinepoint",
            this.ADMIN + "/pipeline/pipelinestats",
            this.MAP
        ],
        'patrollerLeader': [
            this.ADMIN,
            this.ADMIN + "/alarm",
            this.ADMIN + "/alarm/list",
            this.ADMIN + "/workorder",
            this.ADMIN + "/workorder/management",
            this.ADMIN + "/workorder/stats",
            this.ADMIN + "/pipeline",
            this.ADMIN + "/pipeline/list",
            this.ADMIN + "/pipeline/pipelinepoint",
            this.ADMIN + "/pipeline/pipelinestats",
            this.MAP
        ]
    }

    private  user;
    public checkPrivillege(privillgeId) {
       //  this.user = this.userService.user;
       //
       //  let bool = false;
       //  this.PRIVILLEGE_LIST[this.user.role.code].map(e=>{
       //
       //      if (e == privillgeId) {
       //          bool = true;
       //      }
       //  });
       //
       // return bool;
        return true;
    }

}
