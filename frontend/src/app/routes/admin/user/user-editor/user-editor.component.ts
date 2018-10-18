import {ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Input, Output} from "@angular/core";
import {Paginator} from "../../../../domain/paginator.domain";
import {User} from "../../../../domain/user.domain";



declare var layer: any;
@Component({
    selector: 'user-editor-index',
    templateUrl: './user-editor.component.html',

})
export class UserEditorComponent implements OnInit, OnDestroy {

    public paginator: Paginator = new Paginator(1, 10);
    public _showEdit: Boolean = false;

    @Input() set showEdit(value: boolean) {
        this._showEdit = value;
    }

    @Input()  user: User;

    @Output() closeEdit = new EventEmitter();

    @Output() saveEdit = new EventEmitter();

    constructor(
        private changeDetectorRef: ChangeDetectorRef) {
    }

    ngOnInit() {

    }

    public saveUser() {
        this.saveEdit.emit(this.user);
    }

    public closeEditModel() {
        this.user = new User();
        this.closeEdit.emit();
    }

    ngOnDestroy(): void {}
}



// import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
// import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
// import {CustomValidators} from 'ng2-validation';
// import {isNullOrUndefined} from "util";
// import {User} from "../../../../domain/user.domain";
// declare var $: any;
// declare var layer: any;
// @Component({
//     selector: 'user-editor',
//     templateUrl: './user-editor.component.html',
//     styleUrls: ['./user-editor.component.scss'],
// })
// export class UserEditorComponent implements OnInit, OnDestroy {
//     public _showModal: Boolean = false;
//     public _example: User = new User();
//     public validateForm: FormGroup;
//
//     constructor(public fb: FormBuilder) {
//         this.validateForm =this.fb.group({
//             realName:[ '', [ CustomValidators.rangeLength([2,20]),Validators.required]],
//             serialNumber: [ '', [ Validators.required,CustomValidators.rangeLength([2,20])]],
//             companyId: [ '', [ Validators.required]],
//             departmentId: [ '', [ Validators.required]],
//             entryTime: [ '', [ Validators.required]],
//             status: [ '', [ Validators.required]],
//             wagesType: [ '', [ Validators.required]],
//             duties: [ '', [ Validators.required,CustomValidators.rangeLength([2,20])]],
//             level: [ '', [ Validators.required]],
//             credentials: [ '', [ Validators.required]],
//             credentialsNumber: [ '', [ Validators.required,CustomValidators.rangeLength([2,30])]],
//             wageCardNumber: [ '', [ Validators.required,CustomValidators.rangeLength([2,30])]],
//             socialSecurityAccount: [ '', [ Validators.required,CustomValidators.rangeLength([2,30])]],
//             providentFundAccount: [ '', [ Validators.required,CustomValidators.rangeLength([2,30])]],
//             compensationFundAccount: [ '', [ CustomValidators.rangeLength([2,30])]],
//             remarks: [ '', [ CustomValidators.rangeLength([2,100])]],
//             grossPay: [ '', [ Validators.required,CustomValidators.number]],
//         });
//
//     }
//
//     @Input() set example(value: User) {
//         // if (isNullOrUndefined(value.role)) {
//         //     let role = new Role();
//         //     role.id = 0;
//         //     value.role = role;
//         // }
//         this._example = value;
//     }
//     get example() {
//         return this._example;
//     }
//     @Input() set showModal (value: Boolean) {
//         this._showModal = value;
//     }
//     get showModal() {
//         return this._showModal;
//     }
//
//     @Output() closeEE = new EventEmitter();
//     close(){
//         this.closeEE.emit();
//     }
//     @Output() saveEE = new EventEmitter();
//
//     submitForm(): void {
//         // if (isNullOrUndefined(this.example.role) || isNullOrUndefined(this.example.role.id) || this.example.role.id == 0) {
//         //     layer.msg("请选择角色");
//         //     return;
//         // }
//
//         // for (const i in this.validateForm.controls) {
//         //     this.validateForm.controls[ i ].markAsDirty();
//         //     this.validateForm.controls[ i ].updateValueAndValidity();
//         // }
//         // if (!this.validateForm.valid){
//         //     return ;
//         // }
//         // if (!isNullOrUndefined(this.example.id)){
//         //     if (!isNullOrUndefined(this.validateForm.controls.password.value)){
//         //         this.example.password = this.validateForm.controls.password.value;
//         //     }else{
//         //         this.example.password = null;
//         //     }
//         // }else {
//         //     if (this.validateForm.controls.password.value =="" || isNullOrUndefined(this.validateForm.controls.password.value)){
//         //         layer.msg("密码为必填项");
//         //         return;
//         //     }
//         //     this.example.password = this.validateForm.controls.password.value;
//         //
//         // }
//         // this.example.mobile = this.validateForm.controls.mobile.value;
//         // this.example.realName = this.validateForm.controls.realName.value;
//         //
//         //
//         //
//         // this.saveEE.emit(this.example);
//     }
//     ngOnInit(): void {
//     }
//
//     ngOnDestroy(): void {
//     }
//
//
// }
