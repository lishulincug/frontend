import {ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {Paginator} from "../../../domain/paginator.domain";
import {Role} from "../../../domain/role.domain";
import {RoleService} from "./role.service";



declare var layer: any;
@Component({
    selector: 'role-index',
    templateUrl: './role.component.html',

})
export class RoleComponent implements OnInit, OnDestroy {

    public paginator: Paginator = new Paginator(1, 10);
    public showAdd: boolean =false;
    public roleList: Role[] = [new Role()];

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private roleService: RoleService) {
    }

    ngOnInit() {
        this.getRoleList();
    }

    ngOnDestroy(): void {}

    showAddModel() {
        this.showAdd = true;
    }

    closeAddModel() {
        this.showAdd = false;
    }

    addRole(role: Role) {
        this.roleService.add(role).then(res => {
            if (res.success) {
                this.showAdd = false;
                this.getRoleList();
                layer.msg("角色创建成功", {icon:1, time:1000});
            }
        }).catch(res => {
            layer.msg("角色创建失败", {icon:1, time:1000});
        })
    }

    editRole(role: Role) {
        this.roleService.edit(role).then(res => {
            if (res.success) {
                this.getRoleList();
                layer.msg("角色更新成功", {icon:1, time:1000});
            }
        }).catch(res => {
            layer.msg("角色更新失败", {icon:1, time:1000});
        })
    }

    deleteRole(id: string) {
        this.roleService.del(id).then(res => {
            if (res.success) {
                this.getRoleList();
                layer.msg("角色删除成功", {icon:1, time:1000});
            }
        }).catch(res => {
            layer.msg("角色删除失败", {icon:1, time:1000});
        })
    }

    public getRoleList() {
        this.roleService.getRoleList(this.paginator).then(res => {
            if(res.success) {
                this.roleList = res.data.data;
                this.paginator = res.data.page;
            }
        })
    }

    //分页切换
    pageChanged(paginator: Paginator){
        this.roleService.getRoleList(this.paginator).then(res => {
            if(res.success) {
                this.roleList = res.data.data;
                this.paginator = res.data.page;
            }
        })
    }
}
