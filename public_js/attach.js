/******/ (() => { // webpackBootstrap
  /******/ 	"use strict";
  /******/ 	var __webpack_modules__ = ({

    /***/ "./node_modules/@metamask/detect-provider/dist/index.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@metamask/detect-provider/dist/index.js ***!
      \**************************************************************/
    /***/ ((module) => {


      /**
       * Returns a Promise that resolves to the value of window.ethereum if it is
       * set within the given timeout, or null.
       * The Promise will not reject, but an error will be thrown if invalid options
       * are provided.
       *
       * @param options - Options bag.
       * @param options.mustBeMetaMask - Whether to only look for MetaMask providers.
       * Default: false
       * @param options.silent - Whether to silence console errors. Does not affect
       * thrown errors. Default: false
       * @param options.timeout - Milliseconds to wait for 'ethereum#initialized' to
       * be dispatched. Default: 3000
       * @returns A Promise that resolves with the Provider if it is detected within
       * given timeout, otherwise null.
       */
      function detectEthereumProvider({ mustBeMetaMask = false, silent = false, timeout = 3000, } = {}) {
        _validateInputs();
        let handled = false;
        return new Promise((resolve) => {
          if (window.ethereum) {
            handleEthereum();
          }
          else {
            window.addEventListener('ethereum#initialized', handleEthereum, { once: true });
            setTimeout(() => {
              handleEthereum();
            }, timeout);
          }
          function handleEthereum() {
            if (handled) {
              return;
            }
            handled = true;
            window.removeEventListener('ethereum#initialized', handleEthereum);
            const { ethereum } = window;
            if (ethereum && (!mustBeMetaMask || ethereum.isMetaMask)) {
              resolve(ethereum);
            }
            else {
              const message = mustBeMetaMask && ethereum
                ? 'Non-MetaMask window.ethereum detected.'
                : 'Unable to detect window.ethereum.';
              !silent && console.error('@metamask/detect-provider:', message);
              resolve(null);
            }
          }
        });
        function _validateInputs() {
          if (typeof mustBeMetaMask !== 'boolean') {
            throw new Error(`@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.`);
          }
          if (typeof silent !== 'boolean') {
            throw new Error(`@metamask/detect-provider: Expected option 'silent' to be a boolean.`);
          }
          if (typeof timeout !== 'number') {
            throw new Error(`@metamask/detect-provider: Expected option 'timeout' to be a number.`);
          }
        }
      }
      module.exports = detectEthereumProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQWdCQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDSCxTQUFTLHNCQUFzQixDQUErQixFQUM1RCxjQUFjLEdBQUcsS0FBSyxFQUN0QixNQUFNLEdBQUcsS0FBSyxFQUNkLE9BQU8sR0FBRyxJQUFJLEdBQ2YsR0FBRyxFQUFFO0lBRUosZUFBZSxFQUFFLENBQUM7SUFFbEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBRXBCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUM3QixJQUFLLE1BQWlCLENBQUMsUUFBUSxFQUFFO1lBRS9CLGNBQWMsRUFBRSxDQUFDO1NBRWxCO2FBQU07WUFFTCxNQUFNLENBQUMsZ0JBQWdCLENBQ3JCLHNCQUFzQixFQUN0QixjQUFjLEVBQ2QsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQ2YsQ0FBQztZQUVGLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsY0FBYyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2I7UUFFRCxTQUFTLGNBQWM7WUFFckIsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTzthQUNSO1lBQ0QsT0FBTyxHQUFHLElBQUksQ0FBQztZQUVmLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUVuRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBZ0IsQ0FBQztZQUV0QyxJQUFJLFFBQVEsSUFBSSxDQUFDLENBQUMsY0FBYyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDeEQsT0FBTyxDQUFDLFFBQXdCLENBQUMsQ0FBQzthQUNuQztpQkFBTTtnQkFFTCxNQUFNLE9BQU8sR0FBRyxjQUFjLElBQUksUUFBUTtvQkFDeEMsQ0FBQyxDQUFDLHdDQUF3QztvQkFDMUMsQ0FBQyxDQUFDLG1DQUFtQyxDQUFDO2dCQUV4QyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDZjtRQUNILENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILFNBQVMsZUFBZTtRQUN0QixJQUFJLE9BQU8sY0FBYyxLQUFLLFNBQVMsRUFBRTtZQUN2QyxNQUFNLElBQUksS0FBSyxDQUFDLDhFQUE4RSxDQUFDLENBQUM7U0FDakc7UUFDRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLHNFQUFzRSxDQUFDLENBQUM7U0FDekY7UUFDRCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLHNFQUFzRSxDQUFDLENBQUM7U0FDekY7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQWxGRCxpQkFBUyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBNZXRhTWFza0V0aGVyZXVtUHJvdmlkZXIge1xuICBpc01ldGFNYXNrPzogYm9vbGVhbjtcbiAgb25jZShldmVudE5hbWU6IHN0cmluZyB8IHN5bWJvbCwgbGlzdGVuZXI6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCk6IHRoaXM7XG4gIG9uKGV2ZW50TmFtZTogc3RyaW5nIHwgc3ltYm9sLCBsaXN0ZW5lcjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKTogdGhpcztcbiAgb2ZmKGV2ZW50TmFtZTogc3RyaW5nIHwgc3ltYm9sLCBsaXN0ZW5lcjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKTogdGhpcztcbiAgYWRkTGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcgfCBzeW1ib2wsIGxpc3RlbmVyOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQpOiB0aGlzO1xuICByZW1vdmVMaXN0ZW5lcihldmVudE5hbWU6IHN0cmluZyB8IHN5bWJvbCwgbGlzdGVuZXI6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCk6IHRoaXM7XG4gIHJlbW92ZUFsbExpc3RlbmVycyhldmVudD86IHN0cmluZyB8IHN5bWJvbCk6IHRoaXM7XG59XG5cbmludGVyZmFjZSBXaW5kb3cge1xuICBldGhlcmV1bT86IE1ldGFNYXNrRXRoZXJldW1Qcm92aWRlcjtcbn1cblxuZXhwb3J0ID0gZGV0ZWN0RXRoZXJldW1Qcm92aWRlcjtcblxuLyoqXG4gKiBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSB2YWx1ZSBvZiB3aW5kb3cuZXRoZXJldW0gaWYgaXQgaXNcbiAqIHNldCB3aXRoaW4gdGhlIGdpdmVuIHRpbWVvdXQsIG9yIG51bGwuXG4gKiBUaGUgUHJvbWlzZSB3aWxsIG5vdCByZWplY3QsIGJ1dCBhbiBlcnJvciB3aWxsIGJlIHRocm93biBpZiBpbnZhbGlkIG9wdGlvbnNcbiAqIGFyZSBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnMgYmFnLlxuICogQHBhcmFtIG9wdGlvbnMubXVzdEJlTWV0YU1hc2sgLSBXaGV0aGVyIHRvIG9ubHkgbG9vayBmb3IgTWV0YU1hc2sgcHJvdmlkZXJzLlxuICogRGVmYXVsdDogZmFsc2VcbiAqIEBwYXJhbSBvcHRpb25zLnNpbGVudCAtIFdoZXRoZXIgdG8gc2lsZW5jZSBjb25zb2xlIGVycm9ycy4gRG9lcyBub3QgYWZmZWN0XG4gKiB0aHJvd24gZXJyb3JzLiBEZWZhdWx0OiBmYWxzZVxuICogQHBhcmFtIG9wdGlvbnMudGltZW91dCAtIE1pbGxpc2Vjb25kcyB0byB3YWl0IGZvciAnZXRoZXJldW0jaW5pdGlhbGl6ZWQnIHRvXG4gKiBiZSBkaXNwYXRjaGVkLiBEZWZhdWx0OiAzMDAwXG4gKiBAcmV0dXJucyBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBQcm92aWRlciBpZiBpdCBpcyBkZXRlY3RlZCB3aXRoaW5cbiAqIGdpdmVuIHRpbWVvdXQsIG90aGVyd2lzZSBudWxsLlxuICovXG5mdW5jdGlvbiBkZXRlY3RFdGhlcmV1bVByb3ZpZGVyPFQgPSBNZXRhTWFza0V0aGVyZXVtUHJvdmlkZXI+KHtcbiAgbXVzdEJlTWV0YU1hc2sgPSBmYWxzZSxcbiAgc2lsZW50ID0gZmFsc2UsXG4gIHRpbWVvdXQgPSAzMDAwLFxufSA9IHt9KTogUHJvbWlzZTxUIHwgbnVsbD4ge1xuXG4gIF92YWxpZGF0ZUlucHV0cygpO1xuXG4gIGxldCBoYW5kbGVkID0gZmFsc2U7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgaWYgKCh3aW5kb3cgYXMgV2luZG93KS5ldGhlcmV1bSkge1xuXG4gICAgICBoYW5kbGVFdGhlcmV1bSgpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdldGhlcmV1bSNpbml0aWFsaXplZCcsXG4gICAgICAgIGhhbmRsZUV0aGVyZXVtLFxuICAgICAgICB7IG9uY2U6IHRydWUgfSxcbiAgICAgICk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBoYW5kbGVFdGhlcmV1bSgpO1xuICAgICAgfSwgdGltZW91dCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRXRoZXJldW0oKSB7XG5cbiAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXRoZXJldW0jaW5pdGlhbGl6ZWQnLCBoYW5kbGVFdGhlcmV1bSk7XG5cbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdyBhcyBXaW5kb3c7XG5cbiAgICAgIGlmIChldGhlcmV1bSAmJiAoIW11c3RCZU1ldGFNYXNrIHx8IGV0aGVyZXVtLmlzTWV0YU1hc2spKSB7XG4gICAgICAgIHJlc29sdmUoZXRoZXJldW0gYXMgdW5rbm93biBhcyBUKTtcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG11c3RCZU1ldGFNYXNrICYmIGV0aGVyZXVtXG4gICAgICAgICAgPyAnTm9uLU1ldGFNYXNrIHdpbmRvdy5ldGhlcmV1bSBkZXRlY3RlZC4nXG4gICAgICAgICAgOiAnVW5hYmxlIHRvIGRldGVjdCB3aW5kb3cuZXRoZXJldW0uJztcblxuICAgICAgICAhc2lsZW50ICYmIGNvbnNvbGUuZXJyb3IoJ0BtZXRhbWFzay9kZXRlY3QtcHJvdmlkZXI6JywgbWVzc2FnZSk7XG4gICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBfdmFsaWRhdGVJbnB1dHMoKSB7XG4gICAgaWYgKHR5cGVvZiBtdXN0QmVNZXRhTWFzayAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEBtZXRhbWFzay9kZXRlY3QtcHJvdmlkZXI6IEV4cGVjdGVkIG9wdGlvbiAnbXVzdEJlTWV0YU1hc2snIHRvIGJlIGEgYm9vbGVhbi5gKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzaWxlbnQgIT09ICdib29sZWFuJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBAbWV0YW1hc2svZGV0ZWN0LXByb3ZpZGVyOiBFeHBlY3RlZCBvcHRpb24gJ3NpbGVudCcgdG8gYmUgYSBib29sZWFuLmApO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRpbWVvdXQgIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEBtZXRhbWFzay9kZXRlY3QtcHJvdmlkZXI6IEV4cGVjdGVkIG9wdGlvbiAndGltZW91dCcgdG8gYmUgYSBudW1iZXIuYCk7XG4gICAgfVxuICB9XG59XG4iXX0=

      /***/ }),

    /***/ "./src/types/internal.ts":
    /*!*******************************!*\
      !*** ./src/types/internal.ts ***!
      \*******************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */   "InternalMessageType": () => (/* binding */ InternalMessageType)
        /* harmony export */ });
      var InternalMessageType;
      (function (InternalMessageType) {
        InternalMessageType[InternalMessageType["TransactionEvent"] = 0] = "TransactionEvent";
        InternalMessageType[InternalMessageType["UpdateChainIDEvent"] = 1] = "UpdateChainIDEvent";
      })(InternalMessageType || (InternalMessageType = {}));


      /***/ })

    /******/ 	});
  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	var __webpack_module_cache__ = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
    /******/ 		// Check if module is in cache
    /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
    /******/ 		if (cachedModule !== undefined) {
      /******/ 			return cachedModule.exports;
      /******/ 		}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = __webpack_module_cache__[moduleId] = {
      /******/ 			// no module.id needed
      /******/ 			// no module.loaded needed
      /******/ 			exports: {}
      /******/ 		};
    /******/
    /******/ 		// Execute the module function
    /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
    /******/ 	}
  /******/
  /************************************************************************/
  /******/ 	/* webpack/runtime/compat get default export */
  /******/ 	(() => {
    /******/ 		// getDefaultExport function for compatibility with non-harmony modules
    /******/ 		__webpack_require__.n = (module) => {
      /******/ 			var getter = module && module.__esModule ?
        /******/ 				() => (module['default']) :
        /******/ 				() => (module);
      /******/ 			__webpack_require__.d(getter, { a: getter });
      /******/ 			return getter;
      /******/ 		};
    /******/ 	})();
  /******/
  /******/ 	/* webpack/runtime/define property getters */
  /******/ 	(() => {
    /******/ 		// define getter functions for harmony exports
    /******/ 		__webpack_require__.d = (exports, definition) => {
      /******/ 			for(var key in definition) {
        /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/ 				}
        /******/ 			}
      /******/ 		};
    /******/ 	})();
  /******/
  /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
  /******/ 	(() => {
    /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/ 	})();
  /******/
  /******/ 	/* webpack/runtime/make namespace object */
  /******/ 	(() => {
    /******/ 		// define __esModule on exports
    /******/ 		__webpack_require__.r = (exports) => {
      /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/ 			}
      /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
      /******/ 		};
    /******/ 	})();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!***************************************!*\
      !*** ./src/scripts/content/attach.ts ***!
      \***************************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @metamask/detect-provider */ "./node_modules/@metamask/detect-provider/dist/index.js");
    /* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _types_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/internal */ "./src/types/internal.ts");
    var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0: case 1: t = op; break;
            case 4: _.label++; return { value: op[1], done: false };
            case 5: _.label++; y = op[1]; op = [0]; continue;
            case 7: op = _.ops.pop(); _.trys.pop(); continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
              if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
              if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
              if (t[2]) _.ops.pop();
              _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    /* eslint-disable @typescript-eslint/ban-ts-comment */


    function triggerUpdateChainID(chainId) {
      var message = {
        type: _types_internal__WEBPACK_IMPORTED_MODULE_1__.InternalMessageType.UpdateChainIDEvent,
        event: { chainId: chainId },
      };
      var event = new CustomEvent('FromPage', { detail: message });
      window.dispatchEvent(event);
    }
    function triggerBlockfence(triggerType, requestType, payload) {
      var message = {
        type: _types_internal__WEBPACK_IMPORTED_MODULE_1__.InternalMessageType.TransactionEvent,
        event: { triggerType: triggerType, requestType: requestType, payload: payload },
      };
      var event = new CustomEvent('FromPage', { detail: message });
      window.dispatchEvent(event);
    }
    function wrapSend(provider) {
      if (!provider.send)
        return;
      var originalSend = provider.send;
      // Send can be overloaded (https://docs.metamask.io/guide/ethereum-provider.html#legacy-methods)
      var send = function (requestOrMethod, callbackOrParams) {
        // "request" like overloading: payloadOrMethod is method  and callbackOrParams is params
        if (typeof requestOrMethod === 'string') {
          // Same handler as request
          var method = requestOrMethod;
          var params = callbackOrParams;
          if (method === 'eth_sendTransaction') {
            triggerBlockfence('request', method, params[0]);
          }
        }
        var request = requestOrMethod;
        // const callback = callbackOrParams as JsonRpcCallback<unknown, unknown>;
        // "sendAsync" like overloading
        if (callbackOrParams) {
          if (request.method === 'eth_sendTransaction') {
            var payloadParams = request.params;
            triggerBlockfence('request', request.method, payloadParams[0]);
          }
        }
        // Third case doesn't supports transaction, make sure it's ok to leave as is
        var unsupportedMethods = ['eth_accounts', 'eth_coinbase', 'eth_uninstallFilter', 'net_version'];
        if (request.method && !unsupportedMethods.includes(request.method)) {
          console.log('@ Unsupported method/usage of send found');
        }
        // @ts-ignore
        return originalSend(requestOrMethod, callbackOrParams);
      };
      // @ts-ignore
      provider.send = send;
    }
    function wrapSendAsync(provider) {
      if (!provider.sendAsync)
        return;
      var originalSendAsync = provider.sendAsync;
      var sendAsync = function (payload, callback) {
        if (payload.method === 'eth_sendTransaction') {
          var payloadParams = payload.params;
          triggerBlockfence('request', payload.method, payloadParams[0]);
        }
        return originalSendAsync(payload, callback);
      };
      // @ts-ignore
      provider.sendAsync = sendAsync;
    }
    function wrapRequest(provider) {
      if (!provider.request)
        return;
      var originalRequest = provider.request;
      var request = function (request) {
        if (request.method === 'eth_sendTransaction') {
          var payload = request.params;
          triggerBlockfence('request', request.method, payload[0]);
        }
        return originalRequest(request);
      };
      // @ts-ignore
      provider.request = request;
    }
    function updateChainID(provider) {
      return __awaiter(this, void 0, void 0, function () {
        var chainId;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!provider.request)
                return [2 /*return*/];
              return [4 /*yield*/, provider.request({ method: 'eth_chainId' })];
            case 1:
              chainId = _a.sent();
              triggerUpdateChainID(chainId);
              return [2 /*return*/];
          }
        });
      });
    }
    function attach() {
      return __awaiter(this, void 0, void 0, function () {
        var provider;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0: return [4 /*yield*/, _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_0___default()()];
            case 1:
              provider = _a.sent();
              if (provider) {
                wrapSend(provider);
                wrapSendAsync(provider);
                wrapRequest(provider);
                updateChainID(provider);
                provider.on('chainChanged', function (chainId) {
                  // Handle the new chain.
                  triggerUpdateChainID(chainId);
                });
              }
              else {
                console.log('@ No wallet found');
              }
              return [2 /*return*/];
          }
        });
      });
    }
    console.log('@@ Blockfence is Loading');
    window.addEventListener('load', attach);

  })();

  /******/ })()
;
//# sourceMappingURL=attach.bundle.js.map