var BoxFitting = BoxFitting || {};
BoxFitting.VO = BoxFitting.VO || {};

BoxFitting.VO.ScaleMode = (function(undefined) {

	var ScaleMode = function(mode) {
		this.initialize.apply(this, arguments);
	};
	ScaleMode.BOXED = 'boxed';
	ScaleMode.NONE = 'none';
	ScaleMode.FILL = 'fill';
	ScaleMode.ALL = [
		ScaleMode.BOXED,
		ScaleMode.NONE,
		ScaleMode.FILL
	];

	/**
	 * @type {{initialize: Function}}
	 */
	ScaleMode.prototype = {

		/**
		 * @type {String}
		 */
		mode: 'default',

		/**
		 * @param {String} mode
		 */
		initialize: function(mode) {
			if (ScaleMode.ALL.indexOf(mode) < 0) {
				throw new Error('Invalid scale mode "' + mode + '" supplied to ' + this + '.');
			}
			this.mode = mode;
		},

		/**
		 * @param {String} scaleMode
		 * @return {Boolean}
		 */
		is: function(scaleMode) {
			return this.mode === scaleMode;
		},

		/**
		 * @return {String}
		 */
		toString: function() {
			return '[object BoxFitting.VO.ScaleMode]';
		}
	};

	return ScaleMode;

})();
