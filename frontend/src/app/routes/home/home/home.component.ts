import {Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild} from '@angular/core';
import {SettingsService} from "../../../core/settings/settings.service";
import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router";
import {HomeService} from "./home.service";
import {SensorPoint} from "../../../domain/sensorPoint.domain";
import {Dic} from "../../../domain/dic.domain";
import {Target} from "../../../domain/target.domain";
import {Pipeline} from "../../../domain/pipeline.domain";
import {Sensor} from "../../../domain/sensor.domain";
import {AlarmWithPosition} from "../../../domain/alarmWithPosition.domain";
import {DatePipe} from '@angular/common';
import {FaultType} from "../../../domain/faultType.domain";
import {Stat} from "../../../domain/stat.domain";
import {SensorValue} from "../../../domain/sensorValue.domain";

declare var $: any;
declare var layer: any;
declare var echarts: any;
declare var AMapUI: any; //ui组件库加载器，已下载到本地
declare var CKobject: any; //ui组件库加载器，已下载到本地


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit, OnDestroy {

    public option = {
        opt: {
            resizeEnable: true,
            center: [106.436116, 29.830285],
            zoom: 16
        }, key: this.settingsService.amapAk
    };
    public sensorPoints = [];
    public map;
    public AMap;
    public alarmList: AlarmWithPosition[];
    public showhistoryinfo: boolean = false;
    public liquidLevelHistory: SensorValue[];
    public flowSpeedHistory: SensorValue[];
    public showFlowSpeed = false;
    public showLiquidLevel = false;
    public showCamear = false;

    public autoScroll;
    public ScrollDomIdName = 'alarm_list_body_scroll';
    public ScrollDomJqIdName = '#' + this.ScrollDomIdName;

    public normalStatus = 'NORMAL';
    public prewarningStatus = 'PREWARNING';
    public warningStatus = 'WARNING';

    public timeOutFlowSpeed;
    public timeOutLiquidLevel;
    public alarm: AlarmWithPosition;
    public showCreateWorkOrder: boolean;
    public getSensorsCount;
    constructor(private settingsService: SettingsService,
                private changeDetectorRef: ChangeDetectorRef,
                private homeService: HomeService,
                private datePipe: DatePipe,
                private router: Router) {
    }

    public mapLoaded(info) {
        this.map = info.map;
        this.AMap = info.AMap;
        this.map.setMapStyle('amap://styles/blue');
        this.getSensorsCount = setInterval(this.getSensorPoints(), 5000)
    }

    drawSensorPoints() {
        let points = [];
        this.sensorPoints.forEach((point: Pipeline) => {
            let marker = new this.AMap.Marker({ //添加自定义点标记
                position: this.getCenterPosition(point), //基点位置
                offset: new this.AMap.Pixel(0, -25), //相对于基点的偏移位置
                content: `<div class="sensorPointIcon"><img src="/assets/img/blue_water.png" alt="">${point.id}</div>`   //自定义点标记覆盖物内容
            });
            points.push(marker);
        })
        this.map.add(points)
    }

    getStatusValueInPipeline(item: Pipeline) {
        if (item.sensors.some((sensor, i) => (sensor.status == this.warningStatus))) {
            return this.warningStatus;
        }
        if (item.sensors.every((sensor, i) => (sensor.status == this.normalStatus))) {
            return this.normalStatus;
        }
        return this.prewarningStatus;
    }

    getPipelineTypeName(item: Pipeline) {
        let dic = new Dic();
        return dic.pipeLineType[item.type];
    }

    getPipelineIcon(item: Pipeline) {
        let dic = new Dic();
        return dic.pipeLineTypeIcon[item.type];
    }

    getSensorStatusName(value) {
        let dic = new Dic();
        return dic.sensorStatus[value]
    }

    IsAlarmStatus(item: Pipeline) {
        return this.getStatusValueInPipeline(item) == this.warningStatus ? true : false;
    }

    IsAbnormalStatus(item: Pipeline) {
        return this.getStatusValueInPipeline(item) == this.prewarningStatus ? true : false;
    }

    getSensorIcon(sensor: Sensor) {
        let dic = new Dic();
        return dic.sensorTypeIcon[sensor.type];
    }

    getSensorTypeName(sensor: Sensor) {
        let dic = new Dic();
        return dic.sensorTypeName[sensor.type];
    }

    getSensorPoints() {
        this.homeService.getSensorPoints().then(res => {
            if (res.success) {
                this.sensorPoints = res.data.data;
                this.drawSensorPoints();
            }
        })
    }

    ngOnDestroy(): void {
        clearInterval(this.getSensorsCount);
        this.stopScroll();
    }

    public getCenterPosition(pipeline: Pipeline) {
        return [
            (parseFloat(pipeline.startPoint.coordinate.longitude) + parseFloat(pipeline.endPoint.coordinate.longitude)) / 2,
            (parseFloat(pipeline.startPoint.coordinate.latitude) + parseFloat(pipeline.endPoint.coordinate.latitude)) / 2
        ]
    }

    ngOnInit() {
        this.getAlarmData();
        this.getAlarmType();
        this.getPipelineMaterial();
        this.getPipelineType();
        this.getPipelineDiameter();
        this.getAlarmList();
    }

    //告警列表
    getAlarmList() {
        this.homeService.getAlarmList().then((res) => {
            this.changeDetectorRef.markForCheck();
            this.alarmList = res.data.data;
            this.changeDetectorRef.detectChanges();
            this.startScroll();
            this.addScrollEvent();
        })
    }

    //故障数据
    getAlarmData() {
        this.homeService.getAlarmData().then((res) => {
            let myChart = echarts.init(document.getElementById('alarm_data_chart'));
            let option = this.getAlarmDataOption(res.data);
            myChart.setOption(option);
        })
    }

    //故障类别
    getAlarmType() {
        this.homeService.getAlarmType().then((res) => {
            let myChart = echarts.init(document.getElementById('alarm_type_chart'));
            let option = this.getAlarmTypeOption(res.data);
            myChart.setOption(option);
        })
    }

    //管道材质
    getPipelineMaterial() {
        this.homeService.getPipelineMaterial().then((res) => {
            let myChart = echarts.init(document.getElementById('pipeline_material_chart'));
            let option = this.getPipelineMaterailOption(res.data);
            myChart.setOption(option);
        })
    }

    //管道类别
    getPipelineType() {
        this.homeService.getPipelineType().then((res) => {
            let myChart = echarts.init(document.getElementById('pipeline_type_chart'));
            let option = this.getPipelineTypeOption(res.data);
            myChart.setOption(option);
        })
    }

    //管道直径
    getPipelineDiameter() {
        this.homeService.getPipelineDiameter().then((res) => {
            let myChart = echarts.init(document.getElementById('pipeline_diameter_chart'));
            let option = this.getPipelineDiameterOption(res.data);
            myChart.setOption(option);
        })
    }

    //打开历史数据
    openHistoryInfo(sensors) {
        this.showhistoryinfo = true;
        sensors.forEach(sensor => {
            console.log(sensor.type)
            if (sensor.type == "FLOW_SPEED") {
                this.showFlowSpeed = true;
                this.getFlowSpeed(sensor.id);
            }
            if (sensor.type == "LIQUID_LEVEL") {
                this.showLiquidLevel = true;
                this.getLiquidLevel(sensor.id);
            }
            if (sensor.type == "CAMERA") {
                this.showCamear = true;
                setTimeout(() => this.camera("http://hls.open.ys7.com/openlive/adc22d52616e4c1ab6f9c83911a12eee.hd.m3u8"), 1000);
            }
        })
    }

    getFlowSpeed(flow_speed_id: string) {
        this.homeService.getHistoryData(flow_speed_id).then(res => {
            this.flowSpeedHistory = res.data;
            let myChart = echarts.init(document.getElementById('flow_speed_history'));
            let option = this.getHistoryDataOption(res.data);
            myChart.setOption(option);
            let that = this;
            this.timeOutFlowSpeed = setTimeout(function () {
                that.getFlowSpeed(flow_speed_id);
            }, 7000)
        });
    }

    getLiquidLevel(liquid_level_id: string) {
        this.homeService.getHistoryData(liquid_level_id).then(res => {
            this.liquidLevelHistory = res.data;
            let myChart = echarts.init(document.getElementById('liquid_level_history'));
            let option = this.getHistoryDataOption(res.data);
            myChart.setOption(option);
            let that = this;
            this.timeOutLiquidLevel = setTimeout(function () {
                that.getLiquidLevel(liquid_level_id);
            }, 7000)
        });
    }

    camera(url) {
        var flashvars;
        var camera = url;
        flashvars = {
            f: '/assets/js/ckplayer/m3u8.swf',
            a: url, //此处填写购买获取到的视频播放地址
            c: 0,
            p: 1,
            s: 4,
            lv: 1
        };
        var params = {bgcolor: '#FFF', allowFullScreen: true, allowScriptAccess: 'always', wmode: 'transparent'};
        CKobject.embedSWF("/assets/js/ckplayer/ckplayer.swf", "videoPlay", "video", "100%", "100%", flashvars, params);
    }

    //关闭历史数据
    closeHistoryInfo() {
        clearTimeout(this.timeOutLiquidLevel);
        clearTimeout(this.timeOutFlowSpeed);
        this.showhistoryinfo = false;
    }

    public colors = ['#00CEFF', '#4600FF', '#00FF04', '#FF0074', '#999', '#7CB5EC', '#FF0000'];

    public getAlarmDataOption(data: Stat[]) {
        return {
            grid: {
                left: 5, top: 20, right: 20, bottom: 10, containLabel: true,
            },
            tooltip: {
                trigger: 'item',
                textStyle: {fontSize: '12'},
                formatter: "数量:{c} "
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLabel: {color: this.colors[4]},
                data: data.map((item) => this.datePipe.transform(new Date(item.name), 'MM/dd'))
            },
            yAxis: {
                type: 'value',
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {color: this.colors[4]},
                splitLine: {lineStyle: {color: '#454a53', type: 'dashed'}}
            },
            series: [{
                type: 'line',
                // data: data.map((item) => {item.value}),
                data: [6, 3, 9, 2, 6, 5, 3],
                lineStyle: {color: 'rgba(255, 0, 0,.7)'},
                areaStyle: {
                    color: {
                        type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                        colorStops: [
                            {
                                offset: 0, color: 'rgba(255, 0, 0,.7)' // 0% 处的颜色
                            },
                            {
                                offset: .3, color: 'rgba(255, 0, 0,.6)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(0,0,0,0)' // 100% 处的颜色
                            }],
                        globalCoord: false // 缺省为 false
                    }
                }
            }]
        };
    }

    public getHistoryDataOption(data: SensorValue[]) {
        return {
            grid: {
                left: 5, top: 20, right: 20, bottom: 10, containLabel: true,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLabel: {color: this.colors[4]},
                data: data.map((item) => this.datePipe.transform(new Date(item.time), 'MM/dd'))
            },
            yAxis: {
                type: 'value',
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {color: this.colors[4]},
                splitLine: {lineStyle: {color: '#454a53', type: 'dashed'}}
            },
            dataZoom: [{
                type: 'inside',
                start: 0,
                end: 10
            }, {
                start: 0,
                end: 10,
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
            series: [{
                type: 'line',
                data: data.map((item) => item.value),
                lineStyle: {color: 'rgba(255, 0, 0,.7)'},
                areaStyle: {
                    color: {
                        type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                        colorStops: [
                            {
                                offset: 0, color: 'rgba(255, 0, 0,.7)' // 0% 处的颜色
                            },
                            {
                                offset: .3, color: 'rgba(255, 0, 0,.6)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(0,0,0,0)' // 100% 处的颜色
                            }],
                        globalCoord: false // 缺省为 false
                    }
                }
            }]
        };
    }

    private getAlarmTypeOption(data: Stat[]) {
        let alarmType = new FaultType();
        let hours = data.map((item) => alarmType[item.name]);
        let days = [''];
        let zData = data.map((item, i) => [0, i, item.value]);

        var dataIe = data.map((item) => item.value);

        let ieCharts = {
            title: {
                show: false,
            },
            grid: {
                left: 5, top: 20, right: 20, bottom: 10, containLabel: true,
            },
            tooltip: {
                trigger: 'item',
                textStyle: {fontSize: '12'},
                formatter: "数量:{c} "
            },
            xAxis: {
                data: hours,
                axisLabel: {
                    inside: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {lineStyle: {color: '#454a53', type: 'dashed'}},
                axisLabel: {
                    textStyle: {
                        color: '#999'
                    }
                }
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [
                {
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#83bff6'},
                                    {offset: 0.5, color: '#188df0'},
                                    {offset: 1, color: '#188df0'}
                                ]
                            )
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#2378f7'},
                                    {offset: 0.7, color: '#2378f7'},
                                    {offset: 1, color: '#83bff6'}
                                ]
                            )
                        }
                    },
                    data: dataIe
                }
            ]
        };
        let noIeCharts = {
            tooltip: {show: false},
            visualMap: {
                max: 20,
                show: false,
                inRange: {color: ['rgba(124, 181, 236,1)']}
            },
            xAxis3D: {
                type: 'category',
                data: hours,
                axisLabel: {fontSize: 12, color: '#fff', margin: 40,},
                axisLine: {lineStyle: {color: "rgba(0,0,0,0)"}}
            },
            yAxis3D: {
                type: 'category',
                data: days,
                axisLine: {lineStyle: {color: "rgba(0,0,0,0)"}}
            },
            zAxis3D: {
                type: 'value',
                axisLabel: {fontSize: 14, color: '#999'},
                axisLine: {lineStyle: {color: "rgba(0,0,0,0)"}}
            },
            grid3D: {
                boxHeight: 60,
                boxWidth: 250,
                boxDepth: 30,
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                splitLine: {lineStyle: {color: '#454a53'}},
                light: {
                    main: {intensity: 1.2, shadow: true},
                    ambient: {intensity: 0.2}
                }
            },
            series: [{
                type: 'bar3D',
                data: zData.map(function (item) {
                    return {
                        value: [item[1], item[0], item[2]],
                    }
                }),
                animation: true,
                shading: 'lambert',
                label: {textStyle: {fontSize: 16, borderWidth: 1,}},
                emphasis: {
                    label: {textStyle: {fontSize: 20, color: 'rgba(255, 0, 0,1)'}},
                    itemStyle: {color: 'rgba(255, 0, 0,1)'}
                }
            }]
        }
        return window['ieNum'] > 0 ? ieCharts : noIeCharts;

    }

    private getPipelineMaterailOption(data: Stat[]) {
        return {
            tooltip: {

                trigger: 'item',
                textStyle: {fontSize: '12'},
                formatter: "数量<br/> {c}({d}%) "
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                left: '3',
                top: '5',
                itemWidth: 12,
                itemHeight: 12,
                icon: 'circle',
                textStyle: {color: '#999'},
                data: data.map((item) => item.name)
            },
            series: [
                {
                    name: '管道材质',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    center: ['65%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '14',
                                color: '#999',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            color: '#999'
                        }
                    },
                    data: data
                }
            ]
        };
    }

    private getPipelineDiameterOption(data1: Stat[]) {
        let data = data1.map((item) => {
            item.name = item.name + 'mm';
            return item;
        })
        return {
            tooltip: {
                trigger: 'item',
                textStyle: {fontSize: '12'},
                formatter: "数量<br/> {c}({d}%) "
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                left: '3',
                top: '5',
                itemWidth: 12,
                itemHeight: 12,
                icon: 'circle',
                textStyle: {color: '#999'},
                data: data.map((item) => item.name)
            },
            series: [
                {
                    name: '管道直径',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    center: ['65%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '14',
                                color: '#999',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            color: '#999'
                        }
                    },
                    data: data
                }
            ]
        };
    }

    private getPipelineTypeOption(data1: Stat[]) {
        let dic = new Dic();
        let data = data1.map((item) => {
            item.name = dic.pipeLineType[item.name].substring(0, 2);
            return item;
        })
        return {
            tooltip: {
                trigger: 'item',
                textStyle: {fontSize: '12'},
                formatter: "数量<br/> {c}({d}%) "
            },
            legend: {
                orient: 'horizontal',
                left: '0',
                itemWidth: 10,
                itemHeight: 10,
                icon: 'circle',
                textStyle: {color: '#999'},
                data: data.map((item) => item.name)
            },
            series: [
                {
                    name: '管道类别',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '14',
                                color: '#999',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            color: '#999'
                        }
                    },
                    data: data
                }
            ]
        };
    }

    public createAlarm(alarm) {
        this.alarm = alarm;
        this.showCreateWorkOrder = true;
    }

    public getSensorValueWithUnit(sensor: Sensor) {
        let dic = new Dic();
        return sensor.currentValue.value + dic.sensorUnitName[sensor.type];
    }

    private startScroll() {
        let scollH = document.getElementById(this.ScrollDomIdName).scrollHeight;
        let domH = $(this.ScrollDomJqIdName).height();
        this.autoScroll = setInterval(() => {
            let top = $(this.ScrollDomJqIdName).scrollTop();
            $(this.ScrollDomJqIdName).scrollTop(top + 1);
            if ((top + domH + 3) >= scollH) $(this.ScrollDomJqIdName).scrollTop(0);
        }, 200)
    }

    public stopScroll(){
        clearInterval(this.autoScroll);
    }

    public addScrollEvent(){
        $(document).on('mouseenter',this.ScrollDomJqIdName,function(){
            this.stopScroll();
        }.bind(this));
        $(document).on('mouseleave',this.ScrollDomJqIdName,function() {
            this.startScroll();
        }.bind(this));
    }
}
