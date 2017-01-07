"use strict";

/*;
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
			"sxty4": "sxty4",
			"truly": "truly",
			"zelf": "zelf"
		}
	@end-include
*/

var kurse = require("kurse");
var plough = require("plough");
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

	var trace = this[kurse.ID].toString();

	parameter = parameter.filter(truly).map(function (item) {
		return item.toString();
	});

	var data = trace + "@(" + parameter + ")";

	return sxty4(data).encode();
};

module.exports = pringe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW5nZS5qcyJdLCJuYW1lcyI6WyJrdXJzZSIsInJlcXVpcmUiLCJwbG91Z2giLCJzeHR5NCIsInRydWx5IiwiemVsZiIsInByaW5nZSIsInBhcmFtZXRlciIsImFyZ3VtZW50cyIsInRyYWNlIiwiSUQiLCJ0b1N0cmluZyIsImZpbHRlciIsIm1hcCIsIml0ZW0iLCJkYXRhIiwiZW5jb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3REEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1FLFFBQVFGLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxPQUFPSixRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNSyxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLFNBQWpCLEVBQTRCO0FBQzFDOzs7Ozs7Ozs7Ozs7QUFZQUEsYUFBWUwsT0FBUU0sU0FBUixDQUFaOztBQUVBUixPQUFPSyxLQUFNLElBQU4sQ0FBUDs7QUFFQSxLQUFJSSxRQUFRLEtBQU1ULE1BQU1VLEVBQVosRUFBaUJDLFFBQWpCLEVBQVo7O0FBRUFKLGFBQVlBLFVBQVVLLE1BQVYsQ0FBa0JSLEtBQWxCLEVBQTBCUyxHQUExQixDQUErQixVQUFFQyxJQUFGLEVBQVk7QUFBRSxTQUFPQSxLQUFLSCxRQUFMLEVBQVA7QUFBMEIsRUFBdkUsQ0FBWjs7QUFFQSxLQUFJSSxPQUFXTixLQUFYLFVBQXVCRixTQUF2QixNQUFKOztBQUVBLFFBQU9KLE1BQU9ZLElBQVAsRUFBY0MsTUFBZCxFQUFQO0FBQ0EsQ0F4QkQ7O0FBMEJBQyxPQUFPQyxPQUFQLEdBQWlCWixNQUFqQiIsImZpbGUiOiJwcmluZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwicHJpbmdlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJwcmluZ2UvcHJpbmdlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJwcmluZ2UuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwicHJpbmdlXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9wcmluZ2UuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJwcmluZ2UtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRDcmVhdGUgdHJhY2UgaWRlbnRpZmljYXRpb24gZnJvbSBtZXRob2QgcGFyYW1ldGVyLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJrdXJzZVwiOiBcImt1cnNlXCIsXG5cdFx0XHRcInBsb3VnaFwiOiBcInBsb3VnaFwiLFxuXHRcdFx0XCJzeHR5NFwiOiBcInN4dHk0XCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBrdXJzZSA9IHJlcXVpcmUoIFwia3Vyc2VcIiApO1xuY29uc3QgcGxvdWdoID0gcmVxdWlyZSggXCJwbG91Z2hcIiApO1xuY29uc3Qgc3h0eTQgPSByZXF1aXJlKCBcInN4dHk0XCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuY29uc3QgcHJpbmdlID0gZnVuY3Rpb24gcHJpbmdlKCBwYXJhbWV0ZXIgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJwYXJhbWV0ZXI6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwiKlwiLFxuXHRcdFx0XHRcdFwiWypdXCIsXG5cdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRwYXJhbWV0ZXIgPSBwbG91Z2goIGFyZ3VtZW50cyApO1xuXG5cdGt1cnNlKCB6ZWxmKCB0aGlzICkgKTtcblxuXHRsZXQgdHJhY2UgPSB0aGlzWyBrdXJzZS5JRCBdLnRvU3RyaW5nKCApO1xuXG5cdHBhcmFtZXRlciA9IHBhcmFtZXRlci5maWx0ZXIoIHRydWx5ICkubWFwKCAoIGl0ZW0gKSA9PiB7IHJldHVybiBpdGVtLnRvU3RyaW5nKCApOyB9ICk7XG5cblx0bGV0IGRhdGEgPSBgJHsgdHJhY2UgfUAoJHsgcGFyYW1ldGVyIH0pYDtcblxuXHRyZXR1cm4gc3h0eTQoIGRhdGEgKS5lbmNvZGUoICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHByaW5nZTtcbiJdfQ==
