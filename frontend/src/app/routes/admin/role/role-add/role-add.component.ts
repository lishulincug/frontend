import {ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Input, Output} from "@angular/core";
import {Paginator} from "../../../../domain/paginator.domain";
import {Fault} from "../../../../domain/fault.domain";
import {Role} from "../../../../domain/role.domain";



declare var layer: any;
@Component({
    selector: 'role-add-index',
    templateUrl: './role-add.component.html',

})
export class RoleAddComponent implements OnInit, OnDestroy {

    public paginator: Paginator = new Paginator(1, 10);
    public _showAdd: Boolean = false;
    public role: Role = new Role();

    @Input() set showAdd(value: boolean) {
        this._showAdd = value;
    }

    @Output() closeAdd = new EventEmitter();

    @Output() addRole = new EventEmitter();

    constructor(
        private changeDetectorRef: ChangeDetectorRef) {
    }

    ngOnInit() {

    }

    ngOnDestroy(): void {}

    closeAddModel() {
        this._showAdd = false;
        this.role = new Role();
        this.closeAdd.emit();
    }

    saveRole() {
        this.addRole.emit(this.role)
    }
}
