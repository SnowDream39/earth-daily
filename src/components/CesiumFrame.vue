<template>
  <div class="cesium-container" ref="mapRef" ></div>
</template>


<script setup lang="ts">
/**
 * 这里是放置Cesium的组件，以及一些控制Cesium的操作。
 *一些Cesium相关的事件在这里接收
 */
import { onMounted, onUnmounted, ref, markRaw } from "vue";
import { useCesiumStore } from "@/stores/cesium";
import * as Cesium from "cesium";
import emitter from "../utils/emitter";
import axios from "axios";

const cesiumStore = useCesiumStore();
const emit = defineEmits(['update']);
const mapRef = ref<HTMLDivElement | null>(null);
let viewer: Cesium.Viewer | null = null;



function addGaodeLayer() {
  if (!viewer) return;
  const gdProvider = new Cesium.UrlTemplateImageryProvider({
    url: "https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}"
  });
  const gdLayer = new Cesium.ImageryLayer(gdProvider);
  viewer.imageryLayers.add(gdLayer);
  // viewer.imageryLayers.addImageryProvider(gdProvider, 100);
  gdLayer.name = "高德矢量";
  console.log("已添加图层：", gdLayer);


}

async function addBuildings() {
  // 加载建筑物。
  const tileset = viewer?.scene.primitives.add(
    await Cesium.Cesium3DTileset.fromIonAssetId(75343),
  );
  viewer?.zoomTo(tileset);
}

function showLayers() {
  if (!viewer) return;
  const layers = viewer.imageryLayers;
  console.log(layers);

  let layersString = "";
  let layersList: (string|undefined)[] = [];
  for (let i = 0; i < layers.length; i++) {
    layersString += layers.get(i).name + "\n";
    layersList.push(layers.get(i).name);
  }
  emit('update', layersString);
  emitter.emit('update', layersList);
}

function removeAll() {
  viewer?.imageryLayers.removeAll();
}

function generateCityDescription(city: any) {
  return `
    <div>
      <h2>${city.name}</h2>
      <div>代码：${city.code}</div>
      <div>位置：${city.centerPoint}</div>
      <div><a href="https://baike.baidu.com/item/${city.name}" target="_blank">百度百科</a></div>
    </div>
  `;
}


async function loadCities() {
  if (!viewer) return;  
  const citiesList = await axios.get('/cityList.json');
  for(const city of citiesList.data){
    const position = (city.centerPoint as string).split(",");
    viewer.entities.add({
      name: city.name,
      id: city.name,
      position: Cesium.Cartesian3.fromDegrees(Number(position[0]), Number(position[1])),
      point: cesiumStore.pointStyles.normal,
      description: generateCityDescription(city),
    })

  }
  await highlightCity('123'); // 这样做可以避免样式面板一开始无效的问题，尽管我不知道原理
}

async function highlightCity(cityName: unknown) {
  if (!cityName || typeof cityName !== 'string') return;
  if (!viewer) return;
  viewer.entities.values.forEach((entity) => {
    if (entity.point) {
      entity.point = cesiumStore.pointStyles.normal;
    }
  });
  const entity = viewer.entities.getById(cityName);
  if (entity && entity.point) {
      entity.point = cesiumStore.pointStyles.highlight;
  }
}

function addBookmarkPoint(position: unknown) {
  if (position instanceof Cesium.Cartesian3) {
    const entity = new Cesium.Entity({
      name: '书签点',
      position: position,
      point: cesiumStore.pointStyles.bookmark,
      label: {
        text: '书签点',
        horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        pixelOffset: new Cesium.Cartesian2(15, -15),
      },
    });
    cesiumStore.bookmarkEntities.add(entity);
    
    cesiumStore.bookmarkEntities.values.map((entity: Cesium.Entity) => {
      viewer?.entities.remove(entity);
    });
    cesiumStore.bookmarkEntities.values.forEach((entity: Cesium.Entity) => {
      viewer?.entities.add(entity);
    });
  }
}



onMounted(async () => {
  Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwZjEyZjczNS0wODgxLTRmYzMtOWU3MC00ZDIwZGUwMWM5NDMiLCJpZCI6MjgzMTE2LCJpYXQiOjE3NDIxODM2MDB9.6r_855sbwTi1KruUVqqC88aEcboIRcQNMg2ouQ9fPs8';

  if (!mapRef.value) return;
  await cesiumStore.initViewer(mapRef.value);
  viewer = cesiumStore.viewer;

  // addGaodeLayer();
  if (!viewer) return;
  // await addBuildings();

  emitter.on('add-buildings', addBuildings);
  emitter.on('add-layer', addGaodeLayer);
  emitter.on('show-layers', showLayers);
  emitter.on('remove-all-layers', removeAll);
  emitter.on('load-cities', loadCities);
  emitter.on('highlight-city', highlightCity);
  emitter.on('add-bookmark-point', addBookmarkPoint);

});




</script>

<style lang="scss" scoped>
.cesium-container {
  margin: 0 0;
}

// 隐藏Cesium的logo
:deep(.cesium-widget-credits) {
  display: none;
}
</style>