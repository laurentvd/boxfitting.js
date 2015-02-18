var BoxFitting = BoxFitting || {};
BoxFitting.VO = BoxFitting.VO || {};

BoxFitting.VO.Alignment = (function(undefined) {

	var Alignment = function() {
		this.initialize.apply(this, arguments);
	};

	Alignment.TOP_LEFT = 'top-left';
	Alignment.TOP_CENTER = 'top-center';
	Alignment.TOP_RIGHT = 'top-right';
	Alignment.MIDDLE_LEFT = 'middle-left';
	Alignment.MIDDLE_CENTER = 'middle-center';
	Alignment.MIDDLE_RIGHT = 'middle-right';
	Alignment.BOTTOM_LEFT = 'bottom-left';
	Alignment.BOTTOM_CENTER = 'bottom-center';
	Alignment.BOTTOM_RIGHT = 'bottom-right';
	Alignment.ALL = [
		Alignment.TOP_LEFT,
		Alignment.TOP_CENTER,
		Alignment.TOP_RIGHT,
		Alignment.MIDDLE_LEFT,
		Alignment.MIDDLE_CENTER,
		Alignment.MIDDLE_RIGHT,
		Alignment.BOTTOM_LEFT,
		Alignment.BOTTOM_CENTER,
		Alignment.BOTTOM_RIGHT,
	];

	/**
	 * @type {{initialize: Function}}
	 */
	Alignment.prototype = {

		/**
		 * @type {String}
		 */
		mode: Alignment.TOP_LEFT,

		/**
		 * @param {String} mode
		 */
		initialize: function(mode) {
			if (Alignment.ALL.indexOf(mode) < 0) {
				throw new Error('Invalid alignment "' + mode + '" supplied to ' + this + '.');
			}
			this.mode = mode;
		},

		/**
		 * @param {String} alignmentMode
		 * @return {Boolean}
		 */
		is: function(alignmentMode) {
			return this.mode === alignmentMode;
		},

		/**
		 * @return {String}
		 */
		toString: function() {
			return '[object BoxFitting.VO.Alignment]';
		}
	};

	return Alignment;

})();
