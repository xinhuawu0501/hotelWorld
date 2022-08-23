// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fA0o9":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _configJs = require("./config.js");
var _modelJs = require("./model.js");
var _searchViewJs = require("../view/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _previewViewJs = require("../view/previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
var _resultViewJs = require("../view/resultView.js");
var _resultViewJsDefault = parcelHelpers.interopDefault(_resultViewJs);
var _paginationViewJs = require("../view/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _helperJs = require("./helper.js");
const controlSearch = async function() {
    try {
        //skeleton loading
        (0, _previewViewJsDefault.default)._renderSkeleton();
        await _modelJs.getSearchResult();
        //render preview
        (0, _previewViewJsDefault.default)._render(_modelJs.getResultPerPage(_modelJs.state.page));
        //pagination
        if (!_modelJs.state.search.results[0]) return;
        (0, _paginationViewJsDefault.default)._render(_modelJs.state.page, _modelJs.state);
    } catch (err) {
        alert(err);
        console.log(err);
    }
};
const controlResult = async function() {
    try {
        (0, _resultViewJsDefault.default).renderSpinner();
        //find current hotel when user click preview
        _modelJs.findCurHotel();
        //load hotel details using on hotel id
        await _modelJs.loadCurHotelPhotos();
        await _modelJs.loadCurHotelFacAndReviews();
        await _modelJs.loadCurHotelNearbyandQA();
        //display data
        (0, _resultViewJsDefault.default)._render(_modelJs.state.curHotel);
        (0, _resultViewJsDefault.default)._openModal();
    } catch (error) {
        alert(error);
    }
};
const controlPagination = (goTo)=>{
    //update preview list
    (0, _previewViewJsDefault.default)._render(_modelJs.getResultPerPage(goTo));
    //update button
    (0, _paginationViewJsDefault.default)._render(goTo, _modelJs.state);
};
const init = ()=>{
    (0, _searchViewJsDefault.default).addHandler(controlSearch);
    (0, _previewViewJsDefault.default)._addHandler(controlResult);
    (0, _paginationViewJsDefault.default)._addHandler(controlPagination);
};
init();

},{"./config.js":"k5Hzs","./model.js":"Y4A21","../view/searchView.js":"b2EbH","../view/previewView.js":"fFeKs","../view/resultView.js":"LyN8l","../view/paginationView.js":"0EmXV","./helper.js":"lVRAz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY);
parcelHelpers.export(exports, "options", ()=>options);
parcelHelpers.export(exports, "optionsForGeoCoding", ()=>optionsForGeoCoding);
parcelHelpers.export(exports, "NUM_PER_PAGE", ()=>NUM_PER_PAGE);
const API_KEY = "f66a571a87msh5e5cfd9538664d8p18bccfjsneb3752d5ac69";
const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "booking-com.p.rapidapi.com"
    }
};
const optionsForGeoCoding = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "8212341a06msh116c63045407b15p1bffecjsn3f8fe6a12567",
        "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com"
    }
};
const NUM_PER_PAGE = 12; // "X-RapidAPI-Key": "8212341a06msh116c63045407b15p1bffecjsn3f8fe6a12567",
 //7a98e88db5msh5087ec2115eb42bp16889cjsnc4301d679489
 //"Access-Control-Allow-Origin": "*",
 //f66a571a87msh5e5cfd9538664d8p18bccfjsneb3752d5ac69

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "getGeo", ()=>getGeo);
parcelHelpers.export(exports, "getSearchResult", ()=>getSearchResult);
parcelHelpers.export(exports, "findCurHotel", ()=>findCurHotel);
parcelHelpers.export(exports, "loadCurHotelPhotos", ()=>loadCurHotelPhotos);
parcelHelpers.export(exports, "loadCurHotelNearbyandQA", ()=>loadCurHotelNearbyandQA);
parcelHelpers.export(exports, "loadCurHotelFacAndReviews", ()=>loadCurHotelFacAndReviews);
parcelHelpers.export(exports, "getResultPerPage", ()=>getResultPerPage);
var _config = require("./config");
var _searchView = require("../view/searchView");
var _searchViewDefault = parcelHelpers.interopDefault(_searchView);
var _helperJs = require("./helper.js");
const state = {
    test_id: 1377073,
    filters: {},
    page: 1,
    totalPage: 1,
    curId: "",
    curHotel: {},
    locale: "en-gb",
    search: {
        query: {
            location: "",
            order_by: "",
            adult_num: 0,
            kid_num: 0,
            room_num: 0,
            checkin_date: "",
            checkout_date: ""
        },
        results: []
    }
};
const getGeo = async function(address) {
    try {
        const locale = state.locale;
        const url = `https://trueway-geocoding.p.rapidapi.com/Geocode?address=${address}&language=${locale}`;
        const data = await (0, _helperJs.getJSON)(url, (0, _config.optionsForGeoCoding));
        const { lat , lng  } = data.results[0].location;
        state.search.location = [
            lat,
            lng
        ];
    } catch (err) {
        console.error(err);
    }
};
const getSearchResult = async function() {
    try {
        const locale = state.locale;
        //get search query
        const query = (0, _searchViewDefault.default).getQuery();
        if (!query) return;
        state.search.query = query;
        console.log(query);
        //search location
        await getGeo(query.location);
        //fetch data
        const url = `https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?order_by=${query.order_by}&adults_number=${query.adult_num}&units=metric&room_number=${query.room_num}&checkout_date=${query.checkout_date}&filter_by_currency=AED&locale=${locale}&checkin_date=${query.checkin_date}&latitude=${state.search.location[0]}&longitude=${state.search.location[1]}&children_number=2&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&include_adjacency=true`;
        const data = await (0, _helperJs.getJSON)(url, (0, _config.options));
        state.search.results = data.result.map((data)=>{
            return {
                hotel_name: data.hotel_name,
                hotel_id: data.hotel_id,
                hotel_address: data.address,
                checkin_time: data.checkin,
                checkout_time: data.checkout,
                distance_to_city_center: data.distance_to_cc,
                include_breakfast: data.hotel_include_breakfast,
                free_cancellable: data.is_free_cancellable,
                photo: data.main_photo_url,
                max_photo: data.max_1440_photo_url,
                review: [
                    data.review_score,
                    data.review_score_word,
                    data.review_nr
                ],
                url: data.url,
                unit_config: data.unit_configuration_label,
                totalPrice: data.composite_price_breakdown.gross_amount.value,
                currency: data.currency_code,
                bookmarked: "false"
            };
        });
        //update total page
        state.totalPage = Math.ceil(state.search.results.length / (0, _config.NUM_PER_PAGE));
        console.log(state);
    } catch (err) {
        console.error(err);
    }
};
const findCurHotel = ()=>{
    const curHotel = state.search.results.find((result)=>{
        return result.hotel_id == state.curId;
    });
    state.curHotel = curHotel;
};
const loadCurHotelPhotos = async function() {
    try {
        const locale = state.locale;
        console.log(locale);
        const id = state.curId;
        // const id = state.test_id;
        const url = `https://booking-com.p.rapidapi.com/v1/hotels/photos?locale=${locale}&hotel_id=${id}`;
        //fetch data
        const data = await (0, _helperJs.getJSON)(url, (0, _config.options));
        //set state
        state.curHotel.allPhotos = data.map((data)=>{
            return {
                photo_1440: data.url_1440,
                photo_1280: data.url_max,
                photo_square_60: data.url_square60,
                tags: data.tags
            };
        });
        console.log(state);
    } catch (error) {
        console.log(error);
    }
};
const loadCurHotelNearbyandQA = async function() {
    try {
        const locale = state.locale;
        const id = state.curId;
        const hightlightPromise = fetch(`https://booking-com.p.rapidapi.com/v1/hotels/location-highlights?hotel_id=${id}&locale=${locale}`, (0, _config.options));
        const questionsPromise = fetch(`https://booking-com.p.rapidapi.com/v1/hotels/questions?locale=${locale}&hotel_id=${id}`, (0, _config.options));
        const res = await Promise.allSettled([
            hightlightPromise,
            questionsPromise
        ]);
        console.log(res);
        //error handling
        if (!res[0].value.ok) throw new Error(`Fail to load location highlight data`);
        if (!res[1].value.ok) throw new Error(`Fail to load QA data`);
        //convert to json data
        const data = await Promise.allSettled([
            res[0].value.json(),
            res[1].value.json(), 
        ]);
        //location highlight data
        const landmark = data[0].value.location_highlights.popular_landmarks;
        const nearByStation = data[0].value.location_highlights.nearby_stations;
        state.curHotel.landmark = landmark;
        state.curHotel.nearByStation = nearByStation;
        // //question data
        const questions = data[1].value;
        state.curHotel.FAQ = questions;
    } catch (err) {
        alert(err);
        console.log(err);
    }
};
const loadCurHotelFacAndReviews = async function() {
    try {
        const locale = state.locale;
        const id = state.curId;
        const facilitiesPromise = fetch(`https://booking-com.p.rapidapi.com/v1/hotels/facilities?locale=${locale}&hotel_id=${id}`, (0, _config.options));
        const reviewsPromise = fetch(`https://booking-com.p.rapidapi.com/v1/hotels/reviews?sort_type=SORT_MOST_RELEVANT&locale=${locale}&hotel_id=${id}&language_filter=${locale}%2Cde%2Cfr&customer_type=solo_traveller%2Creview_category_group_of_friends`, (0, _config.options));
        const res = await Promise.allSettled([
            facilitiesPromise,
            reviewsPromise
        ]);
        //error handling
        if (!res[0].value.ok) throw new Error(`Fail to load facility data`);
        if (!res[1].value.ok) throw new Error(`Fail to load review data`);
        //convert to json data
        const data = await Promise.allSettled([
            res[0].value.json(),
            res[1].value.json(), 
        ]);
        //facilities
        state.curHotel.facilities = data[0].value;
        //reviews
        state.curHotel.customerReviews = data[1].value.result.map((r)=>{
            return {
                title: r.title,
                travel_purpose: r.travel_purpose,
                author_type: r.author.type_string,
                author_name: r.author.name,
                author_country: r.author.countrycode,
                average_score: r.average_score.toFixed(1),
                pros: r.pros,
                cons: r.cons,
                date: r.date,
                id: r.review_id
            };
        });
    } catch (err) {
        alert(err);
        console.log(err);
    }
};
const getResultPerPage = (page)=>{
    state.page = page;
    const start = (page - 1) * (0, _config.NUM_PER_PAGE);
    const end = page * (0, _config.NUM_PER_PAGE);
    return state.search.results.slice(start, end);
};

},{"./config":"k5Hzs","../view/searchView":"b2EbH","./helper.js":"lVRAz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b2EbH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helperJs = require("../js/helper.js");
class SearchView {
    _parentEl = document.querySelector(".search");
    _setDatePickerDate() {
        //set check-in date default to today
        document.getElementById("check-in-date").value = (0, _helperJs.now);
    }
    getQuery() {
        const result = this._parentEl.elements;
        console.log(result[5].value, result[6].value);
        const checkInDate = new Date(result[5].value).toISOString().split("T")[0];
        const checkOutDate = new Date(result[6].value).toISOString().split("T")[0];
        //check total guest>0 && room number > 0
        if (!+result[2].value && !+result[3].value) {
            alert("Total number of guest should be greater than 0");
            return;
        }
        if (!result[4].value) {
            alert("Total number of room should be greater than 0");
            return;
        }
        if (checkInDate > checkOutDate) {
            alert("Check-out date cannot be earlier than check-in date");
            return;
        }
        if (checkInDate < (0, _helperJs.now)) {
            alert("Check-in cannot be earlier than current date");
            return;
        }
        if (checkInDate === checkOutDate) {
            alert("Cannot stay less than one night");
            return;
        }
        console.log(result[5].value, result[6].value);
        return {
            location: result[0].value.toLowerCase(),
            order_by: result[1].value.toLowerCase(),
            adult_num: +result[2].value,
            kid_num: +result[3].value,
            room_num: +result[4].value,
            checkin_date: result[5].value,
            checkout_date: result[6].value
        };
    }
    addHandler(handler) {
        this._parentEl.addEventListener("submit", (e)=>{
            e.preventDefault();
            // for (const inputField of e.target) {
            //   inputField.value = "";
            // }
            handler();
        });
    }
}
exports.default = new SearchView();

},{"../js/helper.js":"lVRAz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lVRAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeOut", ()=>timeOut);
parcelHelpers.export(exports, "now", ()=>now);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
var _config = require("./config");
const timeOut = async function() {
    return new Promise(function(_, reject) {
        setTimeout(()=>{
            reject(new Error("Response took too long! Please try again!"));
        }, "8000");
    });
};
const now = new Date().toISOString().split("T")[0];
console.log(now);
const getJSON = async function(url, option) {
    try {
        const res = await fetch(url, option);
        const timeOutRes = timeOut();
        const raceResult = await Promise.race([
            res,
            timeOutRes
        ]);
        if (!raceResult.ok) throw new Error();
        const data = await raceResult.json();
        return data;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};

},{"./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fFeKs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _modelJs = require("../js/model.js");
var _configJs = require("../js/config.js");
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("../img/icons.svg");
class PreviewView extends (0, _viewJsDefault.default) {
    _parentEl = document.querySelector(".results");
    _data;
    _renderSkeleton() {
        const skeleton = document.createElement("div");
        skeleton.classList.add("skeleton");
        const html = `
    <div class="skeleton-item skeleton-img"></div>
    <div class="skeleton-text">
      <div class="skeleton-item skeleton-text-item"></div>
      <div class="skeleton-item skeleton-text-item"></div>
    </div>
  `;
        skeleton.insertAdjacentHTML("afterbegin", html);
        this.clear();
        for(let i = 0; i < (0, _configJs.NUM_PER_PAGE); i++){
            const skeletons = skeleton.cloneNode(true);
            this._parentEl.insertAdjacentElement("afterbegin", skeletons);
        }
    }
    _generateMarkUp(results) {
        return results.map((data)=>{
            return `
    <li class="preview" id="${data.hotel_id}">
            <div class="preview__link preview__link--active" >
              <figure class="preview__fig">
                <img src="${data.photo}" alt="hotel photo" />
              </figure>
              <h4 class="preview__title">${data.hotel_name.length > 25 ? data.hotel_name.slice(0, 25) + "..." : data.hotel_name}</h4>
              <p class="preview__address">
              <svg xmlns="http://www.w3.org/2000/svg" class="preview__address-icon icon" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
              ${data.hotel_address}</p>
              <div class="preview__score">
              <svg xmlns="http://www.w3.org/2000/svg" class="preview__score-icon icon" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>
                <div class="preview__score-num">${data.review[0]}</div>
              </div>
            </div>  
          </li>`;
        }).join("");
    }
    _render(data) {
        document.querySelector(".pagination").innerHTML = "";
        this._data = data;
        const markup = this._generateMarkUp(this._data);
        this.clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
    _addHandler(handler) {
        this._parentEl.addEventListener("click", (e)=>{
            const targetPreview = e.target.closest(".preview");
            const id = targetPreview.getAttribute("id");
            _modelJs.state.curId = id;
            handler();
        });
    }
}
exports.default = new PreviewView();

},{"../js/model.js":"Y4A21","../js/config.js":"k5Hzs","./view.js":"bx4GI","../img/icons.svg":"cMpiy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bx4GI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _parentEl;
    renderSpinner() {
        this.clear();
        const markup = `
        <div class="spinner">
            <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
            </svg>
        </div>
        `;
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
    clear() {
        this._parentEl.innerHTML = "";
    }
}
exports.default = View;

},{"url:../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loVOp":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("hWUTQ") + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"cMpiy":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("hWUTQ") + "icons.21bad73c.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"LyN8l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class ResultView extends (0, _viewDefault.default) {
    _parentEl = document.querySelector(".details");
    _data;
    _openModal() {
        this._parentEl.addEventListener("click", (e)=>{
            if (e.target.getAttribute("id") === "photo-3") {
                document.querySelector(".overlay").classList.remove("hidden");
                document.querySelector(".modal-gallery").classList.remove("hidden");
            }
            if (e.target.classList.contains("modal-gallery-icon--close")) {
                document.querySelector(".overlay").classList.add("hidden");
                document.querySelector(".modal-gallery").classList.add("hidden");
            }
        });
    }
    _generateMarkup(data) {
        return `
        <div class="details__gallery">
          <figure class="details__gallery__photo" id="photo-1" >
            <img src="${data.allPhotos[0].photo_1280}" alt="Main photo">
          </figure>
          <figure class="details__gallery__photo" id="photo-2" >
            <img src="${data.allPhotos[1].photo_1280}" alt="Photo-2">
          </figure>
          <figure class="details__gallery__photo" id="photo-3" data-open-all="See all ${data.allPhotos.length} photos">
            <img src="${data.allPhotos[2].photo_1280}" alt="Photo-3">
          </figure>
        </div>

        <div class="modal modal-gallery hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon modal-icon modal-gallery-icon--close"
            viewBox="0 0 320 512"
          >
            <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
            />
          </svg>
          <div class="modal-gallery__main">
          ${data.allPhotos.map((photo)=>{
            return `
            <figure class="modal-gallery__main-photo" data-tag="${photo.tags[0] ? photo.tags[0].tag : ""}">
              <img src="${photo.photo_1280}" >
            </figure>`;
        }).join("")}
          </div>
        </div>

        <div class="details__header details__section">
          <div class="details__header-main">
          ${data.free_cancellable === 1 ? '<div class="details__header-main__isFreeCancellable">Free cancellable</div>' : ""}
          ${data.include_breakfast === 1 ? '<div class="details__header-main__hasBreakfast">Breakfast included</div>' : ""}
          <h2 class="details__header-main__hotel-name">${data.hotel_name}</h2>
        </div>

        <div class="details__header__hotel-address">
        <svg xmlns="http://www.w3.org/2000/svg" class="details__header__hotel-address-icon icon" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
          ${data.hotel_address}
        </div>
        <span class="details__review">
          <span class="details__review-score">${data.review[0]}</span>
          <span class="details__review-description">${data.review[1]}</span>
        </span>
        <div class="details__price main-title">  
          <svg xmlns="http://www.w3.org/2000/svg" class="icon details__price-icon" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M472.8 168.4C525.1 221.4 525.1 306.6 472.8 359.6L360.8 472.9C351.5 482.3 336.3 482.4 326.9 473.1C317.4 463.8 317.4 448.6 326.7 439.1L438.6 325.9C472.5 291.6 472.5 236.4 438.6 202.1L310.9 72.87C301.5 63.44 301.6 48.25 311.1 38.93C320.5 29.61 335.7 29.7 344.1 39.13L472.8 168.4zM.0003 229.5V80C.0003 53.49 21.49 32 48 32H197.5C214.5 32 230.7 38.74 242.7 50.75L410.7 218.7C435.7 243.7 435.7 284.3 410.7 309.3L277.3 442.7C252.3 467.7 211.7 467.7 186.7 442.7L18.75 274.7C6.743 262.7 0 246.5 0 229.5L.0003 229.5zM112 112C94.33 112 80 126.3 80 144C80 161.7 94.33 176 112 176C129.7 176 144 161.7 144 144C144 126.3 129.7 112 112 112z"/></svg>
          ${data.currency}&nbsp${Math.round(data.totalPrice)}</div>
      </div>
      
          
      <div class="details__info details__section">
        <h3 class="details__info__title main-title">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon details__info__title-icon" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"/></svg>
        Information</h3>
        <div class="details__info__item details__info__item-distance-to-cc">
          <b>Distance from city center: &nbsp</b>
          ${data.distance_to_city_center} m
        </div>
        <div class="details__info__item details__info__item-checkin-time">
          <b>Checkin time &nbsp</b> From: ${data.checkin_time.from}
        </div>
        <div class="details__info__item details__info__item-checkout-time">
          <b>Checkout time &nbsp</b> Until: ${data.checkout_time.until}
        </div>
        <div class="details__info__item details__info__item-config">
          ${data.unit_config}
        </div>
      </div>


      <div class="details__nearBy details__section">
        <h3 class="details__nearBy-title main-title">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon details__nearBy-title-icon" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M176 256C176 211.8 211.8 176 256 176C300.2 176 336 211.8 336 256C336 300.2 300.2 336 256 336C211.8 336 176 300.2 176 256zM256 0C273.7 0 288 14.33 288 32V66.65C368.4 80.14 431.9 143.6 445.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H445.3C431.9 368.4 368.4 431.9 288 445.3V480C288 497.7 273.7 512 256 512C238.3 512 224 497.7 224 480V445.3C143.6 431.9 80.14 368.4 66.65 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H66.65C80.14 143.6 143.6 80.14 224 66.65V32C224 14.33 238.3 0 256 0zM128 256C128 326.7 185.3 384 256 384C326.7 384 384 326.7 384 256C384 185.3 326.7 128 256 128C185.3 128 128 185.3 128 256z"/></svg>
        Location Highlights</h3>
        ${data.landmark || data.nearByStation ? `
        ${data.landmark ? `<div class="details__nearBy-landmark">
        <h4 class="details__nearBy-landmark-title sub-title">Nearby Landmark</h4>
        ${data.landmark.map((l)=>{
            return `<div class="details__nearBy-landmark-item">${l}</div>`;
        }).join(" ")}
      </div>` : ""}
        ${data.nearByStation ? `<div class="details__nearBy-station ">
        <h4 class="details__nearBy-station-title sub-title">Nearby Station</h4>
        ${data.nearByStation.map((s)=>{
            return `
            <div class="details__nearBy-station-item">
              <div class="details__nearBy-station-name">${s.station_name}</div>
              <div class="details__nearBy-station-distance">${s.distance_meters} m</div>
            </div>`;
        }).join(" ")}  
      </div>` : ""}` : `<div>No location highlights for now :(</div>`}
        </div>


        <ul class="details__cusReviews details__section">
        <h3 class="details__cusReviews__title main-title">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon details__cusReviews__title-icon" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 31.1c-141.4 0-255.1 93.12-255.1 208c0 49.62 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734c1.249 3 4.021 4.766 7.271 4.766c66.25 0 115.1-31.76 140.6-51.39c32.63 12.25 69.02 19.39 107.4 19.39c141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM127.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S145.7 271.1 127.1 271.1zM256 271.1c-17.75 0-31.1-14.25-31.1-31.1s14.25-32 31.1-32s31.1 14.25 31.1 32S273.8 271.1 256 271.1zM383.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S401.7 271.1 383.1 271.1z"/></svg>
        Reviews</h3>
        ${data.customerReviews ? ` 
          ${data.customerReviews.map((c)=>{
            return ` <li class="details__cusReviews__item" id="${c.id}">
            <div class="details__cusReviews__item__author">
              <div class="details__cusReviews__item__author__name">${c.author_name}</div>
              <div class="details__cusReviews__item__author__type">${c.author_type}</div>
              <div class="details__cusReviews__item__author__purpose">${c.travel_purpose}</div>
            </div>
            <div class="details__cusReviews__item__header">
              <h4 class="details__cusReviews__item__header__title">&#8220 ${c.title} &#8221</h4>
              <div class="details__cusReviews__item__header__time">${c.date}</div>
            </div>
            <div class="details__cusReviews__item__score">${c.average_score}</div>

          <div class="details__cusReviews__item__content">
          ${c.pros ? `<div class="details__cusReviews__item__content-pro">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon details__cusReviews__item__content-pro--icon" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM164.1 325.5C158.3 318.8 148.2 318.1 141.5 323.9C134.8 329.7 134.1 339.8 139.9 346.5C162.1 372.1 200.9 400 255.1 400C311.1 400 349.8 372.1 372.1 346.5C377.9 339.8 377.2 329.7 370.5 323.9C363.8 318.1 353.7 318.8 347.9 325.5C329.9 346.2 299.4 368 255.1 368C212.6 368 182 346.2 164.1 325.5H164.1zM176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176zM336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240z"/></svg>
            ${c.pros}
          </div>` : ""}
          ${c.cons ? `<div class="details__cusReviews__item__content-con">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon details__cusReviews__item__content-con--icon" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM159.3 388.7C171.5 349.4 209.9 320 256 320C302.1 320 340.5 349.4 352.7 388.7C355.3 397.2 364.3 401.9 372.7 399.3C381.2 396.7 385.9 387.7 383.3 379.3C366.8 326.1 315.8 287.1 256 287.1C196.3 287.1 145.2 326.1 128.7 379.3C126.1 387.7 130.8 396.7 139.3 399.3C147.7 401.9 156.7 397.2 159.3 388.7H159.3zM176.4 176C158.7 176 144.4 190.3 144.4 208C144.4 225.7 158.7 240 176.4 240C194 240 208.4 225.7 208.4 208C208.4 190.3 194 176 176.4 176zM336.4 240C354 240 368.4 225.7 368.4 208C368.4 190.3 354 176 336.4 176C318.7 176 304.4 190.3 304.4 208C304.4 225.7 318.7 240 336.4 240z"/></svg>
            ${c.cons}
            </div>` : ""}
            </div>
          </li>`;
        }).join("")}` : `<div>No reviews for now :(</div>`}
        </ul>

        <div class="details__facilities details__section">
            <h3 class="details__facilities__title main-title">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon details__facilities__title-icon" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M480 0C497.7 0 512 14.33 512 32C512 49.67 497.7 64 480 64V448C497.7 448 512 462.3 512 480C512 497.7 497.7 512 480 512H304V448H208V512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448V64C14.33 64 0 49.67 0 32C0 14.33 14.33 0 32 0H480zM112 96C103.2 96 96 103.2 96 112V144C96 152.8 103.2 160 112 160H144C152.8 160 160 152.8 160 144V112C160 103.2 152.8 96 144 96H112zM224 144C224 152.8 231.2 160 240 160H272C280.8 160 288 152.8 288 144V112C288 103.2 280.8 96 272 96H240C231.2 96 224 103.2 224 112V144zM368 96C359.2 96 352 103.2 352 112V144C352 152.8 359.2 160 368 160H400C408.8 160 416 152.8 416 144V112C416 103.2 408.8 96 400 96H368zM96 240C96 248.8 103.2 256 112 256H144C152.8 256 160 248.8 160 240V208C160 199.2 152.8 192 144 192H112C103.2 192 96 199.2 96 208V240zM240 192C231.2 192 224 199.2 224 208V240C224 248.8 231.2 256 240 256H272C280.8 256 288 248.8 288 240V208C288 199.2 280.8 192 272 192H240zM352 240C352 248.8 359.2 256 368 256H400C408.8 256 416 248.8 416 240V208C416 199.2 408.8 192 400 192H368C359.2 192 352 199.2 352 208V240zM256 288C211.2 288 173.5 318.7 162.1 360.2C159.7 373.1 170.7 384 184 384H328C341.3 384 352.3 373.1 349 360.2C338.5 318.7 300.8 288 256 288z"/></svg>
            Facilities</h3>
        ${data.facilities ? `
            <div class="details__facilities__items">
             ${data.facilities.map((f)=>{
            return `
               <span class="details__facilities__items-item">
               ${f.facilitytype_name == "Food & Drink" ? `<svg xmlns="http://www.w3.org/2000/svg" class="icon details__facilities__items-item-icon--food" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M221.6 148.7C224.7 161.3 224.8 174.5 222.1 187.2C219.3 199.1 213.6 211.9 205.6 222.1C191.1 238.6 173 249.1 151.1 254.1V472C151.1 482.6 147.8 492.8 140.3 500.3C132.8 507.8 122.6 512 111.1 512C101.4 512 91.22 507.8 83.71 500.3C76.21 492.8 71.1 482.6 71.1 472V254.1C50.96 250.1 31.96 238.9 18.3 222.4C10.19 212.2 4.529 200.3 1.755 187.5C-1.019 174.7-.8315 161.5 2.303 148.8L32.51 12.45C33.36 8.598 35.61 5.197 38.82 2.9C42.02 .602 45.97-.4297 49.89 .0026C53.82 .4302 57.46 2.303 60.1 5.259C62.74 8.214 64.18 12.04 64.16 16V160H81.53L98.62 11.91C99.02 8.635 100.6 5.621 103.1 3.434C105.5 1.248 108.7 .0401 111.1 .0401C115.3 .0401 118.5 1.248 120.9 3.434C123.4 5.621 124.1 8.635 125.4 11.91L142.5 160H159.1V16C159.1 12.07 161.4 8.268 163.1 5.317C166.6 2.366 170.2 .474 174.1 .0026C178-.4262 181.1 .619 185.2 2.936C188.4 5.253 190.6 8.677 191.5 12.55L221.6 148.7zM448 472C448 482.6 443.8 492.8 436.3 500.3C428.8 507.8 418.6 512 408 512C397.4 512 387.2 507.8 379.7 500.3C372.2 492.8 368 482.6 368 472V352H351.2C342.8 352 334.4 350.3 326.6 347.1C318.9 343.8 311.8 339.1 305.8 333.1C299.9 327.1 295.2 320 291.1 312.2C288.8 304.4 287.2 296 287.2 287.6L287.1 173.8C288 136.9 299.1 100.8 319.8 70.28C340.5 39.71 369.8 16.05 404.1 2.339C408.1 .401 414.2-.3202 419.4 .2391C424.6 .7982 429.6 2.62 433.9 5.546C438.2 8.472 441.8 12.41 444.2 17.03C446.7 21.64 447.1 26.78 448 32V472z"/></svg>` : `<svg xmlns="http://www.w3.org/2000/svg" class="icon details__facilities__items-item-icon" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></svg>`}
               ${f.facility_name}
              </span>`;
        }).join("")}
            </div>` : ""}
        </div>

        <div class="details__FAQ details__section">
          <header>
            <h3 class="details__FAQ__title main-title">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon details__FAQ__title-icon" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z"/></svg>
            FAQ</h3>
            <div class="details__FAQ__sidenote">${data.FAQ.average_response_time}</div>
          </header>
        ${data.FAQ ? `
      <div class="details__FAQ__items">
        ${data.FAQ.q_and_a_pairs.slice(0, 10).map((qa, i)=>{
            return `
          <div class="details__FAQ__item" id="item-${i + 1}">
            <a class="details__FAQ__item--Q" href="#item-${i + 1}">
              ${qa.question}
              <svg xmlns="http://www.w3.org/2000/svg" class="details__FAQ__item-icon details__FAQ__item-icon--open" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM390.6 246.6l-112 112C272.4 364.9 264.2 368 256 368s-16.38-3.125-22.62-9.375l-112-112c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L256 290.8l89.38-89.38c12.5-12.5 32.75-12.5 45.25 0S403.1 234.1 390.6 246.6z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="details__FAQ__item-icon details__FAQ__item-icon--close" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM390.6 310.6c-12.5 12.5-32.75 12.5-45.25 0L256 221.3L166.6 310.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l112-112C239.6 147.1 247.8 144 256 144s16.38 3.125 22.62 9.375l112 112C403.1 277.9 403.1 298.1 390.6 310.6z"/></svg>
            </a>
            <div class="details__FAQ__item--A">${qa.answer}
            </div>
          </div>`;
        }).join("")}
      </div>` : `<div>No FAQ for now :(</div>`}
        </div>

        <div class="details__link">
          <a href="${data.url}" class="details__link__link-item">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon details__link__link-item-icon" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 64C256 46.33 270.3 32 288 32H415.1C415.1 32 415.1 32 415.1 32C420.3 32 424.5 32.86 428.2 34.43C431.1 35.98 435.5 38.27 438.6 41.3C438.6 41.35 438.6 41.4 438.7 41.44C444.9 47.66 447.1 55.78 448 63.9C448 63.94 448 63.97 448 64V192C448 209.7 433.7 224 416 224C398.3 224 384 209.7 384 192V141.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6C156.9 298.1 156.9 277.9 169.4 265.4L338.7 96H288C270.3 96 256 81.67 256 64V64zM0 128C0 92.65 28.65 64 64 64H160C177.7 64 192 78.33 192 96C192 113.7 177.7 128 160 128H64V416H352V320C352 302.3 366.3 288 384 288C401.7 288 416 302.3 416 320V416C416 451.3 387.3 480 352 480H64C28.65 480 0 451.3 0 416V128z"/></svg>
            Visit Booking.com</a>
          </div>
    `;
    }
    _render(data) {
        this._data = data;
        const markup = this._generateMarkup(data);
        this._parentEl.innerHTML = "";
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = new ResultView();

},{"./view":"bx4GI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"0EmXV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _configJs = require("../js/config.js");
var _iconsSvg = require("url:../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends (0, _viewDefault.default) {
    _parentEl = document.querySelector(".pagination");
    _data;
    _generateMarkup(page, state) {
        let html;
        //first page && no other page
        if (page === 1 && state.totalPage === 1) html = `
        <button class="btn--inline pagination__btn--next" data-goto="${page}">
            <span>Page ${page}</span>
        </button>`;
        else if (page === 1 && state.totalPage > 1) html = `
        <button class="btn--inline pagination__btn--next" data-goto="${page + 1}">
            <span>Page ${page + 1}</span>
            <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
            </svg>
        </button>`;
        else if (page === state.totalPage) html = `
        <button class="btn--inline pagination__btn--prev" data-goto="${page - 1}">
            <svg class="search__icon">
                <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
            </svg>
            <span>Page ${page - 1}</span>
        </button>`;
        else html = `
      <button class="btn--inline pagination__btn--next"  data-goto="${page + 1}">
            <span>Page ${page + 1}</span>
            <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
            </svg>
        </button>
        <button class="btn--inline pagination__btn--prev"  data-goto="${page - 1}">
            <svg class="search__icon">
                <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
            </svg>
            <span>Page ${page - 1}</span>
        </button>`;
        return html;
    }
    _render(page, state) {
        const markup = this._generateMarkup(page, state);
        this.clear();
        this._parentEl.insertAdjacentHTML("beforeend", markup);
    }
    _addHandler(handler) {
        this._parentEl.addEventListener("click", (e)=>{
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            console.log(btn);
            const goToPage = +btn.dataset.goto;
            console.log(goToPage);
            handler(goToPage);
        });
    }
}
exports.default = new PaginationView();

},{"./view":"bx4GI","../js/config.js":"k5Hzs","url:../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fA0o9","aenu9"], "aenu9", "parcelRequiref439")

//# sourceMappingURL=index.e37f48ea.js.map
