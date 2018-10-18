import {ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {Paginator} from "../../../domain/paginator.domain";
import {User} from "../../../domain/user.domain";
import {UserService} from "./user.service";



declare var layer: any;
@Component({
    selector: 'user-index',
    templateUrl: './user.component.html',

})
export class UserComponent implements OnInit, OnDestroy {

    public paginator: Paginator = new Paginator(1, 10);
    public showAdd: boolean =false;
    public userList: User[] = [new User()];

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private userService: UserService) {
    }

    ngOnInit() {
        this.getUserList();
    }

    ngOnDestroy(): void {}

    showAddModel() {
        this.showAdd = true;
        console.log(this.showAdd);
    }

    closeAddModel() {
        this.showAdd = false;
    }

    addUser(user: User) {
        this.userService.add(user).then(res => {
            if (res.success) {
                this.showAdd = false;
                this.getUserList();
                layer.msg("设备创建成功", {icon:1, time:1000});
            }
        }).catch(res => {
            layer.msg("设备创建失败", {icon:1, time:1000});
        })
    }

    editUser(user: User) {
        this.userService.edit(user).then(res => {
            if (res.success) {
                this.getUserList();
                layer.msg("设备更新成功", {icon:1, time:1000});
            }
        }).catch(res => {
            layer.msg("设备更新失败", {icon:1, time:1000});
        })
    }

    deleteUser(id: string) {
        this.userService.del(id).then(res => {
            if (res.success) {
                this.getUserList();
                layer.msg("设备删除成功", {icon:1, time:1000});
            }
        }).catch(res => {
            layer.msg("设备删除失败", {icon:1, time:1000});
        })
    }

    public getUserList() {
        this.userService.getUserList(this.paginator).then(res => {
            if(res.success) {
                this.userList = res.data.data;
                this.paginator = res.data.page;
            }
        })
    }

    //分页切换
    pageChanged(paginator: Paginator){
        this.userService.getUserList(this.paginator).then(res => {
            if(res.success) {
                this.userList = res.data.data;
                this.paginator = res.data.page;
            }
        })
    }
}
