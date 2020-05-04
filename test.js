module.exports = (function(DEBUG){
/*----------------------------------------------------------------------------*/

  var toArray = require('./index'),
        debug = require('dsb-debug-mini').create('toArray');

/******************************************************************************/

  debug.method( 'toArray', function( fn, test, name ){
    var o = { 1: 'a' },
        a = [ 'a' ],
        r = fn(o);
    test( 'object now array', r instanceof Array, true );
    test( 'object now array (call)', fn.call(o) instanceof Array, true );
    test( 'array returned unchanged', r[0] === a[0], true );
  }, toArray );

/******************************************************************************/

  return debug.complete();

/*----------------------------------------------------------------------------*/
}(0));
