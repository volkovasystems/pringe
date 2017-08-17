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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW5nZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImlkbnR0eSIsInJlcXVpcmUiLCJwbG91Z2giLCJzdHJpbmdlIiwic3h0eTQiLCJ0cnVseSIsInplbGYiLCJwcmluZ2UiLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiLCJ0cmFjZSIsInRvU3RyaW5nIiwiZmlsdGVyIiwibWFwIiwiaXRlbSIsImRhdGEiLCJlbmNvZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsVUFBVUYsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxRQUFRSixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1LLE9BQU9MLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1NLFNBQVMsU0FBU0EsTUFBVCxDQUFpQkMsU0FBakIsRUFBNEI7QUFDMUM7Ozs7Ozs7Ozs7OztBQVlBQSxhQUFZTixPQUFRTyxTQUFSLENBQVo7O0FBRUEsS0FBSUMsUUFBUVYsT0FBUU0sS0FBTSxJQUFOLENBQVIsRUFBdUJLLFFBQXZCLEVBQVo7O0FBRUFILGFBQVlBLFVBQVVJLE1BQVYsQ0FBa0JQLEtBQWxCLEVBQTBCUSxHQUExQixDQUErQixVQUFFQyxJQUFGLEVBQVksQ0FBRSxPQUFPWCxRQUFTVyxJQUFULENBQVAsQ0FBeUIsQ0FBdEUsQ0FBWjs7QUFFQSxLQUFJQyxPQUFXTCxLQUFYLFVBQXVCRixTQUF2QixNQUFKOztBQUVBLFFBQU9KLE1BQU9XLElBQVAsRUFBY0MsTUFBZCxFQUFQO0FBQ0EsQ0F0QkQ7O0FBd0JBQyxPQUFPQyxPQUFQLEdBQWlCWCxNQUFqQiIsImZpbGUiOiJwcmluZ2Uuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJwcmluZ2VcIixcblx0XHRcdFwicGF0aFwiOiBcInByaW5nZS9wcmluZ2UuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInByaW5nZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJwcmluZ2VcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3ByaW5nZS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcInByaW5nZS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENyZWF0ZSB0cmFjZSBpZGVudGlmaWNhdGlvbiBmcm9tIG1ldGhvZCBwYXJhbWV0ZXIuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImlkbnR0eVwiOiBcImlkbnR0eVwiLFxuXHRcdFx0XCJwbG91Z2hcIjogXCJwbG91Z2hcIixcblx0XHRcdFwic3RyaW5nZVwiOiBcInN0cmluZ2VcIixcblx0XHRcdFwic3h0eTRcIjogXCJzeHR5NFwiLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgaWRudHR5ID0gcmVxdWlyZSggXCJpZG50dHlcIiApO1xuY29uc3QgcGxvdWdoID0gcmVxdWlyZSggXCJwbG91Z2hcIiApO1xuY29uc3Qgc3RyaW5nZSA9IHJlcXVpcmUoIFwic3RyaW5nZVwiICk7XG5jb25zdCBzeHR5NCA9IHJlcXVpcmUoIFwic3h0eTRcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG5jb25zdCBwcmluZ2UgPSBmdW5jdGlvbiBwcmluZ2UoIHBhcmFtZXRlciApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInBhcmFtZXRlcjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCIqXCIsXG5cdFx0XHRcdFx0XCJbKl1cIixcblx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdHBhcmFtZXRlciA9IHBsb3VnaCggYXJndW1lbnRzICk7XG5cblx0bGV0IHRyYWNlID0gaWRudHR5KCB6ZWxmKCB0aGlzICkgKS50b1N0cmluZyggKTtcblxuXHRwYXJhbWV0ZXIgPSBwYXJhbWV0ZXIuZmlsdGVyKCB0cnVseSApLm1hcCggKCBpdGVtICkgPT4geyByZXR1cm4gc3RyaW5nZSggaXRlbSApOyB9ICk7XG5cblx0bGV0IGRhdGEgPSBgJHsgdHJhY2UgfUAoJHsgcGFyYW1ldGVyIH0pYDtcblxuXHRyZXR1cm4gc3h0eTQoIGRhdGEgKS5lbmNvZGUoICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHByaW5nZTtcbiJdfQ==
//# sourceMappingURL=pringe.support.js.map
