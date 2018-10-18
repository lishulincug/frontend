import {ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Input, Output} from "@angular/core";
import {Paginator} from "../../../../domain/paginator.domain";
import {User} from "../../../../domain/user.domain";



declare var layer: any;
@Component({
    selector: 'user-list-index',
    templateUrl: './user-list.component.html',

})
export class UserListComponent implements OnInit, OnDestroy {

    public _paginator: Paginator = new Paginator(1, 10);
    public showEdit: Boolean = false;
    public showDelete: Boolean = false;
    public _userList: User[] = [new User()];
    public user: User = new User();
    public id: string = "";

    constructor(
        private changeDetectorRef: ChangeDetectorRef) {
    }

    @Input() set userList(value: User[]){
        this._userList = value;
    }

    @Output() pageChange = new EventEmitter();

    @Output() editUser= new EventEmitter();

    @Output() deleteUser= new EventEmitter();

    @Input() paginator;

    ngOnInit() {

    }

    public listNum(i) {
        return i + 1 + (this.paginator.pageNo - 1) * this.paginator.pageSize;
    }

    public pageChanged(paginator: Paginator){
        this.pageChange.emit(paginator);
    }

    public showEditModel(user: User) {
        this.showEdit = true;
        this.user = user;
    }

    public closeEditModel() {
        this.showEdit = false;
    }

    public saveEdit(user: User) {
        this.user = new User();
        this.showEdit = false;
        this.editUser.emit(user);
    }

    public showDeleteModel(id: string) {
        this.showDelete = true;
        this.id = id;
    }

    public closeDeleteModel() {
        this.showDelete = false;
        this.id = "";
    }

    public delete() {
        this.showDelete = false;
        this.deleteUser.emit(this.id);
        this.id = "";
    }
    ngOnDestroy(): void {}
}
