import {WindowDimensions} from "./dimensions";

export enum MessageTypes {
  PLUGIN_START = 'PLUGIN_START',
  HOST_START_INIT = 'HOST_START_INIT',
  PLUGIN_INIT_FINISHED = 'PLUGIN_INIT_FINISHED',
  HOST_START_FIRST_DRAW = 'HOST_START_FIRST_DRAW',
  PLUGIN_FIRST_DRAW_FINISHED = 'PLUGIN_FIRST_DRAW_FINISHED',
}

export interface MessageBag<T> {
}

export interface MessageBag<T = MessageTypes.PLUGIN_START> extends WindowDimensions {}

export type Message<T extends MessageTypes> = {
  type: T,
  data: MessageBag<T>,
};