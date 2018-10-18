import {ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Input, Output} from "@angular/core";
import {Paginator} from "../../../../domain/paginator.domain";
import {User} from "../../../../domain/user.domain";



declare var layer: any;
@Component({
    selector: 'user-del-index',
    templateUrl: './user-del.component.html',

})
export class UserDelComponent implements OnInit, OnDestroy {

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

    deleteUser() {
        this.delete.emit();
    }

    ngOnDestroy(): void {}
}
