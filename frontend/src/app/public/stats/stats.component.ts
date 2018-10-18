import {Component, Input, OnInit} from '@angular/core';
import {DataStats} from "../../domain/dataStats.domain";

declare var $: any;
declare var echarts: any;

@Component({
    selector: 'stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

    constructor() {

    }

    @Input() chartsId;
    @Input() chartsName;

    // @Input() statsData;
    public _statsData: DataStats[] = [new DataStats()];

    @Input() set statsData(value) {
        this._statsData = value;
        if(this._statsData.length > 0) {
            this._statsData.forEach(req=> {
             this.statsoption.legend.data.push(req.name);
             this.statsoption.series[0].data.push(req)
            });
            var node = document.getElementById(this.chartsId);
            if(node) {
                this.statsoption.title.text = this.chartsName;
                var myChartStats = echarts.init(node);
                myChartStats.setOption(this.statsoption);
            }
        }
    }
    get statsData() {
        return this._statsData;
    }

    public testid:string = 'lalal';

    statsoption = {
        title: {
            text: '',
            subtext: '百分比',
            x: 'center',
            textStyle:{color:'#fff'}
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: [],
            textStyle:{color:'#fff'}
        },
        series: [
            {
                name: '工单状态',
                type: 'pie',
                radius: ['30%', '50%'],
                avoidLabelOverlap: false,
                data: [],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };




    ngOnInit() {

    }


}
