var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20180905_syb_scopedata*/window.__wcc_version__='v0.5vv_20180905_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
throw e;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'d3a53282'])
Z([3,'_view d3a53282 container'])
Z([3,'handleProxy'])
Z([3,'_view d3a53282 title'])
Z([[7],[3,'$k']])
Z([1,'d3a53282-0'])
Z([3,'_image d3a53282'])
Z([3,'../../static/back-black.png'])
Z([3,'width: 30%;height: 25%;padding: 50rpx;opacity: 0.4;'])
Z([3,'_view d3a53282 top'])
Z([3,'_view d3a53282'])
Z([3,'position: relative;padding: 25rpx;margin-left: 25rpx;'])
Z([3,'登陆'])
Z([3,'_view d3a53282 medium'])
Z([3,'_view d3a53282 null'])
Z([3,'_view d3a53282 account'])
Z([3,'账号'])
Z(z[2])
Z([3,'_input d3a53282'])
Z(z[4])
Z([1,'d3a53282-1'])
Z([3,'color:#000'])
Z([[7],[3,'account']])
Z([3,'_view d3a53282 line'])
Z([3,'_view d3a53282 password'])
Z([3,'密码'])
Z(z[2])
Z(z[18])
Z(z[4])
Z([1,'d3a53282-2'])
Z([3,'color:#ccc'])
Z([[7],[3,'password']])
Z(z[23])
Z(z[2])
Z([3,'_view d3a53282 bottom'])
Z(z[4])
Z([1,'d3a53282-3'])
Z(z[10])
Z([3,'position: absolute;margin-top: -75rpx;font-size: 38rpx;'])
Z([3,'注册'])
Z(z[6])
Z([3,'../../static/right.png'])
Z(z[2])
Z([3,'_button d3a53282 primary'])
Z(z[4])
Z([1,'d3a53282-4'])
Z([3,'登录'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'a89720e6'])
Z([3,'_view a89720e6 container'])
Z([3,'handleProxy'])
Z([3,'_view a89720e6 title'])
Z([[7],[3,'$k']])
Z([1,'a89720e6-0'])
Z([3,'_image a89720e6'])
Z([3,'../../static/back-black.png'])
Z([3,'width: 30%;height: 25%;padding: 50rpx;opacity: 0.4;'])
Z([3,'_view a89720e6 top'])
Z([3,'_view a89720e6'])
Z([3,'position: relative;padding: 25rpx;margin-left: 25rpx;'])
Z([3,'注册'])
Z([3,'_view a89720e6 medium'])
Z([3,'_view a89720e6 null'])
Z([3,'_view a89720e6 account'])
Z([3,'账号'])
Z(z[2])
Z([3,'_input a89720e6'])
Z(z[4])
Z([1,'a89720e6-1'])
Z([3,'color:#000'])
Z([[7],[3,'account']])
Z([3,'_view a89720e6 line'])
Z([3,'_view a89720e6 password'])
Z([3,'密码'])
Z(z[2])
Z(z[18])
Z(z[4])
Z([1,'a89720e6-2'])
Z([3,'color:#ccc'])
Z([[7],[3,'password']])
Z(z[23])
Z(z[24])
Z([3,'确认密码'])
Z(z[2])
Z(z[18])
Z(z[4])
Z([1,'a89720e6-3'])
Z(z[30])
Z([[7],[3,'password1']])
Z(z[23])
Z(z[2])
Z([3,'_view a89720e6 bottom'])
Z(z[4])
Z([1,'a89720e6-4'])
Z(z[10])
Z([3,'position: absolute;margin-top: -75rpx;font-size: 38rpx;'])
Z([3,'登陆'])
Z(z[6])
Z([3,'../../static/right.png'])
Z(z[2])
Z([3,'_button a89720e6 primary'])
Z(z[4])
Z([1,'a89720e6-5'])
Z([3,'注册账号'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'101719e0'])
Z([3,'_view 101719e0 container'])
Z([3,'_image 101719e0'])
Z([3,'../../static/bre.png'])
Z([3,'handleProxy'])
Z([3,'_view 101719e0 title'])
Z([[7],[3,'$k']])
Z([1,'101719e0-0'])
Z(z[2])
Z([3,'/static/back.png'])
Z([3,'width: 35%;height: 35%;position: absolute;'])
Z([3,'_view 101719e0'])
Z([3,'position: relative; text-align: center;color:#FEFEFE ;'])
Z([a,[[7],[3,'minute']],[3,':'],[[7],[3,'second']]])
Z([[7],[3,'begin']])
Z([3,'_view 101719e0 lopp'])
Z(z[2])
Z([3,'scaleToFill'])
Z([3,'/static/circle.png'])
Z(z[14])
Z([3,'_view 101719e0 textsize'])
Z([a,[[7],[3,'word']]])
Z([[2,'=='],[[7],[3,'begin']],[1,false]])
Z(z[4])
Z([3,'_view 101719e0 btn1'])
Z(z[6])
Z([1,'101719e0-1'])
Z(z[2])
Z([3,'../../static/brea.png'])
Z([3,'width: 100%;height: 100%;'])
Z(z[14])
Z(z[4])
Z([3,'_view 101719e0 btn2'])
Z(z[6])
Z([1,'101719e0-2'])
Z(z[2])
Z([3,'../../static/stop.png'])
Z(z[29])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'101719e0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'060711db'])
Z([3,'_view 060711db container'])
Z([3,'_image 060711db'])
Z([3,'../../static/expect.jpg'])
Z([3,'position: absolute;width: 100%;height: 100%;'])
Z([3,'_view 060711db title'])
Z([3,'_text 060711db'])
Z([a,[[7],[3,'date']]])
Z([3,'handleProxy'])
Z(z[2])
Z([[7],[3,'$k']])
Z([1,'060711db-0'])
Z([3,'../../static/more.png'])
Z([3,'_view 060711db title1'])
Z([a,[[7],[3,'month']],[3,'月 '],[[7],[3,'year']],[3,' '],[[7],[3,'day']]])
Z(z[8])
Z([3,'_view 060711db cicle'])
Z(z[10])
Z([1,'060711db-1'])
Z([3,'_view 060711db triangle'])
Z([3,'_view 060711db'])
Z([3,'position: absolute;color: #aaaaaa;font-size: 32rpx;margin-left:95rpx;margin-top: 28rpx;'])
Z([3,'开始呼吸'])
Z([3,'_view 060711db line'])
Z([3,'_scroll-view 060711db scroll-view_H'])
Z([3,'width: 100%'])
Z([3,'_view 060711db title_wrap'])
Z(z[8])
Z(z[2])
Z(z[10])
Z([1,'060711db-2'])
Z([3,'../../static/morning.png'])
Z(z[8])
Z(z[2])
Z(z[10])
Z([1,'060711db-3'])
Z([3,'../../static/focus.png'])
Z(z[8])
Z(z[2])
Z(z[10])
Z([1,'060711db-4'])
Z([3,'../../static/lunch.png'])
Z(z[8])
Z(z[2])
Z(z[10])
Z([1,'060711db-5'])
Z([3,'../../static/night.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'060711db'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'047d11c9'])
Z([3,'_view 047d11c9 container'])
Z([[2,'=='],[[7],[3,'status']],[1,1]])
Z([3,'handleProxy'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'047d11c9-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([[7],[3,'$k']])
Z([1,'047d11c9-0'])
Z([3,'d3a53282'])
Z([[2,'=='],[[7],[3,'status']],[1,2]])
Z(z[3])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'047d11c9-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[5])
Z([1,'047d11c9-1'])
Z([3,'a89720e6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'047d11c9'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'07103056'])
Z([3,'_view 07103056 container'])
Z([3,'_view 07103056 back'])
Z([3,'_image 07103056'])
Z([3,'../../static/back-black.png'])
Z([3,'width: 50%;height: 50%;'])
Z([3,'_view 07103056 top'])
Z([3,'_view 07103056 day1'])
Z([3,'_view 07103056'])
Z([3,'position: absolute;font-size: 20rpx;'])
Z(z[8])
Z([3,'position: relative;font-size: 88rpx;'])
Z([3,'1月'])
Z([3,'_view 07103056 day2'])
Z([3,'margin-top: 20rpx;'])
Z([3,'+15天'])
Z([3,'_view 07103056 day3'])
Z([3,'255天'])
Z([3,'_view 07103056 medium'])
Z([3,'_view 07103056 triangle'])
Z([3,'_view 07103056 cicle'])
Z(z[8])
Z([3,'25天'])
Z(z[8])
Z([3,'持续天数'])
Z(z[19])
Z(z[20])
Z(z[8])
Z(z[22])
Z(z[8])
Z([3,'总课程数'])
Z(z[19])
Z(z[20])
Z(z[8])
Z(z[22])
Z(z[8])
Z([3,'冥想时长'])
Z([3,'firstCanvas'])
Z([3,'_canvas 07103056'])
Z([3,'width: 300px; height: 200px;'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'07103056'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'b7572e56'])
Z([3,'_view b7572e56 container'])
Z([3,'_image b7572e56'])
Z([3,'../../static/expect.jpg'])
Z([3,'handleProxy'])
Z([3,'_view b7572e56 title'])
Z([[7],[3,'$k']])
Z([1,'b7572e56-0'])
Z(z[2])
Z([3,'/static/back.png'])
Z([3,'width: 50%;height: 50%;position: absolute;'])
Z([3,'_view b7572e56 lopp'])
Z([a,[3,'_view b7572e56 '],[[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'status']],[1,1]],[1,'daily_right'],[1,'']]]]])
Z([3,'_view b7572e56 shake1'])
Z([3,'_view b7572e56 shake2'])
Z([3,'_view b7572e56  shake3'])
Z([3,'_view b7572e56 medium'])
Z([3,'_view b7572e56'])
Z([a,[[7],[3,'name']]])
Z(z[17])
Z([3,'margin-top: 20rpx;'])
Z([a,[[7],[3,'minute']],[3,':'],[[7],[3,'second']]])
Z([[2,'=='],[[7],[3,'status']],[1,0]])
Z(z[4])
Z([3,'_view b7572e56 cicle'])
Z(z[6])
Z([1,'b7572e56-1'])
Z([3,'_view b7572e56 triangle'])
Z([3,'_view b7572e56 word'])
Z([3,'开始专注'])
Z([[2,'=='],[[7],[3,'status']],[1,1]])
Z(z[4])
Z([3,'_view b7572e56 cicle1'])
Z(z[6])
Z([1,'b7572e56-2'])
Z([3,'_view b7572e56 word1'])
Z([3,'暂停'])
Z([[2,'=='],[[7],[3,'status']],[1,2]])
Z(z[4])
Z([3,'_view b7572e56 cicle2'])
Z(z[6])
Z([1,'b7572e56-3'])
Z([3,'_view b7572e56 word2'])
Z([3,'继续'])
Z(z[37])
Z(z[4])
Z([3,'_view b7572e56 cicle3'])
Z(z[6])
Z([1,'b7572e56-4'])
Z([3,'_view b7572e56 word3'])
Z([3,'放弃'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'b7572e56'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./common/slots.wxml','./components/login.vue.wxml','./components/register.vue.wxml','./pages/breath/breathe.vue.wxml','./pages/breath/breathe.wxml','./breathe.vue.wxml','./pages/index/index.vue.wxml','./pages/index/index.wxml','./index.vue.wxml','./pages/login/login.vue.wxml','/components/login.vue.wxml','/components/register.vue.wxml','./pages/login/login.wxml','./login.vue.wxml','./pages/more/more.vue.wxml','./pages/more/more.wxml','./more.vue.wxml','./pages/player/player.vue.wxml','./pages/player/player.wxml','./player.vue.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
d_[x[1]]["d3a53282"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':d3a53282'
r.wxVkey=b
gg.f=$gdc(f_["./components/login.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
cs.push("./components/login.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./components/login.vue.wxml:view:1:66")
var xC=_mz(z,'view',['bindtap',2,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./components/login.vue.wxml:image:1:176")
var oD=_mz(z,'image',['class',6,'src',1,'style',2],[],e,s,gg)
cs.pop()
_(xC,oD)
cs.pop()
_(oB,xC)
cs.push("./components/login.vue.wxml:view:1:316")
var fE=_n('view')
_rz(z,fE,'class',9,e,s,gg)
cs.push("./components/login.vue.wxml:view:1:349")
var cF=_mz(z,'view',['class',10,'style',1],[],e,s,gg)
var hG=_oz(z,12,e,s,gg)
_(cF,hG)
cs.pop()
_(fE,cF)
cs.pop()
_(oB,fE)
cs.push("./components/login.vue.wxml:view:1:460")
var oH=_n('view')
_rz(z,oH,'class',13,e,s,gg)
cs.push("./components/login.vue.wxml:view:1:496")
var cI=_n('view')
_rz(z,cI,'class',14,e,s,gg)
cs.pop()
_(oH,cI)
cs.push("./components/login.vue.wxml:view:1:537")
var oJ=_n('view')
_rz(z,oJ,'class',15,e,s,gg)
var lK=_oz(z,16,e,s,gg)
_(oJ,lK)
cs.pop()
_(oH,oJ)
cs.push("./components/login.vue.wxml:input:1:587")
var aL=_mz(z,'input',['bindinput',17,'class',1,'data-comkey',2,'data-eventid',3,'placeholderStyle',4,'value',5],[],e,s,gg)
cs.pop()
_(oH,aL)
cs.push("./components/login.vue.wxml:view:1:748")
var tM=_n('view')
_rz(z,tM,'class',23,e,s,gg)
cs.pop()
_(oH,tM)
cs.push("./components/login.vue.wxml:view:1:789")
var eN=_n('view')
_rz(z,eN,'class',24,e,s,gg)
var bO=_oz(z,25,e,s,gg)
_(eN,bO)
cs.pop()
_(oH,eN)
cs.push("./components/login.vue.wxml:input:1:840")
var oP=_mz(z,'input',['password',-1,'bindinput',26,'class',1,'data-comkey',2,'data-eventid',3,'placeholderStyle',4,'value',5],[],e,s,gg)
cs.pop()
_(oH,oP)
cs.push("./components/login.vue.wxml:view:1:1011")
var xQ=_n('view')
_rz(z,xQ,'class',32,e,s,gg)
cs.pop()
_(oH,xQ)
cs.pop()
_(oB,oH)
cs.push("./components/login.vue.wxml:view:1:1059")
var oR=_mz(z,'view',['bindtap',33,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./components/login.vue.wxml:view:1:1170")
var fS=_mz(z,'view',['class',37,'style',1],[],e,s,gg)
var cT=_oz(z,39,e,s,gg)
_(fS,cT)
cs.pop()
_(oR,fS)
cs.push("./components/login.vue.wxml:image:1:1276")
var hU=_mz(z,'image',['class',40,'src',1],[],e,s,gg)
cs.pop()
_(oR,hU)
cs.pop()
_(oB,oR)
cs.push("./components/login.vue.wxml:button:1:1351")
var oV=_mz(z,'button',['bindtap',42,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var cW=_oz(z,46,e,s,gg)
_(oV,cW)
cs.pop()
_(oB,oV)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
d_[x[2]]["a89720e6"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[2]+':a89720e6'
r.wxVkey=b
gg.f=$gdc(f_["./components/register.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
cs.push("./components/register.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./components/register.vue.wxml:view:1:66")
var xC=_mz(z,'view',['bindtap',2,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./components/register.vue.wxml:image:1:176")
var oD=_mz(z,'image',['class',6,'src',1,'style',2],[],e,s,gg)
cs.pop()
_(xC,oD)
cs.pop()
_(oB,xC)
cs.push("./components/register.vue.wxml:view:1:316")
var fE=_n('view')
_rz(z,fE,'class',9,e,s,gg)
cs.push("./components/register.vue.wxml:view:1:349")
var cF=_mz(z,'view',['class',10,'style',1],[],e,s,gg)
var hG=_oz(z,12,e,s,gg)
_(cF,hG)
cs.pop()
_(fE,cF)
cs.pop()
_(oB,fE)
cs.push("./components/register.vue.wxml:view:1:460")
var oH=_n('view')
_rz(z,oH,'class',13,e,s,gg)
cs.push("./components/register.vue.wxml:view:1:496")
var cI=_n('view')
_rz(z,cI,'class',14,e,s,gg)
cs.pop()
_(oH,cI)
cs.push("./components/register.vue.wxml:view:1:537")
var oJ=_n('view')
_rz(z,oJ,'class',15,e,s,gg)
var lK=_oz(z,16,e,s,gg)
_(oJ,lK)
cs.pop()
_(oH,oJ)
cs.push("./components/register.vue.wxml:input:1:587")
var aL=_mz(z,'input',['bindinput',17,'class',1,'data-comkey',2,'data-eventid',3,'placeholderStyle',4,'value',5],[],e,s,gg)
cs.pop()
_(oH,aL)
cs.push("./components/register.vue.wxml:view:1:748")
var tM=_n('view')
_rz(z,tM,'class',23,e,s,gg)
cs.pop()
_(oH,tM)
cs.push("./components/register.vue.wxml:view:1:789")
var eN=_n('view')
_rz(z,eN,'class',24,e,s,gg)
var bO=_oz(z,25,e,s,gg)
_(eN,bO)
cs.pop()
_(oH,eN)
cs.push("./components/register.vue.wxml:input:1:840")
var oP=_mz(z,'input',['password',-1,'bindinput',26,'class',1,'data-comkey',2,'data-eventid',3,'placeholderStyle',4,'value',5],[],e,s,gg)
cs.pop()
_(oH,oP)
cs.push("./components/register.vue.wxml:view:1:1011")
var xQ=_n('view')
_rz(z,xQ,'class',32,e,s,gg)
cs.pop()
_(oH,xQ)
cs.push("./components/register.vue.wxml:view:1:1052")
var oR=_n('view')
_rz(z,oR,'class',33,e,s,gg)
var fS=_oz(z,34,e,s,gg)
_(oR,fS)
cs.pop()
_(oH,oR)
cs.push("./components/register.vue.wxml:input:1:1109")
var cT=_mz(z,'input',['password',-1,'bindinput',35,'class',1,'data-comkey',2,'data-eventid',3,'placeholderStyle',4,'value',5],[],e,s,gg)
cs.pop()
_(oH,cT)
cs.push("./components/register.vue.wxml:view:1:1281")
var hU=_n('view')
_rz(z,hU,'class',41,e,s,gg)
cs.pop()
_(oH,hU)
cs.pop()
_(oB,oH)
cs.push("./components/register.vue.wxml:view:1:1329")
var oV=_mz(z,'view',['bindtap',42,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./components/register.vue.wxml:view:1:1440")
var cW=_mz(z,'view',['class',46,'style',1],[],e,s,gg)
var oX=_oz(z,48,e,s,gg)
_(cW,oX)
cs.pop()
_(oV,cW)
cs.push("./components/register.vue.wxml:image:1:1546")
var lY=_mz(z,'image',['class',49,'src',1],[],e,s,gg)
cs.pop()
_(oV,lY)
cs.pop()
_(oB,oV)
cs.push("./components/register.vue.wxml:button:1:1621")
var aZ=_mz(z,'button',['bindtap',51,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var t1=_oz(z,55,e,s,gg)
_(aZ,t1)
cs.pop()
_(oB,aZ)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
d_[x[3]]["101719e0"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[3]+':101719e0'
r.wxVkey=b
gg.f=$gdc(f_["./pages/breath/breathe.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[3]);return}
p_[b]=true
try{
cs.push("./pages/breath/breathe.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/breath/breathe.vue.wxml:image:1:66")
var hG=_mz(z,'image',['class',2,'src',1],[],e,s,gg)
cs.pop()
_(oB,hG)
cs.push("./pages/breath/breathe.vue.wxml:view:1:132")
var oH=_mz(z,'view',['bindtap',4,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./pages/breath/breathe.vue.wxml:image:1:242")
var cI=_mz(z,'image',['class',8,'src',1,'style',2],[],e,s,gg)
cs.pop()
_(oH,cI)
cs.pop()
_(oB,oH)
cs.push("./pages/breath/breathe.vue.wxml:view:1:362")
var oJ=_mz(z,'view',['class',11,'style',1],[],e,s,gg)
var lK=_oz(z,13,e,s,gg)
_(oJ,lK)
cs.pop()
_(oB,oJ)
var xC=_v()
_(oB,xC)
if(_oz(z,14,e,s,gg)){xC.wxVkey=1
cs.push("./pages/breath/breathe.vue.wxml:view:1:482")
cs.push("./pages/breath/breathe.vue.wxml:view:1:482")
var aL=_n('view')
_rz(z,aL,'class',15,e,s,gg)
cs.push("./pages/breath/breathe.vue.wxml:image:1:534")
var tM=_mz(z,'image',['class',16,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(aL,tM)
cs.pop()
_(xC,aL)
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,19,e,s,gg)){oD.wxVkey=1
cs.push("./pages/breath/breathe.vue.wxml:view:1:624")
cs.push("./pages/breath/breathe.vue.wxml:view:1:624")
var eN=_n('view')
_rz(z,eN,'class',20,e,s,gg)
var bO=_oz(z,21,e,s,gg)
_(eN,bO)
cs.pop()
_(oD,eN)
cs.pop()
}
var fE=_v()
_(oB,fE)
if(_oz(z,22,e,s,gg)){fE.wxVkey=1
cs.push("./pages/breath/breathe.vue.wxml:view:1:695")
cs.push("./pages/breath/breathe.vue.wxml:view:1:695")
var oP=_mz(z,'view',['bindtap',23,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./pages/breath/breathe.vue.wxml:image:1:829")
var xQ=_mz(z,'image',['class',27,'src',1,'style',2],[],e,s,gg)
cs.pop()
_(oP,xQ)
cs.pop()
_(fE,oP)
cs.pop()
}
var cF=_v()
_(oB,cF)
if(_oz(z,30,e,s,gg)){cF.wxVkey=1
cs.push("./pages/breath/breathe.vue.wxml:view:1:937")
cs.push("./pages/breath/breathe.vue.wxml:view:1:937")
var oR=_mz(z,'view',['bindtap',31,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./pages/breath/breathe.vue.wxml:image:1:1064")
var fS=_mz(z,'image',['class',35,'src',1,'style',2],[],e,s,gg)
cs.pop()
_(oR,fS)
cs.pop()
_(cF,oR)
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cF=e_[x[4]].i
_ai(cF,x[5],e_,x[4],1,1)
var hG=_v()
_(r,hG)
cs.push("./pages/breath/breathe.wxml:template:2:6")
var oH=_oz(z,1,e,s,gg)
var cI=_gd(x[4],oH,e_,d_)
if(cI){
var oJ=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[4],2,18)
cs.pop()
cF.pop()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[x[5]],ic:[]}
d_[x[6]]={}
d_[x[6]]["060711db"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[6]+':060711db'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[6]);return}
p_[b]=true
try{
cs.push("./pages/index/index.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:66")
var xC=_mz(z,'image',['class',2,'src',1,'style',2],[],e,s,gg)
cs.pop()
_(oB,xC)
cs.push("./pages/index/index.vue.wxml:view:1:188")
var oD=_n('view')
_rz(z,oD,'class',5,e,s,gg)
cs.push("./pages/index/index.vue.wxml:text:1:223")
var fE=_n('text')
_rz(z,fE,'class',6,e,s,gg)
var cF=_oz(z,7,e,s,gg)
_(fE,cF)
cs.pop()
_(oD,fE)
cs.push("./pages/index/index.vue.wxml:image:1:267")
var hG=_mz(z,'image',['bindtap',8,'class',1,'data-comkey',2,'data-eventid',3,'src',4],[],e,s,gg)
cs.pop()
_(oD,hG)
cs.pop()
_(oB,oD)
cs.push("./pages/index/index.vue.wxml:view:1:416")
var oH=_n('view')
_rz(z,oH,'class',13,e,s,gg)
var cI=_oz(z,14,e,s,gg)
_(oH,cI)
cs.pop()
_(oB,oH)
cs.push("./pages/index/index.vue.wxml:view:1:488")
var oJ=_mz(z,'view',['bindtap',15,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:598")
var lK=_n('view')
_rz(z,lK,'class',19,e,s,gg)
cs.pop()
_(oJ,lK)
cs.push("./pages/index/index.vue.wxml:view:1:643")
var aL=_mz(z,'view',['class',20,'style',1],[],e,s,gg)
var tM=_oz(z,22,e,s,gg)
_(aL,tM)
cs.pop()
_(oJ,aL)
cs.pop()
_(oB,oJ)
cs.push("./pages/index/index.vue.wxml:view:1:794")
var eN=_n('view')
_rz(z,eN,'class',23,e,s,gg)
cs.pop()
_(oB,eN)
cs.push("./pages/index/index.vue.wxml:scroll-view:1:835")
var bO=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollX',-1,'class',24,'style',1],[],e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:943")
var oP=_n('view')
_rz(z,oP,'class',26,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:983")
var xQ=_mz(z,'image',['bindtap',27,'class',1,'data-comkey',2,'data-eventid',3,'src',4],[],e,s,gg)
cs.pop()
_(oP,xQ)
cs.push("./pages/index/index.vue.wxml:image:1:1128")
var oR=_mz(z,'image',['bindtap',32,'class',1,'data-comkey',2,'data-eventid',3,'src',4],[],e,s,gg)
cs.pop()
_(oP,oR)
cs.push("./pages/index/index.vue.wxml:image:1:1271")
var fS=_mz(z,'image',['bindtap',37,'class',1,'data-comkey',2,'data-eventid',3,'src',4],[],e,s,gg)
cs.pop()
_(oP,fS)
cs.push("./pages/index/index.vue.wxml:image:1:1414")
var cT=_mz(z,'image',['bindtap',42,'class',1,'data-comkey',2,'data-eventid',3,'src',4],[],e,s,gg)
cs.pop()
_(oP,cT)
cs.pop()
_(bO,oP)
cs.pop()
_(oB,bO)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[6]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var tM=e_[x[7]].i
_ai(tM,x[8],e_,x[7],1,1)
var eN=_v()
_(r,eN)
cs.push("./pages/index/index.wxml:template:2:6")
var bO=_oz(z,1,e,s,gg)
var oP=_gd(x[7],bO,e_,d_)
if(oP){
var xQ=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
eN.wxXCkey=3
oP(xQ,xQ,eN,gg)
gg.f=cur_globalf
}
else _w(bO,x[7],2,18)
cs.pop()
tM.pop()
return r
}
e_[x[7]]={f:m6,j:[],i:[],ti:[x[8]],ic:[]}
d_[x[9]]={}
d_[x[9]]["047d11c9"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[9]+':047d11c9'
r.wxVkey=b
gg.f=$gdc(f_["./pages/login/login.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[9]);return}
p_[b]=true
try{
cs.push("./pages/login/login.vue.wxml:view:1:116")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./pages/login/login.vue.wxml:template:1:155")
var fE=_v()
_(xC,fE)
cs.push("./pages/login/login.vue.wxml:template:1:155")
var cF=_oz(z,7,e,s,gg)
var hG=_gd(x[9],cF,e_,d_)
if(hG){
var oH=_1z(z,4,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[9],1,332)
cs.pop()
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,8,e,s,gg)){oD.wxVkey=1
cs.push("./pages/login/login.vue.wxml:template:1:355")
var cI=_v()
_(oD,cI)
cs.push("./pages/login/login.vue.wxml:template:1:355")
var oJ=_oz(z,13,e,s,gg)
var lK=_gd(x[9],oJ,e_,d_)
if(lK){
var aL=_1z(z,10,e,s,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[9],1,532)
cs.pop()
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var fS=e_[x[9]].i
_ai(fS,x[10],e_,x[9],1,1)
_ai(fS,x[11],e_,x[9],1,44)
fS.pop()
fS.pop()
return r
}
e_[x[9]]={f:m7,j:[],i:[],ti:[x[10],x[11]],ic:[]}
d_[x[12]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var hU=e_[x[12]].i
_ai(hU,x[13],e_,x[12],1,1)
var oV=_v()
_(r,oV)
cs.push("./pages/login/login.wxml:template:2:6")
var cW=_oz(z,1,e,s,gg)
var oX=_gd(x[12],cW,e_,d_)
if(oX){
var lY=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oV.wxXCkey=3
oX(lY,lY,oV,gg)
gg.f=cur_globalf
}
else _w(cW,x[12],2,18)
cs.pop()
hU.pop()
return r
}
e_[x[12]]={f:m8,j:[],i:[],ti:[x[13]],ic:[]}
d_[x[14]]={}
d_[x[14]]["07103056"]=function(e,s,r,gg){
var z=gz$gwx_10()
var b=x[14]+':07103056'
r.wxVkey=b
gg.f=$gdc(f_["./pages/more/more.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[14]);return}
p_[b]=true
try{
cs.push("./pages/more/more.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/more/more.vue.wxml:view:1:66")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.push("./pages/more/more.vue.wxml:image:1:100")
var oD=_mz(z,'image',['class',3,'src',1,'style',2],[],e,s,gg)
cs.pop()
_(xC,oD)
cs.pop()
_(oB,xC)
cs.push("./pages/more/more.vue.wxml:view:1:212")
var fE=_n('view')
_rz(z,fE,'class',6,e,s,gg)
cs.push("./pages/more/more.vue.wxml:view:1:245")
var cF=_n('view')
_rz(z,cF,'class',7,e,s,gg)
cs.push("./pages/more/more.vue.wxml:view:1:279")
var hG=_mz(z,'view',['class',8,'style',1],[],e,s,gg)
cs.pop()
_(cF,hG)
cs.push("./pages/more/more.vue.wxml:view:1:360")
var oH=_mz(z,'view',['class',10,'style',1],[],e,s,gg)
var cI=_oz(z,12,e,s,gg)
_(oH,cI)
cs.pop()
_(cF,oH)
cs.pop()
_(fE,cF)
cs.push("./pages/more/more.vue.wxml:view:1:452")
var oJ=_mz(z,'view',['class',13,'style',1],[],e,s,gg)
var lK=_oz(z,15,e,s,gg)
_(oJ,lK)
cs.pop()
_(fE,oJ)
cs.push("./pages/more/more.vue.wxml:view:1:526")
var aL=_mz(z,'view',['style',-1,'class',16],[],e,s,gg)
var tM=_oz(z,17,e,s,gg)
_(aL,tM)
cs.pop()
_(fE,aL)
cs.pop()
_(oB,fE)
cs.push("./pages/more/more.vue.wxml:view:1:586")
var eN=_n('view')
_rz(z,eN,'class',18,e,s,gg)
cs.push("./pages/more/more.vue.wxml:view:1:622")
var bO=_n('view')
_rz(z,bO,'class',19,e,s,gg)
cs.push("./pages/more/more.vue.wxml:view:1:660")
var oP=_n('view')
_rz(z,oP,'class',20,e,s,gg)
cs.pop()
_(bO,oP)
cs.push("./pages/more/more.vue.wxml:view:1:702")
var xQ=_n('view')
_rz(z,xQ,'class',21,e,s,gg)
var oR=_oz(z,22,e,s,gg)
_(xQ,oR)
cs.pop()
_(bO,xQ)
cs.push("./pages/more/more.vue.wxml:view:1:743")
var fS=_n('view')
_rz(z,fS,'class',23,e,s,gg)
var cT=_oz(z,24,e,s,gg)
_(fS,cT)
cs.pop()
_(bO,fS)
cs.pop()
_(eN,bO)
cs.push("./pages/more/more.vue.wxml:view:1:798")
var hU=_n('view')
_rz(z,hU,'class',25,e,s,gg)
cs.push("./pages/more/more.vue.wxml:view:1:836")
var oV=_n('view')
_rz(z,oV,'class',26,e,s,gg)
cs.pop()
_(hU,oV)
cs.push("./pages/more/more.vue.wxml:view:1:878")
var cW=_n('view')
_rz(z,cW,'class',27,e,s,gg)
var oX=_oz(z,28,e,s,gg)
_(cW,oX)
cs.pop()
_(hU,cW)
cs.push("./pages/more/more.vue.wxml:view:1:919")
var lY=_n('view')
_rz(z,lY,'class',29,e,s,gg)
var aZ=_oz(z,30,e,s,gg)
_(lY,aZ)
cs.pop()
_(hU,lY)
cs.pop()
_(eN,hU)
cs.push("./pages/more/more.vue.wxml:view:1:974")
var t1=_n('view')
_rz(z,t1,'class',31,e,s,gg)
cs.push("./pages/more/more.vue.wxml:view:1:1012")
var e2=_n('view')
_rz(z,e2,'class',32,e,s,gg)
cs.pop()
_(t1,e2)
cs.push("./pages/more/more.vue.wxml:view:1:1054")
var b3=_n('view')
_rz(z,b3,'class',33,e,s,gg)
var o4=_oz(z,34,e,s,gg)
_(b3,o4)
cs.pop()
_(t1,b3)
cs.push("./pages/more/more.vue.wxml:view:1:1095")
var x5=_n('view')
_rz(z,x5,'class',35,e,s,gg)
var o6=_oz(z,36,e,s,gg)
_(x5,o6)
cs.pop()
_(t1,x5)
cs.pop()
_(eN,t1)
cs.pop()
_(oB,eN)
cs.push("./pages/more/more.vue.wxml:canvas:1:1157")
var f7=_mz(z,'canvas',['canvasId',37,'class',1,'style',2],[],e,s,gg)
cs.pop()
_(oB,f7)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[14]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var e2=e_[x[15]].i
_ai(e2,x[16],e_,x[15],1,1)
var b3=_v()
_(r,b3)
cs.push("./pages/more/more.wxml:template:2:6")
var o4=_oz(z,1,e,s,gg)
var x5=_gd(x[15],o4,e_,d_)
if(x5){
var o6=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
b3.wxXCkey=3
x5(o6,o6,b3,gg)
gg.f=cur_globalf
}
else _w(o4,x[15],2,18)
cs.pop()
e2.pop()
return r
}
e_[x[15]]={f:m10,j:[],i:[],ti:[x[16]],ic:[]}
d_[x[17]]={}
d_[x[17]]["b7572e56"]=function(e,s,r,gg){
var z=gz$gwx_12()
var b=x[17]+':b7572e56'
r.wxVkey=b
gg.f=$gdc(f_["./pages/player/player.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[17]);return}
p_[b]=true
try{
cs.push("./pages/player/player.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/player/player.vue.wxml:image:1:66")
var hG=_mz(z,'image',['class',2,'src',1],[],e,s,gg)
cs.pop()
_(oB,hG)
cs.push("./pages/player/player.vue.wxml:view:1:135")
var oH=_mz(z,'view',['bindtap',4,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./pages/player/player.vue.wxml:image:1:245")
var cI=_mz(z,'image',['class',8,'src',1,'style',2],[],e,s,gg)
cs.pop()
_(oH,cI)
cs.pop()
_(oB,oH)
cs.push("./pages/player/player.vue.wxml:view:1:365")
var oJ=_n('view')
_rz(z,oJ,'class',11,e,s,gg)
cs.pop()
_(oB,oJ)
cs.push("./pages/player/player.vue.wxml:view:1:406")
var lK=_n('view')
_rz(z,lK,'class',12,e,s,gg)
cs.push("./pages/player/player.vue.wxml:view:1:474")
var aL=_n('view')
_rz(z,aL,'class',13,e,s,gg)
cs.pop()
_(lK,aL)
cs.push("./pages/player/player.vue.wxml:view:1:517")
var tM=_n('view')
_rz(z,tM,'class',14,e,s,gg)
cs.pop()
_(lK,tM)
cs.push("./pages/player/player.vue.wxml:view:1:560")
var eN=_n('view')
_rz(z,eN,'class',15,e,s,gg)
cs.pop()
_(lK,eN)
cs.pop()
_(oB,lK)
cs.push("./pages/player/player.vue.wxml:view:1:611")
var bO=_n('view')
_rz(z,bO,'class',16,e,s,gg)
cs.push("./pages/player/player.vue.wxml:view:1:647")
var oP=_n('view')
_rz(z,oP,'class',17,e,s,gg)
var xQ=_oz(z,18,e,s,gg)
_(oP,xQ)
cs.pop()
_(bO,oP)
cs.push("./pages/player/player.vue.wxml:view:1:691")
var oR=_mz(z,'view',['class',19,'style',1],[],e,s,gg)
var fS=_oz(z,21,e,s,gg)
_(oR,fS)
cs.pop()
_(bO,oR)
cs.pop()
_(oB,bO)
var xC=_v()
_(oB,xC)
if(_oz(z,22,e,s,gg)){xC.wxVkey=1
cs.push("./pages/player/player.vue.wxml:view:1:782")
cs.push("./pages/player/player.vue.wxml:view:1:782")
var cT=_mz(z,'view',['bindtap',23,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./pages/player/player.vue.wxml:view:1:914")
var hU=_n('view')
_rz(z,hU,'class',27,e,s,gg)
cs.pop()
_(cT,hU)
cs.push("./pages/player/player.vue.wxml:view:1:959")
var oV=_n('view')
_rz(z,oV,'class',28,e,s,gg)
var cW=_oz(z,29,e,s,gg)
_(oV,cW)
cs.pop()
_(cT,oV)
cs.pop()
_(xC,cT)
cs.pop()
}
var oD=_v()
_(oB,oD)
if(_oz(z,30,e,s,gg)){oD.wxVkey=1
cs.push("./pages/player/player.vue.wxml:view:1:1019")
cs.push("./pages/player/player.vue.wxml:view:1:1019")
var oX=_mz(z,'view',['bindtap',31,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./pages/player/player.vue.wxml:view:1:1152")
var lY=_n('view')
_rz(z,lY,'class',35,e,s,gg)
var aZ=_oz(z,36,e,s,gg)
_(lY,aZ)
cs.pop()
_(oX,lY)
cs.pop()
_(oD,oX)
cs.pop()
}
var fE=_v()
_(oB,fE)
if(_oz(z,37,e,s,gg)){fE.wxVkey=1
cs.push("./pages/player/player.vue.wxml:view:1:1207")
cs.push("./pages/player/player.vue.wxml:view:1:1207")
var t1=_mz(z,'view',['bindtap',38,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./pages/player/player.vue.wxml:view:1:1340")
var e2=_n('view')
_rz(z,e2,'class',42,e,s,gg)
var b3=_oz(z,43,e,s,gg)
_(e2,b3)
cs.pop()
_(t1,e2)
cs.pop()
_(fE,t1)
cs.pop()
}
var cF=_v()
_(oB,cF)
if(_oz(z,44,e,s,gg)){cF.wxVkey=1
cs.push("./pages/player/player.vue.wxml:view:1:1395")
cs.push("./pages/player/player.vue.wxml:view:1:1395")
var o4=_mz(z,'view',['bindtap',45,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
cs.push("./pages/player/player.vue.wxml:view:1:1528")
var x5=_n('view')
_rz(z,x5,'class',49,e,s,gg)
var o6=_oz(z,50,e,s,gg)
_(x5,o6)
cs.pop()
_(o4,x5)
cs.pop()
_(cF,o4)
cs.pop()
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[17]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var h9=e_[x[18]].i
_ai(h9,x[19],e_,x[18],1,1)
var o0=_v()
_(r,o0)
cs.push("./pages/player/player.wxml:template:2:6")
var cAB=_oz(z,1,e,s,gg)
var oBB=_gd(x[18],cAB,e_,d_)
if(oBB){
var lCB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
o0.wxXCkey=3
oBB(lCB,lCB,o0,gg)
gg.f=cur_globalf
}
else _w(cAB,x[18],2,18)
cs.pop()
h9.pop()
return r
}
e_[x[18]]={f:m12,j:[],i:[],ti:[x[19]],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
function checkDeviceWidth() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
function transformRPX(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

;var __pageFrameEndTime__ = Date.now();
if(!window.__uniAppViewReady__){
	window.__uniAppViewReady__ = true;
	document.dispatchEvent(new CustomEvent('uniAppViewReady'));
}

