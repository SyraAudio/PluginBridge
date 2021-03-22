import {UiWindow} from "./classes/UiWindow";
import {WindowDimensions} from "./types/dimensions";
import {SyraHost} from "./classes/SyraHost";
import {MessageTypes} from "./types/messages";

export async function initialize(dimensions: WindowDimensions): UiWindow {
  SyraHost.getInstance().postMessage({
    type: MessageTypes.PLUGIN_START,
    data: dimensions,
  });

  S

  const window = new UiWindow(dimensions);
}