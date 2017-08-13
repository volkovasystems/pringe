
const assert = require( "assert" );
const pringe = require( "./pringe.js" );

assert.equal( typeof pringe( "hello" ), "string", "should be equal to 'string'" );

assert.equal( typeof pringe( { "name": "simple" } ), "string", "should be equal to 'string'" );

console.log( "ok" );
