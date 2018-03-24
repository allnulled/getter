var getter = require("./src/simple-getter.js");
var value = getter({
	a: {
		b: {
			c: [0, {
				d: [0,1,2,3,{
					f: "g"
				}]
			}]
		}
	}
}, ["a", "b", "c", 1, "d", 4, "f"]);
console.log(value === "g" ? "simple-getter utility working fine!" : "CAUTION: simple-getter is failing...");