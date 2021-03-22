import {WindowDimensions} from "../types/dimensions";

export class UiWindow {
  constructor(private _dimensions: WindowDimensions, private _offscreenCanvas: OffscreenCanvas) {
  }
}