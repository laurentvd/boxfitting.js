var BoxFitting = BoxFitting || {};
BoxFitting.VO = BoxFitting.VO || {};

BoxFitting.VO.Dimensions = (function(undefined) {

	/**
	 * @param {Number} width
	 * @param {Number} height
	 * @constructor
	 */
	var Dimensions = function(width, height) {
		this.width = width;
		this.height = height;
	};
	Dimensions.prototype = {

		/**
		 * @return {String}
		 */
		toString: function() {
			return '[object BoxFitting.VO.Dimensions]';
		}
	};

	/**
	 * Create a dimensions object from an existing dom element
	 *
	 * @param {jQuery} el
	 * @return {BoxFitting.VO.Dimensions}
	 */
	Dimensions.fromElement = function($el) {
		return new Dimensions($el.width(), $el.height());
	};

	return Dimensions;

})();
