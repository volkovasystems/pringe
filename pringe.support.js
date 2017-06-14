"use strict"; /*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "pringe",
              			"path": "pringe/pringe.js",
              			"file": "pringe.js",
              			"module": "pringe",
              			"author": "Richeve S. Bebedor",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon"
              			],
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/pringe.git",
              			"test": "pringe-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Create trace identification from method parameter.
              	@end-module-documentation
              
              	@include:
              		{
              			"kurse": "kurse",
              			"plough": "plough",
              			"stringe": "stringe",
              			"sxty4": "sxty4",
              			"truly": "truly",
              			"zelf": "zelf"
              		}
              	@end-include
              */

var kurse = require("kurse");
var plough = require("plough");
var stringe = require("stringe");
var sxty4 = require("sxty4");
var truly = require("truly");
var zelf = require("zelf");

var pringe = function pringe(parameter) {
	/*;
                                         	@meta-configuration:
                                         		{
                                         			"parameter:required": [
                                         				"*",
                                         				"[*]",
                                         				"..."
                                         			]
                                         		}
                                         	@end-meta-configuration
                                         */

	parameter = plough(arguments);

	kurse(zelf(this));

	var trace = stringe(this[kurse.ID]);

	parameter = parameter.filter(truly).map(function (item) {return stringe(item);});

	var data = trace + "@(" + parameter + ")";

	return sxty4(data).encode();
};

module.exports = pringe;

//# sourceMappingURL=pringe.support.js.map