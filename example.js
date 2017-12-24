var getter = require("./src/getter.js");
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
console.log(value === "g" ? "Getter utility working fine!" : "Something is nor working okay...");