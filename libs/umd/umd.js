;(function( global, factory ){

  "use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else if (define && define.cmd) {
		define( function () {
				return factory(global);
		} );
	} else {
		factory( global );
	}

})( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// 是代码支持 amd 模块加载
	if ( typeof define === "function" && define.amd ) {
		define( "jquery", [], function() {
			return jQuery;
		} );
	}

  return {
    add: function(a, b) { return a + b }
  }

})