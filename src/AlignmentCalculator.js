var BoxFitting = BoxFitting || {};
BoxFitting.AlignmentCalculator = (function(undefined) {

	var Calculator = function() { };
	Calculator.prototype = {

		/**
		 * @param {Number} sourceWidth
		 * @param {Number} targetWidth
		 * @param {BoxFitting.VO.Alignment} alignment
		 * @returns {Number}
		 */
		horizontal: function(sourceWidth, targetWidth, alignment) {
			return this._align(sourceWidth, targetWidth, alignment, 'left', 'right');
		},

		/**
		 * @param {Number} sourceWidth
		 * @param {Number} targetWidth
		 * @param {BoxFitting.VO.Alignment} alignment
		 * @returns {Number}
		 */
		vertical: function(sourceWidth, targetWidth, alignment) {
			return this._align(sourceWidth, targetWidth, alignment, 'top', 'bottom');
		},

		/**
		 * @param {Number} source
		 * @param {Number} target
		 * @param {BoxFitting.VO.Alignment} alignment
		 * @param {String} startIdentifier
		 * @param {String} endIdentifier
		 * @returns {Number}
		 */
		_align: function(source, target, alignment, startIdentifier, endIdentifier) {
			if (alignment.mode.indexOf(startIdentifier) > -1) {
				return 0;
			}
			if (alignment.mode.indexOf(endIdentifier) > -1) {
				return target - source;
			}

			// Half way
			return (target - source) / 2;
		},

		/**
		 * @return {String}
		 */
		toString: function() {
			return '[object BoxFitting.AlignmentCalculator]';
		}
	};

	return Calculator;

})();
