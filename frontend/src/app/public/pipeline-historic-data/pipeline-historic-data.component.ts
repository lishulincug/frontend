import {Component, OnDestroy, OnInit, Input, AfterViewChecked, AfterViewInit, AfterContentInit} from '@angular/core';
import {ChangeDetectorRef} from '@angular/core';
import {SettingsService} from "../../core/settings/settings.service";

declare var $: any;
declare var echarts: any;

@Component({
    selector: 'app-pipeline-historic-data',
    templateUrl: './pipeline-historic-data.component.html',
    styleUrls: ['./pipeline-historic-data.component.scss']
})
export class PipelineHistoricDataComponent implements OnInit, OnDestroy, AfterViewChecked, AfterViewInit, AfterContentInit {
    public timeOut = null;

    constructor(private settingsService: SettingsService,
                private changeDetectorRef: ChangeDetectorRef) {
    }

    @Input() pipeLineName;

    _openSelf = false;
    set openSelf(v) {
        this._openSelf = v;
    }

    get openSelf() {
        return this._openSelf;
    }

    closeSelf() {
        clearInterval(this.timeOut);
        this.timeOut = null;
        this.openSelf = false;
    }

    ngOnInit() {
    }

    ngAfterViewChecked() {
        if (this.openSelf && !this.timeOut)
            this.render_charts();
    }

    ngAfterContentInit() {
    }

    ngAfterViewInit() {
    }

    render_charts() {
        // 基于准备好的dom，初始化echarts实例
        let chartFlux = echarts.init(document.getElementById('chartFlux'));
        let chartWaterLevel = echarts.init(document.getElementById('chartWaterLevel'));
        let chartSpeed = echarts.init(document.getElementById('chartSpeed'));
        let chartTemperature = echarts.init(document.getElementById('chartTemperature'));
        let colors = ['#5793f3', '#d14a61', '#675bba'];
        // 指定图表的配置项和数据
        let chartFluxOption = {
            color: colors,
            tooltip: {
                trigger: 'none',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                data: ['流量实时数据']
            },
            grid: {
                top: 70,
                bottom: 60,
                left: 38

            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                    axisLabel: {
                        interval: 2,
                        rotate: 20
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                return '流量  ' + params.value
                                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                            }
                        }
                    },
                    data: initDate(12)
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    max: 1000,
                    name: '(m³/h)',
                    nameLocation: 'end'
                }

            ],
            series: [
                {
                    name: '流量实时数据',
                    type: 'line',
                    smooth: true,
                    data: initValue(12, 1000, 1, 50)
                }
            ]
        };
        let chartWaterLevelOption = {
            color: colors,
            tooltip: {
                trigger: 'none',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                data: ['水位实时数据']
            },
            grid: {
                top: 70,
                bottom: 60,
                left: 38
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                    axisLabel: {
                        interval: 2,
                        rotate: 20
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                return '水位  ' + params.value
                                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                            }
                        }
                    },
                    data: initDate(12)
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    max: 100,
                    name: '(cm)',
                    nameLocation: 'end'
                }

            ],
            series: [
                {
                    name: '水位实时数据',
                    type: 'line',
                    smooth: true,
                    data: initValue(12, 100, 1, 20)
                }
            ]
        };
        let chartSpeedOption = {
            color: colors,
            tooltip: {
                trigger: 'none',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                data: ['流速实时数据']
            },
            grid: {
                top: 70,
                bottom: 60,
                left: 38
                // containLabel: true,
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        interval: 2,
                        rotate: 20
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                return '流速  ' + params.value
                                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                            }
                        }
                    },
                    data: initDate(12)
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    max: 100,
                    name: '(m/s)',
                    nameLocation: 'end'
                }

            ],
            series: [
                {
                    name: '流速实时数据',
                    type: 'line',
                    smooth: true,
                    data: initValue(12, 10, 1, 2)
                }
            ]
        };
        let chartTemperatureOption = {
            color: colors,
            tooltip: {
                trigger: 'none',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                data: ['温度实时数据']
            },
            grid: {
                top: 70,
                bottom: 60,
                left: 38
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                    axisLabel: {
                        interval: 2,
                        rotate: 20
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                return '温度  ' + params.value
                                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                            }
                        }
                    },
                    data: initDate(12)
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    max: 100,
                    name: '(C°)',
                    nameLocation: 'end'
                }

            ],
            series: [
                {
                    name: '温度实时数据',
                    type: 'line',
                    smooth: true,
                    data: initValue(12, 100, 1, 10)
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        chartFlux.setOption(chartFluxOption);
        chartWaterLevel.setOption(chartWaterLevelOption);
        chartSpeed.setOption(chartSpeedOption);
        chartTemperature.setOption(chartTemperatureOption);

        function dateformat(date = null, fmt) {
            date = date ? date : new Date();
            let o = {
                "M+": date.getMonth() + 1,                 //月份
                "d+": date.getDate(),                    //日
                "h+": date.getHours(),                   //小时
                "m+": date.getMinutes(),                 //分
                "s+": date.getSeconds(),                 //秒
                "q+": Math.floor((date.getMonth() + 3) / 3), //季度
                "S": date.getMilliseconds()             //毫秒
            };
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            }
            for (var k in o) {
                if (new RegExp("(" + k + ")").test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                }
            }
            return fmt;
        };

        function getData(Number) {
            let dtTmp = new Date();
            let dtTmpStr = dtTmp.getTime();
            return dateformat(new Date(dtTmpStr + 1000 * Number), 'yyyy-MM-dd hh:mm:ss');
        }

        function getValue(totalValue, keepNum, change) {
            return totalValue / 2 + Math.round(Math.random() * change * keepNum * 10) / (keepNum * 10) * (Math.random() > .5 ? 1 : -1)
        }

        function initValue(countNum, totalValue, keepNum, change) {
            let valueArr = [];
            for (let i = countNum; i > 0; i--) {
                valueArr.push(getValue(totalValue, keepNum, change))
            }
            return valueArr;
        }

        function initDate(countNum) {
            let dateArr = [];
            for (let i = countNum; i > 0; i--) {
                dateArr.push(getData(-i * 5))
            }
            return dateArr;
        }

        function insetValue(chart, option, value, date) {
            option.series[0].data.shift();
            option.series[0].data.push(value);
            option.xAxis[0].data.shift();
            option.xAxis[0].data.push(date);
            chart.setOption(option);
        }

        this.timeOut = setInterval(function () {
            insetValue(chartFlux, chartFluxOption, getValue(1000, 1, 50), getData(5))
            insetValue(chartWaterLevel, chartWaterLevelOption, getValue(100, 1, 20), getData(5))
            insetValue(chartSpeed, chartSpeedOption, getValue(10, 1, 2), getData(5))
            insetValue(chartTemperature, chartTemperatureOption, getValue(100, 1, 10), getData(5))
        }, 5000);

    }


    ngOnDestroy() {
        clearInterval(this.timeOut);
        this.timeOut = null;
    }


}
