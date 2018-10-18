import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
    public openSelf: Boolean = false;
    public _msg: string ;
    public id: any ;
    set msg(value) {
        this._msg = value;
    }

    get msg() {
        return this._msg;
    }

    show(id,msg = "确定要删除吗？") {
        this.msg=msg;
        this.id=id;
        this.openSelf = true;
    }

    hide() {
        this.openSelf = false;
    }

    @Output() confirmEvent = new EventEmitter();

    confirm() {
        this.confirmEvent.emit(this.id);
    }

    ngOnInit(): void {
    }

    constructor() {

    }


}
