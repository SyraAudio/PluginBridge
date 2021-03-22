import {Message, MessageBag, MessageTypes} from "../types/messages";

export class SyraHost {
  private static instance: SyraHost;

  private constructor(private _isDev?: boolean) {
    self.onmessage = (e: MessageEvent) => {
      if (e.data.type === MessageTypes.HOST_START_INIT) {
        this.onInit(e.data as MessageBag<MessageTypes.HOST_START_INIT>)
      }
    };
  }

  public static getInstance(): SyraHost {
    if (!SyraHost.instance) {
      SyraHost.instance = new SyraHost();
    }

    return SyraHost.instance;
  }

  public postMessage<T extends MessageTypes>(message: Message<T>) {
    self.postMessage({...message, isDev: this._isDev}, 'https://daw.syra.live');
  }

   onInit(callback: MessageBag<MessageTypes.HOST_START_INIT>) {

  }
}