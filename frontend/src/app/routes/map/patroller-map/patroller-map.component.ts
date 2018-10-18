import {Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {SettingsService} from "../../../core/settings/settings.service";
import {LoginService} from "../../login/login.service";
import 'rxjs/add/operator/toPromise';
import {FileUploader} from "ng2-file-upload";

declare var $: any;
declare var layer: any;
declare var AMapUI: any; //ui组件库加载器，已下载到本地
import {Router} from "@angular/router";
import {PatrollerMapService} from "./patroller-map.service";


@Component({
    selector: 'app-patroller-map',
    templateUrl: './patroller-map.component.html',
    styleUrls: ['./patroller-map.component.scss'],

})
export class PatrollerMapComponent implements OnInit, OnDestroy {


    constructor(private settingsService: SettingsService,
                private changeDetectorRef: ChangeDetectorRef,
                private router: Router,
                private patrollerMapService: PatrollerMapService,) {
    }

    public option = {
        opt: {
            resizeEnable: true,
            center: [106.436116, 29.830285],
            zoom: 13
        }, key: '1f178047ccb33d2a1d53a44d2fe44082'
    };
    map;
    AMap;
    satelliteLayer;  //卫星地图图层
    PathSimplifier: any; //海量路径图层构造函数
    SimpleInfoWindow;  //信息窗口
    showSatelliteLayer: boolean;
    pathSimplifierIns; //海量路径图层对象
    showMapFilter = false;
    getPatrollers;  //所有巡检员


    _show_label = true;
    set show_label(v) {
        this._show_label = v;
        this.drawPatroller(this.getPatrollers);
    }

    get show_label() {
        return this._show_label;
    }

    public mapLoaded(info) {
        this.map = info.map;
        this.AMap = info.AMap;
        this.map.setMapStyle('amap://styles/blue');
        this.addSatellite();
        this.settingsService.createTag('assets/js/amapui/main.js', 'amapui', () => this.mapUiLoaded());
    }


    mapUiLoaded() {
        AMapUI.loadUI(['overlay/SimpleInfoWindow'], (SimpleInfoWindow) => {
            this.SimpleInfoWindow = SimpleInfoWindow;
            this.patrollerMapService.getPatrollers().then((r) => {
                this.getPatrollers = r.data.data;
                this.drawPatroller(this.getPatrollers);
            });
        });
    }


    //添加卫星图
    addSatellite() {
        this.satelliteLayer = new this.AMap.TileLayer.Satellite({});
        this.satelliteLayer.setMap(this.map);
        this.satelliteLayer.hide();
        this.showSatelliteLayer = false;
    };

    //切换卫星图
    changeSatelliteLayer() {
        if (this.showSatelliteLayer) {
            this.satelliteLayer.hide();
        } else {
            this.satelliteLayer.show();
        }
        this.showSatelliteLayer = !this.showSatelliteLayer;
    }

    //定位到指定点，并跳动标记
    gotoLoaction(position) {
        let marker = new this.AMap.Marker({
            position: position, // this.map.getCenter(),
            draggable: false,
            icon: new this.AMap.Icon({
                image: '/assets/img/patrollerone.png',
                size: new this.AMap.Size(15, 30)
            }),
            offset: new this.AMap.Pixel(-15, -30),
            cursor: 'move',
            map: this.map,
        });
        // 设置点标记的动画效果，此处为弹跳效果
        marker.setAnimation('AMAP_ANIMATION_BOUNCE');
        setTimeout(function () {
            marker.setMap();
        }, 2000);
    }

    //画标签
    labelArr = [];

    drawLabel(text, position) {
        if (this.show_label) {
            this.labelArr.push(new this.AMap.Text({
                text: text,
                map: this.map,
                textAlign: 'center', // 'left' 'right', 'center',
                verticalAlign: 'middle', //middle 、bottom
                draggable: true,
                cursor: 'pointer',
                angle: 0,
                style: {
                    'background-color': 'rgba(255,255,255,.7)',
                    'border-shadow': '1px 1px 4px #ccc',
                    'transform': 'translate(0,-45px)',
                    'font-weight': 'bold',
                    'padding': '2px 10px'
                },
                position: position
            }));
        } else {
            if (this.labelArr.length > 0) {
                this.labelArr.forEach((item) => {
                    this.map.remove(item);
                });
                this.labelArr = [];
            }
        }
    }

    //画管线
    drawPatroller(patrollers) {
        this.map.setCenter([patrollers[0].coordinate.longitude, patrollers[0].coordinate.latitude]);
        patrollers.forEach((item) => {
            let marker = new this.AMap.Marker({
                position: [item.coordinate.longitude, item.coordinate.latitude],
                map: this.map,
                icon: new this.AMap.Icon({
                    image: '/assets/img/patrollerone.png',
                    size: new this.AMap.Size(10, 30)
                }),
                offset: new this.AMap.Pixel(-5, -30)
            });

            marker.on('click', (e) => {
                let simpleInfoWindow = new this.SimpleInfoWindow({
                    infoTitle: `<strong>${item.realName}</strong>`,
                    infoBody: `	<div class="my-desc">
									<p>联系电话：${item.mobile}</p>					
									<p>定位时间：${new Date(item.locationTime).toLocaleString()}</p>
								</div>
												
								`,
                    offset: new this.AMap.Pixel(0, -4)
                });
                simpleInfoWindow.open(this.map, marker.getPosition());
            });
        });
        patrollers.forEach((item) => {
            this.drawLabel(item.realName, [item.coordinate.longitude, item.coordinate.latitude]);
        });
    };


    ngOnInit() {

    }

    ngOnDestroy(): void {
    }

}
