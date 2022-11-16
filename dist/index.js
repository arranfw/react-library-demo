require("./index.css");
var $8zHUo$reactjsxruntime = require("react/jsx-runtime");
require("react");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $5dcc767f924b770d$exports = {};
var $6ab71aa90505fd93$exports = {};

$parcel$export($6ab71aa90505fd93$exports, "Button", () => $6ab71aa90505fd93$export$353f5b6fc5456de1);




const $6ab71aa90505fd93$export$353f5b6fc5456de1 = ({ children: children  })=>{
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)("button", {
        type: "button",
        children: children
    });
};


$parcel$exportWildcard($5dcc767f924b770d$exports, $6ab71aa90505fd93$exports);


$parcel$exportWildcard(module.exports, $5dcc767f924b770d$exports);


//# sourceMappingURL=index.js.map
