goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14044 = arguments.length;
switch (G__14044) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14048 = (function (f,blockable,meta14049){
this.f = f;
this.blockable = blockable;
this.meta14049 = meta14049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14050,meta14049__$1){
var self__ = this;
var _14050__$1 = this;
return (new cljs.core.async.t_cljs$core$async14048(self__.f,self__.blockable,meta14049__$1));
}));

(cljs.core.async.t_cljs$core$async14048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14050){
var self__ = this;
var _14050__$1 = this;
return self__.meta14049;
}));

(cljs.core.async.t_cljs$core$async14048.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14048.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14048.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14048.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14049","meta14049",1684787309,null)], null);
}));

(cljs.core.async.t_cljs$core$async14048.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14048");

(cljs.core.async.t_cljs$core$async14048.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14048");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14048.
 */
cljs.core.async.__GT_t_cljs$core$async14048 = (function cljs$core$async$__GT_t_cljs$core$async14048(f__$1,blockable__$1,meta14049){
return (new cljs.core.async.t_cljs$core$async14048(f__$1,blockable__$1,meta14049));
});

}

return (new cljs.core.async.t_cljs$core$async14048(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14080 = arguments.length;
switch (G__14080) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14085 = arguments.length;
switch (G__14085) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14095 = arguments.length;
switch (G__14095) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17824 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17824) : fn1.call(null,val_17824));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17824) : fn1.call(null,val_17824));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14101 = arguments.length;
switch (G__14101) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___17831 = n;
var x_17832 = (0);
while(true){
if((x_17832 < n__5636__auto___17831)){
(a[x_17832] = x_17832);

var G__17833 = (x_17832 + (1));
x_17832 = G__17833;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14128 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14128 = (function (flag,meta14129){
this.flag = flag;
this.meta14129 = meta14129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14130,meta14129__$1){
var self__ = this;
var _14130__$1 = this;
return (new cljs.core.async.t_cljs$core$async14128(self__.flag,meta14129__$1));
}));

(cljs.core.async.t_cljs$core$async14128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14130){
var self__ = this;
var _14130__$1 = this;
return self__.meta14129;
}));

(cljs.core.async.t_cljs$core$async14128.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14128.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14128.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14128.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14129","meta14129",-933930319,null)], null);
}));

(cljs.core.async.t_cljs$core$async14128.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14128");

(cljs.core.async.t_cljs$core$async14128.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14128");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14128.
 */
cljs.core.async.__GT_t_cljs$core$async14128 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14128(flag__$1,meta14129){
return (new cljs.core.async.t_cljs$core$async14128(flag__$1,meta14129));
});

}

return (new cljs.core.async.t_cljs$core$async14128(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14147 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14147 = (function (flag,cb,meta14148){
this.flag = flag;
this.cb = cb;
this.meta14148 = meta14148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14149,meta14148__$1){
var self__ = this;
var _14149__$1 = this;
return (new cljs.core.async.t_cljs$core$async14147(self__.flag,self__.cb,meta14148__$1));
}));

(cljs.core.async.t_cljs$core$async14147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14149){
var self__ = this;
var _14149__$1 = this;
return self__.meta14148;
}));

(cljs.core.async.t_cljs$core$async14147.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14147.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14147.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14147.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14148","meta14148",554999771,null)], null);
}));

(cljs.core.async.t_cljs$core$async14147.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14147");

(cljs.core.async.t_cljs$core$async14147.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14147");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14147.
 */
cljs.core.async.__GT_t_cljs$core$async14147 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14147(flag__$1,cb__$1,meta14148){
return (new cljs.core.async.t_cljs$core$async14147(flag__$1,cb__$1,meta14148));
});

}

return (new cljs.core.async.t_cljs$core$async14147(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14169_SHARP_){
var G__14181 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14169_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14181) : fret.call(null,G__14181));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14170_SHARP_){
var G__14184 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14170_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14184) : fret.call(null,G__14184));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17839 = (i + (1));
i = G__17839;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17840 = arguments.length;
var i__5770__auto___17842 = (0);
while(true){
if((i__5770__auto___17842 < len__5769__auto___17840)){
args__5775__auto__.push((arguments[i__5770__auto___17842]));

var G__17843 = (i__5770__auto___17842 + (1));
i__5770__auto___17842 = G__17843;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14190){
var map__14191 = p__14190;
var map__14191__$1 = cljs.core.__destructure_map(map__14191);
var opts = map__14191__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14188){
var G__14189 = cljs.core.first(seq14188);
var seq14188__$1 = cljs.core.next(seq14188);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14189,seq14188__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14205 = arguments.length;
switch (G__14205) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13893__auto___17852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = (function (state_14258){
var state_val_14260 = (state_14258[(1)]);
if((state_val_14260 === (7))){
var inst_14245 = (state_14258[(2)]);
var state_14258__$1 = state_14258;
var statearr_14286_17854 = state_14258__$1;
(statearr_14286_17854[(2)] = inst_14245);

(statearr_14286_17854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (1))){
var state_14258__$1 = state_14258;
var statearr_14293_17857 = state_14258__$1;
(statearr_14293_17857[(2)] = null);

(statearr_14293_17857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (4))){
var inst_14224 = (state_14258[(7)]);
var inst_14224__$1 = (state_14258[(2)]);
var inst_14226 = (inst_14224__$1 == null);
var state_14258__$1 = (function (){var statearr_14295 = state_14258;
(statearr_14295[(7)] = inst_14224__$1);

return statearr_14295;
})();
if(cljs.core.truth_(inst_14226)){
var statearr_14296_17860 = state_14258__$1;
(statearr_14296_17860[(1)] = (5));

} else {
var statearr_14298_17861 = state_14258__$1;
(statearr_14298_17861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (13))){
var state_14258__$1 = state_14258;
var statearr_14304_17870 = state_14258__$1;
(statearr_14304_17870[(2)] = null);

(statearr_14304_17870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (6))){
var inst_14224 = (state_14258[(7)]);
var state_14258__$1 = state_14258;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14258__$1,(11),to,inst_14224);
} else {
if((state_val_14260 === (3))){
var inst_14247 = (state_14258[(2)]);
var state_14258__$1 = state_14258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14258__$1,inst_14247);
} else {
if((state_val_14260 === (12))){
var state_14258__$1 = state_14258;
var statearr_14315_17873 = state_14258__$1;
(statearr_14315_17873[(2)] = null);

(statearr_14315_17873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (2))){
var state_14258__$1 = state_14258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14258__$1,(4),from);
} else {
if((state_val_14260 === (11))){
var inst_14238 = (state_14258[(2)]);
var state_14258__$1 = state_14258;
if(cljs.core.truth_(inst_14238)){
var statearr_14328_17876 = state_14258__$1;
(statearr_14328_17876[(1)] = (12));

} else {
var statearr_14331_17877 = state_14258__$1;
(statearr_14331_17877[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (9))){
var state_14258__$1 = state_14258;
var statearr_14334_17879 = state_14258__$1;
(statearr_14334_17879[(2)] = null);

(statearr_14334_17879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (5))){
var state_14258__$1 = state_14258;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14336_17881 = state_14258__$1;
(statearr_14336_17881[(1)] = (8));

} else {
var statearr_14338_17882 = state_14258__$1;
(statearr_14338_17882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (14))){
var inst_14243 = (state_14258[(2)]);
var state_14258__$1 = state_14258;
var statearr_14339_17885 = state_14258__$1;
(statearr_14339_17885[(2)] = inst_14243);

(statearr_14339_17885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (10))){
var inst_14235 = (state_14258[(2)]);
var state_14258__$1 = state_14258;
var statearr_14343_17888 = state_14258__$1;
(statearr_14343_17888[(2)] = inst_14235);

(statearr_14343_17888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14260 === (8))){
var inst_14232 = cljs.core.async.close_BANG_(to);
var state_14258__$1 = state_14258;
var statearr_14346_17899 = state_14258__$1;
(statearr_14346_17899[(2)] = inst_14232);

(statearr_14346_17899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13618__auto__ = null;
var cljs$core$async$state_machine__13618__auto____0 = (function (){
var statearr_14347 = [null,null,null,null,null,null,null,null];
(statearr_14347[(0)] = cljs$core$async$state_machine__13618__auto__);

(statearr_14347[(1)] = (1));

return statearr_14347;
});
var cljs$core$async$state_machine__13618__auto____1 = (function (state_14258){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_14258);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e14349){var ex__13621__auto__ = e14349;
var statearr_14351_17902 = state_14258;
(statearr_14351_17902[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_14258[(4)]))){
var statearr_14354_17903 = state_14258;
(statearr_14354_17903[(1)] = cljs.core.first((state_14258[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17905 = state_14258;
state_14258 = G__17905;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
cljs$core$async$state_machine__13618__auto__ = function(state_14258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13618__auto____1.call(this,state_14258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13618__auto____0;
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13618__auto____1;
return cljs$core$async$state_machine__13618__auto__;
})()
})();
var state__13895__auto__ = (function (){var statearr_14358 = f__13894__auto__();
(statearr_14358[(6)] = c__13893__auto___17852);

return statearr_14358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14375){
var vec__14378 = p__14375;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14378,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14378,(1),null);
var job = vec__14378;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13893__auto___17912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = (function (state_14391){
var state_val_14392 = (state_14391[(1)]);
if((state_val_14392 === (1))){
var state_14391__$1 = state_14391;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14391__$1,(2),res,v);
} else {
if((state_val_14392 === (2))){
var inst_14388 = (state_14391[(2)]);
var inst_14389 = cljs.core.async.close_BANG_(res);
var state_14391__$1 = (function (){var statearr_14398 = state_14391;
(statearr_14398[(7)] = inst_14388);

return statearr_14398;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14391__$1,inst_14389);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____0 = (function (){
var statearr_14403 = [null,null,null,null,null,null,null,null];
(statearr_14403[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__);

(statearr_14403[(1)] = (1));

return statearr_14403;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____1 = (function (state_14391){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_14391);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e14405){var ex__13621__auto__ = e14405;
var statearr_14407_17916 = state_14391;
(statearr_14407_17916[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_14391[(4)]))){
var statearr_14408_17917 = state_14391;
(statearr_14408_17917[(1)] = cljs.core.first((state_14391[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17919 = state_14391;
state_14391 = G__17919;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__ = function(state_14391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____1.call(this,state_14391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__;
})()
})();
var state__13895__auto__ = (function (){var statearr_14412 = f__13894__auto__();
(statearr_14412[(6)] = c__13893__auto___17912);

return statearr_14412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14418){
var vec__14419 = p__14418;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14419,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14419,(1),null);
var job = vec__14419;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___17925 = n;
var __17926 = (0);
while(true){
if((__17926 < n__5636__auto___17925)){
var G__14427_17927 = type;
var G__14427_17928__$1 = (((G__14427_17927 instanceof cljs.core.Keyword))?G__14427_17927.fqn:null);
switch (G__14427_17928__$1) {
case "compute":
var c__13893__auto___17930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17926,c__13893__auto___17930,G__14427_17927,G__14427_17928__$1,n__5636__auto___17925,jobs,results,process__$1,async){
return (function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = ((function (__17926,c__13893__auto___17930,G__14427_17927,G__14427_17928__$1,n__5636__auto___17925,jobs,results,process__$1,async){
return (function (state_14446){
var state_val_14447 = (state_14446[(1)]);
if((state_val_14447 === (1))){
var state_14446__$1 = state_14446;
var statearr_14452_17932 = state_14446__$1;
(statearr_14452_17932[(2)] = null);

(statearr_14452_17932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14447 === (2))){
var state_14446__$1 = state_14446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14446__$1,(4),jobs);
} else {
if((state_val_14447 === (3))){
var inst_14444 = (state_14446[(2)]);
var state_14446__$1 = state_14446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14446__$1,inst_14444);
} else {
if((state_val_14447 === (4))){
var inst_14434 = (state_14446[(2)]);
var inst_14435 = process__$1(inst_14434);
var state_14446__$1 = state_14446;
if(cljs.core.truth_(inst_14435)){
var statearr_14458_17936 = state_14446__$1;
(statearr_14458_17936[(1)] = (5));

} else {
var statearr_14459_17937 = state_14446__$1;
(statearr_14459_17937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14447 === (5))){
var state_14446__$1 = state_14446;
var statearr_14467_17940 = state_14446__$1;
(statearr_14467_17940[(2)] = null);

(statearr_14467_17940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14447 === (6))){
var state_14446__$1 = state_14446;
var statearr_14468_17942 = state_14446__$1;
(statearr_14468_17942[(2)] = null);

(statearr_14468_17942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14447 === (7))){
var inst_14441 = (state_14446[(2)]);
var state_14446__$1 = state_14446;
var statearr_14469_17943 = state_14446__$1;
(statearr_14469_17943[(2)] = inst_14441);

(statearr_14469_17943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17926,c__13893__auto___17930,G__14427_17927,G__14427_17928__$1,n__5636__auto___17925,jobs,results,process__$1,async))
;
return ((function (__17926,switch__13617__auto__,c__13893__auto___17930,G__14427_17927,G__14427_17928__$1,n__5636__auto___17925,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____0 = (function (){
var statearr_14474 = [null,null,null,null,null,null,null];
(statearr_14474[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__);

(statearr_14474[(1)] = (1));

return statearr_14474;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____1 = (function (state_14446){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_14446);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e14476){var ex__13621__auto__ = e14476;
var statearr_14477_17945 = state_14446;
(statearr_14477_17945[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_14446[(4)]))){
var statearr_14478_17947 = state_14446;
(statearr_14478_17947[(1)] = cljs.core.first((state_14446[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17950 = state_14446;
state_14446 = G__17950;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__ = function(state_14446){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____1.call(this,state_14446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__;
})()
;})(__17926,switch__13617__auto__,c__13893__auto___17930,G__14427_17927,G__14427_17928__$1,n__5636__auto___17925,jobs,results,process__$1,async))
})();
var state__13895__auto__ = (function (){var statearr_14487 = f__13894__auto__();
(statearr_14487[(6)] = c__13893__auto___17930);

return statearr_14487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
});})(__17926,c__13893__auto___17930,G__14427_17927,G__14427_17928__$1,n__5636__auto___17925,jobs,results,process__$1,async))
);


break;
case "async":
var c__13893__auto___17952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17926,c__13893__auto___17952,G__14427_17927,G__14427_17928__$1,n__5636__auto___17925,jobs,results,process__$1,async){
return (function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = ((function (__17926,c__13893__auto___17952,G__14427_17927,G__14427_17928__$1,n__5636__auto___17925,jobs,results,process__$1,async){
return (function (state_14506){
var state_val_14507 = (state_14506[(1)]);
if((state_val_14507 === (1))){
var state_14506__$1 = state_14506;
var statearr_14512_17953 = state_14506__$1;
(statearr_14512_17953[(2)] = null);

(statearr_14512_17953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14507 === (2))){
var state_14506__$1 = state_14506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14506__$1,(4),jobs);
} else {
if((state_val_14507 === (3))){
var inst_14504 = (state_14506[(2)]);
var state_14506__$1 = state_14506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14506__$1,inst_14504);
} else {
if((state_val_14507 === (4))){
var inst_14496 = (state_14506[(2)]);
var inst_14497 = async(inst_14496);
var state_14506__$1 = state_14506;
if(cljs.core.truth_(inst_14497)){
var statearr_14531_17954 = state_14506__$1;
(statearr_14531_17954[(1)] = (5));

} else {
var statearr_14532_17956 = state_14506__$1;
(statearr_14532_17956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14507 === (5))){
var state_14506__$1 = state_14506;
var statearr_14533_17957 = state_14506__$1;
(statearr_14533_17957[(2)] = null);

(statearr_14533_17957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14507 === (6))){
var state_14506__$1 = state_14506;
var statearr_14535_17958 = state_14506__$1;
(statearr_14535_17958[(2)] = null);

(statearr_14535_17958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14507 === (7))){
var inst_14502 = (state_14506[(2)]);
var state_14506__$1 = state_14506;
var statearr_14537_17959 = state_14506__$1;
(statearr_14537_17959[(2)] = inst_14502);

(statearr_14537_17959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17926,c__13893__auto___17952,G__14427_17927,G__14427_17928__$1,n__5636__auto___17925,jobs,results,process__$1,async))
;
return ((function (__17926,switch__13617__auto__,c__13893__auto___17952,G__14427_17927,G__14427_17928__$1,n__5636__auto___17925,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____0 = (function (){
var statearr_14544 = [null,null,null,null,null,null,null];
(statearr_14544[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__);

(statearr_14544[(1)] = (1));

return statearr_14544;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____1 = (function (state_14506){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_14506);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e14545){var ex__13621__auto__ = e14545;
var statearr_14546_17960 = state_14506;
(statearr_14546_17960[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_14506[(4)]))){
var statearr_14548_17963 = state_14506;
(statearr_14548_17963[(1)] = cljs.core.first((state_14506[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17964 = state_14506;
state_14506 = G__17964;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__ = function(state_14506){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____1.call(this,state_14506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__;
})()
;})(__17926,switch__13617__auto__,c__13893__auto___17952,G__14427_17927,G__14427_17928__$1,n__5636__auto___17925,jobs,results,process__$1,async))
})();
var state__13895__auto__ = (function (){var statearr_14558 = f__13894__auto__();
(statearr_14558[(6)] = c__13893__auto___17952);

return statearr_14558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
});})(__17926,c__13893__auto___17952,G__14427_17927,G__14427_17928__$1,n__5636__auto___17925,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14427_17928__$1)].join('')));

}

var G__17965 = (__17926 + (1));
__17926 = G__17965;
continue;
} else {
}
break;
}

var c__13893__auto___17969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = (function (state_14591){
var state_val_14592 = (state_14591[(1)]);
if((state_val_14592 === (7))){
var inst_14586 = (state_14591[(2)]);
var state_14591__$1 = state_14591;
var statearr_14597_17972 = state_14591__$1;
(statearr_14597_17972[(2)] = inst_14586);

(statearr_14597_17972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14592 === (1))){
var state_14591__$1 = state_14591;
var statearr_14602_17982 = state_14591__$1;
(statearr_14602_17982[(2)] = null);

(statearr_14602_17982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14592 === (4))){
var inst_14566 = (state_14591[(7)]);
var inst_14566__$1 = (state_14591[(2)]);
var inst_14567 = (inst_14566__$1 == null);
var state_14591__$1 = (function (){var statearr_14603 = state_14591;
(statearr_14603[(7)] = inst_14566__$1);

return statearr_14603;
})();
if(cljs.core.truth_(inst_14567)){
var statearr_14609_17984 = state_14591__$1;
(statearr_14609_17984[(1)] = (5));

} else {
var statearr_14610_17985 = state_14591__$1;
(statearr_14610_17985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14592 === (6))){
var inst_14572 = (state_14591[(8)]);
var inst_14566 = (state_14591[(7)]);
var inst_14572__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14574 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14576 = [inst_14566,inst_14572__$1];
var inst_14577 = (new cljs.core.PersistentVector(null,2,(5),inst_14574,inst_14576,null));
var state_14591__$1 = (function (){var statearr_14613 = state_14591;
(statearr_14613[(8)] = inst_14572__$1);

return statearr_14613;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14591__$1,(8),jobs,inst_14577);
} else {
if((state_val_14592 === (3))){
var inst_14589 = (state_14591[(2)]);
var state_14591__$1 = state_14591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14591__$1,inst_14589);
} else {
if((state_val_14592 === (2))){
var state_14591__$1 = state_14591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14591__$1,(4),from);
} else {
if((state_val_14592 === (9))){
var inst_14582 = (state_14591[(2)]);
var state_14591__$1 = (function (){var statearr_14619 = state_14591;
(statearr_14619[(9)] = inst_14582);

return statearr_14619;
})();
var statearr_14620_17993 = state_14591__$1;
(statearr_14620_17993[(2)] = null);

(statearr_14620_17993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14592 === (5))){
var inst_14569 = cljs.core.async.close_BANG_(jobs);
var state_14591__$1 = state_14591;
var statearr_14621_17994 = state_14591__$1;
(statearr_14621_17994[(2)] = inst_14569);

(statearr_14621_17994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14592 === (8))){
var inst_14572 = (state_14591[(8)]);
var inst_14580 = (state_14591[(2)]);
var state_14591__$1 = (function (){var statearr_14622 = state_14591;
(statearr_14622[(10)] = inst_14580);

return statearr_14622;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14591__$1,(9),results,inst_14572);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____0 = (function (){
var statearr_14630 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14630[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__);

(statearr_14630[(1)] = (1));

return statearr_14630;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____1 = (function (state_14591){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_14591);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e14640){var ex__13621__auto__ = e14640;
var statearr_14644_18012 = state_14591;
(statearr_14644_18012[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_14591[(4)]))){
var statearr_14654_18014 = state_14591;
(statearr_14654_18014[(1)] = cljs.core.first((state_14591[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18015 = state_14591;
state_14591 = G__18015;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__ = function(state_14591){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____1.call(this,state_14591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__;
})()
})();
var state__13895__auto__ = (function (){var statearr_14666 = f__13894__auto__();
(statearr_14666[(6)] = c__13893__auto___17969);

return statearr_14666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
}));


var c__13893__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = (function (state_14728){
var state_val_14729 = (state_14728[(1)]);
if((state_val_14729 === (7))){
var inst_14718 = (state_14728[(2)]);
var state_14728__$1 = state_14728;
var statearr_14738_18016 = state_14728__$1;
(statearr_14738_18016[(2)] = inst_14718);

(statearr_14738_18016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (20))){
var state_14728__$1 = state_14728;
var statearr_14740_18017 = state_14728__$1;
(statearr_14740_18017[(2)] = null);

(statearr_14740_18017[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (1))){
var state_14728__$1 = state_14728;
var statearr_14744_18021 = state_14728__$1;
(statearr_14744_18021[(2)] = null);

(statearr_14744_18021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (4))){
var inst_14682 = (state_14728[(7)]);
var inst_14682__$1 = (state_14728[(2)]);
var inst_14683 = (inst_14682__$1 == null);
var state_14728__$1 = (function (){var statearr_14745 = state_14728;
(statearr_14745[(7)] = inst_14682__$1);

return statearr_14745;
})();
if(cljs.core.truth_(inst_14683)){
var statearr_14746_18022 = state_14728__$1;
(statearr_14746_18022[(1)] = (5));

} else {
var statearr_14747_18023 = state_14728__$1;
(statearr_14747_18023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (15))){
var inst_14697 = (state_14728[(8)]);
var state_14728__$1 = state_14728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14728__$1,(18),to,inst_14697);
} else {
if((state_val_14729 === (21))){
var inst_14711 = (state_14728[(2)]);
var state_14728__$1 = state_14728;
var statearr_14749_18024 = state_14728__$1;
(statearr_14749_18024[(2)] = inst_14711);

(statearr_14749_18024[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (13))){
var inst_14714 = (state_14728[(2)]);
var state_14728__$1 = (function (){var statearr_14754 = state_14728;
(statearr_14754[(9)] = inst_14714);

return statearr_14754;
})();
var statearr_14757_18026 = state_14728__$1;
(statearr_14757_18026[(2)] = null);

(statearr_14757_18026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (6))){
var inst_14682 = (state_14728[(7)]);
var state_14728__$1 = state_14728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14728__$1,(11),inst_14682);
} else {
if((state_val_14729 === (17))){
var inst_14705 = (state_14728[(2)]);
var state_14728__$1 = state_14728;
if(cljs.core.truth_(inst_14705)){
var statearr_14760_18027 = state_14728__$1;
(statearr_14760_18027[(1)] = (19));

} else {
var statearr_14761_18029 = state_14728__$1;
(statearr_14761_18029[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (3))){
var inst_14720 = (state_14728[(2)]);
var state_14728__$1 = state_14728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14728__$1,inst_14720);
} else {
if((state_val_14729 === (12))){
var inst_14694 = (state_14728[(10)]);
var state_14728__$1 = state_14728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14728__$1,(14),inst_14694);
} else {
if((state_val_14729 === (2))){
var state_14728__$1 = state_14728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14728__$1,(4),results);
} else {
if((state_val_14729 === (19))){
var state_14728__$1 = state_14728;
var statearr_14769_18031 = state_14728__$1;
(statearr_14769_18031[(2)] = null);

(statearr_14769_18031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (11))){
var inst_14694 = (state_14728[(2)]);
var state_14728__$1 = (function (){var statearr_14772 = state_14728;
(statearr_14772[(10)] = inst_14694);

return statearr_14772;
})();
var statearr_14773_18033 = state_14728__$1;
(statearr_14773_18033[(2)] = null);

(statearr_14773_18033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (9))){
var state_14728__$1 = state_14728;
var statearr_14774_18034 = state_14728__$1;
(statearr_14774_18034[(2)] = null);

(statearr_14774_18034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (5))){
var state_14728__$1 = state_14728;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14777_18035 = state_14728__$1;
(statearr_14777_18035[(1)] = (8));

} else {
var statearr_14779_18036 = state_14728__$1;
(statearr_14779_18036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (14))){
var inst_14697 = (state_14728[(8)]);
var inst_14699 = (state_14728[(11)]);
var inst_14697__$1 = (state_14728[(2)]);
var inst_14698 = (inst_14697__$1 == null);
var inst_14699__$1 = cljs.core.not(inst_14698);
var state_14728__$1 = (function (){var statearr_14783 = state_14728;
(statearr_14783[(8)] = inst_14697__$1);

(statearr_14783[(11)] = inst_14699__$1);

return statearr_14783;
})();
if(inst_14699__$1){
var statearr_14784_18037 = state_14728__$1;
(statearr_14784_18037[(1)] = (15));

} else {
var statearr_14785_18038 = state_14728__$1;
(statearr_14785_18038[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (16))){
var inst_14699 = (state_14728[(11)]);
var state_14728__$1 = state_14728;
var statearr_14787_18039 = state_14728__$1;
(statearr_14787_18039[(2)] = inst_14699);

(statearr_14787_18039[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (10))){
var inst_14690 = (state_14728[(2)]);
var state_14728__$1 = state_14728;
var statearr_14793_18040 = state_14728__$1;
(statearr_14793_18040[(2)] = inst_14690);

(statearr_14793_18040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (18))){
var inst_14702 = (state_14728[(2)]);
var state_14728__$1 = state_14728;
var statearr_14804_18041 = state_14728__$1;
(statearr_14804_18041[(2)] = inst_14702);

(statearr_14804_18041[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14729 === (8))){
var inst_14687 = cljs.core.async.close_BANG_(to);
var state_14728__$1 = state_14728;
var statearr_14814_18042 = state_14728__$1;
(statearr_14814_18042[(2)] = inst_14687);

(statearr_14814_18042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____0 = (function (){
var statearr_14827 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__);

(statearr_14827[(1)] = (1));

return statearr_14827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____1 = (function (state_14728){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_14728);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e14829){var ex__13621__auto__ = e14829;
var statearr_14831_18047 = state_14728;
(statearr_14831_18047[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_14728[(4)]))){
var statearr_14833_18048 = state_14728;
(statearr_14833_18048[(1)] = cljs.core.first((state_14728[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18053 = state_14728;
state_14728 = G__18053;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__ = function(state_14728){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____1.call(this,state_14728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13618__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13618__auto__;
})()
})();
var state__13895__auto__ = (function (){var statearr_14836 = f__13894__auto__();
(statearr_14836[(6)] = c__13893__auto__);

return statearr_14836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
}));

return c__13893__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14844 = arguments.length;
switch (G__14844) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14858 = arguments.length;
switch (G__14858) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14895 = arguments.length;
switch (G__14895) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13893__auto___18083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = (function (state_14967){
var state_val_14969 = (state_14967[(1)]);
if((state_val_14969 === (7))){
var inst_14962 = (state_14967[(2)]);
var state_14967__$1 = state_14967;
var statearr_14974_18084 = state_14967__$1;
(statearr_14974_18084[(2)] = inst_14962);

(statearr_14974_18084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (1))){
var state_14967__$1 = state_14967;
var statearr_14975_18085 = state_14967__$1;
(statearr_14975_18085[(2)] = null);

(statearr_14975_18085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (4))){
var inst_14933 = (state_14967[(7)]);
var inst_14933__$1 = (state_14967[(2)]);
var inst_14935 = (inst_14933__$1 == null);
var state_14967__$1 = (function (){var statearr_14977 = state_14967;
(statearr_14977[(7)] = inst_14933__$1);

return statearr_14977;
})();
if(cljs.core.truth_(inst_14935)){
var statearr_14979_18089 = state_14967__$1;
(statearr_14979_18089[(1)] = (5));

} else {
var statearr_14981_18090 = state_14967__$1;
(statearr_14981_18090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (13))){
var state_14967__$1 = state_14967;
var statearr_14984_18091 = state_14967__$1;
(statearr_14984_18091[(2)] = null);

(statearr_14984_18091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (6))){
var inst_14933 = (state_14967[(7)]);
var inst_14945 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14933) : p.call(null,inst_14933));
var state_14967__$1 = state_14967;
if(cljs.core.truth_(inst_14945)){
var statearr_14987_18095 = state_14967__$1;
(statearr_14987_18095[(1)] = (9));

} else {
var statearr_14989_18096 = state_14967__$1;
(statearr_14989_18096[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (3))){
var inst_14964 = (state_14967[(2)]);
var state_14967__$1 = state_14967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14967__$1,inst_14964);
} else {
if((state_val_14969 === (12))){
var state_14967__$1 = state_14967;
var statearr_14994_18100 = state_14967__$1;
(statearr_14994_18100[(2)] = null);

(statearr_14994_18100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (2))){
var state_14967__$1 = state_14967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14967__$1,(4),ch);
} else {
if((state_val_14969 === (11))){
var inst_14933 = (state_14967[(7)]);
var inst_14953 = (state_14967[(2)]);
var state_14967__$1 = state_14967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14967__$1,(8),inst_14953,inst_14933);
} else {
if((state_val_14969 === (9))){
var state_14967__$1 = state_14967;
var statearr_14998_18104 = state_14967__$1;
(statearr_14998_18104[(2)] = tc);

(statearr_14998_18104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (5))){
var inst_14941 = cljs.core.async.close_BANG_(tc);
var inst_14942 = cljs.core.async.close_BANG_(fc);
var state_14967__$1 = (function (){var statearr_15001 = state_14967;
(statearr_15001[(8)] = inst_14941);

return statearr_15001;
})();
var statearr_15006_18106 = state_14967__$1;
(statearr_15006_18106[(2)] = inst_14942);

(statearr_15006_18106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (14))){
var inst_14960 = (state_14967[(2)]);
var state_14967__$1 = state_14967;
var statearr_15012_18109 = state_14967__$1;
(statearr_15012_18109[(2)] = inst_14960);

(statearr_15012_18109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (10))){
var state_14967__$1 = state_14967;
var statearr_15017_18115 = state_14967__$1;
(statearr_15017_18115[(2)] = fc);

(statearr_15017_18115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14969 === (8))){
var inst_14955 = (state_14967[(2)]);
var state_14967__$1 = state_14967;
if(cljs.core.truth_(inst_14955)){
var statearr_15019_18116 = state_14967__$1;
(statearr_15019_18116[(1)] = (12));

} else {
var statearr_15020_18117 = state_14967__$1;
(statearr_15020_18117[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13618__auto__ = null;
var cljs$core$async$state_machine__13618__auto____0 = (function (){
var statearr_15026 = [null,null,null,null,null,null,null,null,null];
(statearr_15026[(0)] = cljs$core$async$state_machine__13618__auto__);

(statearr_15026[(1)] = (1));

return statearr_15026;
});
var cljs$core$async$state_machine__13618__auto____1 = (function (state_14967){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_14967);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e15031){var ex__13621__auto__ = e15031;
var statearr_15032_18124 = state_14967;
(statearr_15032_18124[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_14967[(4)]))){
var statearr_15033_18125 = state_14967;
(statearr_15033_18125[(1)] = cljs.core.first((state_14967[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18126 = state_14967;
state_14967 = G__18126;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
cljs$core$async$state_machine__13618__auto__ = function(state_14967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13618__auto____1.call(this,state_14967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13618__auto____0;
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13618__auto____1;
return cljs$core$async$state_machine__13618__auto__;
})()
})();
var state__13895__auto__ = (function (){var statearr_15035 = f__13894__auto__();
(statearr_15035[(6)] = c__13893__auto___18083);

return statearr_15035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13893__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = (function (state_15066){
var state_val_15067 = (state_15066[(1)]);
if((state_val_15067 === (7))){
var inst_15059 = (state_15066[(2)]);
var state_15066__$1 = state_15066;
var statearr_15072_18133 = state_15066__$1;
(statearr_15072_18133[(2)] = inst_15059);

(statearr_15072_18133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (1))){
var inst_15038 = init;
var inst_15041 = inst_15038;
var state_15066__$1 = (function (){var statearr_15075 = state_15066;
(statearr_15075[(7)] = inst_15041);

return statearr_15075;
})();
var statearr_15076_18134 = state_15066__$1;
(statearr_15076_18134[(2)] = null);

(statearr_15076_18134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (4))){
var inst_15044 = (state_15066[(8)]);
var inst_15044__$1 = (state_15066[(2)]);
var inst_15046 = (inst_15044__$1 == null);
var state_15066__$1 = (function (){var statearr_15079 = state_15066;
(statearr_15079[(8)] = inst_15044__$1);

return statearr_15079;
})();
if(cljs.core.truth_(inst_15046)){
var statearr_15080_18137 = state_15066__$1;
(statearr_15080_18137[(1)] = (5));

} else {
var statearr_15087_18138 = state_15066__$1;
(statearr_15087_18138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (6))){
var inst_15049 = (state_15066[(9)]);
var inst_15044 = (state_15066[(8)]);
var inst_15041 = (state_15066[(7)]);
var inst_15049__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15041,inst_15044) : f.call(null,inst_15041,inst_15044));
var inst_15050 = cljs.core.reduced_QMARK_(inst_15049__$1);
var state_15066__$1 = (function (){var statearr_15088 = state_15066;
(statearr_15088[(9)] = inst_15049__$1);

return statearr_15088;
})();
if(inst_15050){
var statearr_15089_18143 = state_15066__$1;
(statearr_15089_18143[(1)] = (8));

} else {
var statearr_15090_18150 = state_15066__$1;
(statearr_15090_18150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (3))){
var inst_15061 = (state_15066[(2)]);
var state_15066__$1 = state_15066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15066__$1,inst_15061);
} else {
if((state_val_15067 === (2))){
var state_15066__$1 = state_15066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15066__$1,(4),ch);
} else {
if((state_val_15067 === (9))){
var inst_15049 = (state_15066[(9)]);
var inst_15041 = inst_15049;
var state_15066__$1 = (function (){var statearr_15096 = state_15066;
(statearr_15096[(7)] = inst_15041);

return statearr_15096;
})();
var statearr_15097_18154 = state_15066__$1;
(statearr_15097_18154[(2)] = null);

(statearr_15097_18154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (5))){
var inst_15041 = (state_15066[(7)]);
var state_15066__$1 = state_15066;
var statearr_15098_18158 = state_15066__$1;
(statearr_15098_18158[(2)] = inst_15041);

(statearr_15098_18158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (10))){
var inst_15057 = (state_15066[(2)]);
var state_15066__$1 = state_15066;
var statearr_15104_18163 = state_15066__$1;
(statearr_15104_18163[(2)] = inst_15057);

(statearr_15104_18163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (8))){
var inst_15049 = (state_15066[(9)]);
var inst_15053 = cljs.core.deref(inst_15049);
var state_15066__$1 = state_15066;
var statearr_15106_18167 = state_15066__$1;
(statearr_15106_18167[(2)] = inst_15053);

(statearr_15106_18167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13618__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13618__auto____0 = (function (){
var statearr_15108 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15108[(0)] = cljs$core$async$reduce_$_state_machine__13618__auto__);

(statearr_15108[(1)] = (1));

return statearr_15108;
});
var cljs$core$async$reduce_$_state_machine__13618__auto____1 = (function (state_15066){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_15066);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e15110){var ex__13621__auto__ = e15110;
var statearr_15111_18177 = state_15066;
(statearr_15111_18177[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_15066[(4)]))){
var statearr_15113_18179 = state_15066;
(statearr_15113_18179[(1)] = cljs.core.first((state_15066[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18184 = state_15066;
state_15066 = G__18184;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13618__auto__ = function(state_15066){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13618__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13618__auto____1.call(this,state_15066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13618__auto____0;
cljs$core$async$reduce_$_state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13618__auto____1;
return cljs$core$async$reduce_$_state_machine__13618__auto__;
})()
})();
var state__13895__auto__ = (function (){var statearr_15117 = f__13894__auto__();
(statearr_15117[(6)] = c__13893__auto__);

return statearr_15117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
}));

return c__13893__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13893__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = (function (state_15127){
var state_val_15128 = (state_15127[(1)]);
if((state_val_15128 === (1))){
var inst_15122 = cljs.core.async.reduce(f__$1,init,ch);
var state_15127__$1 = state_15127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15127__$1,(2),inst_15122);
} else {
if((state_val_15128 === (2))){
var inst_15124 = (state_15127[(2)]);
var inst_15125 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15124) : f__$1.call(null,inst_15124));
var state_15127__$1 = state_15127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15127__$1,inst_15125);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13618__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13618__auto____0 = (function (){
var statearr_15142 = [null,null,null,null,null,null,null];
(statearr_15142[(0)] = cljs$core$async$transduce_$_state_machine__13618__auto__);

(statearr_15142[(1)] = (1));

return statearr_15142;
});
var cljs$core$async$transduce_$_state_machine__13618__auto____1 = (function (state_15127){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_15127);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e15143){var ex__13621__auto__ = e15143;
var statearr_15144_18201 = state_15127;
(statearr_15144_18201[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_15127[(4)]))){
var statearr_15145_18203 = state_15127;
(statearr_15145_18203[(1)] = cljs.core.first((state_15127[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18210 = state_15127;
state_15127 = G__18210;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13618__auto__ = function(state_15127){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13618__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13618__auto____1.call(this,state_15127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13618__auto____0;
cljs$core$async$transduce_$_state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13618__auto____1;
return cljs$core$async$transduce_$_state_machine__13618__auto__;
})()
})();
var state__13895__auto__ = (function (){var statearr_15148 = f__13894__auto__();
(statearr_15148[(6)] = c__13893__auto__);

return statearr_15148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
}));

return c__13893__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15152 = arguments.length;
switch (G__15152) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13893__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = (function (state_15191){
var state_val_15192 = (state_15191[(1)]);
if((state_val_15192 === (7))){
var inst_15173 = (state_15191[(2)]);
var state_15191__$1 = state_15191;
var statearr_15204_18216 = state_15191__$1;
(statearr_15204_18216[(2)] = inst_15173);

(statearr_15204_18216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (1))){
var inst_15158 = cljs.core.seq(coll);
var inst_15159 = inst_15158;
var state_15191__$1 = (function (){var statearr_15205 = state_15191;
(statearr_15205[(7)] = inst_15159);

return statearr_15205;
})();
var statearr_15206_18221 = state_15191__$1;
(statearr_15206_18221[(2)] = null);

(statearr_15206_18221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (4))){
var inst_15159 = (state_15191[(7)]);
var inst_15171 = cljs.core.first(inst_15159);
var state_15191__$1 = state_15191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15191__$1,(7),ch,inst_15171);
} else {
if((state_val_15192 === (13))){
var inst_15185 = (state_15191[(2)]);
var state_15191__$1 = state_15191;
var statearr_15224_18224 = state_15191__$1;
(statearr_15224_18224[(2)] = inst_15185);

(statearr_15224_18224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (6))){
var inst_15176 = (state_15191[(2)]);
var state_15191__$1 = state_15191;
if(cljs.core.truth_(inst_15176)){
var statearr_15225_18229 = state_15191__$1;
(statearr_15225_18229[(1)] = (8));

} else {
var statearr_15226_18230 = state_15191__$1;
(statearr_15226_18230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (3))){
var inst_15189 = (state_15191[(2)]);
var state_15191__$1 = state_15191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15191__$1,inst_15189);
} else {
if((state_val_15192 === (12))){
var state_15191__$1 = state_15191;
var statearr_15227_18233 = state_15191__$1;
(statearr_15227_18233[(2)] = null);

(statearr_15227_18233[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (2))){
var inst_15159 = (state_15191[(7)]);
var state_15191__$1 = state_15191;
if(cljs.core.truth_(inst_15159)){
var statearr_15230_18234 = state_15191__$1;
(statearr_15230_18234[(1)] = (4));

} else {
var statearr_15231_18235 = state_15191__$1;
(statearr_15231_18235[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (11))){
var inst_15182 = cljs.core.async.close_BANG_(ch);
var state_15191__$1 = state_15191;
var statearr_15233_18238 = state_15191__$1;
(statearr_15233_18238[(2)] = inst_15182);

(statearr_15233_18238[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (9))){
var state_15191__$1 = state_15191;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15234_18239 = state_15191__$1;
(statearr_15234_18239[(1)] = (11));

} else {
var statearr_15235_18241 = state_15191__$1;
(statearr_15235_18241[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (5))){
var inst_15159 = (state_15191[(7)]);
var state_15191__$1 = state_15191;
var statearr_15237_18243 = state_15191__$1;
(statearr_15237_18243[(2)] = inst_15159);

(statearr_15237_18243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (10))){
var inst_15187 = (state_15191[(2)]);
var state_15191__$1 = state_15191;
var statearr_15239_18245 = state_15191__$1;
(statearr_15239_18245[(2)] = inst_15187);

(statearr_15239_18245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15192 === (8))){
var inst_15159 = (state_15191[(7)]);
var inst_15178 = cljs.core.next(inst_15159);
var inst_15159__$1 = inst_15178;
var state_15191__$1 = (function (){var statearr_15243 = state_15191;
(statearr_15243[(7)] = inst_15159__$1);

return statearr_15243;
})();
var statearr_15244_18251 = state_15191__$1;
(statearr_15244_18251[(2)] = null);

(statearr_15244_18251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13618__auto__ = null;
var cljs$core$async$state_machine__13618__auto____0 = (function (){
var statearr_15247 = [null,null,null,null,null,null,null,null];
(statearr_15247[(0)] = cljs$core$async$state_machine__13618__auto__);

(statearr_15247[(1)] = (1));

return statearr_15247;
});
var cljs$core$async$state_machine__13618__auto____1 = (function (state_15191){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_15191);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e15250){var ex__13621__auto__ = e15250;
var statearr_15251_18252 = state_15191;
(statearr_15251_18252[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_15191[(4)]))){
var statearr_15252_18253 = state_15191;
(statearr_15252_18253[(1)] = cljs.core.first((state_15191[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18258 = state_15191;
state_15191 = G__18258;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
cljs$core$async$state_machine__13618__auto__ = function(state_15191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13618__auto____1.call(this,state_15191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13618__auto____0;
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13618__auto____1;
return cljs$core$async$state_machine__13618__auto__;
})()
})();
var state__13895__auto__ = (function (){var statearr_15257 = f__13894__auto__();
(statearr_15257[(6)] = c__13893__auto__);

return statearr_15257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
}));

return c__13893__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15265 = arguments.length;
switch (G__15265) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18269 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18269(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18275 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18275(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18278 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18278(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18283 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18283(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15308 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15308 = (function (ch,cs,meta15309){
this.ch = ch;
this.cs = cs;
this.meta15309 = meta15309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15310,meta15309__$1){
var self__ = this;
var _15310__$1 = this;
return (new cljs.core.async.t_cljs$core$async15308(self__.ch,self__.cs,meta15309__$1));
}));

(cljs.core.async.t_cljs$core$async15308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15310){
var self__ = this;
var _15310__$1 = this;
return self__.meta15309;
}));

(cljs.core.async.t_cljs$core$async15308.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15308.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15308.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15308.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15308.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15308.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15309","meta15309",470618331,null)], null);
}));

(cljs.core.async.t_cljs$core$async15308.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15308");

(cljs.core.async.t_cljs$core$async15308.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15308");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15308.
 */
cljs.core.async.__GT_t_cljs$core$async15308 = (function cljs$core$async$mult_$___GT_t_cljs$core$async15308(ch__$1,cs__$1,meta15309){
return (new cljs.core.async.t_cljs$core$async15308(ch__$1,cs__$1,meta15309));
});

}

return (new cljs.core.async.t_cljs$core$async15308(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13893__auto___18321 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = (function (state_15486){
var state_val_15489 = (state_15486[(1)]);
if((state_val_15489 === (7))){
var inst_15480 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15492_18324 = state_15486__$1;
(statearr_15492_18324[(2)] = inst_15480);

(statearr_15492_18324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (20))){
var inst_15371 = (state_15486[(7)]);
var inst_15385 = cljs.core.first(inst_15371);
var inst_15386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15385,(0),null);
var inst_15387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15385,(1),null);
var state_15486__$1 = (function (){var statearr_15496 = state_15486;
(statearr_15496[(8)] = inst_15386);

return statearr_15496;
})();
if(cljs.core.truth_(inst_15387)){
var statearr_15498_18328 = state_15486__$1;
(statearr_15498_18328[(1)] = (22));

} else {
var statearr_15499_18329 = state_15486__$1;
(statearr_15499_18329[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (27))){
var inst_15336 = (state_15486[(9)]);
var inst_15432 = (state_15486[(10)]);
var inst_15422 = (state_15486[(11)]);
var inst_15424 = (state_15486[(12)]);
var inst_15432__$1 = cljs.core._nth(inst_15422,inst_15424);
var inst_15433 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15432__$1,inst_15336,done);
var state_15486__$1 = (function (){var statearr_15501 = state_15486;
(statearr_15501[(10)] = inst_15432__$1);

return statearr_15501;
})();
if(cljs.core.truth_(inst_15433)){
var statearr_15502_18340 = state_15486__$1;
(statearr_15502_18340[(1)] = (30));

} else {
var statearr_15506_18343 = state_15486__$1;
(statearr_15506_18343[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (1))){
var state_15486__$1 = state_15486;
var statearr_15511_18344 = state_15486__$1;
(statearr_15511_18344[(2)] = null);

(statearr_15511_18344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (24))){
var inst_15371 = (state_15486[(7)]);
var inst_15392 = (state_15486[(2)]);
var inst_15393 = cljs.core.next(inst_15371);
var inst_15346 = inst_15393;
var inst_15348 = null;
var inst_15349 = (0);
var inst_15350 = (0);
var state_15486__$1 = (function (){var statearr_15512 = state_15486;
(statearr_15512[(13)] = inst_15348);

(statearr_15512[(14)] = inst_15392);

(statearr_15512[(15)] = inst_15350);

(statearr_15512[(16)] = inst_15346);

(statearr_15512[(17)] = inst_15349);

return statearr_15512;
})();
var statearr_15513_18354 = state_15486__$1;
(statearr_15513_18354[(2)] = null);

(statearr_15513_18354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (39))){
var state_15486__$1 = state_15486;
var statearr_15525_18357 = state_15486__$1;
(statearr_15525_18357[(2)] = null);

(statearr_15525_18357[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (4))){
var inst_15336 = (state_15486[(9)]);
var inst_15336__$1 = (state_15486[(2)]);
var inst_15337 = (inst_15336__$1 == null);
var state_15486__$1 = (function (){var statearr_15529 = state_15486;
(statearr_15529[(9)] = inst_15336__$1);

return statearr_15529;
})();
if(cljs.core.truth_(inst_15337)){
var statearr_15530_18361 = state_15486__$1;
(statearr_15530_18361[(1)] = (5));

} else {
var statearr_15531_18363 = state_15486__$1;
(statearr_15531_18363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (15))){
var inst_15348 = (state_15486[(13)]);
var inst_15350 = (state_15486[(15)]);
var inst_15346 = (state_15486[(16)]);
var inst_15349 = (state_15486[(17)]);
var inst_15366 = (state_15486[(2)]);
var inst_15367 = (inst_15350 + (1));
var tmp15517 = inst_15348;
var tmp15518 = inst_15346;
var tmp15519 = inst_15349;
var inst_15346__$1 = tmp15518;
var inst_15348__$1 = tmp15517;
var inst_15349__$1 = tmp15519;
var inst_15350__$1 = inst_15367;
var state_15486__$1 = (function (){var statearr_15537 = state_15486;
(statearr_15537[(13)] = inst_15348__$1);

(statearr_15537[(15)] = inst_15350__$1);

(statearr_15537[(18)] = inst_15366);

(statearr_15537[(16)] = inst_15346__$1);

(statearr_15537[(17)] = inst_15349__$1);

return statearr_15537;
})();
var statearr_15538_18364 = state_15486__$1;
(statearr_15538_18364[(2)] = null);

(statearr_15538_18364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (21))){
var inst_15396 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15544_18365 = state_15486__$1;
(statearr_15544_18365[(2)] = inst_15396);

(statearr_15544_18365[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (31))){
var inst_15432 = (state_15486[(10)]);
var inst_15436 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15432);
var state_15486__$1 = state_15486;
var statearr_15549_18367 = state_15486__$1;
(statearr_15549_18367[(2)] = inst_15436);

(statearr_15549_18367[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (32))){
var inst_15423 = (state_15486[(19)]);
var inst_15421 = (state_15486[(20)]);
var inst_15422 = (state_15486[(11)]);
var inst_15424 = (state_15486[(12)]);
var inst_15439 = (state_15486[(2)]);
var inst_15440 = (inst_15424 + (1));
var tmp15540 = inst_15423;
var tmp15541 = inst_15421;
var tmp15542 = inst_15422;
var inst_15421__$1 = tmp15541;
var inst_15422__$1 = tmp15542;
var inst_15423__$1 = tmp15540;
var inst_15424__$1 = inst_15440;
var state_15486__$1 = (function (){var statearr_15550 = state_15486;
(statearr_15550[(21)] = inst_15439);

(statearr_15550[(19)] = inst_15423__$1);

(statearr_15550[(20)] = inst_15421__$1);

(statearr_15550[(11)] = inst_15422__$1);

(statearr_15550[(12)] = inst_15424__$1);

return statearr_15550;
})();
var statearr_15551_18373 = state_15486__$1;
(statearr_15551_18373[(2)] = null);

(statearr_15551_18373[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (40))){
var inst_15452 = (state_15486[(22)]);
var inst_15456 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15452);
var state_15486__$1 = state_15486;
var statearr_15554_18375 = state_15486__$1;
(statearr_15554_18375[(2)] = inst_15456);

(statearr_15554_18375[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (33))){
var inst_15443 = (state_15486[(23)]);
var inst_15445 = cljs.core.chunked_seq_QMARK_(inst_15443);
var state_15486__$1 = state_15486;
if(inst_15445){
var statearr_15558_18378 = state_15486__$1;
(statearr_15558_18378[(1)] = (36));

} else {
var statearr_15559_18379 = state_15486__$1;
(statearr_15559_18379[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (13))){
var inst_15359 = (state_15486[(24)]);
var inst_15363 = cljs.core.async.close_BANG_(inst_15359);
var state_15486__$1 = state_15486;
var statearr_15560_18380 = state_15486__$1;
(statearr_15560_18380[(2)] = inst_15363);

(statearr_15560_18380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (22))){
var inst_15386 = (state_15486[(8)]);
var inst_15389 = cljs.core.async.close_BANG_(inst_15386);
var state_15486__$1 = state_15486;
var statearr_15564_18381 = state_15486__$1;
(statearr_15564_18381[(2)] = inst_15389);

(statearr_15564_18381[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (36))){
var inst_15443 = (state_15486[(23)]);
var inst_15447 = cljs.core.chunk_first(inst_15443);
var inst_15448 = cljs.core.chunk_rest(inst_15443);
var inst_15449 = cljs.core.count(inst_15447);
var inst_15421 = inst_15448;
var inst_15422 = inst_15447;
var inst_15423 = inst_15449;
var inst_15424 = (0);
var state_15486__$1 = (function (){var statearr_15565 = state_15486;
(statearr_15565[(19)] = inst_15423);

(statearr_15565[(20)] = inst_15421);

(statearr_15565[(11)] = inst_15422);

(statearr_15565[(12)] = inst_15424);

return statearr_15565;
})();
var statearr_15566_18385 = state_15486__$1;
(statearr_15566_18385[(2)] = null);

(statearr_15566_18385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (41))){
var inst_15443 = (state_15486[(23)]);
var inst_15458 = (state_15486[(2)]);
var inst_15459 = cljs.core.next(inst_15443);
var inst_15421 = inst_15459;
var inst_15422 = null;
var inst_15423 = (0);
var inst_15424 = (0);
var state_15486__$1 = (function (){var statearr_15568 = state_15486;
(statearr_15568[(19)] = inst_15423);

(statearr_15568[(20)] = inst_15421);

(statearr_15568[(25)] = inst_15458);

(statearr_15568[(11)] = inst_15422);

(statearr_15568[(12)] = inst_15424);

return statearr_15568;
})();
var statearr_15574_18387 = state_15486__$1;
(statearr_15574_18387[(2)] = null);

(statearr_15574_18387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (43))){
var state_15486__$1 = state_15486;
var statearr_15575_18389 = state_15486__$1;
(statearr_15575_18389[(2)] = null);

(statearr_15575_18389[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (29))){
var inst_15467 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15577_18392 = state_15486__$1;
(statearr_15577_18392[(2)] = inst_15467);

(statearr_15577_18392[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (44))){
var inst_15477 = (state_15486[(2)]);
var state_15486__$1 = (function (){var statearr_15578 = state_15486;
(statearr_15578[(26)] = inst_15477);

return statearr_15578;
})();
var statearr_15581_18401 = state_15486__$1;
(statearr_15581_18401[(2)] = null);

(statearr_15581_18401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (6))){
var inst_15410 = (state_15486[(27)]);
var inst_15409 = cljs.core.deref(cs);
var inst_15410__$1 = cljs.core.keys(inst_15409);
var inst_15412 = cljs.core.count(inst_15410__$1);
var inst_15413 = cljs.core.reset_BANG_(dctr,inst_15412);
var inst_15420 = cljs.core.seq(inst_15410__$1);
var inst_15421 = inst_15420;
var inst_15422 = null;
var inst_15423 = (0);
var inst_15424 = (0);
var state_15486__$1 = (function (){var statearr_15582 = state_15486;
(statearr_15582[(19)] = inst_15423);

(statearr_15582[(28)] = inst_15413);

(statearr_15582[(20)] = inst_15421);

(statearr_15582[(11)] = inst_15422);

(statearr_15582[(27)] = inst_15410__$1);

(statearr_15582[(12)] = inst_15424);

return statearr_15582;
})();
var statearr_15583_18404 = state_15486__$1;
(statearr_15583_18404[(2)] = null);

(statearr_15583_18404[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (28))){
var inst_15421 = (state_15486[(20)]);
var inst_15443 = (state_15486[(23)]);
var inst_15443__$1 = cljs.core.seq(inst_15421);
var state_15486__$1 = (function (){var statearr_15588 = state_15486;
(statearr_15588[(23)] = inst_15443__$1);

return statearr_15588;
})();
if(inst_15443__$1){
var statearr_15589_18411 = state_15486__$1;
(statearr_15589_18411[(1)] = (33));

} else {
var statearr_15590_18412 = state_15486__$1;
(statearr_15590_18412[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (25))){
var inst_15423 = (state_15486[(19)]);
var inst_15424 = (state_15486[(12)]);
var inst_15428 = (inst_15424 < inst_15423);
var inst_15429 = inst_15428;
var state_15486__$1 = state_15486;
if(cljs.core.truth_(inst_15429)){
var statearr_15592_18416 = state_15486__$1;
(statearr_15592_18416[(1)] = (27));

} else {
var statearr_15593_18419 = state_15486__$1;
(statearr_15593_18419[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (34))){
var state_15486__$1 = state_15486;
var statearr_15595_18421 = state_15486__$1;
(statearr_15595_18421[(2)] = null);

(statearr_15595_18421[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (17))){
var state_15486__$1 = state_15486;
var statearr_15597_18423 = state_15486__$1;
(statearr_15597_18423[(2)] = null);

(statearr_15597_18423[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (3))){
var inst_15482 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15486__$1,inst_15482);
} else {
if((state_val_15489 === (12))){
var inst_15401 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15601_18426 = state_15486__$1;
(statearr_15601_18426[(2)] = inst_15401);

(statearr_15601_18426[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (2))){
var state_15486__$1 = state_15486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15486__$1,(4),ch);
} else {
if((state_val_15489 === (23))){
var state_15486__$1 = state_15486;
var statearr_15605_18429 = state_15486__$1;
(statearr_15605_18429[(2)] = null);

(statearr_15605_18429[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (35))){
var inst_15465 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15606_18432 = state_15486__$1;
(statearr_15606_18432[(2)] = inst_15465);

(statearr_15606_18432[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (19))){
var inst_15371 = (state_15486[(7)]);
var inst_15375 = cljs.core.chunk_first(inst_15371);
var inst_15378 = cljs.core.chunk_rest(inst_15371);
var inst_15379 = cljs.core.count(inst_15375);
var inst_15346 = inst_15378;
var inst_15348 = inst_15375;
var inst_15349 = inst_15379;
var inst_15350 = (0);
var state_15486__$1 = (function (){var statearr_15607 = state_15486;
(statearr_15607[(13)] = inst_15348);

(statearr_15607[(15)] = inst_15350);

(statearr_15607[(16)] = inst_15346);

(statearr_15607[(17)] = inst_15349);

return statearr_15607;
})();
var statearr_15608_18436 = state_15486__$1;
(statearr_15608_18436[(2)] = null);

(statearr_15608_18436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (11))){
var inst_15371 = (state_15486[(7)]);
var inst_15346 = (state_15486[(16)]);
var inst_15371__$1 = cljs.core.seq(inst_15346);
var state_15486__$1 = (function (){var statearr_15609 = state_15486;
(statearr_15609[(7)] = inst_15371__$1);

return statearr_15609;
})();
if(inst_15371__$1){
var statearr_15610_18441 = state_15486__$1;
(statearr_15610_18441[(1)] = (16));

} else {
var statearr_15612_18448 = state_15486__$1;
(statearr_15612_18448[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (9))){
var inst_15403 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15613_18450 = state_15486__$1;
(statearr_15613_18450[(2)] = inst_15403);

(statearr_15613_18450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (5))){
var inst_15343 = cljs.core.deref(cs);
var inst_15344 = cljs.core.seq(inst_15343);
var inst_15346 = inst_15344;
var inst_15348 = null;
var inst_15349 = (0);
var inst_15350 = (0);
var state_15486__$1 = (function (){var statearr_15624 = state_15486;
(statearr_15624[(13)] = inst_15348);

(statearr_15624[(15)] = inst_15350);

(statearr_15624[(16)] = inst_15346);

(statearr_15624[(17)] = inst_15349);

return statearr_15624;
})();
var statearr_15625_18459 = state_15486__$1;
(statearr_15625_18459[(2)] = null);

(statearr_15625_18459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (14))){
var state_15486__$1 = state_15486;
var statearr_15628_18461 = state_15486__$1;
(statearr_15628_18461[(2)] = null);

(statearr_15628_18461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (45))){
var inst_15474 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15630_18466 = state_15486__$1;
(statearr_15630_18466[(2)] = inst_15474);

(statearr_15630_18466[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (26))){
var inst_15410 = (state_15486[(27)]);
var inst_15469 = (state_15486[(2)]);
var inst_15470 = cljs.core.seq(inst_15410);
var state_15486__$1 = (function (){var statearr_15631 = state_15486;
(statearr_15631[(29)] = inst_15469);

return statearr_15631;
})();
if(inst_15470){
var statearr_15636_18469 = state_15486__$1;
(statearr_15636_18469[(1)] = (42));

} else {
var statearr_15637_18470 = state_15486__$1;
(statearr_15637_18470[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (16))){
var inst_15371 = (state_15486[(7)]);
var inst_15373 = cljs.core.chunked_seq_QMARK_(inst_15371);
var state_15486__$1 = state_15486;
if(inst_15373){
var statearr_15642_18472 = state_15486__$1;
(statearr_15642_18472[(1)] = (19));

} else {
var statearr_15643_18473 = state_15486__$1;
(statearr_15643_18473[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (38))){
var inst_15462 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15648_18476 = state_15486__$1;
(statearr_15648_18476[(2)] = inst_15462);

(statearr_15648_18476[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (30))){
var state_15486__$1 = state_15486;
var statearr_15650_18477 = state_15486__$1;
(statearr_15650_18477[(2)] = null);

(statearr_15650_18477[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (10))){
var inst_15348 = (state_15486[(13)]);
var inst_15350 = (state_15486[(15)]);
var inst_15358 = cljs.core._nth(inst_15348,inst_15350);
var inst_15359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15358,(0),null);
var inst_15361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15358,(1),null);
var state_15486__$1 = (function (){var statearr_15652 = state_15486;
(statearr_15652[(24)] = inst_15359);

return statearr_15652;
})();
if(cljs.core.truth_(inst_15361)){
var statearr_15653_18482 = state_15486__$1;
(statearr_15653_18482[(1)] = (13));

} else {
var statearr_15656_18483 = state_15486__$1;
(statearr_15656_18483[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (18))){
var inst_15399 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15662_18484 = state_15486__$1;
(statearr_15662_18484[(2)] = inst_15399);

(statearr_15662_18484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (42))){
var state_15486__$1 = state_15486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15486__$1,(45),dchan);
} else {
if((state_val_15489 === (37))){
var inst_15336 = (state_15486[(9)]);
var inst_15452 = (state_15486[(22)]);
var inst_15443 = (state_15486[(23)]);
var inst_15452__$1 = cljs.core.first(inst_15443);
var inst_15453 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15452__$1,inst_15336,done);
var state_15486__$1 = (function (){var statearr_15663 = state_15486;
(statearr_15663[(22)] = inst_15452__$1);

return statearr_15663;
})();
if(cljs.core.truth_(inst_15453)){
var statearr_15664_18491 = state_15486__$1;
(statearr_15664_18491[(1)] = (39));

} else {
var statearr_15665_18492 = state_15486__$1;
(statearr_15665_18492[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15489 === (8))){
var inst_15350 = (state_15486[(15)]);
var inst_15349 = (state_15486[(17)]);
var inst_15352 = (inst_15350 < inst_15349);
var inst_15353 = inst_15352;
var state_15486__$1 = state_15486;
if(cljs.core.truth_(inst_15353)){
var statearr_15667_18497 = state_15486__$1;
(statearr_15667_18497[(1)] = (10));

} else {
var statearr_15668_18498 = state_15486__$1;
(statearr_15668_18498[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13618__auto__ = null;
var cljs$core$async$mult_$_state_machine__13618__auto____0 = (function (){
var statearr_15669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15669[(0)] = cljs$core$async$mult_$_state_machine__13618__auto__);

(statearr_15669[(1)] = (1));

return statearr_15669;
});
var cljs$core$async$mult_$_state_machine__13618__auto____1 = (function (state_15486){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_15486);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e15670){var ex__13621__auto__ = e15670;
var statearr_15671_18499 = state_15486;
(statearr_15671_18499[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_15486[(4)]))){
var statearr_15672_18506 = state_15486;
(statearr_15672_18506[(1)] = cljs.core.first((state_15486[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18510 = state_15486;
state_15486 = G__18510;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13618__auto__ = function(state_15486){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13618__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13618__auto____1.call(this,state_15486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13618__auto____0;
cljs$core$async$mult_$_state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13618__auto____1;
return cljs$core$async$mult_$_state_machine__13618__auto__;
})()
})();
var state__13895__auto__ = (function (){var statearr_15683 = f__13894__auto__();
(statearr_15683[(6)] = c__13893__auto___18321);

return statearr_15683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15689 = arguments.length;
switch (G__15689) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18524 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18524(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18534 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18534(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18538 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18538(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18547 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18547(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18557 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18557(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18561 = arguments.length;
var i__5770__auto___18562 = (0);
while(true){
if((i__5770__auto___18562 < len__5769__auto___18561)){
args__5775__auto__.push((arguments[i__5770__auto___18562]));

var G__18563 = (i__5770__auto___18562 + (1));
i__5770__auto___18562 = G__18563;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15731){
var map__15734 = p__15731;
var map__15734__$1 = cljs.core.__destructure_map(map__15734);
var opts = map__15734__$1;
var statearr_15735_18569 = state;
(statearr_15735_18569[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15742_18572 = state;
(statearr_15742_18572[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15743_18582 = state;
(statearr_15743_18582[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15722){
var G__15723 = cljs.core.first(seq15722);
var seq15722__$1 = cljs.core.next(seq15722);
var G__15724 = cljs.core.first(seq15722__$1);
var seq15722__$2 = cljs.core.next(seq15722__$1);
var G__15725 = cljs.core.first(seq15722__$2);
var seq15722__$3 = cljs.core.next(seq15722__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15723,G__15724,G__15725,seq15722__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15759 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15759 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15760){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15760 = meta15760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15761,meta15760__$1){
var self__ = this;
var _15761__$1 = this;
return (new cljs.core.async.t_cljs$core$async15759(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15760__$1));
}));

(cljs.core.async.t_cljs$core$async15759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15761){
var self__ = this;
var _15761__$1 = this;
return self__.meta15760;
}));

(cljs.core.async.t_cljs$core$async15759.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15759.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15759.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15759.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15759.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15759.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15759.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15759.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15760","meta15760",440708931,null)], null);
}));

(cljs.core.async.t_cljs$core$async15759.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15759");

(cljs.core.async.t_cljs$core$async15759.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15759");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15759.
 */
cljs.core.async.__GT_t_cljs$core$async15759 = (function cljs$core$async$mix_$___GT_t_cljs$core$async15759(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15760){
return (new cljs.core.async.t_cljs$core$async15759(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15760));
});

}

return (new cljs.core.async.t_cljs$core$async15759(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13893__auto___18626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = (function (state_15890){
var state_val_15891 = (state_15890[(1)]);
if((state_val_15891 === (7))){
var inst_15840 = (state_15890[(2)]);
var state_15890__$1 = state_15890;
if(cljs.core.truth_(inst_15840)){
var statearr_15901_18629 = state_15890__$1;
(statearr_15901_18629[(1)] = (8));

} else {
var statearr_15903_18630 = state_15890__$1;
(statearr_15903_18630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (20))){
var inst_15830 = (state_15890[(7)]);
var state_15890__$1 = state_15890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15890__$1,(23),out,inst_15830);
} else {
if((state_val_15891 === (1))){
var inst_15805 = calc_state();
var inst_15811 = cljs.core.__destructure_map(inst_15805);
var inst_15812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15811,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15811,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15811,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15815 = inst_15805;
var state_15890__$1 = (function (){var statearr_15913 = state_15890;
(statearr_15913[(8)] = inst_15814);

(statearr_15913[(9)] = inst_15813);

(statearr_15913[(10)] = inst_15815);

(statearr_15913[(11)] = inst_15812);

return statearr_15913;
})();
var statearr_15915_18631 = state_15890__$1;
(statearr_15915_18631[(2)] = null);

(statearr_15915_18631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (24))){
var inst_15819 = (state_15890[(12)]);
var inst_15815 = inst_15819;
var state_15890__$1 = (function (){var statearr_15918 = state_15890;
(statearr_15918[(10)] = inst_15815);

return statearr_15918;
})();
var statearr_15919_18635 = state_15890__$1;
(statearr_15919_18635[(2)] = null);

(statearr_15919_18635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (4))){
var inst_15833 = (state_15890[(13)]);
var inst_15830 = (state_15890[(7)]);
var inst_15829 = (state_15890[(2)]);
var inst_15830__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15829,(0),null);
var inst_15832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15829,(1),null);
var inst_15833__$1 = (inst_15830__$1 == null);
var state_15890__$1 = (function (){var statearr_15923 = state_15890;
(statearr_15923[(13)] = inst_15833__$1);

(statearr_15923[(7)] = inst_15830__$1);

(statearr_15923[(14)] = inst_15832);

return statearr_15923;
})();
if(cljs.core.truth_(inst_15833__$1)){
var statearr_15924_18637 = state_15890__$1;
(statearr_15924_18637[(1)] = (5));

} else {
var statearr_15926_18638 = state_15890__$1;
(statearr_15926_18638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (15))){
var inst_15821 = (state_15890[(15)]);
var inst_15855 = (state_15890[(16)]);
var inst_15855__$1 = cljs.core.empty_QMARK_(inst_15821);
var state_15890__$1 = (function (){var statearr_15929 = state_15890;
(statearr_15929[(16)] = inst_15855__$1);

return statearr_15929;
})();
if(inst_15855__$1){
var statearr_15932_18639 = state_15890__$1;
(statearr_15932_18639[(1)] = (17));

} else {
var statearr_15937_18640 = state_15890__$1;
(statearr_15937_18640[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (21))){
var inst_15819 = (state_15890[(12)]);
var inst_15815 = inst_15819;
var state_15890__$1 = (function (){var statearr_15938 = state_15890;
(statearr_15938[(10)] = inst_15815);

return statearr_15938;
})();
var statearr_15940_18643 = state_15890__$1;
(statearr_15940_18643[(2)] = null);

(statearr_15940_18643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (13))){
var inst_15848 = (state_15890[(2)]);
var inst_15849 = calc_state();
var inst_15815 = inst_15849;
var state_15890__$1 = (function (){var statearr_15944 = state_15890;
(statearr_15944[(17)] = inst_15848);

(statearr_15944[(10)] = inst_15815);

return statearr_15944;
})();
var statearr_15945_18647 = state_15890__$1;
(statearr_15945_18647[(2)] = null);

(statearr_15945_18647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (22))){
var inst_15879 = (state_15890[(2)]);
var state_15890__$1 = state_15890;
var statearr_15949_18648 = state_15890__$1;
(statearr_15949_18648[(2)] = inst_15879);

(statearr_15949_18648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (6))){
var inst_15832 = (state_15890[(14)]);
var inst_15837 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15832,change);
var state_15890__$1 = state_15890;
var statearr_15953_18649 = state_15890__$1;
(statearr_15953_18649[(2)] = inst_15837);

(statearr_15953_18649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (25))){
var state_15890__$1 = state_15890;
var statearr_15956_18650 = state_15890__$1;
(statearr_15956_18650[(2)] = null);

(statearr_15956_18650[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (17))){
var inst_15823 = (state_15890[(18)]);
var inst_15832 = (state_15890[(14)]);
var inst_15859 = (inst_15823.cljs$core$IFn$_invoke$arity$1 ? inst_15823.cljs$core$IFn$_invoke$arity$1(inst_15832) : inst_15823.call(null,inst_15832));
var inst_15860 = cljs.core.not(inst_15859);
var state_15890__$1 = state_15890;
var statearr_15963_18654 = state_15890__$1;
(statearr_15963_18654[(2)] = inst_15860);

(statearr_15963_18654[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (3))){
var inst_15883 = (state_15890[(2)]);
var state_15890__$1 = state_15890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15890__$1,inst_15883);
} else {
if((state_val_15891 === (12))){
var state_15890__$1 = state_15890;
var statearr_15965_18656 = state_15890__$1;
(statearr_15965_18656[(2)] = null);

(statearr_15965_18656[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (2))){
var inst_15819 = (state_15890[(12)]);
var inst_15815 = (state_15890[(10)]);
var inst_15819__$1 = cljs.core.__destructure_map(inst_15815);
var inst_15821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15819__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15819__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15819__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15890__$1 = (function (){var statearr_15969 = state_15890;
(statearr_15969[(12)] = inst_15819__$1);

(statearr_15969[(15)] = inst_15821);

(statearr_15969[(18)] = inst_15823);

return statearr_15969;
})();
return cljs.core.async.ioc_alts_BANG_(state_15890__$1,(4),inst_15824);
} else {
if((state_val_15891 === (23))){
var inst_15870 = (state_15890[(2)]);
var state_15890__$1 = state_15890;
if(cljs.core.truth_(inst_15870)){
var statearr_15972_18657 = state_15890__$1;
(statearr_15972_18657[(1)] = (24));

} else {
var statearr_15973_18662 = state_15890__$1;
(statearr_15973_18662[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (19))){
var inst_15863 = (state_15890[(2)]);
var state_15890__$1 = state_15890;
var statearr_15976_18670 = state_15890__$1;
(statearr_15976_18670[(2)] = inst_15863);

(statearr_15976_18670[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (11))){
var inst_15832 = (state_15890[(14)]);
var inst_15845 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15832);
var state_15890__$1 = state_15890;
var statearr_15978_18676 = state_15890__$1;
(statearr_15978_18676[(2)] = inst_15845);

(statearr_15978_18676[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (9))){
var inst_15852 = (state_15890[(19)]);
var inst_15821 = (state_15890[(15)]);
var inst_15832 = (state_15890[(14)]);
var inst_15852__$1 = (inst_15821.cljs$core$IFn$_invoke$arity$1 ? inst_15821.cljs$core$IFn$_invoke$arity$1(inst_15832) : inst_15821.call(null,inst_15832));
var state_15890__$1 = (function (){var statearr_15983 = state_15890;
(statearr_15983[(19)] = inst_15852__$1);

return statearr_15983;
})();
if(cljs.core.truth_(inst_15852__$1)){
var statearr_15984_18691 = state_15890__$1;
(statearr_15984_18691[(1)] = (14));

} else {
var statearr_15985_18693 = state_15890__$1;
(statearr_15985_18693[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (5))){
var inst_15833 = (state_15890[(13)]);
var state_15890__$1 = state_15890;
var statearr_15990_18701 = state_15890__$1;
(statearr_15990_18701[(2)] = inst_15833);

(statearr_15990_18701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (14))){
var inst_15852 = (state_15890[(19)]);
var state_15890__$1 = state_15890;
var statearr_15993_18706 = state_15890__$1;
(statearr_15993_18706[(2)] = inst_15852);

(statearr_15993_18706[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (26))){
var inst_15875 = (state_15890[(2)]);
var state_15890__$1 = state_15890;
var statearr_15998_18708 = state_15890__$1;
(statearr_15998_18708[(2)] = inst_15875);

(statearr_15998_18708[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (16))){
var inst_15866 = (state_15890[(2)]);
var state_15890__$1 = state_15890;
if(cljs.core.truth_(inst_15866)){
var statearr_16001_18714 = state_15890__$1;
(statearr_16001_18714[(1)] = (20));

} else {
var statearr_16002_18716 = state_15890__$1;
(statearr_16002_18716[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (10))){
var inst_15881 = (state_15890[(2)]);
var state_15890__$1 = state_15890;
var statearr_16005_18722 = state_15890__$1;
(statearr_16005_18722[(2)] = inst_15881);

(statearr_16005_18722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (18))){
var inst_15855 = (state_15890[(16)]);
var state_15890__$1 = state_15890;
var statearr_16008_18732 = state_15890__$1;
(statearr_16008_18732[(2)] = inst_15855);

(statearr_16008_18732[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15891 === (8))){
var inst_15830 = (state_15890[(7)]);
var inst_15842 = (inst_15830 == null);
var state_15890__$1 = state_15890;
if(cljs.core.truth_(inst_15842)){
var statearr_16010_18737 = state_15890__$1;
(statearr_16010_18737[(1)] = (11));

} else {
var statearr_16012_18738 = state_15890__$1;
(statearr_16012_18738[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13618__auto__ = null;
var cljs$core$async$mix_$_state_machine__13618__auto____0 = (function (){
var statearr_16019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16019[(0)] = cljs$core$async$mix_$_state_machine__13618__auto__);

(statearr_16019[(1)] = (1));

return statearr_16019;
});
var cljs$core$async$mix_$_state_machine__13618__auto____1 = (function (state_15890){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_15890);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e16022){var ex__13621__auto__ = e16022;
var statearr_16024_18744 = state_15890;
(statearr_16024_18744[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_15890[(4)]))){
var statearr_16026_18745 = state_15890;
(statearr_16026_18745[(1)] = cljs.core.first((state_15890[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18747 = state_15890;
state_15890 = G__18747;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13618__auto__ = function(state_15890){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13618__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13618__auto____1.call(this,state_15890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13618__auto____0;
cljs$core$async$mix_$_state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13618__auto____1;
return cljs$core$async$mix_$_state_machine__13618__auto__;
})()
})();
var state__13895__auto__ = (function (){var statearr_16031 = f__13894__auto__();
(statearr_16031[(6)] = c__13893__auto___18626);

return statearr_16031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18754 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18754(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18756 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18756(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18764 = (function() {
var G__18765 = null;
var G__18765__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18765__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18765 = function(p,v){
switch(arguments.length){
case 1:
return G__18765__1.call(this,p);
case 2:
return G__18765__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18765.cljs$core$IFn$_invoke$arity$1 = G__18765__1;
G__18765.cljs$core$IFn$_invoke$arity$2 = G__18765__2;
return G__18765;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16100 = arguments.length;
switch (G__16100) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18764(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18764(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16127 = arguments.length;
switch (G__16127) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16121_SHARP_){
if(cljs.core.truth_((p1__16121_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16121_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16121_SHARP_.call(null,topic)))){
return p1__16121_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16121_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16138 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16138 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16139){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16139 = meta16139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16140,meta16139__$1){
var self__ = this;
var _16140__$1 = this;
return (new cljs.core.async.t_cljs$core$async16138(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16139__$1));
}));

(cljs.core.async.t_cljs$core$async16138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16140){
var self__ = this;
var _16140__$1 = this;
return self__.meta16139;
}));

(cljs.core.async.t_cljs$core$async16138.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16138.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16138.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16138.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16138.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16138.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16138.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16139","meta16139",1357782485,null)], null);
}));

(cljs.core.async.t_cljs$core$async16138.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16138");

(cljs.core.async.t_cljs$core$async16138.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16138");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16138.
 */
cljs.core.async.__GT_t_cljs$core$async16138 = (function cljs$core$async$__GT_t_cljs$core$async16138(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16139){
return (new cljs.core.async.t_cljs$core$async16138(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16139));
});

}

return (new cljs.core.async.t_cljs$core$async16138(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13893__auto___18794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = (function (state_16305){
var state_val_16308 = (state_16305[(1)]);
if((state_val_16308 === (7))){
var inst_16301 = (state_16305[(2)]);
var state_16305__$1 = state_16305;
var statearr_16313_18798 = state_16305__$1;
(statearr_16313_18798[(2)] = inst_16301);

(statearr_16313_18798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (20))){
var state_16305__$1 = state_16305;
var statearr_16317_18803 = state_16305__$1;
(statearr_16317_18803[(2)] = null);

(statearr_16317_18803[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (1))){
var state_16305__$1 = state_16305;
var statearr_16321_18804 = state_16305__$1;
(statearr_16321_18804[(2)] = null);

(statearr_16321_18804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (24))){
var inst_16282 = (state_16305[(7)]);
var inst_16293 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16282);
var state_16305__$1 = state_16305;
var statearr_16330_18805 = state_16305__$1;
(statearr_16330_18805[(2)] = inst_16293);

(statearr_16330_18805[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (4))){
var inst_16204 = (state_16305[(8)]);
var inst_16204__$1 = (state_16305[(2)]);
var inst_16205 = (inst_16204__$1 == null);
var state_16305__$1 = (function (){var statearr_16331 = state_16305;
(statearr_16331[(8)] = inst_16204__$1);

return statearr_16331;
})();
if(cljs.core.truth_(inst_16205)){
var statearr_16332_18807 = state_16305__$1;
(statearr_16332_18807[(1)] = (5));

} else {
var statearr_16335_18808 = state_16305__$1;
(statearr_16335_18808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (15))){
var inst_16275 = (state_16305[(2)]);
var state_16305__$1 = state_16305;
var statearr_16343_18809 = state_16305__$1;
(statearr_16343_18809[(2)] = inst_16275);

(statearr_16343_18809[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (21))){
var inst_16298 = (state_16305[(2)]);
var state_16305__$1 = (function (){var statearr_16349 = state_16305;
(statearr_16349[(9)] = inst_16298);

return statearr_16349;
})();
var statearr_16350_18811 = state_16305__$1;
(statearr_16350_18811[(2)] = null);

(statearr_16350_18811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (13))){
var inst_16243 = (state_16305[(10)]);
var inst_16253 = cljs.core.chunked_seq_QMARK_(inst_16243);
var state_16305__$1 = state_16305;
if(inst_16253){
var statearr_16355_18812 = state_16305__$1;
(statearr_16355_18812[(1)] = (16));

} else {
var statearr_16356_18813 = state_16305__$1;
(statearr_16356_18813[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (22))){
var inst_16290 = (state_16305[(2)]);
var state_16305__$1 = state_16305;
if(cljs.core.truth_(inst_16290)){
var statearr_16359_18815 = state_16305__$1;
(statearr_16359_18815[(1)] = (23));

} else {
var statearr_16363_18816 = state_16305__$1;
(statearr_16363_18816[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (6))){
var inst_16286 = (state_16305[(11)]);
var inst_16204 = (state_16305[(8)]);
var inst_16282 = (state_16305[(7)]);
var inst_16282__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16204) : topic_fn.call(null,inst_16204));
var inst_16285 = cljs.core.deref(mults);
var inst_16286__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16285,inst_16282__$1);
var state_16305__$1 = (function (){var statearr_16375 = state_16305;
(statearr_16375[(11)] = inst_16286__$1);

(statearr_16375[(7)] = inst_16282__$1);

return statearr_16375;
})();
if(cljs.core.truth_(inst_16286__$1)){
var statearr_16385_18818 = state_16305__$1;
(statearr_16385_18818[(1)] = (19));

} else {
var statearr_16388_18819 = state_16305__$1;
(statearr_16388_18819[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (25))){
var inst_16295 = (state_16305[(2)]);
var state_16305__$1 = state_16305;
var statearr_16390_18820 = state_16305__$1;
(statearr_16390_18820[(2)] = inst_16295);

(statearr_16390_18820[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (17))){
var inst_16243 = (state_16305[(10)]);
var inst_16265 = cljs.core.first(inst_16243);
var inst_16266 = cljs.core.async.muxch_STAR_(inst_16265);
var inst_16267 = cljs.core.async.close_BANG_(inst_16266);
var inst_16269 = cljs.core.next(inst_16243);
var inst_16220 = inst_16269;
var inst_16221 = null;
var inst_16222 = (0);
var inst_16223 = (0);
var state_16305__$1 = (function (){var statearr_16397 = state_16305;
(statearr_16397[(12)] = inst_16267);

(statearr_16397[(13)] = inst_16221);

(statearr_16397[(14)] = inst_16220);

(statearr_16397[(15)] = inst_16222);

(statearr_16397[(16)] = inst_16223);

return statearr_16397;
})();
var statearr_16405_18822 = state_16305__$1;
(statearr_16405_18822[(2)] = null);

(statearr_16405_18822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (3))){
var inst_16303 = (state_16305[(2)]);
var state_16305__$1 = state_16305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16305__$1,inst_16303);
} else {
if((state_val_16308 === (12))){
var inst_16277 = (state_16305[(2)]);
var state_16305__$1 = state_16305;
var statearr_16412_18824 = state_16305__$1;
(statearr_16412_18824[(2)] = inst_16277);

(statearr_16412_18824[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (2))){
var state_16305__$1 = state_16305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16305__$1,(4),ch);
} else {
if((state_val_16308 === (23))){
var state_16305__$1 = state_16305;
var statearr_16416_18825 = state_16305__$1;
(statearr_16416_18825[(2)] = null);

(statearr_16416_18825[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (19))){
var inst_16286 = (state_16305[(11)]);
var inst_16204 = (state_16305[(8)]);
var inst_16288 = cljs.core.async.muxch_STAR_(inst_16286);
var state_16305__$1 = state_16305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16305__$1,(22),inst_16288,inst_16204);
} else {
if((state_val_16308 === (11))){
var inst_16220 = (state_16305[(14)]);
var inst_16243 = (state_16305[(10)]);
var inst_16243__$1 = cljs.core.seq(inst_16220);
var state_16305__$1 = (function (){var statearr_16418 = state_16305;
(statearr_16418[(10)] = inst_16243__$1);

return statearr_16418;
})();
if(inst_16243__$1){
var statearr_16420_18829 = state_16305__$1;
(statearr_16420_18829[(1)] = (13));

} else {
var statearr_16422_18830 = state_16305__$1;
(statearr_16422_18830[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (9))){
var inst_16279 = (state_16305[(2)]);
var state_16305__$1 = state_16305;
var statearr_16430_18831 = state_16305__$1;
(statearr_16430_18831[(2)] = inst_16279);

(statearr_16430_18831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (5))){
var inst_16217 = cljs.core.deref(mults);
var inst_16218 = cljs.core.vals(inst_16217);
var inst_16219 = cljs.core.seq(inst_16218);
var inst_16220 = inst_16219;
var inst_16221 = null;
var inst_16222 = (0);
var inst_16223 = (0);
var state_16305__$1 = (function (){var statearr_16441 = state_16305;
(statearr_16441[(13)] = inst_16221);

(statearr_16441[(14)] = inst_16220);

(statearr_16441[(15)] = inst_16222);

(statearr_16441[(16)] = inst_16223);

return statearr_16441;
})();
var statearr_16446_18833 = state_16305__$1;
(statearr_16446_18833[(2)] = null);

(statearr_16446_18833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (14))){
var state_16305__$1 = state_16305;
var statearr_16453_18834 = state_16305__$1;
(statearr_16453_18834[(2)] = null);

(statearr_16453_18834[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (16))){
var inst_16243 = (state_16305[(10)]);
var inst_16256 = cljs.core.chunk_first(inst_16243);
var inst_16257 = cljs.core.chunk_rest(inst_16243);
var inst_16261 = cljs.core.count(inst_16256);
var inst_16220 = inst_16257;
var inst_16221 = inst_16256;
var inst_16222 = inst_16261;
var inst_16223 = (0);
var state_16305__$1 = (function (){var statearr_16457 = state_16305;
(statearr_16457[(13)] = inst_16221);

(statearr_16457[(14)] = inst_16220);

(statearr_16457[(15)] = inst_16222);

(statearr_16457[(16)] = inst_16223);

return statearr_16457;
})();
var statearr_16462_18835 = state_16305__$1;
(statearr_16462_18835[(2)] = null);

(statearr_16462_18835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (10))){
var inst_16221 = (state_16305[(13)]);
var inst_16220 = (state_16305[(14)]);
var inst_16222 = (state_16305[(15)]);
var inst_16223 = (state_16305[(16)]);
var inst_16234 = cljs.core._nth(inst_16221,inst_16223);
var inst_16235 = cljs.core.async.muxch_STAR_(inst_16234);
var inst_16236 = cljs.core.async.close_BANG_(inst_16235);
var inst_16239 = (inst_16223 + (1));
var tmp16447 = inst_16221;
var tmp16448 = inst_16220;
var tmp16449 = inst_16222;
var inst_16220__$1 = tmp16448;
var inst_16221__$1 = tmp16447;
var inst_16222__$1 = tmp16449;
var inst_16223__$1 = inst_16239;
var state_16305__$1 = (function (){var statearr_16476 = state_16305;
(statearr_16476[(13)] = inst_16221__$1);

(statearr_16476[(14)] = inst_16220__$1);

(statearr_16476[(15)] = inst_16222__$1);

(statearr_16476[(16)] = inst_16223__$1);

(statearr_16476[(17)] = inst_16236);

return statearr_16476;
})();
var statearr_16479_18839 = state_16305__$1;
(statearr_16479_18839[(2)] = null);

(statearr_16479_18839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (18))){
var inst_16272 = (state_16305[(2)]);
var state_16305__$1 = state_16305;
var statearr_16482_18840 = state_16305__$1;
(statearr_16482_18840[(2)] = inst_16272);

(statearr_16482_18840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (8))){
var inst_16222 = (state_16305[(15)]);
var inst_16223 = (state_16305[(16)]);
var inst_16227 = (inst_16223 < inst_16222);
var inst_16228 = inst_16227;
var state_16305__$1 = state_16305;
if(cljs.core.truth_(inst_16228)){
var statearr_16486_18841 = state_16305__$1;
(statearr_16486_18841[(1)] = (10));

} else {
var statearr_16488_18842 = state_16305__$1;
(statearr_16488_18842[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13618__auto__ = null;
var cljs$core$async$state_machine__13618__auto____0 = (function (){
var statearr_16491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16491[(0)] = cljs$core$async$state_machine__13618__auto__);

(statearr_16491[(1)] = (1));

return statearr_16491;
});
var cljs$core$async$state_machine__13618__auto____1 = (function (state_16305){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_16305);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e16492){var ex__13621__auto__ = e16492;
var statearr_16493_18844 = state_16305;
(statearr_16493_18844[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_16305[(4)]))){
var statearr_16494_18845 = state_16305;
(statearr_16494_18845[(1)] = cljs.core.first((state_16305[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18847 = state_16305;
state_16305 = G__18847;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
cljs$core$async$state_machine__13618__auto__ = function(state_16305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13618__auto____1.call(this,state_16305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13618__auto____0;
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13618__auto____1;
return cljs$core$async$state_machine__13618__auto__;
})()
})();
var state__13895__auto__ = (function (){var statearr_16515 = f__13894__auto__();
(statearr_16515[(6)] = c__13893__auto___18794);

return statearr_16515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16521 = arguments.length;
switch (G__16521) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16553 = arguments.length;
switch (G__16553) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16562 = arguments.length;
switch (G__16562) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13893__auto___18857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = (function (state_16663){
var state_val_16664 = (state_16663[(1)]);
if((state_val_16664 === (7))){
var state_16663__$1 = state_16663;
var statearr_16666_18863 = state_16663__$1;
(statearr_16666_18863[(2)] = null);

(statearr_16666_18863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16664 === (1))){
var state_16663__$1 = state_16663;
var statearr_16667_18865 = state_16663__$1;
(statearr_16667_18865[(2)] = null);

(statearr_16667_18865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16664 === (4))){
var inst_16591 = (state_16663[(7)]);
var inst_16596 = (state_16663[(8)]);
var inst_16598 = (inst_16596 < inst_16591);
var state_16663__$1 = state_16663;
if(cljs.core.truth_(inst_16598)){
var statearr_16672_18866 = state_16663__$1;
(statearr_16672_18866[(1)] = (6));

} else {
var statearr_16673_18867 = state_16663__$1;
(statearr_16673_18867[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16664 === (15))){
var inst_16646 = (state_16663[(9)]);
var inst_16651 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16646);
var state_16663__$1 = state_16663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16663__$1,(17),out,inst_16651);
} else {
if((state_val_16664 === (13))){
var inst_16646 = (state_16663[(9)]);
var inst_16646__$1 = (state_16663[(2)]);
var inst_16647 = cljs.core.some(cljs.core.nil_QMARK_,inst_16646__$1);
var state_16663__$1 = (function (){var statearr_16676 = state_16663;
(statearr_16676[(9)] = inst_16646__$1);

return statearr_16676;
})();
if(cljs.core.truth_(inst_16647)){
var statearr_16677_18869 = state_16663__$1;
(statearr_16677_18869[(1)] = (14));

} else {
var statearr_16678_18870 = state_16663__$1;
(statearr_16678_18870[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16664 === (6))){
var state_16663__$1 = state_16663;
var statearr_16679_18872 = state_16663__$1;
(statearr_16679_18872[(2)] = null);

(statearr_16679_18872[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16664 === (17))){
var inst_16653 = (state_16663[(2)]);
var state_16663__$1 = (function (){var statearr_16682 = state_16663;
(statearr_16682[(10)] = inst_16653);

return statearr_16682;
})();
var statearr_16683_18877 = state_16663__$1;
(statearr_16683_18877[(2)] = null);

(statearr_16683_18877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16664 === (3))){
var inst_16658 = (state_16663[(2)]);
var state_16663__$1 = state_16663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16663__$1,inst_16658);
} else {
if((state_val_16664 === (12))){
var _ = (function (){var statearr_16684 = state_16663;
(statearr_16684[(4)] = cljs.core.rest((state_16663[(4)])));

return statearr_16684;
})();
var state_16663__$1 = state_16663;
var ex16681 = (state_16663__$1[(2)]);
var statearr_16685_18879 = state_16663__$1;
(statearr_16685_18879[(5)] = ex16681);


if((ex16681 instanceof Object)){
var statearr_16695_18880 = state_16663__$1;
(statearr_16695_18880[(1)] = (11));

(statearr_16695_18880[(5)] = null);

} else {
throw ex16681;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16664 === (2))){
var inst_16583 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16591 = cnt;
var inst_16596 = (0);
var state_16663__$1 = (function (){var statearr_16710 = state_16663;
(statearr_16710[(11)] = inst_16583);

(statearr_16710[(7)] = inst_16591);

(statearr_16710[(8)] = inst_16596);

return statearr_16710;
})();
var statearr_16711_18886 = state_16663__$1;
(statearr_16711_18886[(2)] = null);

(statearr_16711_18886[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16664 === (11))){
var inst_16613 = (state_16663[(2)]);
var inst_16615 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16663__$1 = (function (){var statearr_16712 = state_16663;
(statearr_16712[(12)] = inst_16613);

return statearr_16712;
})();
var statearr_16713_18891 = state_16663__$1;
(statearr_16713_18891[(2)] = inst_16615);

(statearr_16713_18891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16664 === (9))){
var inst_16596 = (state_16663[(8)]);
var _ = (function (){var statearr_16714 = state_16663;
(statearr_16714[(4)] = cljs.core.cons((12),(state_16663[(4)])));

return statearr_16714;
})();
var inst_16625 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16596) : chs__$1.call(null,inst_16596));
var inst_16626 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16596) : done.call(null,inst_16596));
var inst_16627 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16625,inst_16626);
var ___$1 = (function (){var statearr_16715 = state_16663;
(statearr_16715[(4)] = cljs.core.rest((state_16663[(4)])));

return statearr_16715;
})();
var state_16663__$1 = state_16663;
var statearr_16716_18893 = state_16663__$1;
(statearr_16716_18893[(2)] = inst_16627);

(statearr_16716_18893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16664 === (5))){
var inst_16640 = (state_16663[(2)]);
var state_16663__$1 = (function (){var statearr_16718 = state_16663;
(statearr_16718[(13)] = inst_16640);

return statearr_16718;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16663__$1,(13),dchan);
} else {
if((state_val_16664 === (14))){
var inst_16649 = cljs.core.async.close_BANG_(out);
var state_16663__$1 = state_16663;
var statearr_16721_18895 = state_16663__$1;
(statearr_16721_18895[(2)] = inst_16649);

(statearr_16721_18895[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16664 === (16))){
var inst_16656 = (state_16663[(2)]);
var state_16663__$1 = state_16663;
var statearr_16722_18896 = state_16663__$1;
(statearr_16722_18896[(2)] = inst_16656);

(statearr_16722_18896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16664 === (10))){
var inst_16596 = (state_16663[(8)]);
var inst_16630 = (state_16663[(2)]);
var inst_16634 = (inst_16596 + (1));
var inst_16596__$1 = inst_16634;
var state_16663__$1 = (function (){var statearr_16724 = state_16663;
(statearr_16724[(14)] = inst_16630);

(statearr_16724[(8)] = inst_16596__$1);

return statearr_16724;
})();
var statearr_16725_18897 = state_16663__$1;
(statearr_16725_18897[(2)] = null);

(statearr_16725_18897[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16664 === (8))){
var inst_16638 = (state_16663[(2)]);
var state_16663__$1 = state_16663;
var statearr_16727_18899 = state_16663__$1;
(statearr_16727_18899[(2)] = inst_16638);

(statearr_16727_18899[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13618__auto__ = null;
var cljs$core$async$state_machine__13618__auto____0 = (function (){
var statearr_16729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16729[(0)] = cljs$core$async$state_machine__13618__auto__);

(statearr_16729[(1)] = (1));

return statearr_16729;
});
var cljs$core$async$state_machine__13618__auto____1 = (function (state_16663){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_16663);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e16730){var ex__13621__auto__ = e16730;
var statearr_16731_18901 = state_16663;
(statearr_16731_18901[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_16663[(4)]))){
var statearr_16732_18902 = state_16663;
(statearr_16732_18902[(1)] = cljs.core.first((state_16663[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18903 = state_16663;
state_16663 = G__18903;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
cljs$core$async$state_machine__13618__auto__ = function(state_16663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13618__auto____1.call(this,state_16663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13618__auto____0;
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13618__auto____1;
return cljs$core$async$state_machine__13618__auto__;
})()
})();
var state__13895__auto__ = (function (){var statearr_16733 = f__13894__auto__();
(statearr_16733[(6)] = c__13893__auto___18857);

return statearr_16733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16736 = arguments.length;
switch (G__16736) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13893__auto___18908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = (function (state_16773){
var state_val_16774 = (state_16773[(1)]);
if((state_val_16774 === (7))){
var inst_16750 = (state_16773[(7)]);
var inst_16749 = (state_16773[(8)]);
var inst_16749__$1 = (state_16773[(2)]);
var inst_16750__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16749__$1,(0),null);
var inst_16751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16749__$1,(1),null);
var inst_16752 = (inst_16750__$1 == null);
var state_16773__$1 = (function (){var statearr_16779 = state_16773;
(statearr_16779[(7)] = inst_16750__$1);

(statearr_16779[(8)] = inst_16749__$1);

(statearr_16779[(9)] = inst_16751);

return statearr_16779;
})();
if(cljs.core.truth_(inst_16752)){
var statearr_16782_18909 = state_16773__$1;
(statearr_16782_18909[(1)] = (8));

} else {
var statearr_16783_18910 = state_16773__$1;
(statearr_16783_18910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16774 === (1))){
var inst_16739 = cljs.core.vec(chs);
var inst_16740 = inst_16739;
var state_16773__$1 = (function (){var statearr_16784 = state_16773;
(statearr_16784[(10)] = inst_16740);

return statearr_16784;
})();
var statearr_16785_18912 = state_16773__$1;
(statearr_16785_18912[(2)] = null);

(statearr_16785_18912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16774 === (4))){
var inst_16740 = (state_16773[(10)]);
var state_16773__$1 = state_16773;
return cljs.core.async.ioc_alts_BANG_(state_16773__$1,(7),inst_16740);
} else {
if((state_val_16774 === (6))){
var inst_16768 = (state_16773[(2)]);
var state_16773__$1 = state_16773;
var statearr_16787_18913 = state_16773__$1;
(statearr_16787_18913[(2)] = inst_16768);

(statearr_16787_18913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16774 === (3))){
var inst_16770 = (state_16773[(2)]);
var state_16773__$1 = state_16773;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16773__$1,inst_16770);
} else {
if((state_val_16774 === (2))){
var inst_16740 = (state_16773[(10)]);
var inst_16742 = cljs.core.count(inst_16740);
var inst_16743 = (inst_16742 > (0));
var state_16773__$1 = state_16773;
if(cljs.core.truth_(inst_16743)){
var statearr_16789_18917 = state_16773__$1;
(statearr_16789_18917[(1)] = (4));

} else {
var statearr_16790_18918 = state_16773__$1;
(statearr_16790_18918[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16774 === (11))){
var inst_16740 = (state_16773[(10)]);
var inst_16761 = (state_16773[(2)]);
var tmp16788 = inst_16740;
var inst_16740__$1 = tmp16788;
var state_16773__$1 = (function (){var statearr_16791 = state_16773;
(statearr_16791[(10)] = inst_16740__$1);

(statearr_16791[(11)] = inst_16761);

return statearr_16791;
})();
var statearr_16793_18919 = state_16773__$1;
(statearr_16793_18919[(2)] = null);

(statearr_16793_18919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16774 === (9))){
var inst_16750 = (state_16773[(7)]);
var state_16773__$1 = state_16773;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16773__$1,(11),out,inst_16750);
} else {
if((state_val_16774 === (5))){
var inst_16766 = cljs.core.async.close_BANG_(out);
var state_16773__$1 = state_16773;
var statearr_16797_18920 = state_16773__$1;
(statearr_16797_18920[(2)] = inst_16766);

(statearr_16797_18920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16774 === (10))){
var inst_16764 = (state_16773[(2)]);
var state_16773__$1 = state_16773;
var statearr_16798_18921 = state_16773__$1;
(statearr_16798_18921[(2)] = inst_16764);

(statearr_16798_18921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16774 === (8))){
var inst_16740 = (state_16773[(10)]);
var inst_16750 = (state_16773[(7)]);
var inst_16749 = (state_16773[(8)]);
var inst_16751 = (state_16773[(9)]);
var inst_16756 = (function (){var cs = inst_16740;
var vec__16745 = inst_16749;
var v = inst_16750;
var c = inst_16751;
return (function (p1__16734_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16734_SHARP_);
});
})();
var inst_16757 = cljs.core.filterv(inst_16756,inst_16740);
var inst_16740__$1 = inst_16757;
var state_16773__$1 = (function (){var statearr_16802 = state_16773;
(statearr_16802[(10)] = inst_16740__$1);

return statearr_16802;
})();
var statearr_16803_18922 = state_16773__$1;
(statearr_16803_18922[(2)] = null);

(statearr_16803_18922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13618__auto__ = null;
var cljs$core$async$state_machine__13618__auto____0 = (function (){
var statearr_16805 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16805[(0)] = cljs$core$async$state_machine__13618__auto__);

(statearr_16805[(1)] = (1));

return statearr_16805;
});
var cljs$core$async$state_machine__13618__auto____1 = (function (state_16773){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_16773);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e16809){var ex__13621__auto__ = e16809;
var statearr_16814_18923 = state_16773;
(statearr_16814_18923[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_16773[(4)]))){
var statearr_16816_18924 = state_16773;
(statearr_16816_18924[(1)] = cljs.core.first((state_16773[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18925 = state_16773;
state_16773 = G__18925;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
cljs$core$async$state_machine__13618__auto__ = function(state_16773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13618__auto____1.call(this,state_16773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13618__auto____0;
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13618__auto____1;
return cljs$core$async$state_machine__13618__auto__;
})()
})();
var state__13895__auto__ = (function (){var statearr_16828 = f__13894__auto__();
(statearr_16828[(6)] = c__13893__auto___18908);

return statearr_16828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16840 = arguments.length;
switch (G__16840) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13893__auto___18928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = (function (state_16874){
var state_val_16875 = (state_16874[(1)]);
if((state_val_16875 === (7))){
var inst_16856 = (state_16874[(7)]);
var inst_16856__$1 = (state_16874[(2)]);
var inst_16857 = (inst_16856__$1 == null);
var inst_16858 = cljs.core.not(inst_16857);
var state_16874__$1 = (function (){var statearr_16879 = state_16874;
(statearr_16879[(7)] = inst_16856__$1);

return statearr_16879;
})();
if(inst_16858){
var statearr_16880_18929 = state_16874__$1;
(statearr_16880_18929[(1)] = (8));

} else {
var statearr_16881_18930 = state_16874__$1;
(statearr_16881_18930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16875 === (1))){
var inst_16845 = (0);
var state_16874__$1 = (function (){var statearr_16883 = state_16874;
(statearr_16883[(8)] = inst_16845);

return statearr_16883;
})();
var statearr_16884_18931 = state_16874__$1;
(statearr_16884_18931[(2)] = null);

(statearr_16884_18931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16875 === (4))){
var state_16874__$1 = state_16874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16874__$1,(7),ch);
} else {
if((state_val_16875 === (6))){
var inst_16869 = (state_16874[(2)]);
var state_16874__$1 = state_16874;
var statearr_16901_18932 = state_16874__$1;
(statearr_16901_18932[(2)] = inst_16869);

(statearr_16901_18932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16875 === (3))){
var inst_16871 = (state_16874[(2)]);
var inst_16872 = cljs.core.async.close_BANG_(out);
var state_16874__$1 = (function (){var statearr_16908 = state_16874;
(statearr_16908[(9)] = inst_16871);

return statearr_16908;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16874__$1,inst_16872);
} else {
if((state_val_16875 === (2))){
var inst_16845 = (state_16874[(8)]);
var inst_16850 = (inst_16845 < n);
var state_16874__$1 = state_16874;
if(cljs.core.truth_(inst_16850)){
var statearr_16909_18933 = state_16874__$1;
(statearr_16909_18933[(1)] = (4));

} else {
var statearr_16910_18934 = state_16874__$1;
(statearr_16910_18934[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16875 === (11))){
var inst_16845 = (state_16874[(8)]);
var inst_16861 = (state_16874[(2)]);
var inst_16862 = (inst_16845 + (1));
var inst_16845__$1 = inst_16862;
var state_16874__$1 = (function (){var statearr_16913 = state_16874;
(statearr_16913[(8)] = inst_16845__$1);

(statearr_16913[(10)] = inst_16861);

return statearr_16913;
})();
var statearr_16914_18935 = state_16874__$1;
(statearr_16914_18935[(2)] = null);

(statearr_16914_18935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16875 === (9))){
var state_16874__$1 = state_16874;
var statearr_16924_18936 = state_16874__$1;
(statearr_16924_18936[(2)] = null);

(statearr_16924_18936[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16875 === (5))){
var state_16874__$1 = state_16874;
var statearr_16927_18942 = state_16874__$1;
(statearr_16927_18942[(2)] = null);

(statearr_16927_18942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16875 === (10))){
var inst_16866 = (state_16874[(2)]);
var state_16874__$1 = state_16874;
var statearr_16932_18946 = state_16874__$1;
(statearr_16932_18946[(2)] = inst_16866);

(statearr_16932_18946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16875 === (8))){
var inst_16856 = (state_16874[(7)]);
var state_16874__$1 = state_16874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16874__$1,(11),out,inst_16856);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13618__auto__ = null;
var cljs$core$async$state_machine__13618__auto____0 = (function (){
var statearr_16933 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16933[(0)] = cljs$core$async$state_machine__13618__auto__);

(statearr_16933[(1)] = (1));

return statearr_16933;
});
var cljs$core$async$state_machine__13618__auto____1 = (function (state_16874){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_16874);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e16939){var ex__13621__auto__ = e16939;
var statearr_16940_18948 = state_16874;
(statearr_16940_18948[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_16874[(4)]))){
var statearr_16941_18949 = state_16874;
(statearr_16941_18949[(1)] = cljs.core.first((state_16874[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18950 = state_16874;
state_16874 = G__18950;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
cljs$core$async$state_machine__13618__auto__ = function(state_16874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13618__auto____1.call(this,state_16874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13618__auto____0;
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13618__auto____1;
return cljs$core$async$state_machine__13618__auto__;
})()
})();
var state__13895__auto__ = (function (){var statearr_16942 = f__13894__auto__();
(statearr_16942[(6)] = c__13893__auto___18928);

return statearr_16942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16944 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16944 = (function (f,ch,meta16945){
this.f = f;
this.ch = ch;
this.meta16945 = meta16945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16946,meta16945__$1){
var self__ = this;
var _16946__$1 = this;
return (new cljs.core.async.t_cljs$core$async16944(self__.f,self__.ch,meta16945__$1));
}));

(cljs.core.async.t_cljs$core$async16944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16946){
var self__ = this;
var _16946__$1 = this;
return self__.meta16945;
}));

(cljs.core.async.t_cljs$core$async16944.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16944.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16944.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16944.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16944.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16953 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16953 = (function (f,ch,meta16945,_,fn1,meta16954){
this.f = f;
this.ch = ch;
this.meta16945 = meta16945;
this._ = _;
this.fn1 = fn1;
this.meta16954 = meta16954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16955,meta16954__$1){
var self__ = this;
var _16955__$1 = this;
return (new cljs.core.async.t_cljs$core$async16953(self__.f,self__.ch,self__.meta16945,self__._,self__.fn1,meta16954__$1));
}));

(cljs.core.async.t_cljs$core$async16953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16955){
var self__ = this;
var _16955__$1 = this;
return self__.meta16954;
}));

(cljs.core.async.t_cljs$core$async16953.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16953.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16953.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16953.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16943_SHARP_){
var G__16967 = (((p1__16943_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16943_SHARP_) : self__.f.call(null,p1__16943_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16967) : f1.call(null,G__16967));
});
}));

(cljs.core.async.t_cljs$core$async16953.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16945","meta16945",1948217352,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16944","cljs.core.async/t_cljs$core$async16944",1664010605,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16954","meta16954",32166585,null)], null);
}));

(cljs.core.async.t_cljs$core$async16953.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16953.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16953");

(cljs.core.async.t_cljs$core$async16953.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16953");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16953.
 */
cljs.core.async.__GT_t_cljs$core$async16953 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16953(f__$1,ch__$1,meta16945__$1,___$2,fn1__$1,meta16954){
return (new cljs.core.async.t_cljs$core$async16953(f__$1,ch__$1,meta16945__$1,___$2,fn1__$1,meta16954));
});

}

return (new cljs.core.async.t_cljs$core$async16953(self__.f,self__.ch,self__.meta16945,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16975 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16975) : self__.f.call(null,G__16975));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16944.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16944.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16945","meta16945",1948217352,null)], null);
}));

(cljs.core.async.t_cljs$core$async16944.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16944");

(cljs.core.async.t_cljs$core$async16944.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16944");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16944.
 */
cljs.core.async.__GT_t_cljs$core$async16944 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16944(f__$1,ch__$1,meta16945){
return (new cljs.core.async.t_cljs$core$async16944(f__$1,ch__$1,meta16945));
});

}

return (new cljs.core.async.t_cljs$core$async16944(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16993 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16993 = (function (f,ch,meta16994){
this.f = f;
this.ch = ch;
this.meta16994 = meta16994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16995,meta16994__$1){
var self__ = this;
var _16995__$1 = this;
return (new cljs.core.async.t_cljs$core$async16993(self__.f,self__.ch,meta16994__$1));
}));

(cljs.core.async.t_cljs$core$async16993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16995){
var self__ = this;
var _16995__$1 = this;
return self__.meta16994;
}));

(cljs.core.async.t_cljs$core$async16993.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16993.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16993.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16993.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16993.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16993.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16993.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16994","meta16994",-1938814879,null)], null);
}));

(cljs.core.async.t_cljs$core$async16993.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16993");

(cljs.core.async.t_cljs$core$async16993.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16993");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16993.
 */
cljs.core.async.__GT_t_cljs$core$async16993 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16993(f__$1,ch__$1,meta16994){
return (new cljs.core.async.t_cljs$core$async16993(f__$1,ch__$1,meta16994));
});

}

return (new cljs.core.async.t_cljs$core$async16993(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17011 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17011 = (function (p,ch,meta17012){
this.p = p;
this.ch = ch;
this.meta17012 = meta17012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17013,meta17012__$1){
var self__ = this;
var _17013__$1 = this;
return (new cljs.core.async.t_cljs$core$async17011(self__.p,self__.ch,meta17012__$1));
}));

(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17013){
var self__ = this;
var _17013__$1 = this;
return self__.meta17012;
}));

(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17011.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17012","meta17012",1594935113,null)], null);
}));

(cljs.core.async.t_cljs$core$async17011.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17011");

(cljs.core.async.t_cljs$core$async17011.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17011");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17011.
 */
cljs.core.async.__GT_t_cljs$core$async17011 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17011(p__$1,ch__$1,meta17012){
return (new cljs.core.async.t_cljs$core$async17011(p__$1,ch__$1,meta17012));
});

}

return (new cljs.core.async.t_cljs$core$async17011(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17050 = arguments.length;
switch (G__17050) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13893__auto___18962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = (function (state_17076){
var state_val_17077 = (state_17076[(1)]);
if((state_val_17077 === (7))){
var inst_17072 = (state_17076[(2)]);
var state_17076__$1 = state_17076;
var statearr_17078_18963 = state_17076__$1;
(statearr_17078_18963[(2)] = inst_17072);

(statearr_17078_18963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (1))){
var state_17076__$1 = state_17076;
var statearr_17079_18967 = state_17076__$1;
(statearr_17079_18967[(2)] = null);

(statearr_17079_18967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (4))){
var inst_17055 = (state_17076[(7)]);
var inst_17055__$1 = (state_17076[(2)]);
var inst_17056 = (inst_17055__$1 == null);
var state_17076__$1 = (function (){var statearr_17080 = state_17076;
(statearr_17080[(7)] = inst_17055__$1);

return statearr_17080;
})();
if(cljs.core.truth_(inst_17056)){
var statearr_17081_18971 = state_17076__$1;
(statearr_17081_18971[(1)] = (5));

} else {
var statearr_17082_18972 = state_17076__$1;
(statearr_17082_18972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (6))){
var inst_17055 = (state_17076[(7)]);
var inst_17060 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17055) : p.call(null,inst_17055));
var state_17076__$1 = state_17076;
if(cljs.core.truth_(inst_17060)){
var statearr_17084_18973 = state_17076__$1;
(statearr_17084_18973[(1)] = (8));

} else {
var statearr_17085_18974 = state_17076__$1;
(statearr_17085_18974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (3))){
var inst_17074 = (state_17076[(2)]);
var state_17076__$1 = state_17076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17076__$1,inst_17074);
} else {
if((state_val_17077 === (2))){
var state_17076__$1 = state_17076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17076__$1,(4),ch);
} else {
if((state_val_17077 === (11))){
var inst_17063 = (state_17076[(2)]);
var state_17076__$1 = state_17076;
var statearr_17088_18975 = state_17076__$1;
(statearr_17088_18975[(2)] = inst_17063);

(statearr_17088_18975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (9))){
var state_17076__$1 = state_17076;
var statearr_17089_18976 = state_17076__$1;
(statearr_17089_18976[(2)] = null);

(statearr_17089_18976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (5))){
var inst_17058 = cljs.core.async.close_BANG_(out);
var state_17076__$1 = state_17076;
var statearr_17090_18977 = state_17076__$1;
(statearr_17090_18977[(2)] = inst_17058);

(statearr_17090_18977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (10))){
var inst_17066 = (state_17076[(2)]);
var state_17076__$1 = (function (){var statearr_17091 = state_17076;
(statearr_17091[(8)] = inst_17066);

return statearr_17091;
})();
var statearr_17094_18978 = state_17076__$1;
(statearr_17094_18978[(2)] = null);

(statearr_17094_18978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (8))){
var inst_17055 = (state_17076[(7)]);
var state_17076__$1 = state_17076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17076__$1,(11),out,inst_17055);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13618__auto__ = null;
var cljs$core$async$state_machine__13618__auto____0 = (function (){
var statearr_17097 = [null,null,null,null,null,null,null,null,null];
(statearr_17097[(0)] = cljs$core$async$state_machine__13618__auto__);

(statearr_17097[(1)] = (1));

return statearr_17097;
});
var cljs$core$async$state_machine__13618__auto____1 = (function (state_17076){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_17076);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e17102){var ex__13621__auto__ = e17102;
var statearr_17103_18979 = state_17076;
(statearr_17103_18979[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_17076[(4)]))){
var statearr_17104_18980 = state_17076;
(statearr_17104_18980[(1)] = cljs.core.first((state_17076[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18981 = state_17076;
state_17076 = G__18981;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
cljs$core$async$state_machine__13618__auto__ = function(state_17076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13618__auto____1.call(this,state_17076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13618__auto____0;
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13618__auto____1;
return cljs$core$async$state_machine__13618__auto__;
})()
})();
var state__13895__auto__ = (function (){var statearr_17105 = f__13894__auto__();
(statearr_17105[(6)] = c__13893__auto___18962);

return statearr_17105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17111 = arguments.length;
switch (G__17111) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13893__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = (function (state_17198){
var state_val_17199 = (state_17198[(1)]);
if((state_val_17199 === (7))){
var inst_17194 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17201_18984 = state_17198__$1;
(statearr_17201_18984[(2)] = inst_17194);

(statearr_17201_18984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (20))){
var inst_17156 = (state_17198[(7)]);
var inst_17174 = (state_17198[(2)]);
var inst_17175 = cljs.core.next(inst_17156);
var inst_17140 = inst_17175;
var inst_17141 = null;
var inst_17142 = (0);
var inst_17143 = (0);
var state_17198__$1 = (function (){var statearr_17207 = state_17198;
(statearr_17207[(8)] = inst_17140);

(statearr_17207[(9)] = inst_17174);

(statearr_17207[(10)] = inst_17142);

(statearr_17207[(11)] = inst_17141);

(statearr_17207[(12)] = inst_17143);

return statearr_17207;
})();
var statearr_17208_18985 = state_17198__$1;
(statearr_17208_18985[(2)] = null);

(statearr_17208_18985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (1))){
var state_17198__$1 = state_17198;
var statearr_17209_18986 = state_17198__$1;
(statearr_17209_18986[(2)] = null);

(statearr_17209_18986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (4))){
var inst_17129 = (state_17198[(13)]);
var inst_17129__$1 = (state_17198[(2)]);
var inst_17130 = (inst_17129__$1 == null);
var state_17198__$1 = (function (){var statearr_17210 = state_17198;
(statearr_17210[(13)] = inst_17129__$1);

return statearr_17210;
})();
if(cljs.core.truth_(inst_17130)){
var statearr_17211_18987 = state_17198__$1;
(statearr_17211_18987[(1)] = (5));

} else {
var statearr_17212_18988 = state_17198__$1;
(statearr_17212_18988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (15))){
var state_17198__$1 = state_17198;
var statearr_17216_18989 = state_17198__$1;
(statearr_17216_18989[(2)] = null);

(statearr_17216_18989[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (21))){
var state_17198__$1 = state_17198;
var statearr_17222_18990 = state_17198__$1;
(statearr_17222_18990[(2)] = null);

(statearr_17222_18990[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (13))){
var inst_17140 = (state_17198[(8)]);
var inst_17142 = (state_17198[(10)]);
var inst_17141 = (state_17198[(11)]);
var inst_17143 = (state_17198[(12)]);
var inst_17150 = (state_17198[(2)]);
var inst_17151 = (inst_17143 + (1));
var tmp17213 = inst_17140;
var tmp17214 = inst_17142;
var tmp17215 = inst_17141;
var inst_17140__$1 = tmp17213;
var inst_17141__$1 = tmp17215;
var inst_17142__$1 = tmp17214;
var inst_17143__$1 = inst_17151;
var state_17198__$1 = (function (){var statearr_17224 = state_17198;
(statearr_17224[(8)] = inst_17140__$1);

(statearr_17224[(10)] = inst_17142__$1);

(statearr_17224[(14)] = inst_17150);

(statearr_17224[(11)] = inst_17141__$1);

(statearr_17224[(12)] = inst_17143__$1);

return statearr_17224;
})();
var statearr_17225_18991 = state_17198__$1;
(statearr_17225_18991[(2)] = null);

(statearr_17225_18991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (22))){
var state_17198__$1 = state_17198;
var statearr_17235_18992 = state_17198__$1;
(statearr_17235_18992[(2)] = null);

(statearr_17235_18992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (6))){
var inst_17129 = (state_17198[(13)]);
var inst_17138 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17129) : f.call(null,inst_17129));
var inst_17139 = cljs.core.seq(inst_17138);
var inst_17140 = inst_17139;
var inst_17141 = null;
var inst_17142 = (0);
var inst_17143 = (0);
var state_17198__$1 = (function (){var statearr_17236 = state_17198;
(statearr_17236[(8)] = inst_17140);

(statearr_17236[(10)] = inst_17142);

(statearr_17236[(11)] = inst_17141);

(statearr_17236[(12)] = inst_17143);

return statearr_17236;
})();
var statearr_17237_18993 = state_17198__$1;
(statearr_17237_18993[(2)] = null);

(statearr_17237_18993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (17))){
var inst_17156 = (state_17198[(7)]);
var inst_17162 = cljs.core.chunk_first(inst_17156);
var inst_17166 = cljs.core.chunk_rest(inst_17156);
var inst_17167 = cljs.core.count(inst_17162);
var inst_17140 = inst_17166;
var inst_17141 = inst_17162;
var inst_17142 = inst_17167;
var inst_17143 = (0);
var state_17198__$1 = (function (){var statearr_17241 = state_17198;
(statearr_17241[(8)] = inst_17140);

(statearr_17241[(10)] = inst_17142);

(statearr_17241[(11)] = inst_17141);

(statearr_17241[(12)] = inst_17143);

return statearr_17241;
})();
var statearr_17242_18994 = state_17198__$1;
(statearr_17242_18994[(2)] = null);

(statearr_17242_18994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (3))){
var inst_17196 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17198__$1,inst_17196);
} else {
if((state_val_17199 === (12))){
var inst_17184 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17248_18995 = state_17198__$1;
(statearr_17248_18995[(2)] = inst_17184);

(statearr_17248_18995[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (2))){
var state_17198__$1 = state_17198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17198__$1,(4),in$);
} else {
if((state_val_17199 === (23))){
var inst_17192 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17253_18997 = state_17198__$1;
(statearr_17253_18997[(2)] = inst_17192);

(statearr_17253_18997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (19))){
var inst_17178 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17255_18998 = state_17198__$1;
(statearr_17255_18998[(2)] = inst_17178);

(statearr_17255_18998[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (11))){
var inst_17156 = (state_17198[(7)]);
var inst_17140 = (state_17198[(8)]);
var inst_17156__$1 = cljs.core.seq(inst_17140);
var state_17198__$1 = (function (){var statearr_17261 = state_17198;
(statearr_17261[(7)] = inst_17156__$1);

return statearr_17261;
})();
if(inst_17156__$1){
var statearr_17262_19001 = state_17198__$1;
(statearr_17262_19001[(1)] = (14));

} else {
var statearr_17263_19002 = state_17198__$1;
(statearr_17263_19002[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (9))){
var inst_17186 = (state_17198[(2)]);
var inst_17187 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17198__$1 = (function (){var statearr_17267 = state_17198;
(statearr_17267[(15)] = inst_17186);

return statearr_17267;
})();
if(cljs.core.truth_(inst_17187)){
var statearr_17270_19007 = state_17198__$1;
(statearr_17270_19007[(1)] = (21));

} else {
var statearr_17271_19008 = state_17198__$1;
(statearr_17271_19008[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (5))){
var inst_17132 = cljs.core.async.close_BANG_(out);
var state_17198__$1 = state_17198;
var statearr_17273_19009 = state_17198__$1;
(statearr_17273_19009[(2)] = inst_17132);

(statearr_17273_19009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (14))){
var inst_17156 = (state_17198[(7)]);
var inst_17160 = cljs.core.chunked_seq_QMARK_(inst_17156);
var state_17198__$1 = state_17198;
if(inst_17160){
var statearr_17275_19010 = state_17198__$1;
(statearr_17275_19010[(1)] = (17));

} else {
var statearr_17276_19012 = state_17198__$1;
(statearr_17276_19012[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (16))){
var inst_17182 = (state_17198[(2)]);
var state_17198__$1 = state_17198;
var statearr_17277_19016 = state_17198__$1;
(statearr_17277_19016[(2)] = inst_17182);

(statearr_17277_19016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17199 === (10))){
var inst_17141 = (state_17198[(11)]);
var inst_17143 = (state_17198[(12)]);
var inst_17148 = cljs.core._nth(inst_17141,inst_17143);
var state_17198__$1 = state_17198;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17198__$1,(13),out,inst_17148);
} else {
if((state_val_17199 === (18))){
var inst_17156 = (state_17198[(7)]);
var inst_17172 = cljs.core.first(inst_17156);
var state_17198__$1 = state_17198;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17198__$1,(20),out,inst_17172);
} else {
if((state_val_17199 === (8))){
var inst_17142 = (state_17198[(10)]);
var inst_17143 = (state_17198[(12)]);
var inst_17145 = (inst_17143 < inst_17142);
var inst_17146 = inst_17145;
var state_17198__$1 = state_17198;
if(cljs.core.truth_(inst_17146)){
var statearr_17279_19018 = state_17198__$1;
(statearr_17279_19018[(1)] = (10));

} else {
var statearr_17280_19020 = state_17198__$1;
(statearr_17280_19020[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13618__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13618__auto____0 = (function (){
var statearr_17282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17282[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13618__auto__);

(statearr_17282[(1)] = (1));

return statearr_17282;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13618__auto____1 = (function (state_17198){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_17198);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e17283){var ex__13621__auto__ = e17283;
var statearr_17284_19021 = state_17198;
(statearr_17284_19021[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_17198[(4)]))){
var statearr_17285_19022 = state_17198;
(statearr_17285_19022[(1)] = cljs.core.first((state_17198[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19023 = state_17198;
state_17198 = G__19023;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13618__auto__ = function(state_17198){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13618__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13618__auto____1.call(this,state_17198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13618__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13618__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13618__auto__;
})()
})();
var state__13895__auto__ = (function (){var statearr_17287 = f__13894__auto__();
(statearr_17287[(6)] = c__13893__auto__);

return statearr_17287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
}));

return c__13893__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17293 = arguments.length;
switch (G__17293) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17300 = arguments.length;
switch (G__17300) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17302 = arguments.length;
switch (G__17302) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13893__auto___19028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = (function (state_17338){
var state_val_17339 = (state_17338[(1)]);
if((state_val_17339 === (7))){
var inst_17333 = (state_17338[(2)]);
var state_17338__$1 = state_17338;
var statearr_17340_19029 = state_17338__$1;
(statearr_17340_19029[(2)] = inst_17333);

(statearr_17340_19029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (1))){
var inst_17308 = null;
var state_17338__$1 = (function (){var statearr_17343 = state_17338;
(statearr_17343[(7)] = inst_17308);

return statearr_17343;
})();
var statearr_17344_19030 = state_17338__$1;
(statearr_17344_19030[(2)] = null);

(statearr_17344_19030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (4))){
var inst_17312 = (state_17338[(8)]);
var inst_17312__$1 = (state_17338[(2)]);
var inst_17313 = (inst_17312__$1 == null);
var inst_17314 = cljs.core.not(inst_17313);
var state_17338__$1 = (function (){var statearr_17345 = state_17338;
(statearr_17345[(8)] = inst_17312__$1);

return statearr_17345;
})();
if(inst_17314){
var statearr_17346_19031 = state_17338__$1;
(statearr_17346_19031[(1)] = (5));

} else {
var statearr_17347_19032 = state_17338__$1;
(statearr_17347_19032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (6))){
var state_17338__$1 = state_17338;
var statearr_17348_19034 = state_17338__$1;
(statearr_17348_19034[(2)] = null);

(statearr_17348_19034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (3))){
var inst_17335 = (state_17338[(2)]);
var inst_17336 = cljs.core.async.close_BANG_(out);
var state_17338__$1 = (function (){var statearr_17357 = state_17338;
(statearr_17357[(9)] = inst_17335);

return statearr_17357;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17338__$1,inst_17336);
} else {
if((state_val_17339 === (2))){
var state_17338__$1 = state_17338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17338__$1,(4),ch);
} else {
if((state_val_17339 === (11))){
var inst_17312 = (state_17338[(8)]);
var inst_17327 = (state_17338[(2)]);
var inst_17308 = inst_17312;
var state_17338__$1 = (function (){var statearr_17372 = state_17338;
(statearr_17372[(10)] = inst_17327);

(statearr_17372[(7)] = inst_17308);

return statearr_17372;
})();
var statearr_17383_19035 = state_17338__$1;
(statearr_17383_19035[(2)] = null);

(statearr_17383_19035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (9))){
var inst_17312 = (state_17338[(8)]);
var state_17338__$1 = state_17338;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17338__$1,(11),out,inst_17312);
} else {
if((state_val_17339 === (5))){
var inst_17312 = (state_17338[(8)]);
var inst_17308 = (state_17338[(7)]);
var inst_17316 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17312,inst_17308);
var state_17338__$1 = state_17338;
if(inst_17316){
var statearr_17393_19040 = state_17338__$1;
(statearr_17393_19040[(1)] = (8));

} else {
var statearr_17394_19041 = state_17338__$1;
(statearr_17394_19041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (10))){
var inst_17330 = (state_17338[(2)]);
var state_17338__$1 = state_17338;
var statearr_17395_19042 = state_17338__$1;
(statearr_17395_19042[(2)] = inst_17330);

(statearr_17395_19042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (8))){
var inst_17308 = (state_17338[(7)]);
var tmp17388 = inst_17308;
var inst_17308__$1 = tmp17388;
var state_17338__$1 = (function (){var statearr_17396 = state_17338;
(statearr_17396[(7)] = inst_17308__$1);

return statearr_17396;
})();
var statearr_17397_19047 = state_17338__$1;
(statearr_17397_19047[(2)] = null);

(statearr_17397_19047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13618__auto__ = null;
var cljs$core$async$state_machine__13618__auto____0 = (function (){
var statearr_17417 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17417[(0)] = cljs$core$async$state_machine__13618__auto__);

(statearr_17417[(1)] = (1));

return statearr_17417;
});
var cljs$core$async$state_machine__13618__auto____1 = (function (state_17338){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_17338);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e17418){var ex__13621__auto__ = e17418;
var statearr_17419_19053 = state_17338;
(statearr_17419_19053[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_17338[(4)]))){
var statearr_17426_19055 = state_17338;
(statearr_17426_19055[(1)] = cljs.core.first((state_17338[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19056 = state_17338;
state_17338 = G__19056;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
cljs$core$async$state_machine__13618__auto__ = function(state_17338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13618__auto____1.call(this,state_17338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13618__auto____0;
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13618__auto____1;
return cljs$core$async$state_machine__13618__auto__;
})()
})();
var state__13895__auto__ = (function (){var statearr_17430 = f__13894__auto__();
(statearr_17430[(6)] = c__13893__auto___19028);

return statearr_17430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17435 = arguments.length;
switch (G__17435) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13893__auto___19060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = (function (state_17494){
var state_val_17495 = (state_17494[(1)]);
if((state_val_17495 === (7))){
var inst_17490 = (state_17494[(2)]);
var state_17494__$1 = state_17494;
var statearr_17500_19061 = state_17494__$1;
(statearr_17500_19061[(2)] = inst_17490);

(statearr_17500_19061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17495 === (1))){
var inst_17449 = (new Array(n));
var inst_17450 = inst_17449;
var inst_17451 = (0);
var state_17494__$1 = (function (){var statearr_17501 = state_17494;
(statearr_17501[(7)] = inst_17450);

(statearr_17501[(8)] = inst_17451);

return statearr_17501;
})();
var statearr_17502_19062 = state_17494__$1;
(statearr_17502_19062[(2)] = null);

(statearr_17502_19062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17495 === (4))){
var inst_17456 = (state_17494[(9)]);
var inst_17456__$1 = (state_17494[(2)]);
var inst_17457 = (inst_17456__$1 == null);
var inst_17458 = cljs.core.not(inst_17457);
var state_17494__$1 = (function (){var statearr_17503 = state_17494;
(statearr_17503[(9)] = inst_17456__$1);

return statearr_17503;
})();
if(inst_17458){
var statearr_17504_19063 = state_17494__$1;
(statearr_17504_19063[(1)] = (5));

} else {
var statearr_17505_19064 = state_17494__$1;
(statearr_17505_19064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17495 === (15))){
var inst_17484 = (state_17494[(2)]);
var state_17494__$1 = state_17494;
var statearr_17507_19068 = state_17494__$1;
(statearr_17507_19068[(2)] = inst_17484);

(statearr_17507_19068[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17495 === (13))){
var state_17494__$1 = state_17494;
var statearr_17512_19069 = state_17494__$1;
(statearr_17512_19069[(2)] = null);

(statearr_17512_19069[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17495 === (6))){
var inst_17451 = (state_17494[(8)]);
var inst_17480 = (inst_17451 > (0));
var state_17494__$1 = state_17494;
if(cljs.core.truth_(inst_17480)){
var statearr_17517_19070 = state_17494__$1;
(statearr_17517_19070[(1)] = (12));

} else {
var statearr_17518_19071 = state_17494__$1;
(statearr_17518_19071[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17495 === (3))){
var inst_17492 = (state_17494[(2)]);
var state_17494__$1 = state_17494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17494__$1,inst_17492);
} else {
if((state_val_17495 === (12))){
var inst_17450 = (state_17494[(7)]);
var inst_17482 = cljs.core.vec(inst_17450);
var state_17494__$1 = state_17494;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17494__$1,(15),out,inst_17482);
} else {
if((state_val_17495 === (2))){
var state_17494__$1 = state_17494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17494__$1,(4),ch);
} else {
if((state_val_17495 === (11))){
var inst_17471 = (state_17494[(2)]);
var inst_17473 = (new Array(n));
var inst_17450 = inst_17473;
var inst_17451 = (0);
var state_17494__$1 = (function (){var statearr_17523 = state_17494;
(statearr_17523[(7)] = inst_17450);

(statearr_17523[(8)] = inst_17451);

(statearr_17523[(10)] = inst_17471);

return statearr_17523;
})();
var statearr_17524_19090 = state_17494__$1;
(statearr_17524_19090[(2)] = null);

(statearr_17524_19090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17495 === (9))){
var inst_17450 = (state_17494[(7)]);
var inst_17469 = cljs.core.vec(inst_17450);
var state_17494__$1 = state_17494;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17494__$1,(11),out,inst_17469);
} else {
if((state_val_17495 === (5))){
var inst_17450 = (state_17494[(7)]);
var inst_17456 = (state_17494[(9)]);
var inst_17451 = (state_17494[(8)]);
var inst_17462 = (state_17494[(11)]);
var inst_17460 = (inst_17450[inst_17451] = inst_17456);
var inst_17462__$1 = (inst_17451 + (1));
var inst_17463 = (inst_17462__$1 < n);
var state_17494__$1 = (function (){var statearr_17525 = state_17494;
(statearr_17525[(11)] = inst_17462__$1);

(statearr_17525[(12)] = inst_17460);

return statearr_17525;
})();
if(cljs.core.truth_(inst_17463)){
var statearr_17526_19096 = state_17494__$1;
(statearr_17526_19096[(1)] = (8));

} else {
var statearr_17527_19097 = state_17494__$1;
(statearr_17527_19097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17495 === (14))){
var inst_17487 = (state_17494[(2)]);
var inst_17488 = cljs.core.async.close_BANG_(out);
var state_17494__$1 = (function (){var statearr_17530 = state_17494;
(statearr_17530[(13)] = inst_17487);

return statearr_17530;
})();
var statearr_17531_19098 = state_17494__$1;
(statearr_17531_19098[(2)] = inst_17488);

(statearr_17531_19098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17495 === (10))){
var inst_17476 = (state_17494[(2)]);
var state_17494__$1 = state_17494;
var statearr_17532_19099 = state_17494__$1;
(statearr_17532_19099[(2)] = inst_17476);

(statearr_17532_19099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17495 === (8))){
var inst_17450 = (state_17494[(7)]);
var inst_17462 = (state_17494[(11)]);
var tmp17528 = inst_17450;
var inst_17450__$1 = tmp17528;
var inst_17451 = inst_17462;
var state_17494__$1 = (function (){var statearr_17533 = state_17494;
(statearr_17533[(7)] = inst_17450__$1);

(statearr_17533[(8)] = inst_17451);

return statearr_17533;
})();
var statearr_17539_19107 = state_17494__$1;
(statearr_17539_19107[(2)] = null);

(statearr_17539_19107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13618__auto__ = null;
var cljs$core$async$state_machine__13618__auto____0 = (function (){
var statearr_17540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17540[(0)] = cljs$core$async$state_machine__13618__auto__);

(statearr_17540[(1)] = (1));

return statearr_17540;
});
var cljs$core$async$state_machine__13618__auto____1 = (function (state_17494){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_17494);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e17541){var ex__13621__auto__ = e17541;
var statearr_17548_19108 = state_17494;
(statearr_17548_19108[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_17494[(4)]))){
var statearr_17549_19109 = state_17494;
(statearr_17549_19109[(1)] = cljs.core.first((state_17494[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19110 = state_17494;
state_17494 = G__19110;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
cljs$core$async$state_machine__13618__auto__ = function(state_17494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13618__auto____1.call(this,state_17494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13618__auto____0;
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13618__auto____1;
return cljs$core$async$state_machine__13618__auto__;
})()
})();
var state__13895__auto__ = (function (){var statearr_17576 = f__13894__auto__();
(statearr_17576[(6)] = c__13893__auto___19060);

return statearr_17576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17593 = arguments.length;
switch (G__17593) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13893__auto___19115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = (function (state_17648){
var state_val_17649 = (state_17648[(1)]);
if((state_val_17649 === (7))){
var inst_17644 = (state_17648[(2)]);
var state_17648__$1 = state_17648;
var statearr_17655_19116 = state_17648__$1;
(statearr_17655_19116[(2)] = inst_17644);

(statearr_17655_19116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17649 === (1))){
var inst_17596 = [];
var inst_17597 = inst_17596;
var inst_17598 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17648__$1 = (function (){var statearr_17656 = state_17648;
(statearr_17656[(7)] = inst_17598);

(statearr_17656[(8)] = inst_17597);

return statearr_17656;
})();
var statearr_17657_19120 = state_17648__$1;
(statearr_17657_19120[(2)] = null);

(statearr_17657_19120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17649 === (4))){
var inst_17601 = (state_17648[(9)]);
var inst_17601__$1 = (state_17648[(2)]);
var inst_17602 = (inst_17601__$1 == null);
var inst_17603 = cljs.core.not(inst_17602);
var state_17648__$1 = (function (){var statearr_17660 = state_17648;
(statearr_17660[(9)] = inst_17601__$1);

return statearr_17660;
})();
if(inst_17603){
var statearr_17661_19121 = state_17648__$1;
(statearr_17661_19121[(1)] = (5));

} else {
var statearr_17662_19124 = state_17648__$1;
(statearr_17662_19124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17649 === (15))){
var inst_17597 = (state_17648[(8)]);
var inst_17636 = cljs.core.vec(inst_17597);
var state_17648__$1 = state_17648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17648__$1,(18),out,inst_17636);
} else {
if((state_val_17649 === (13))){
var inst_17627 = (state_17648[(2)]);
var state_17648__$1 = state_17648;
var statearr_17665_19125 = state_17648__$1;
(statearr_17665_19125[(2)] = inst_17627);

(statearr_17665_19125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17649 === (6))){
var inst_17597 = (state_17648[(8)]);
var inst_17632 = inst_17597.length;
var inst_17633 = (inst_17632 > (0));
var state_17648__$1 = state_17648;
if(cljs.core.truth_(inst_17633)){
var statearr_17669_19127 = state_17648__$1;
(statearr_17669_19127[(1)] = (15));

} else {
var statearr_17671_19130 = state_17648__$1;
(statearr_17671_19130[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17649 === (17))){
var inst_17641 = (state_17648[(2)]);
var inst_17642 = cljs.core.async.close_BANG_(out);
var state_17648__$1 = (function (){var statearr_17675 = state_17648;
(statearr_17675[(10)] = inst_17641);

return statearr_17675;
})();
var statearr_17676_19135 = state_17648__$1;
(statearr_17676_19135[(2)] = inst_17642);

(statearr_17676_19135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17649 === (3))){
var inst_17646 = (state_17648[(2)]);
var state_17648__$1 = state_17648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17648__$1,inst_17646);
} else {
if((state_val_17649 === (12))){
var inst_17597 = (state_17648[(8)]);
var inst_17616 = cljs.core.vec(inst_17597);
var state_17648__$1 = state_17648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17648__$1,(14),out,inst_17616);
} else {
if((state_val_17649 === (2))){
var state_17648__$1 = state_17648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17648__$1,(4),ch);
} else {
if((state_val_17649 === (11))){
var inst_17605 = (state_17648[(11)]);
var inst_17601 = (state_17648[(9)]);
var inst_17597 = (state_17648[(8)]);
var inst_17613 = inst_17597.push(inst_17601);
var tmp17680 = inst_17597;
var inst_17597__$1 = tmp17680;
var inst_17598 = inst_17605;
var state_17648__$1 = (function (){var statearr_17684 = state_17648;
(statearr_17684[(7)] = inst_17598);

(statearr_17684[(12)] = inst_17613);

(statearr_17684[(8)] = inst_17597__$1);

return statearr_17684;
})();
var statearr_17688_19141 = state_17648__$1;
(statearr_17688_19141[(2)] = null);

(statearr_17688_19141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17649 === (9))){
var inst_17598 = (state_17648[(7)]);
var inst_17609 = cljs.core.keyword_identical_QMARK_(inst_17598,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17648__$1 = state_17648;
var statearr_17689_19142 = state_17648__$1;
(statearr_17689_19142[(2)] = inst_17609);

(statearr_17689_19142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17649 === (5))){
var inst_17605 = (state_17648[(11)]);
var inst_17598 = (state_17648[(7)]);
var inst_17601 = (state_17648[(9)]);
var inst_17606 = (state_17648[(13)]);
var inst_17605__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17601) : f.call(null,inst_17601));
var inst_17606__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17605__$1,inst_17598);
var state_17648__$1 = (function (){var statearr_17690 = state_17648;
(statearr_17690[(11)] = inst_17605__$1);

(statearr_17690[(13)] = inst_17606__$1);

return statearr_17690;
})();
if(inst_17606__$1){
var statearr_17691_19157 = state_17648__$1;
(statearr_17691_19157[(1)] = (8));

} else {
var statearr_17695_19158 = state_17648__$1;
(statearr_17695_19158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17649 === (14))){
var inst_17605 = (state_17648[(11)]);
var inst_17601 = (state_17648[(9)]);
var inst_17618 = (state_17648[(2)]);
var inst_17621 = [];
var inst_17623 = inst_17621.push(inst_17601);
var inst_17597 = inst_17621;
var inst_17598 = inst_17605;
var state_17648__$1 = (function (){var statearr_17696 = state_17648;
(statearr_17696[(7)] = inst_17598);

(statearr_17696[(14)] = inst_17623);

(statearr_17696[(15)] = inst_17618);

(statearr_17696[(8)] = inst_17597);

return statearr_17696;
})();
var statearr_17698_19160 = state_17648__$1;
(statearr_17698_19160[(2)] = null);

(statearr_17698_19160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17649 === (16))){
var state_17648__$1 = state_17648;
var statearr_17701_19162 = state_17648__$1;
(statearr_17701_19162[(2)] = null);

(statearr_17701_19162[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17649 === (10))){
var inst_17611 = (state_17648[(2)]);
var state_17648__$1 = state_17648;
if(cljs.core.truth_(inst_17611)){
var statearr_17707_19169 = state_17648__$1;
(statearr_17707_19169[(1)] = (11));

} else {
var statearr_17708_19170 = state_17648__$1;
(statearr_17708_19170[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17649 === (18))){
var inst_17638 = (state_17648[(2)]);
var state_17648__$1 = state_17648;
var statearr_17709_19171 = state_17648__$1;
(statearr_17709_19171[(2)] = inst_17638);

(statearr_17709_19171[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17649 === (8))){
var inst_17606 = (state_17648[(13)]);
var state_17648__$1 = state_17648;
var statearr_17714_19176 = state_17648__$1;
(statearr_17714_19176[(2)] = inst_17606);

(statearr_17714_19176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13618__auto__ = null;
var cljs$core$async$state_machine__13618__auto____0 = (function (){
var statearr_17717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17717[(0)] = cljs$core$async$state_machine__13618__auto__);

(statearr_17717[(1)] = (1));

return statearr_17717;
});
var cljs$core$async$state_machine__13618__auto____1 = (function (state_17648){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_17648);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e17719){var ex__13621__auto__ = e17719;
var statearr_17720_19178 = state_17648;
(statearr_17720_19178[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_17648[(4)]))){
var statearr_17723_19179 = state_17648;
(statearr_17723_19179[(1)] = cljs.core.first((state_17648[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19180 = state_17648;
state_17648 = G__19180;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
cljs$core$async$state_machine__13618__auto__ = function(state_17648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13618__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13618__auto____1.call(this,state_17648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13618__auto____0;
cljs$core$async$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13618__auto____1;
return cljs$core$async$state_machine__13618__auto__;
})()
})();
var state__13895__auto__ = (function (){var statearr_17724 = f__13894__auto__();
(statearr_17724[(6)] = c__13893__auto___19115);

return statearr_17724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
