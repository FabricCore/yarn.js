try {
    java.lang.Class.forName("yarnwrap.Core");
} catch (ignored) {
    console.error("Yarnwrap not installed");
    throw new Error("module loading halted");
}

let yarnwrap = Packages.yarnwrap;
let yarn = {};

require("modules/yarn/converters.js");
require("modules/yarn/getters.js");
require("modules/yarn/events.js");
