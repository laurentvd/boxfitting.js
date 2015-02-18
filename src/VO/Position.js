var BoxFitting = BoxFitting || {};
BoxFitting.VO = BoxFitting.VO || {};

BoxFitting.VO.Position = (function(undefined) {

    /**
     * @param {Number} left
     * @param {Number} top
     * @constructor
     */
    var Position = function(left, top) {
        this.left = left;
        this.top = top;
    };
    Position.prototype = {

        /**
         * @return {String}
         */
        toString: function() {
            return '[object BoxFitting.VO.Position]';
        }
    };
    return Position;

})();
