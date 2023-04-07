/*
    This is a content script
    * Content script is accessible to `chorme.runtime` for example.
    * Injected Script runs in the 'page' level and not in the 'content script' level
        * Page can't access the chrome.runtime or other extension API
*/
import { InternalMessage } from './internal';

console.log("HERE???")

// Attach on Page scope
async function injectScript(url: string) {
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL(url);
  script.type = 'text/javascript';
  script.async = false;
  script.type = 'module';
  script.onload = function () {
    console.log("LOADED?")
  }
  script.onabort = function (e) {
    console.log("ABORTED?")
  }
  script.onerror = function (e) {
    console.log("ERROR?")
    console.log(e)
  }

  const node = document.head || document.documentElement;
  node.appendChild(script);
}

// Listen for page level events
window.addEventListener(
  'FromPage',
  function (event: CustomEventInit<InternalMessage>) {
    window.parent.postMessage?.(
      {
        name: 'terminal-3',
        payload: JSON.stringify(event.detail.event),
      },
      '*'
    );
  },
  false
);

/* Inject wallet attach script */
injectScript('js/attach.js').then(() => console.log("INJECTED"));
