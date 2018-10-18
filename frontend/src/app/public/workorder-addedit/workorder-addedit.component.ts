import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {WorkOrder} from "../../domain/workOrder.domain";
import {WorkorderAddeditService} from "./workorder-addedit.service";
import {WorkOrderStatus} from "../../domain/workOrderStatus.domain";
import {Patroller} from "../../domain/patroller.domain";



declare var $: any;
declare var layer: any;
declare var laydate: any;

@Component({
	selector: 'workorder-addedit',
	templateUrl: './workorder-addedit.component.html',
	styleUrls: ['./workorder-addedit.component.scss'],

})
export class WorkorderAddeditComponent implements OnInit, OnDestroy {

	private wokerorderStatus: WorkOrderStatus[] = [];
	public showEditModal = false;

	private alarmid: number;
	private workorderid: number;
	private wokeorder: WorkOrder;

    private patrollerList: Patroller[] = [];
	protected closeEdit() {
		this.showEditModal = false;
	}
	public edit(value: WorkOrder) {
		this.wokeorder = value;
		//this.alarmid = value.alarm.id;
		//this.workorderid = value.id;
		this.showEditModal = true;
	}



	getFormJson(domname) {
		let formdata = $(domname).serializeArray();
		let obj = {};
		formdata.forEach(item => {
			obj[item.name] = item.value;
		});
		return obj;
	}
	constructor(private workorderAddeditService: WorkorderAddeditService
	) {
	}
	getstatus(){

		this.workorderAddeditService.getStatusData().then( res =>{
			if (res.success) {
				this.wokerorderStatus = res.data;
			}
		});

	}

    ngAfterViewChecked() {
        laydate.render({
            elem: '#finish_time',
            type: 'datetime',
            done: function(value, date) {
                this.wokeorder.finishTime = new Date(value).getTime();
            }.bind(this)
        });
    }

	public save() {

		var formdata = this.getFormJson('.editDeviceForm');

		if (this.checkfrom(formdata)){
            //formdata['finishtime'] = Date.parse( formdata['finishtime']);
			this.workorderAddeditService.postsave(formdata).then(res =>{
				if (res.success) {
					layer.msg(res.msg,{icon:1, time:1000});
					this.closeEdit();
                    this.getList();
				} else {
					layer.msg(res.msg,{icon:5, time:1000});
				}
			});
		}
	}
    @Output() getListEvent = new EventEmitter();
    private getList() {
        this.getListEvent.emit();
    }
    //获取巡检员列表
    getPatroller(){
        this.workorderAddeditService.getPatroller(100).then( res=>{
            if(res.success){

                this.patrollerList = res.data.data;
            }
        });
    }

	private checkfrom(data: object){
		data['alarmid'] = Number(data['alarmid']);
		if (data['alarmid'] == 0){
			layer.msg("非法参数");
			return false;
		}

		if (data['status'] == ''){
			layer.msg("请选择工单状态");
			return false;
		}

		if (data['finishtime'] == ''){
			layer.msg("请填写完成时间");
			return false;
		}
		return true;
	}


	ngOnInit(): void {
		this.getstatus();
		this.getPatroller();
	}

	ngOnDestroy(): void {
	}



}
