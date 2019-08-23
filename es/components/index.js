import React, { useState, useRef, useCallback, useMemo, useEffect, memo } from 'react';
import ReactDOM from 'react-dom';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".index-module_mask__3ZnGd{position:fixed;top:0;bottom:0;right:0;left:0;height:100%;background-color:rgba(0,0,0,.5);transition:opacity .2s;will-change:opacity}.index-module_audio__2rEax{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);transition:transform .2s;will-change:transform}.index-module_audio_show__3CRcb{transform:translate(-50%,-50%) scale(1)}";
var styles = {"mask":"index-module_mask__3ZnGd","audio":"index-module_audio__2rEax","audio_show":"index-module_audio_show__3CRcb"};
styleInject(css);

var Modal = function (props) {
    var onClose = props.onClose, src = props.src;
    var _a = useState(0), opacity = _a[0], setOpacity = _a[1];
    var audioEl = useRef(null);
    var maskHandler = useCallback(function () {
        setOpacity(0);
        setTimeout(onClose, 200);
    }, [onClose]);
    var audioHandler = useCallback(function () {
        if (audioEl.current)
            audioEl.current.play();
    }, []);
    var audioStyles = useMemo(function () {
        var _a;
        return classnames(styles.audio, (_a = {},
            _a[styles.audio_show] = opacity,
            _a));
    }, [opacity]);
    useEffect(function () {
        setOpacity(1);
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles.mask, style: { opacity: opacity }, onClick: maskHandler }),
        React.createElement("audio", { ref: audioEl, style: { display: 'block' }, controls: true, className: audioStyles, onCanPlay: audioHandler },
            React.createElement("source", { src: src }))));
};

var Audio = memo(function Audio(props) {
    var _this = this;
    var children = props.children, className = props.className, restProps = __rest(props, ["children", "className"]);
    var handler = useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
        var maskEl, test;
        return __generator(this, function (_a) {
            if (document.querySelector('#audioModal')) {
                maskEl = document.querySelector('#audioModal');
            }
            else {
                maskEl = document.createElement("div");
                maskEl.id = "audioModal";
                document.documentElement.appendChild(maskEl);
            }
            test = React.createElement(Modal, __assign({ onClose: function () {
                    ReactDOM.unmountComponentAtNode(maskEl);
                } }, restProps));
            ReactDOM.render(test, maskEl);
            return [2 /*return*/];
        });
    }); }, [restProps]);
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { className: className, onClick: handler }, children)));
});

export { Audio };
