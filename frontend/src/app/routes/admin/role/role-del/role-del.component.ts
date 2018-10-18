import {ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Input, Output} from "@angular/core";
import {Paginator} from "../../../../domain/paginator.domain";



declare var layer: any;
@Component({
    selector: 'role-del-index',
    templateUrl: './role-del.component.html',

})
export class RoleDelComponent implements OnInit, OnDestroy {

    public paginator: Paginator = new Paginator(1, 10);
    public showModal: Boolean = false;

    @Input() showDelete;

    @Output() closeDelete = new EventEmitter();

    @Output() delete = new EventEmitter();

    constructor(
        private changeDetectorRef: ChangeDetectorRef) {
    }

    ngOnInit() {

    }

    closeDeleteModel() {
        this.closeDelete.emit();
    }

    deleteRole() {
        this.delete.emit();
    }

    ngOnDestroy(): void {}
}
