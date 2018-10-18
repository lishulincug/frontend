import {Component, OnInit, OnDestroy, Input, Output, EventEmitter, ChangeDetectorRef} from '@angular/core';
import {SensorThreshold} from "../../../../domain/sensorThreshold.domain";

declare var $: any;
declare var layer: any;

@Component({
    selector: 'threshold-editor',
    templateUrl: './threshold-editor.component.html',
    styleUrls: ['./threshold-editor.component.scss']
})
export class ThresholdEditorComponent implements OnInit, OnDestroy{

    public sensorThreshold: SensorThreshold;
    public _showEditor: boolean;

    @Input() set showEditor(value: boolean) {
        this._showEditor = value;
    }

    @Input() set editorSensorThreshold(value: SensorThreshold) {
        this.sensorThreshold = value;
    }

    @Output() cancelEditEvent = new EventEmitter();
    @Output() saveEvent = new EventEmitter();

    get showEditor(){
        return this._showEditor;
    }

    constructor(
        private changeDetectorRef: ChangeDetectorRef
    ){}

    save() {
        if (this.checkThreshold()) {
            this.saveEvent.emit(this.sensorThreshold);
        }
    }

    checkThreshold(){
        if(this.sensorThreshold.prewarning.valueFrom > this.sensorThreshold.prewarning.valueTo){
            layer.msg("预警阀值区间起始值不能大于结束值");
            return false;
        }
        if(this.sensorThreshold.warning.valueFrom > this.sensorThreshold.warning.valueTo){
            layer.msg("告警警阀值区间起始值不能大于结束值");
            return false;
        }
        return true;
    }

    cancel(){
        this._showEditor = false;
        this.cancelEditEvent.emit(this._showEditor);
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

}