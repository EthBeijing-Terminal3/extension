export type TransactionEvent = {
  triggerType: string;
  requestType: string;
  payload: unknown;
};

export type UpdateChainIDEvent = {
  chainId: number;
};

export enum InternalMessageType {
  TransactionEvent,
  UpdateChainIDEvent,
}

export type InternalMessage = {
  type: InternalMessageType;
  event: TransactionEvent | UpdateChainIDEvent;
};

console.log("BACKGROUN LOADED?????")

chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
  console.log("WHAAAAAAAT@!")
  const message: InternalMessage = request;

  if (message.type === InternalMessageType.TransactionEvent) {
    const storageRequest = await chrome.storage.local.get('chainId');

    // TODO: show popup
    console.log({showPopup: 'showPopup', chainId: storageRequest.chainId, event: message.event });
    // showPopup(storageRequest.chainId, message.event as TransactionEvent);
  }

  if (message.type === InternalMessageType.UpdateChainIDEvent) {
    const event: UpdateChainIDEvent = message.event as UpdateChainIDEvent;
    chrome.storage.local.set({ chainId: event.chainId }).then();
  }

  sendResponse({ status: 'ok' });
});
