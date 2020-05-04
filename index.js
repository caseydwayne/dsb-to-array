module.exports = (function(DEBUG){
/******************************************************************************/

  /*
   * @method toArray
   * creates an array of an objects values (useful for [arguments])
   * @param [object=this] {object}
   * @return array {array}
   */

/*----------------------------------------------------------------------------*/

  var toArray = function(_o){
    var a = [], o = _o || this;
    if( o instanceof Array ) return o;
    for(var i in o) a.push(o[i]);
    return a;
  };

/******************************************************************************/

  return toArray;

/*----------------------------------------------------------------------------*/
}(0));
