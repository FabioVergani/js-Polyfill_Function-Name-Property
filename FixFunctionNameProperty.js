//#FixFunctionNameProperty
(function Fix(o,p){if(!DummyFn[p]){o(Function.prototype,p,{get:function(){var e=this,s=e.toString().match(/^\s*function\s*(\w*)\s*\(/)[1];o(this,p,{value:s});return s},enumerable:1})}})(Object.defineProperty,'name');
 
//#
(function Fix(o,p){//#FixFunctionNameProperty
	if(!arguments.callee[p]){o(Function.prototype,p,{get:function(){var e=this,s=e.toString().match(/^\s*function\s*(\w*)\s*\(/)[1];o(this,p,{value:s});return s},enumerable:1})};
})(Object.defineProperty,'name');
//
 
/*
function zzz(){};
console.log(zzz.name);
*/
