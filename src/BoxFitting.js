var BoxFitting = BoxFitting || {};
BoxFitting.BoxFitting = (function(undefined) {

	var BoxFitting = function() {
		this.initialize.apply(this, arguments);
	};
	BoxFitting.prototype = {

		/**
		 * @type {BoxFitting.VO.ScaleMode}
		 */
		ScaleModes: BoxFitting.VO.ScaleMode,

		/**
		 * @type {BoxFitting.AlignmentCalculator}
		 */
		align: null,

		/**
		 *
		 */
		initialize: function() {
			this.align = new BoxFitting.AlignmentCalculator();
		},

		/**
		 * @param {BoxFitting.VO.Dimensions} source
		 * @param {BoxFitting.VO.Dimensions} target
		 * @param {BoxFitting.VO.ScaleMode} scaleMode
		 * @param {BoxFitting.VO.Alignment} alignment
		 * @return {BoxFitting.VO.Transformation}
		 */
		calculate: function(source, target, scaleMode, alignment) {
			switch (scaleMode.mode) {

				case this.ScaleModes.BOXED:
					return this._getLetterBox(source, target, alignment);

				case this.ScaleModes.FILL:
					return this._getFillBox(source, target, alignment);

				case this.ScaleModes.NONE:
					return this._getNaturalBox(source, target, alignment);
			}
			throw new Error('Unhandled scale mode supplied to the transformation calculator.');
		},

		/**
		 * Retrieve the dimensions of the document viewport as an object
		 * @return {BoxFitting.VO.Dimensions}
		 */
		getDocumentViewportDimensions: function() {
			var w = window,
				d = document,
				e = d.documentElement,
				g = d.getElementsByTagName('body')[0],
				x = w.innerWidth || e.clientWidth || g.clientWidth,
				y = w.innerHeight || e.clientHeight || g.clientHeight;

			return new BoxFitting.VO.Dimensions(x, y);
		},

		/**
		 * Get the letterbox transformation from the supplied dimensions
		 *
		 * @param {BoxFitting.VO.Dimensions} source
		 * @param {BoxFitting.VO.Dimensions} target
		 * @param {BoxFitting.VO.Alignment} alignment
		 * @private
		 * @return {BoxFitting.VO.Transformation}
		 */
		_getLetterBox: function(source, target, alignment) {
			var sourceRatio = source.width / source.height;
			var targetRatio = target.width / target.height;

			// Is source wider than target?
			if (sourceRatio > targetRatio) {
				var targetHeight = target.width / sourceRatio;
				return BoxFitting.VO.Transformation.fromObject({
					left:   0,
					top:    this.align.vertical(targetHeight, target.height, alignment),
					width:  target.width,
					height: targetHeight
				});
			}

			// Source is taller than target
			var targetWidth = target.height * sourceRatio;
			return BoxFitting.VO.Transformation.fromObject({
				left:   this.align.horizontal(targetWidth, target.width, alignment),
				top:    0,
				width:  targetWidth,
				height: target.height
			});
		},

		/**
		 * Get the fillbox transformation from the supplied dimensions
		 *
		 * @param {BoxFitting.VO.Dimensions} source
		 * @param {BoxFitting.VO.Dimensions} target
		 * @param {BoxFitting.VO.Alignment} alignment
		 * @private
		 * @return {BoxFitting.VO.Transformation}
		 */
		_getFillBox: function(source, target, alignment) {
			var sourceRatio = source.width / source.height;
			var targetRatio = target.width / target.height;

			// Is source taller than target
			if (sourceRatio < targetRatio) {
				var targetHeight = target.width / sourceRatio;
				return BoxFitting.VO.Transformation.fromObject({
					left:   0,
					top: this.align.vertical(targetHeight, target.height, alignment),
					width:  target.width,
					height: targetHeight
				});
			}

			// Source is wider than target
			var targetWidth = target.height * sourceRatio;
			return BoxFitting.VO.Transformation.fromObject({
				left: this.align.horizontal(targetWidth, target.width, alignment),
				top:    0,
				width:  targetWidth,
				height: target.height
			});
		},

		/**
		 * Get the a transformation that assumes the natural dimensions of the image
		 *
		 * @param {BoxFitting.VO.Dimensions} source
		 * @param {BoxFitting.VO.Dimensions} target
		 * @param {BoxFitting.VO.Alignment} alignment
		 * @private
		 * @return {BoxFitting.VO.Transformation}
		 */
		_getNaturalBox: function(source, target, alignment) {
			return BoxFitting.VO.Transformation.fromObject({
				left:   this.align.horizontal(source.width, target.width, alignment),
				top:    this.align.vertical(source.height, target.height, alignment),
				width:  source.width,
				height: source.height
			});
		},

		/**
		 * @return {String}
		 */
		toString: function() {
			return '[object BoxFitting.BoxFitting]';
		}
	};

	return BoxFitting;

})();
