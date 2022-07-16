goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19394 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_19394(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19395 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_19395(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17828 = coll;
var G__17829 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17828,G__17829) : shadow.dom.lazy_native_coll_seq.call(null,G__17828,G__17829));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17844 = arguments.length;
switch (G__17844) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17851 = arguments.length;
switch (G__17851) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17874 = arguments.length;
switch (G__17874) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17901 = arguments.length;
switch (G__17901) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17915 = arguments.length;
switch (G__17915) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17941 = arguments.length;
switch (G__17941) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17955){if((e17955 instanceof Object)){
var e = e17955;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17955;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17976 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17977 = null;
var count__17978 = (0);
var i__17979 = (0);
while(true){
if((i__17979 < count__17978)){
var el = chunk__17977.cljs$core$IIndexed$_nth$arity$2(null,i__17979);
var handler_19491__$1 = ((function (seq__17976,chunk__17977,count__17978,i__17979,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17976,chunk__17977,count__17978,i__17979,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19491__$1);


var G__19492 = seq__17976;
var G__19493 = chunk__17977;
var G__19494 = count__17978;
var G__19495 = (i__17979 + (1));
seq__17976 = G__19492;
chunk__17977 = G__19493;
count__17978 = G__19494;
i__17979 = G__19495;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17976);
if(temp__5804__auto__){
var seq__17976__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17976__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17976__$1);
var G__19496 = cljs.core.chunk_rest(seq__17976__$1);
var G__19497 = c__5568__auto__;
var G__19498 = cljs.core.count(c__5568__auto__);
var G__19499 = (0);
seq__17976 = G__19496;
chunk__17977 = G__19497;
count__17978 = G__19498;
i__17979 = G__19499;
continue;
} else {
var el = cljs.core.first(seq__17976__$1);
var handler_19500__$1 = ((function (seq__17976,chunk__17977,count__17978,i__17979,el,seq__17976__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17976,chunk__17977,count__17978,i__17979,el,seq__17976__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19500__$1);


var G__19501 = cljs.core.next(seq__17976__$1);
var G__19502 = null;
var G__19503 = (0);
var G__19504 = (0);
seq__17976 = G__19501;
chunk__17977 = G__19502;
count__17978 = G__19503;
i__17979 = G__19504;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18030 = arguments.length;
switch (G__18030) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18059 = cljs.core.seq(events);
var chunk__18060 = null;
var count__18061 = (0);
var i__18062 = (0);
while(true){
if((i__18062 < count__18061)){
var vec__18079 = chunk__18060.cljs$core$IIndexed$_nth$arity$2(null,i__18062);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18079,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18079,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19508 = seq__18059;
var G__19509 = chunk__18060;
var G__19510 = count__18061;
var G__19511 = (i__18062 + (1));
seq__18059 = G__19508;
chunk__18060 = G__19509;
count__18061 = G__19510;
i__18062 = G__19511;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18059);
if(temp__5804__auto__){
var seq__18059__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18059__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18059__$1);
var G__19512 = cljs.core.chunk_rest(seq__18059__$1);
var G__19513 = c__5568__auto__;
var G__19514 = cljs.core.count(c__5568__auto__);
var G__19515 = (0);
seq__18059 = G__19512;
chunk__18060 = G__19513;
count__18061 = G__19514;
i__18062 = G__19515;
continue;
} else {
var vec__18092 = cljs.core.first(seq__18059__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18092,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18092,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19516 = cljs.core.next(seq__18059__$1);
var G__19517 = null;
var G__19518 = (0);
var G__19519 = (0);
seq__18059 = G__19516;
chunk__18060 = G__19517;
count__18061 = G__19518;
i__18062 = G__19519;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18111 = cljs.core.seq(styles);
var chunk__18112 = null;
var count__18113 = (0);
var i__18114 = (0);
while(true){
if((i__18114 < count__18113)){
var vec__18139 = chunk__18112.cljs$core$IIndexed$_nth$arity$2(null,i__18114);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18139,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18139,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19523 = seq__18111;
var G__19524 = chunk__18112;
var G__19525 = count__18113;
var G__19526 = (i__18114 + (1));
seq__18111 = G__19523;
chunk__18112 = G__19524;
count__18113 = G__19525;
i__18114 = G__19526;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18111);
if(temp__5804__auto__){
var seq__18111__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18111__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18111__$1);
var G__19528 = cljs.core.chunk_rest(seq__18111__$1);
var G__19529 = c__5568__auto__;
var G__19530 = cljs.core.count(c__5568__auto__);
var G__19531 = (0);
seq__18111 = G__19528;
chunk__18112 = G__19529;
count__18113 = G__19530;
i__18114 = G__19531;
continue;
} else {
var vec__18160 = cljs.core.first(seq__18111__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18160,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18160,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19532 = cljs.core.next(seq__18111__$1);
var G__19533 = null;
var G__19534 = (0);
var G__19535 = (0);
seq__18111 = G__19532;
chunk__18112 = G__19533;
count__18113 = G__19534;
i__18114 = G__19535;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18178_19536 = key;
var G__18178_19537__$1 = (((G__18178_19536 instanceof cljs.core.Keyword))?G__18178_19536.fqn:null);
switch (G__18178_19537__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19539 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_19539,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_19539,"aria-");
}
})())){
el.setAttribute(ks_19539,value);
} else {
(el[ks_19539] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18259){
var map__18260 = p__18259;
var map__18260__$1 = cljs.core.__destructure_map(map__18260);
var props = map__18260__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18260__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18264 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18264,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18264,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18264,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18270 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18270,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18270;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18277 = arguments.length;
switch (G__18277) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18307){
var vec__18312 = p__18307;
var seq__18313 = cljs.core.seq(vec__18312);
var first__18314 = cljs.core.first(seq__18313);
var seq__18313__$1 = cljs.core.next(seq__18313);
var nn = first__18314;
var first__18314__$1 = cljs.core.first(seq__18313__$1);
var seq__18313__$2 = cljs.core.next(seq__18313__$1);
var np = first__18314__$1;
var nc = seq__18313__$2;
var node = vec__18312;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18318 = nn;
var G__18319 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18318,G__18319) : create_fn.call(null,G__18318,G__18319));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18322 = nn;
var G__18323 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18322,G__18323) : create_fn.call(null,G__18322,G__18323));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18331 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18331,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18331,(1),null);
var seq__18335_19555 = cljs.core.seq(node_children);
var chunk__18336_19556 = null;
var count__18337_19557 = (0);
var i__18338_19558 = (0);
while(true){
if((i__18338_19558 < count__18337_19557)){
var child_struct_19559 = chunk__18336_19556.cljs$core$IIndexed$_nth$arity$2(null,i__18338_19558);
var children_19560 = shadow.dom.dom_node(child_struct_19559);
if(cljs.core.seq_QMARK_(children_19560)){
var seq__18452_19561 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19560));
var chunk__18454_19562 = null;
var count__18455_19563 = (0);
var i__18456_19564 = (0);
while(true){
if((i__18456_19564 < count__18455_19563)){
var child_19565 = chunk__18454_19562.cljs$core$IIndexed$_nth$arity$2(null,i__18456_19564);
if(cljs.core.truth_(child_19565)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19565);


var G__19566 = seq__18452_19561;
var G__19567 = chunk__18454_19562;
var G__19568 = count__18455_19563;
var G__19569 = (i__18456_19564 + (1));
seq__18452_19561 = G__19566;
chunk__18454_19562 = G__19567;
count__18455_19563 = G__19568;
i__18456_19564 = G__19569;
continue;
} else {
var G__19570 = seq__18452_19561;
var G__19571 = chunk__18454_19562;
var G__19572 = count__18455_19563;
var G__19573 = (i__18456_19564 + (1));
seq__18452_19561 = G__19570;
chunk__18454_19562 = G__19571;
count__18455_19563 = G__19572;
i__18456_19564 = G__19573;
continue;
}
} else {
var temp__5804__auto___19574 = cljs.core.seq(seq__18452_19561);
if(temp__5804__auto___19574){
var seq__18452_19575__$1 = temp__5804__auto___19574;
if(cljs.core.chunked_seq_QMARK_(seq__18452_19575__$1)){
var c__5568__auto___19576 = cljs.core.chunk_first(seq__18452_19575__$1);
var G__19577 = cljs.core.chunk_rest(seq__18452_19575__$1);
var G__19578 = c__5568__auto___19576;
var G__19579 = cljs.core.count(c__5568__auto___19576);
var G__19580 = (0);
seq__18452_19561 = G__19577;
chunk__18454_19562 = G__19578;
count__18455_19563 = G__19579;
i__18456_19564 = G__19580;
continue;
} else {
var child_19581 = cljs.core.first(seq__18452_19575__$1);
if(cljs.core.truth_(child_19581)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19581);


var G__19583 = cljs.core.next(seq__18452_19575__$1);
var G__19584 = null;
var G__19585 = (0);
var G__19586 = (0);
seq__18452_19561 = G__19583;
chunk__18454_19562 = G__19584;
count__18455_19563 = G__19585;
i__18456_19564 = G__19586;
continue;
} else {
var G__19587 = cljs.core.next(seq__18452_19575__$1);
var G__19588 = null;
var G__19589 = (0);
var G__19590 = (0);
seq__18452_19561 = G__19587;
chunk__18454_19562 = G__19588;
count__18455_19563 = G__19589;
i__18456_19564 = G__19590;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19560);
}


var G__19592 = seq__18335_19555;
var G__19593 = chunk__18336_19556;
var G__19594 = count__18337_19557;
var G__19595 = (i__18338_19558 + (1));
seq__18335_19555 = G__19592;
chunk__18336_19556 = G__19593;
count__18337_19557 = G__19594;
i__18338_19558 = G__19595;
continue;
} else {
var temp__5804__auto___19596 = cljs.core.seq(seq__18335_19555);
if(temp__5804__auto___19596){
var seq__18335_19597__$1 = temp__5804__auto___19596;
if(cljs.core.chunked_seq_QMARK_(seq__18335_19597__$1)){
var c__5568__auto___19598 = cljs.core.chunk_first(seq__18335_19597__$1);
var G__19599 = cljs.core.chunk_rest(seq__18335_19597__$1);
var G__19600 = c__5568__auto___19598;
var G__19601 = cljs.core.count(c__5568__auto___19598);
var G__19602 = (0);
seq__18335_19555 = G__19599;
chunk__18336_19556 = G__19600;
count__18337_19557 = G__19601;
i__18338_19558 = G__19602;
continue;
} else {
var child_struct_19605 = cljs.core.first(seq__18335_19597__$1);
var children_19606 = shadow.dom.dom_node(child_struct_19605);
if(cljs.core.seq_QMARK_(children_19606)){
var seq__18500_19608 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19606));
var chunk__18502_19609 = null;
var count__18503_19610 = (0);
var i__18504_19611 = (0);
while(true){
if((i__18504_19611 < count__18503_19610)){
var child_19612 = chunk__18502_19609.cljs$core$IIndexed$_nth$arity$2(null,i__18504_19611);
if(cljs.core.truth_(child_19612)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19612);


var G__19613 = seq__18500_19608;
var G__19614 = chunk__18502_19609;
var G__19615 = count__18503_19610;
var G__19616 = (i__18504_19611 + (1));
seq__18500_19608 = G__19613;
chunk__18502_19609 = G__19614;
count__18503_19610 = G__19615;
i__18504_19611 = G__19616;
continue;
} else {
var G__19617 = seq__18500_19608;
var G__19618 = chunk__18502_19609;
var G__19619 = count__18503_19610;
var G__19620 = (i__18504_19611 + (1));
seq__18500_19608 = G__19617;
chunk__18502_19609 = G__19618;
count__18503_19610 = G__19619;
i__18504_19611 = G__19620;
continue;
}
} else {
var temp__5804__auto___19621__$1 = cljs.core.seq(seq__18500_19608);
if(temp__5804__auto___19621__$1){
var seq__18500_19622__$1 = temp__5804__auto___19621__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18500_19622__$1)){
var c__5568__auto___19623 = cljs.core.chunk_first(seq__18500_19622__$1);
var G__19624 = cljs.core.chunk_rest(seq__18500_19622__$1);
var G__19625 = c__5568__auto___19623;
var G__19626 = cljs.core.count(c__5568__auto___19623);
var G__19627 = (0);
seq__18500_19608 = G__19624;
chunk__18502_19609 = G__19625;
count__18503_19610 = G__19626;
i__18504_19611 = G__19627;
continue;
} else {
var child_19628 = cljs.core.first(seq__18500_19622__$1);
if(cljs.core.truth_(child_19628)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19628);


var G__19629 = cljs.core.next(seq__18500_19622__$1);
var G__19630 = null;
var G__19631 = (0);
var G__19632 = (0);
seq__18500_19608 = G__19629;
chunk__18502_19609 = G__19630;
count__18503_19610 = G__19631;
i__18504_19611 = G__19632;
continue;
} else {
var G__19633 = cljs.core.next(seq__18500_19622__$1);
var G__19634 = null;
var G__19635 = (0);
var G__19636 = (0);
seq__18500_19608 = G__19633;
chunk__18502_19609 = G__19634;
count__18503_19610 = G__19635;
i__18504_19611 = G__19636;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19606);
}


var G__19637 = cljs.core.next(seq__18335_19597__$1);
var G__19638 = null;
var G__19639 = (0);
var G__19640 = (0);
seq__18335_19555 = G__19637;
chunk__18336_19556 = G__19638;
count__18337_19557 = G__19639;
i__18338_19558 = G__19640;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18593 = cljs.core.seq(node);
var chunk__18594 = null;
var count__18595 = (0);
var i__18596 = (0);
while(true){
if((i__18596 < count__18595)){
var n = chunk__18594.cljs$core$IIndexed$_nth$arity$2(null,i__18596);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19643 = seq__18593;
var G__19644 = chunk__18594;
var G__19645 = count__18595;
var G__19646 = (i__18596 + (1));
seq__18593 = G__19643;
chunk__18594 = G__19644;
count__18595 = G__19645;
i__18596 = G__19646;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18593);
if(temp__5804__auto__){
var seq__18593__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18593__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18593__$1);
var G__19647 = cljs.core.chunk_rest(seq__18593__$1);
var G__19648 = c__5568__auto__;
var G__19649 = cljs.core.count(c__5568__auto__);
var G__19650 = (0);
seq__18593 = G__19647;
chunk__18594 = G__19648;
count__18595 = G__19649;
i__18596 = G__19650;
continue;
} else {
var n = cljs.core.first(seq__18593__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19654 = cljs.core.next(seq__18593__$1);
var G__19655 = null;
var G__19656 = (0);
var G__19657 = (0);
seq__18593 = G__19654;
chunk__18594 = G__19655;
count__18595 = G__19656;
i__18596 = G__19657;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18624 = arguments.length;
switch (G__18624) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18633 = arguments.length;
switch (G__18633) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18681 = arguments.length;
switch (G__18681) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19667 = arguments.length;
var i__5770__auto___19668 = (0);
while(true){
if((i__5770__auto___19668 < len__5769__auto___19667)){
args__5775__auto__.push((arguments[i__5770__auto___19668]));

var G__19669 = (i__5770__auto___19668 + (1));
i__5770__auto___19668 = G__19669;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18757_19672 = cljs.core.seq(nodes);
var chunk__18758_19673 = null;
var count__18759_19674 = (0);
var i__18760_19675 = (0);
while(true){
if((i__18760_19675 < count__18759_19674)){
var node_19676 = chunk__18758_19673.cljs$core$IIndexed$_nth$arity$2(null,i__18760_19675);
fragment.appendChild(shadow.dom._to_dom(node_19676));


var G__19677 = seq__18757_19672;
var G__19678 = chunk__18758_19673;
var G__19679 = count__18759_19674;
var G__19680 = (i__18760_19675 + (1));
seq__18757_19672 = G__19677;
chunk__18758_19673 = G__19678;
count__18759_19674 = G__19679;
i__18760_19675 = G__19680;
continue;
} else {
var temp__5804__auto___19683 = cljs.core.seq(seq__18757_19672);
if(temp__5804__auto___19683){
var seq__18757_19684__$1 = temp__5804__auto___19683;
if(cljs.core.chunked_seq_QMARK_(seq__18757_19684__$1)){
var c__5568__auto___19685 = cljs.core.chunk_first(seq__18757_19684__$1);
var G__19686 = cljs.core.chunk_rest(seq__18757_19684__$1);
var G__19687 = c__5568__auto___19685;
var G__19688 = cljs.core.count(c__5568__auto___19685);
var G__19689 = (0);
seq__18757_19672 = G__19686;
chunk__18758_19673 = G__19687;
count__18759_19674 = G__19688;
i__18760_19675 = G__19689;
continue;
} else {
var node_19691 = cljs.core.first(seq__18757_19684__$1);
fragment.appendChild(shadow.dom._to_dom(node_19691));


var G__19693 = cljs.core.next(seq__18757_19684__$1);
var G__19694 = null;
var G__19695 = (0);
var G__19696 = (0);
seq__18757_19672 = G__19693;
chunk__18758_19673 = G__19694;
count__18759_19674 = G__19695;
i__18760_19675 = G__19696;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18755){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18755));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18774_19700 = cljs.core.seq(scripts);
var chunk__18775_19701 = null;
var count__18776_19702 = (0);
var i__18777_19703 = (0);
while(true){
if((i__18777_19703 < count__18776_19702)){
var vec__18788_19705 = chunk__18775_19701.cljs$core$IIndexed$_nth$arity$2(null,i__18777_19703);
var script_tag_19706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18788_19705,(0),null);
var script_body_19707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18788_19705,(1),null);
eval(script_body_19707);


var G__19708 = seq__18774_19700;
var G__19709 = chunk__18775_19701;
var G__19710 = count__18776_19702;
var G__19711 = (i__18777_19703 + (1));
seq__18774_19700 = G__19708;
chunk__18775_19701 = G__19709;
count__18776_19702 = G__19710;
i__18777_19703 = G__19711;
continue;
} else {
var temp__5804__auto___19712 = cljs.core.seq(seq__18774_19700);
if(temp__5804__auto___19712){
var seq__18774_19714__$1 = temp__5804__auto___19712;
if(cljs.core.chunked_seq_QMARK_(seq__18774_19714__$1)){
var c__5568__auto___19715 = cljs.core.chunk_first(seq__18774_19714__$1);
var G__19716 = cljs.core.chunk_rest(seq__18774_19714__$1);
var G__19717 = c__5568__auto___19715;
var G__19718 = cljs.core.count(c__5568__auto___19715);
var G__19719 = (0);
seq__18774_19700 = G__19716;
chunk__18775_19701 = G__19717;
count__18776_19702 = G__19718;
i__18777_19703 = G__19719;
continue;
} else {
var vec__18791_19720 = cljs.core.first(seq__18774_19714__$1);
var script_tag_19721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18791_19720,(0),null);
var script_body_19722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18791_19720,(1),null);
eval(script_body_19722);


var G__19723 = cljs.core.next(seq__18774_19714__$1);
var G__19724 = null;
var G__19725 = (0);
var G__19726 = (0);
seq__18774_19700 = G__19723;
chunk__18775_19701 = G__19724;
count__18776_19702 = G__19725;
i__18777_19703 = G__19726;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18797){
var vec__18799 = p__18797;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18799,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18799,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18823 = arguments.length;
switch (G__18823) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18848 = cljs.core.seq(style_keys);
var chunk__18849 = null;
var count__18850 = (0);
var i__18851 = (0);
while(true){
if((i__18851 < count__18850)){
var it = chunk__18849.cljs$core$IIndexed$_nth$arity$2(null,i__18851);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19735 = seq__18848;
var G__19736 = chunk__18849;
var G__19737 = count__18850;
var G__19738 = (i__18851 + (1));
seq__18848 = G__19735;
chunk__18849 = G__19736;
count__18850 = G__19737;
i__18851 = G__19738;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18848);
if(temp__5804__auto__){
var seq__18848__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18848__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18848__$1);
var G__19742 = cljs.core.chunk_rest(seq__18848__$1);
var G__19743 = c__5568__auto__;
var G__19744 = cljs.core.count(c__5568__auto__);
var G__19745 = (0);
seq__18848 = G__19742;
chunk__18849 = G__19743;
count__18850 = G__19744;
i__18851 = G__19745;
continue;
} else {
var it = cljs.core.first(seq__18848__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19746 = cljs.core.next(seq__18848__$1);
var G__19747 = null;
var G__19748 = (0);
var G__19749 = (0);
seq__18848 = G__19746;
chunk__18849 = G__19747;
count__18850 = G__19748;
i__18851 = G__19749;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18859,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18871 = k18859;
var G__18871__$1 = (((G__18871 instanceof cljs.core.Keyword))?G__18871.fqn:null);
switch (G__18871__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18859,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18881){
var vec__18882 = p__18881;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18882,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18882,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18858){
var self__ = this;
var G__18858__$1 = this;
return (new cljs.core.RecordIter((0),G__18858__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18860,other18861){
var self__ = this;
var this18860__$1 = this;
return (((!((other18861 == null)))) && ((((this18860__$1.constructor === other18861.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18860__$1.x,other18861.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18860__$1.y,other18861.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18860__$1.__extmap,other18861.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18859){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18911 = k18859;
var G__18911__$1 = (((G__18911 instanceof cljs.core.Keyword))?G__18911.fqn:null);
switch (G__18911__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18859);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18858){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18914 = cljs.core.keyword_identical_QMARK_;
var expr__18915 = k__5352__auto__;
if(cljs.core.truth_((pred__18914.cljs$core$IFn$_invoke$arity$2 ? pred__18914.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18915) : pred__18914.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18915)))){
return (new shadow.dom.Coordinate(G__18858,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18914.cljs$core$IFn$_invoke$arity$2 ? pred__18914.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18915) : pred__18914.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18915)))){
return (new shadow.dom.Coordinate(self__.x,G__18858,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18858),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18858){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18858,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18864){
var extmap__5385__auto__ = (function (){var G__18927 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18864,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18864)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18927);
} else {
return G__18927;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18864),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18864),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18938,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18954 = k18938;
var G__18954__$1 = (((G__18954 instanceof cljs.core.Keyword))?G__18954.fqn:null);
switch (G__18954__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18938,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18955){
var vec__18956 = p__18955;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18956,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18956,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18937){
var self__ = this;
var G__18937__$1 = this;
return (new cljs.core.RecordIter((0),G__18937__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18939,other18940){
var self__ = this;
var this18939__$1 = this;
return (((!((other18940 == null)))) && ((((this18939__$1.constructor === other18940.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18939__$1.w,other18940.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18939__$1.h,other18940.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18939__$1.__extmap,other18940.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18938){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18961 = k18938;
var G__18961__$1 = (((G__18961 instanceof cljs.core.Keyword))?G__18961.fqn:null);
switch (G__18961__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18938);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18937){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18968 = cljs.core.keyword_identical_QMARK_;
var expr__18969 = k__5352__auto__;
if(cljs.core.truth_((pred__18968.cljs$core$IFn$_invoke$arity$2 ? pred__18968.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18969) : pred__18968.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18969)))){
return (new shadow.dom.Size(G__18937,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18968.cljs$core$IFn$_invoke$arity$2 ? pred__18968.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18969) : pred__18968.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18969)))){
return (new shadow.dom.Size(self__.w,G__18937,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18937),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18937){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18937,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18947){
var extmap__5385__auto__ = (function (){var G__18983 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18947,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18947)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18983);
} else {
return G__18983;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18947),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18947),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__19802 = (i + (1));
var G__19803 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19802;
ret = G__19803;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19011){
var vec__19013 = p__19011;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19013,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19013,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19019 = arguments.length;
switch (G__19019) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19811 = ps;
var G__19812 = (i + (1));
el__$1 = G__19811;
i = G__19812;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__19065 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19065,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19065,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19065,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19077_19813 = cljs.core.seq(props);
var chunk__19078_19814 = null;
var count__19079_19815 = (0);
var i__19080_19816 = (0);
while(true){
if((i__19080_19816 < count__19079_19815)){
var vec__19111_19817 = chunk__19078_19814.cljs$core$IIndexed$_nth$arity$2(null,i__19080_19816);
var k_19818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19111_19817,(0),null);
var v_19819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19111_19817,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19818);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19818),v_19819);


var G__19820 = seq__19077_19813;
var G__19821 = chunk__19078_19814;
var G__19822 = count__19079_19815;
var G__19823 = (i__19080_19816 + (1));
seq__19077_19813 = G__19820;
chunk__19078_19814 = G__19821;
count__19079_19815 = G__19822;
i__19080_19816 = G__19823;
continue;
} else {
var temp__5804__auto___19824 = cljs.core.seq(seq__19077_19813);
if(temp__5804__auto___19824){
var seq__19077_19825__$1 = temp__5804__auto___19824;
if(cljs.core.chunked_seq_QMARK_(seq__19077_19825__$1)){
var c__5568__auto___19826 = cljs.core.chunk_first(seq__19077_19825__$1);
var G__19827 = cljs.core.chunk_rest(seq__19077_19825__$1);
var G__19828 = c__5568__auto___19826;
var G__19829 = cljs.core.count(c__5568__auto___19826);
var G__19830 = (0);
seq__19077_19813 = G__19827;
chunk__19078_19814 = G__19828;
count__19079_19815 = G__19829;
i__19080_19816 = G__19830;
continue;
} else {
var vec__19117_19831 = cljs.core.first(seq__19077_19825__$1);
var k_19832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19117_19831,(0),null);
var v_19833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19117_19831,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19832);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19832),v_19833);


var G__19835 = cljs.core.next(seq__19077_19825__$1);
var G__19836 = null;
var G__19837 = (0);
var G__19838 = (0);
seq__19077_19813 = G__19835;
chunk__19078_19814 = G__19836;
count__19079_19815 = G__19837;
i__19080_19816 = G__19838;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__19143 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19143,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19143,(1),null);
var seq__19151_19839 = cljs.core.seq(node_children);
var chunk__19153_19840 = null;
var count__19154_19841 = (0);
var i__19155_19842 = (0);
while(true){
if((i__19155_19842 < count__19154_19841)){
var child_struct_19843 = chunk__19153_19840.cljs$core$IIndexed$_nth$arity$2(null,i__19155_19842);
if((!((child_struct_19843 == null)))){
if(typeof child_struct_19843 === 'string'){
var text_19845 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19845),child_struct_19843].join(''));
} else {
var children_19849 = shadow.dom.svg_node(child_struct_19843);
if(cljs.core.seq_QMARK_(children_19849)){
var seq__19201_19850 = cljs.core.seq(children_19849);
var chunk__19203_19851 = null;
var count__19204_19852 = (0);
var i__19205_19853 = (0);
while(true){
if((i__19205_19853 < count__19204_19852)){
var child_19854 = chunk__19203_19851.cljs$core$IIndexed$_nth$arity$2(null,i__19205_19853);
if(cljs.core.truth_(child_19854)){
node.appendChild(child_19854);


var G__19855 = seq__19201_19850;
var G__19856 = chunk__19203_19851;
var G__19857 = count__19204_19852;
var G__19858 = (i__19205_19853 + (1));
seq__19201_19850 = G__19855;
chunk__19203_19851 = G__19856;
count__19204_19852 = G__19857;
i__19205_19853 = G__19858;
continue;
} else {
var G__19859 = seq__19201_19850;
var G__19860 = chunk__19203_19851;
var G__19861 = count__19204_19852;
var G__19862 = (i__19205_19853 + (1));
seq__19201_19850 = G__19859;
chunk__19203_19851 = G__19860;
count__19204_19852 = G__19861;
i__19205_19853 = G__19862;
continue;
}
} else {
var temp__5804__auto___19863 = cljs.core.seq(seq__19201_19850);
if(temp__5804__auto___19863){
var seq__19201_19868__$1 = temp__5804__auto___19863;
if(cljs.core.chunked_seq_QMARK_(seq__19201_19868__$1)){
var c__5568__auto___19870 = cljs.core.chunk_first(seq__19201_19868__$1);
var G__19872 = cljs.core.chunk_rest(seq__19201_19868__$1);
var G__19873 = c__5568__auto___19870;
var G__19874 = cljs.core.count(c__5568__auto___19870);
var G__19875 = (0);
seq__19201_19850 = G__19872;
chunk__19203_19851 = G__19873;
count__19204_19852 = G__19874;
i__19205_19853 = G__19875;
continue;
} else {
var child_19877 = cljs.core.first(seq__19201_19868__$1);
if(cljs.core.truth_(child_19877)){
node.appendChild(child_19877);


var G__19878 = cljs.core.next(seq__19201_19868__$1);
var G__19879 = null;
var G__19880 = (0);
var G__19881 = (0);
seq__19201_19850 = G__19878;
chunk__19203_19851 = G__19879;
count__19204_19852 = G__19880;
i__19205_19853 = G__19881;
continue;
} else {
var G__19882 = cljs.core.next(seq__19201_19868__$1);
var G__19883 = null;
var G__19884 = (0);
var G__19885 = (0);
seq__19201_19850 = G__19882;
chunk__19203_19851 = G__19883;
count__19204_19852 = G__19884;
i__19205_19853 = G__19885;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19849);
}
}


var G__19886 = seq__19151_19839;
var G__19887 = chunk__19153_19840;
var G__19888 = count__19154_19841;
var G__19889 = (i__19155_19842 + (1));
seq__19151_19839 = G__19886;
chunk__19153_19840 = G__19887;
count__19154_19841 = G__19888;
i__19155_19842 = G__19889;
continue;
} else {
var G__19890 = seq__19151_19839;
var G__19891 = chunk__19153_19840;
var G__19892 = count__19154_19841;
var G__19893 = (i__19155_19842 + (1));
seq__19151_19839 = G__19890;
chunk__19153_19840 = G__19891;
count__19154_19841 = G__19892;
i__19155_19842 = G__19893;
continue;
}
} else {
var temp__5804__auto___19894 = cljs.core.seq(seq__19151_19839);
if(temp__5804__auto___19894){
var seq__19151_19895__$1 = temp__5804__auto___19894;
if(cljs.core.chunked_seq_QMARK_(seq__19151_19895__$1)){
var c__5568__auto___19896 = cljs.core.chunk_first(seq__19151_19895__$1);
var G__19898 = cljs.core.chunk_rest(seq__19151_19895__$1);
var G__19899 = c__5568__auto___19896;
var G__19900 = cljs.core.count(c__5568__auto___19896);
var G__19901 = (0);
seq__19151_19839 = G__19898;
chunk__19153_19840 = G__19899;
count__19154_19841 = G__19900;
i__19155_19842 = G__19901;
continue;
} else {
var child_struct_19902 = cljs.core.first(seq__19151_19895__$1);
if((!((child_struct_19902 == null)))){
if(typeof child_struct_19902 === 'string'){
var text_19903 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19903),child_struct_19902].join(''));
} else {
var children_19904 = shadow.dom.svg_node(child_struct_19902);
if(cljs.core.seq_QMARK_(children_19904)){
var seq__19209_19905 = cljs.core.seq(children_19904);
var chunk__19211_19906 = null;
var count__19212_19907 = (0);
var i__19213_19908 = (0);
while(true){
if((i__19213_19908 < count__19212_19907)){
var child_19909 = chunk__19211_19906.cljs$core$IIndexed$_nth$arity$2(null,i__19213_19908);
if(cljs.core.truth_(child_19909)){
node.appendChild(child_19909);


var G__19910 = seq__19209_19905;
var G__19911 = chunk__19211_19906;
var G__19912 = count__19212_19907;
var G__19913 = (i__19213_19908 + (1));
seq__19209_19905 = G__19910;
chunk__19211_19906 = G__19911;
count__19212_19907 = G__19912;
i__19213_19908 = G__19913;
continue;
} else {
var G__19914 = seq__19209_19905;
var G__19915 = chunk__19211_19906;
var G__19916 = count__19212_19907;
var G__19917 = (i__19213_19908 + (1));
seq__19209_19905 = G__19914;
chunk__19211_19906 = G__19915;
count__19212_19907 = G__19916;
i__19213_19908 = G__19917;
continue;
}
} else {
var temp__5804__auto___19918__$1 = cljs.core.seq(seq__19209_19905);
if(temp__5804__auto___19918__$1){
var seq__19209_19919__$1 = temp__5804__auto___19918__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19209_19919__$1)){
var c__5568__auto___19920 = cljs.core.chunk_first(seq__19209_19919__$1);
var G__19921 = cljs.core.chunk_rest(seq__19209_19919__$1);
var G__19922 = c__5568__auto___19920;
var G__19923 = cljs.core.count(c__5568__auto___19920);
var G__19924 = (0);
seq__19209_19905 = G__19921;
chunk__19211_19906 = G__19922;
count__19212_19907 = G__19923;
i__19213_19908 = G__19924;
continue;
} else {
var child_19925 = cljs.core.first(seq__19209_19919__$1);
if(cljs.core.truth_(child_19925)){
node.appendChild(child_19925);


var G__19926 = cljs.core.next(seq__19209_19919__$1);
var G__19927 = null;
var G__19928 = (0);
var G__19929 = (0);
seq__19209_19905 = G__19926;
chunk__19211_19906 = G__19927;
count__19212_19907 = G__19928;
i__19213_19908 = G__19929;
continue;
} else {
var G__19934 = cljs.core.next(seq__19209_19919__$1);
var G__19935 = null;
var G__19936 = (0);
var G__19937 = (0);
seq__19209_19905 = G__19934;
chunk__19211_19906 = G__19935;
count__19212_19907 = G__19936;
i__19213_19908 = G__19937;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19904);
}
}


var G__19938 = cljs.core.next(seq__19151_19895__$1);
var G__19939 = null;
var G__19940 = (0);
var G__19941 = (0);
seq__19151_19839 = G__19938;
chunk__19153_19840 = G__19939;
count__19154_19841 = G__19940;
i__19155_19842 = G__19941;
continue;
} else {
var G__19942 = cljs.core.next(seq__19151_19895__$1);
var G__19943 = null;
var G__19944 = (0);
var G__19945 = (0);
seq__19151_19839 = G__19942;
chunk__19153_19840 = G__19943;
count__19154_19841 = G__19944;
i__19155_19842 = G__19945;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19954 = arguments.length;
var i__5770__auto___19955 = (0);
while(true){
if((i__5770__auto___19955 < len__5769__auto___19954)){
args__5775__auto__.push((arguments[i__5770__auto___19955]));

var G__19957 = (i__5770__auto___19955 + (1));
i__5770__auto___19955 = G__19957;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq19293){
var G__19294 = cljs.core.first(seq19293);
var seq19293__$1 = cljs.core.next(seq19293);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19294,seq19293__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__19330 = arguments.length;
switch (G__19330) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13893__auto___19971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13894__auto__ = (function (){var switch__13617__auto__ = (function (state_19345){
var state_val_19346 = (state_19345[(1)]);
if((state_val_19346 === (1))){
var state_19345__$1 = state_19345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19345__$1,(2),once_or_cleanup);
} else {
if((state_val_19346 === (2))){
var inst_19342 = (state_19345[(2)]);
var inst_19343 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19345__$1 = (function (){var statearr_19352 = state_19345;
(statearr_19352[(7)] = inst_19342);

return statearr_19352;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19345__$1,inst_19343);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13618__auto__ = null;
var shadow$dom$state_machine__13618__auto____0 = (function (){
var statearr_19358 = [null,null,null,null,null,null,null,null];
(statearr_19358[(0)] = shadow$dom$state_machine__13618__auto__);

(statearr_19358[(1)] = (1));

return statearr_19358;
});
var shadow$dom$state_machine__13618__auto____1 = (function (state_19345){
while(true){
var ret_value__13619__auto__ = (function (){try{while(true){
var result__13620__auto__ = switch__13617__auto__(state_19345);
if(cljs.core.keyword_identical_QMARK_(result__13620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13620__auto__;
}
break;
}
}catch (e19359){var ex__13621__auto__ = e19359;
var statearr_19360_19974 = state_19345;
(statearr_19360_19974[(2)] = ex__13621__auto__);


if(cljs.core.seq((state_19345[(4)]))){
var statearr_19361_19975 = state_19345;
(statearr_19361_19975[(1)] = cljs.core.first((state_19345[(4)])));

} else {
throw ex__13621__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13619__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19976 = state_19345;
state_19345 = G__19976;
continue;
} else {
return ret_value__13619__auto__;
}
break;
}
});
shadow$dom$state_machine__13618__auto__ = function(state_19345){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13618__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13618__auto____1.call(this,state_19345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13618__auto____0;
shadow$dom$state_machine__13618__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13618__auto____1;
return shadow$dom$state_machine__13618__auto__;
})()
})();
var state__13895__auto__ = (function (){var statearr_19373 = f__13894__auto__();
(statearr_19373[(6)] = c__13893__auto___19971);

return statearr_19373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13895__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
