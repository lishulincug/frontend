import {ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Input, Output} from "@angular/core";
import {Paginator} from "../../../../domain/paginator.domain";
import {Fault} from "../../../../domain/fault.domain";
import {User} from "../../../../domain/user.domain";



declare var layer: any;
@Component({
    selector: 'user-add-index',
    templateUrl: './user-add.component.html',

})
export class UserAddComponent implements OnInit, OnDestroy {

    public paginator: Paginator = new Paginator(1, 10);
    public _showAdd: Boolean = false;
    public user: User = new User();

    @Input() set showAdd(value: boolean) {
        this._showAdd = value;
    }

    @Output() closeAdd = new EventEmitter();

    @Output() addUser = new EventEmitter();

    constructor(
        private changeDetectorRef: ChangeDetectorRef) {
    }

    ngOnInit() {

    }

    ngOnDestroy(): void {}

    closeAddModel() {
        this._showAdd = false;
        this.user = new User();
        this.closeAdd.emit();
    }

    saveUser() {
        this.addUser.emit(this.user)
    }
}
