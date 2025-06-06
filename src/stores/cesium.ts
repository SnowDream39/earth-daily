// stores/cesiumStore.js
import { defineStore } from "pinia";
import * as Cesium from "cesium";
import emitter from "@/utils/emitter";
import { shallowRef, markRaw } from 'vue';

var tdtUrl = 'https://t{s}.tianditu.gov.cn/';
var tdtToken = '1ebb49d419ec13396bf0a42f20fbcbaa';
var subdomains=['0','1','2','3','4','5','6','7'];

export const useCesiumStore = defineStore("cesium", {
  state: () =>
    ({
      viewer: null as Cesium.Viewer | null,
      availableLayers: {} as Record<string, Cesium.ImageryLayer>,
      terrainEnabled: true,
      pointStyles: {} as Record<string, Cesium.PointGraphics>,
      cameraStatus: {
        position: {
          x: null as number | null,
          y: null as number | null,
          z: null as number | null,
        },
        heading: null as number | null,
        pitch: null as number | null,
        roll: null as number | null,
        zoom: null as number | null,
        minimumZoomDistance: null as number | null,
        maximumZoomDistance: null as number | null,
        inertiaZoom: null as number | null,
        constrainedPitch: null as number | null,
      },
      bookmarkEntities: new Cesium.EntityCollection(),
    }),
  actions: {
    async initViewer(container: string | Element) {
      Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(90.0, 25.0, 130.0, 50.0);
      if (!this.viewer) {
        // 通过markRaw避免viewer变为一个响应式对象，带来大量的性能问题
        this.viewer = markRaw(new Cesium.Viewer(container, {
          // 隐藏一部分控件
          animation: false,
          timeline: false,
          fullscreenButton: false,
          // 使用地形
          terrainProvider: await Cesium.createWorldTerrainAsync({
            requestVertexNormals: true,
            requestWaterMask: true
          }),
        }));

        // 开启光照和水面效果
        this.viewer.scene.globe.enableLighting = true;
        this.viewer.scene.globe.showWaterEffect = true;



        // 以下代码来自天地图：http://lbs.tianditu.gov.cn/docs/#/sanwei/


        // 抗锯齿
        // this.viewer.scene.fxaa = true;
        this.viewer.scene.postProcessStages.fxaa.enabled = false;
        // 水雾特效
        this.viewer.scene.globe.showGroundAtmosphere = true;
        // 设置最大俯仰角，[-90,0]区间内，默认为-30，单位弧度
        // this.viewer.scene.screenSpaceCameraController.constrainedPitch = Cesium.Math.toRadians(-20);
        // this.viewer.scene.screenSpaceCameraController.autoResetHeadingPitch = false;
        this.viewer.scene.screenSpaceCameraController.inertiaZoom = 0.5;
        this.viewer.scene.screenSpaceCameraController.minimumZoomDistance = 50;
        this.viewer.scene.screenSpaceCameraController.maximumZoomDistance = 20000000;
        this.viewer.scene.screenSpaceCameraController.zoomEventTypes = [
          Cesium.CameraEventType.RIGHT_DRAG,
          Cesium.CameraEventType.WHEEL,
          Cesium.CameraEventType.PINCH,
        ];
        this.viewer.scene.screenSpaceCameraController.tiltEventTypes = [
          Cesium.CameraEventType.MIDDLE_DRAG,
          Cesium.CameraEventType.PINCH,
          {
            eventType: Cesium.CameraEventType.LEFT_DRAG,
            modifier: Cesium.KeyboardEventModifier.CTRL,
          },
          {
            eventType: Cesium.CameraEventType.RIGHT_DRAG,
            modifier: Cesium.KeyboardEventModifier.CTRL,
          },
        ];
        // 取消默认的双击事件
        this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
          Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
        );
        // 不显示默认图层
        // this.viewer.imageryLayers.removeAll();
      }

      // 书签点
      this.viewer.entities.add(this.bookmarkEntities);

      // 调用其他
      await this.loadImageryLayers();
      this.initPointStyles();
      // this.changeSkyBox();
      this.listenCameraStatus();
      // this.listenMouse();  // 这个真的不好玩
      
    },

    // 获取图层
    async loadImageryLayers() {
      this.availableLayers = {};
      // 天地图
      const tiandituImageryProvider = new Cesium.UrlTemplateImageryProvider({
        url: tdtUrl + 'DataServer?T=img_w&x={x}&y={y}&l={z}&tk=' + tdtToken,
        subdomains,
        tilingScheme : new Cesium.WebMercatorTilingScheme(),
        maximumLevel : 18
      });

      this.availableLayers['tianditu'] = new Cesium.ImageryLayer(tiandituImageryProvider);
      this.availableLayers['tianditu'].name = '天地图影像';

      // 高德地图
      const gaodeImageryProvider = new Cesium.UrlTemplateImageryProvider({
        url: "https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
      });

      this.availableLayers['gaode'] = new Cesium.ImageryLayer(gaodeImageryProvider);
      this.availableLayers['gaode'].name = '高德矢量';

      // geoserver服务仅仅写在这里，不使用
      if (false) {
        const wmsProvider = new Cesium.WebMapServiceImageryProvider({
          url: "https://localhost:8080/geoserver/webgis/wms",
          layers: "webgis:hangzhou_img",
          parameters: {
            service: "WMS",
            format: "image/png",
            transparent: true,
          }
        })
      }

      // Cesium Ion 
      const ionImageryProvider = await Cesium.IonImageryProvider.fromAssetId(4);
      this.availableLayers['Bing Maps Road'] = new Cesium.ImageryLayer(ionImageryProvider);
      this.availableLayers['Bing Maps Road'].name = 'Bing Maps Road';

      const ionImageryProvider2 = await Cesium.IonImageryProvider.fromAssetId(2411391);
      this.availableLayers['Bing Maps Labels Only'] = new Cesium.ImageryLayer(ionImageryProvider2);
      this.availableLayers['Bing Maps Labels Only'].name = 'Bing Maps Labels Only';
    },

    initPointStyles() {
      const normalPointStyle = new Cesium.PointGraphics({
        show: true,
        pixelSize: 10,
        heightReference: Cesium.HeightReference.NONE,
        color: Cesium.Color.GREEN,
        outlineColor: Cesium.Color.BROWN,
        outlineWidth: 1,
        // 这个属性是用来控制点大小随相机距离变化的。
        // 具体来说，最近的时候显示大小为10.0, 最远时显示为1.0
        scaleByDistance: new Cesium.NearFarScalar(1.0e3, 10.0, 2.0e3, 1.0),
        // 最远的时候透明度为0.5
        translucencyByDistance: new Cesium.NearFarScalar(1.0e3, 1.0, 1.5e6, 0.5)
      });
      this.pointStyles['normal'] = normalPointStyle;

      const highlightPointStyle = new Cesium.PointGraphics({
        show: true,
        pixelSize: 10,
        heightReference: Cesium.HeightReference.NONE,
        color: Cesium.Color.RED,
        outlineColor: Cesium.Color.BROWN,
        outlineWidth: 1,
        scaleByDistance: new Cesium.NearFarScalar(1.0e3, 10.0, 2.0e3, 1.0),
      });
      this.pointStyles['highlight'] = highlightPointStyle;

      this.pointStyles['bookmark'] = new Cesium.PointGraphics({
        show: true,
        pixelSize: 10,
        heightReference: Cesium.HeightReference.NONE,
        color: Cesium.Color.PURPLE,
        outlineColor: Cesium.Color.BROWN,
        outlineWidth: 1,
        scaleByDistance: new Cesium.NearFarScalar(1.0e3, 10.0, 2.0e3, 1.0),
      })
    },

    addLayer(name: string) {
      // this.viewer?.imageryLayers.removeAll();
      this.viewer?.imageryLayers.add(this.availableLayers[name]);
      emitter.emit("update", this.getLayersName());
    },

    getLayersName() {
      const currentLayers: string[] = [];
      if (!this.viewer) return [];
      const layers = this.viewer.imageryLayers;
      for (let i=0; i < layers.length; i++) {
        currentLayers.push(layers.get(i).name ?? "");
      }
      return currentLayers;
    },
    
    async setTerrain(show: boolean) {
      if (!this.viewer) return;
      if (!show) {
        this.viewer.scene.terrainProvider = new Cesium.EllipsoidTerrainProvider();
        this.terrainEnabled = false;
      } else {
        this.viewer.terrainProvider = await Cesium.createWorldTerrainAsync({
            requestVertexNormals: true,
            requestWaterMask: true
        });
        this.terrainEnabled = true;
      }
    },

    // 玩一玩的，改一下skybox
    changeSkyBox() {
      if (!this.viewer) return;
      this.viewer.scene.skyBox = new Cesium.SkyBox({
        sources: {
          positiveX: "/skybox/px.png",
          negativeX: "/skybox/nx.png",
          positiveY: "/skybox/py.png",
          negativeY: "/skybox/ny.png",
          positiveZ: "/skybox/pz.png",
          negativeZ: "/skybox/nz.png",
        }
      });
    },

    listenCameraStatus() {
      if (!this.viewer) return;
      this.viewer.scene.camera.changed.addEventListener(() => {
      const handler = new Cesium.ScreenSpaceEventHandler(this.viewer!.canvas);
      handler.setInputAction((movement: Cesium.ScreenSpaceEventHandler.PositionedEvent) => {
        const pickedEntity = this.viewer?.scene.pick(movement.position);
        if (Cesium.defined(pickedEntity)) {
          emitter.emit("change-weather-city", pickedEntity.id.id);
        }
      }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        if (!this.viewer) return;
        Object.assign(this.cameraStatus, {
          position: {
            x: Cesium.Math.toDegrees(this.viewer.scene.camera.positionCartographic.longitude),
            y: Cesium.Math.toDegrees(this.viewer.scene.camera.positionCartographic.latitude),
            z: this.viewer.scene.camera.positionCartographic.height,
          },
          heading: Cesium.Math.toDegrees(this.viewer.scene.camera.heading),
          pitch: Cesium.Math.toDegrees(this.viewer.scene.camera.pitch),
          roll: Cesium.Math.toDegrees(this.viewer.scene.camera.roll),
        })
      });
    },

    listenMouse() {
      if (!this.viewer) return;
      this.viewer.screenSpaceEventHandler.setInputAction((movement: Cesium.ScreenSpaceEventHandler.PositionedEvent) => {
        if (!this.viewer) return;
        const ray = this.viewer.camera.getPickRay(movement.position) as Cesium.Ray;
        let picked = this.viewer.scene.globe.pick(ray, this.viewer.scene);
        emitter.emit('add-bookmark-point', picked);
      }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
    },

    initButtons() {
      if (!this.viewer) return;
      if (this.viewer.homeButton) {
        this.viewer.homeButton.viewModel.command.beforeExecute.addEventListener((e: any) => {
          // 好像没用。
          e.cancel = true;
          this.viewer?.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(120.1, 30.35, 15000.0),
          })
        })
      }
    }
  },
});
