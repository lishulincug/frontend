import {ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Input, Output} from "@angular/core";
import {Paginator} from "../../../../domain/paginator.domain";
import {Role} from "../../../../domain/role.domain";



declare var layer: any;
@Component({
    selector: 'role-list-index',
    templateUrl: './role-list.component.html',

})
export class RoleListComponent implements OnInit, OnDestroy {

    public _paginator: Paginator = new Paginator(1, 10);
    public showEdit: Boolean = false;
    public showDelete: Boolean = false;
    public _roleList: Role[] = [new Role()];
    public role: Role = new Role();
    public id: string = "";

    constructor(
        private changeDetectorRef: ChangeDetectorRef) {
    }

    @Input() set roleList(value: Role[]){
        this._roleList = value;
    }

    @Output() pageChange = new EventEmitter();

    @Output() editRole= new EventEmitter();

    @Output() deleteRole= new EventEmitter();

    @Input() paginator;

    ngOnInit() {

    }

    public listNum(i) {
        return i + 1 + (this.paginator.pageNo - 1) * this.paginator.pageSize;
    }

    public pageChanged(paginator: Paginator){
        this.pageChange.emit(paginator);
    }

    public showEditModel(role: Role) {
        this.showEdit = true;
        this.role = role;
    }

    public closeEditModel() {
        this.showEdit = false;
    }

    public saveEdit(role: Role) {
        this.role = new Role();
        this.showEdit = false;
        this.editRole.emit(role);
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
        this.deleteRole.emit(this.id);
        this.id = "";
    }
    ngOnDestroy(): void {}
}
