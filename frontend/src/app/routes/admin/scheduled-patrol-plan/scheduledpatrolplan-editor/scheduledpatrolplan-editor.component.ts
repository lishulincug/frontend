import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ScheduledPatrolPlan} from "../../../../domain/scheduled-patrol-plan.domain";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "ng2-validation";
import {WeekdaySchedule} from "../../../../domain/weekday-schedule.domain";
import {isNullOrUndefined} from "util";
import {Schedule} from "../../../../domain/schedule.domain";


declare var $: any;
declare var layer: any;

@Component({
    selector: 'scheduledpatrolplan-editor',
    templateUrl: './scheduledpatrolplan-editor.component.html',
    styleUrls: ['./scheduledpatrolplan-editor.component.scss'],

})
export class ScheduledpatrolplanEditorComponent implements OnInit, OnDestroy {

    public _showModal: Boolean = false;
    public _example: ScheduledPatrolPlan = new ScheduledPatrolPlan();
    public weekdays: any;

    public validateForm: FormGroup;
    constructor(public fb: FormBuilder) {

        this.validateForm = this.fb.group({
            name: [ '', [ CustomValidators.rangeLength([2, 20]), Validators.required]],
            enabled: [ false, []],
            description: ['', [ CustomValidators.rangeLength([10, 200]), Validators.required]],
            schedule: ['', [ Validators.required]]
            // mobile: [ '', [ Validators.required, Validators.pattern(phoneReg)]],
            // password:['',[ Validators.pattern(passReg)]],
        });

    }
    @Input() set example(value: ScheduledPatrolPlan) {
        if (isNullOrUndefined(value.id)) {
            value.enabled = false;
            let weekdaySchedule = new WeekdaySchedule();
            weekdaySchedule.weekday = -1;
            value.schedule = weekdaySchedule;
        }

        this._example = value;
    }
    get example() {
        return this._example;
    }
    @Input() set showModal (value: Boolean) {
        this._showModal = value;
    }
    get showModal() {
        return this._showModal;
    }

    @Output() closeEE = new EventEmitter();
    close() {
        this.closeEE.emit();
    }
    @Output() saveEE = new EventEmitter();
    submitForm(): void {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[ i ].markAsDirty();
            this.validateForm.controls[ i ].updateValueAndValidity();
        }
        if (!this.validateForm.valid) {
            return ;
        }
        if (this.validateForm.controls.schedule.value == -1) {
            layer.msg("请选择安排计划", {icon:5, time:1000});
            return ;
        }
        let weekdaySchedule = new WeekdaySchedule();
        weekdaySchedule.weekday = this.validateForm.controls.schedule.value;
        this.example .schedule = weekdaySchedule;
        this.example.name = this.validateForm.controls.name.value;
        this.example.enabled = (isNullOrUndefined(this.validateForm.controls.enabled.value) || this.validateForm.controls.enabled.value == 0) ? false : true;
        this.example.description = this.validateForm.controls.description.value;

        this.saveEE.emit(this.example);
    }
    ngOnInit(): void {
        this.weekdays = new WeekdaySchedule().getList();

    }

    ngOnDestroy(): void {}

}
