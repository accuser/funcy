const examples = require("./src/index.js");

Object.entries(examples).forEach(([key, fn]) => fn.call(key));
