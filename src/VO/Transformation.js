var BoxFitting = BoxFitting || {};
BoxFitting.VO = BoxFitting.VO || {};

BoxFitting.VO.Transformation = (function(undefined) {

    var Transformation = function(width, height, top, left) {
        this.width = width;
        this.height = height;
        this.top = top;
        this.left = left;
    };

    /**
     * @param {Object} object
     */
    Transformation.fromObject = function(object) {
        return new Transformation(object.width, object.height, object.top, object.left);
    };

    Transformation.prototype = {

        /**
         * @return {Object}
         */
        toObject: function() {
            return {
                width: this.width,
                height: this.height,
                top: this.top,
                left: this.left
            };
        },

        /**
         * @return {String}
         */
        toString: function() {
            return '[object BoxFitting.VO.Transformation]';
        }
    };
    return Transformation;

})();
