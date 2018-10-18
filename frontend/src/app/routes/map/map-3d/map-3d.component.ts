import {Component, OnDestroy, OnInit} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {ChangeDetectorRef} from '@angular/core';
import {SettingsService} from "../../../core/settings/settings.service";

declare var BMap_Symbol_SHAPE_POINT: any;
declare var $: any;
declare var SuperMap: any;
declare var $get: any;

@Component({
	selector: 'app-map-3d',
	templateUrl: './map-3d.component.html',
	styleUrls: ['./map-3d.component.scss']
})
export class Map3dComponent implements OnInit, OnDestroy {

	constructor(private settingsService: SettingsService,
				private changeDetectorRef: ChangeDetectorRef
				) {
	}

	ngOnInit() {
		var scene = null;
		var sceneControl = null;
		var mapDom = "MapBox3d";
		var htmlUrl = "http://39.104.189.184:8090"; //服务器地址
        var sceneUrl = htmlUrl + "/iserver/services/3D-SWU_PIPELINE/rest/realspace"; //场景地址
        var pluginUrl = htmlUrl + "/iserver/iClient/for3D/plugin/Setup.exe"; //插件包（一般不需要改动）
        var sceneName = "SWU_PIPELINE_SH";  //场景名称
		var scene3DLayer = "PIPE_POINT_3D_SH_JC@SWU_PIPELINE"; //场景图层

		$(function () {
			onPageLoad();
			$('.showFullMap').click(viewEntire)
		});

		function onPageLoad() {
			//初始化三维场景控
			try {
				//初始化三维场景控件实例,参数为包含控件的HTML元素
				sceneControl = new SuperMap.Web.UI.Controls.SceneControl($get(mapDom), initCallback, failedCallback);
			}
			catch (e) {
				//若没有安装插件，则抛出该异常
				if (e.name == SuperMap.Web.Realspace.ExceptionName.PlugInNotInstalled) {
					document.write("<a href='" + pluginUrl + "'>未检测到 SuperMap iClient3D for  Plugin 插件，请单击此处下载并安装插件。</a>");
					return;
				}
				//若使用非IE浏览器，则抛出该异常
				else if (e.name == SuperMap.Web.Realspace.ExceptionName.BrowserNotSupport) {
					document.write("<p>SuperMap iClient3D for  Plugin 目前仅支持 InternetExplorer 浏览器，请更换浏览器后重新尝试加载本页面。</p>");
					return;
				}
				//抛出其他异常
				else {
					alert(e.message);
				}

			}


		}
		//控件初始化完成后的回调函数，初始化完成之后才能进行数据加载
		function initCallback() {
			//获取Realspace控件的场景，控件和场景是一对一的捆绑关系
			scene = sceneControl.get_scene();
			//加载场景
			SceneLoad();
			//给选择事件注册回调函数，选择事件返回当前有选中对象的所有选择集，类型是选择集的数组
			sceneControl.addEvent("objectSelected", handler);
		}
		//控件初始化失败后的回调函数
		function failedCallback() {
			alert("Realspace initialized failed!");
		}
		//选择事件的回调函数，弹出选中对象的id
		function handler(selection3Ds) {
			//获取选择集的数目
			var selection3DCount = selection3Ds.length;
			for (var i = 0; i < selection3DCount; i++) {
				//获取选择集中被选中对象的数目
				var selectCount = selection3Ds[i].get_count();
				for (var j = 0; j < selectCount; j++) {
					//获取选择集
					var selection3D = selection3Ds[i];
					var layer3D = scene.get_layer3Ds().get_item(selection3D.get_layer3D().get_name());
					var selectObjectName = layer3D.findFeature3DByID(selection3D.get_item(j)).get_name();
					alert(selection3D.get_item(j) + "\n" + selectObjectName);
				}
			}


		}

		function SceneLoad() {
			//指定场景的服务器地址
			var sceneAddress = sceneUrl;
			//指定图层名称
			// var sceneName = "SWU_PIPELINE_SH";
			//打开场景
			scene.open(sceneAddress, sceneName);
            // viewEntire();
			//获取场景中的图层
			var layer3D = scene.get_layer3Ds().get_item(scene3DLayer);
            var geobound = layer3D.get_bounds();
            scene.get_flyingOperator().flyToBounds(geobound);
			// alert(layer3D);//加了弹出后点击确定好就可以看到地图
			// if (layer3D != null) {
			// 	//获取图层的地理范围，并飞行到该范围
			// 	var geobound = layer3D.get_bounds();
			// 	scene.get_flyingOperator().flyToBounds(geobound);
			// }
		}

        //全局显示整个三维场景
		function viewEntire() {
			scene.viewEntire();
		}

		function setPan() {
			//设置控件的当前操作为漫游
			var panAction = new SuperMap.Web.UI.Action3Ds.Pan(sceneControl);

			sceneControl.set_sceneAction(panAction);
		}

		function setSelect() {
			//设置控件的当前操作为选择
			var selectAction = new SuperMap.Web.UI.Action3Ds.Select(sceneControl);

			sceneControl.set_sceneAction(selectAction);
		}

		function refresh() {
			//刷新场景
			scene.refresh();
		}
	}

	ngOnDestroy() {
		// clearTimeout();
	}

}
