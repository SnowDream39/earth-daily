// src/types/cesium.d.ts
import { ImageryLayer } from "cesium";

declare module "cesium" {
  interface ImageryLayer {
    name?: string;  // 扩展 name 属性
  }
}
