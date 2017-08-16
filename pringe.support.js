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
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              			"idntty": "idntty",
              			"plough": "plough",
              			"stringe": "stringe",
              			"sxty4": "sxty4",
              			"truly": "truly",
              			"zelf": "zelf"
              		}
              	@end-include
              */

var idntty = require("idntty");
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

	var trace = idntty(zelf(this)).toString();

	parameter = parameter.filter(truly).map(function (item) {return stringe(item);});

	var data = trace + "@(" + parameter + ")";

	return sxty4(data).encode();
};

module.exports = pringe;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW5nZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImlkbnR0eSIsInJlcXVpcmUiLCJwbG91Z2giLCJzdHJpbmdlIiwic3h0eTQiLCJ0cnVseSIsInplbGYiLCJwcmluZ2UiLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiLCJ0cmFjZSIsInRvU3RyaW5nIiwiZmlsdGVyIiwibWFwIiwiaXRlbSIsImRhdGEiLCJlbmNvZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsVUFBVUYsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxRQUFRSixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1LLE9BQU9MLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1NLFNBQVMsU0FBU0EsTUFBVCxDQUFpQkMsU0FBakIsRUFBNEI7QUFDMUM7Ozs7Ozs7Ozs7OztBQVlBQSxhQUFZTixPQUFRTyxTQUFSLENBQVo7O0FBRUEsS0FBSUMsUUFBUVYsT0FBUU0sS0FBTSxJQUFOLENBQVIsRUFBdUJLLFFBQXZCLEVBQVo7O0FBRUFILGFBQVlBLFVBQVVJLE1BQVYsQ0FBa0JQLEtBQWxCLEVBQTBCUSxHQUExQixDQUErQixVQUFFQyxJQUFGLEVBQVksQ0FBRSxPQUFPWCxRQUFTVyxJQUFULENBQVAsQ0FBeUIsQ0FBdEUsQ0FBWjs7QUFFQSxLQUFJQyxPQUFXTCxLQUFYLFVBQXVCRixTQUF2QixNQUFKOztBQUVBLFFBQU9KLE1BQU9XLElBQVAsRUFBY0MsTUFBZCxFQUFQO0FBQ0EsQ0F0QkQ7O0FBd0JBQyxPQUFPQyxPQUFQLEdBQWlCWCxNQUFqQiIsImZpbGUiOiJwcmluZ2Uuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwicHJpbmdlXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcInByaW5nZS9wcmluZ2UuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwicHJpbmdlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwicHJpbmdlXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3ByaW5nZS5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwicHJpbmdlLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0Q3JlYXRlIHRyYWNlIGlkZW50aWZpY2F0aW9uIGZyb20gbWV0aG9kIHBhcmFtZXRlci5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImlkbnR0eVwiOiBcImlkbnR0eVwiLFxyXG5cdFx0XHRcInBsb3VnaFwiOiBcInBsb3VnaFwiLFxyXG5cdFx0XHRcInN0cmluZ2VcIjogXCJzdHJpbmdlXCIsXHJcblx0XHRcdFwic3h0eTRcIjogXCJzeHR5NFwiLFxyXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcclxuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBpZG50dHkgPSByZXF1aXJlKCBcImlkbnR0eVwiICk7XHJcbmNvbnN0IHBsb3VnaCA9IHJlcXVpcmUoIFwicGxvdWdoXCIgKTtcclxuY29uc3Qgc3RyaW5nZSA9IHJlcXVpcmUoIFwic3RyaW5nZVwiICk7XHJcbmNvbnN0IHN4dHk0ID0gcmVxdWlyZSggXCJzeHR5NFwiICk7XHJcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XHJcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xyXG5cclxuY29uc3QgcHJpbmdlID0gZnVuY3Rpb24gcHJpbmdlKCBwYXJhbWV0ZXIgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcInBhcmFtZXRlcjpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcIipcIixcclxuXHRcdFx0XHRcdFwiWypdXCIsXHJcblx0XHRcdFx0XHRcIi4uLlwiXHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdHBhcmFtZXRlciA9IHBsb3VnaCggYXJndW1lbnRzICk7XHJcblxyXG5cdGxldCB0cmFjZSA9IGlkbnR0eSggemVsZiggdGhpcyApICkudG9TdHJpbmcoICk7XHJcblxyXG5cdHBhcmFtZXRlciA9IHBhcmFtZXRlci5maWx0ZXIoIHRydWx5ICkubWFwKCAoIGl0ZW0gKSA9PiB7IHJldHVybiBzdHJpbmdlKCBpdGVtICk7IH0gKTtcclxuXHJcblx0bGV0IGRhdGEgPSBgJHsgdHJhY2UgfUAoJHsgcGFyYW1ldGVyIH0pYDtcclxuXHJcblx0cmV0dXJuIHN4dHk0KCBkYXRhICkuZW5jb2RlKCApO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwcmluZ2U7XHJcbiJdfQ==
//# sourceMappingURL=pringe.support.js.map
