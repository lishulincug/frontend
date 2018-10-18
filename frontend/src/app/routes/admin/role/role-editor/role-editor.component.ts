import {ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Input, Output} from "@angular/core";
import {Paginator} from "../../../../domain/paginator.domain";
import {Role} from "../../../../domain/role.domain";



declare var layer: any;
@Component({
    selector: 'role-editor-index',
    templateUrl: './role-editor.component.html',

})
export class RoleEditorComponent implements OnInit, OnDestroy {

    public paginator: Paginator = new Paginator(1, 10);
    public _showEdit: Boolean = false;

    @Input() set showEdit(value: boolean) {
        this._showEdit = value;
    }

    @Input()  role: Role;

    @Output() closeEdit = new EventEmitter();

    @Output() saveEdit = new EventEmitter();

    constructor(
        private changeDetectorRef: ChangeDetectorRef) {
    }

    ngOnInit() {

    }

    public saveRole() {
        this.saveEdit.emit(this.role);
    }

    public closeEditModel() {
        this.role = new Role();
        this.closeEdit.emit();
    }

    ngOnDestroy(): void {}
}
