const assert = require( "assert" );
const pringe = require( "./pringe.js" );

assert.equal( pringe( "hello" ), "dW5kZWZpbmVkQChoZWxsbyk%3D", "should be equal" );

console.log( "ok" );
