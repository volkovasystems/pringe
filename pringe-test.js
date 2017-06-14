const assert = require( "assert" );
const pringe = require( "./pringe.js" );

assert.equal( pringe( "hello" ), "dW5kZWZpbmVkQChoZWxsbyk%3D", "should be equal" );

assert.equal( pringe( { "name": "simple" } ), "dW5kZWZpbmVkQChbb2JqZWN0IE9iamVjdF0p", "should be equal" );

console.log( "ok" );
