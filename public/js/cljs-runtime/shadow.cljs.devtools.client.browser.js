goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21068 = arguments.length;
var i__5770__auto___21069 = (0);
while(true){
if((i__5770__auto___21069 < len__5769__auto___21068)){
args__5775__auto__.push((arguments[i__5770__auto___21069]));

var G__21070 = (i__5770__auto___21069 + (1));
i__5770__auto___21069 = G__21070;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20781){
var G__20782 = cljs.core.first(seq20781);
var seq20781__$1 = cljs.core.next(seq20781);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20782,seq20781__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20786 = cljs.core.seq(sources);
var chunk__20787 = null;
var count__20788 = (0);
var i__20789 = (0);
while(true){
if((i__20789 < count__20788)){
var map__20796 = chunk__20787.cljs$core$IIndexed$_nth$arity$2(null,i__20789);
var map__20796__$1 = cljs.core.__destructure_map(map__20796);
var src = map__20796__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20796__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20796__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20796__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20796__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20797){var e_21071 = e20797;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21071);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21071.message)].join('')));
}

var G__21072 = seq__20786;
var G__21073 = chunk__20787;
var G__21074 = count__20788;
var G__21075 = (i__20789 + (1));
seq__20786 = G__21072;
chunk__20787 = G__21073;
count__20788 = G__21074;
i__20789 = G__21075;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20786);
if(temp__5804__auto__){
var seq__20786__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20786__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20786__$1);
var G__21076 = cljs.core.chunk_rest(seq__20786__$1);
var G__21077 = c__5568__auto__;
var G__21078 = cljs.core.count(c__5568__auto__);
var G__21079 = (0);
seq__20786 = G__21076;
chunk__20787 = G__21077;
count__20788 = G__21078;
i__20789 = G__21079;
continue;
} else {
var map__20798 = cljs.core.first(seq__20786__$1);
var map__20798__$1 = cljs.core.__destructure_map(map__20798);
var src = map__20798__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20798__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20798__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20798__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20798__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20800){var e_21080 = e20800;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21080);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21080.message)].join('')));
}

var G__21081 = cljs.core.next(seq__20786__$1);
var G__21082 = null;
var G__21083 = (0);
var G__21084 = (0);
seq__20786 = G__21081;
chunk__20787 = G__21082;
count__20788 = G__21083;
i__20789 = G__21084;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20802 = cljs.core.seq(js_requires);
var chunk__20803 = null;
var count__20804 = (0);
var i__20805 = (0);
while(true){
if((i__20805 < count__20804)){
var js_ns = chunk__20803.cljs$core$IIndexed$_nth$arity$2(null,i__20805);
var require_str_21085 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21085);


var G__21086 = seq__20802;
var G__21087 = chunk__20803;
var G__21088 = count__20804;
var G__21089 = (i__20805 + (1));
seq__20802 = G__21086;
chunk__20803 = G__21087;
count__20804 = G__21088;
i__20805 = G__21089;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20802);
if(temp__5804__auto__){
var seq__20802__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20802__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20802__$1);
var G__21090 = cljs.core.chunk_rest(seq__20802__$1);
var G__21091 = c__5568__auto__;
var G__21092 = cljs.core.count(c__5568__auto__);
var G__21093 = (0);
seq__20802 = G__21090;
chunk__20803 = G__21091;
count__20804 = G__21092;
i__20805 = G__21093;
continue;
} else {
var js_ns = cljs.core.first(seq__20802__$1);
var require_str_21094 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21094);


var G__21095 = cljs.core.next(seq__20802__$1);
var G__21096 = null;
var G__21097 = (0);
var G__21098 = (0);
seq__20802 = G__21095;
chunk__20803 = G__21096;
count__20804 = G__21097;
i__20805 = G__21098;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20807){
var map__20808 = p__20807;
var map__20808__$1 = cljs.core.__destructure_map(map__20808);
var msg = map__20808__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20808__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20808__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20809(s__20810){
return (new cljs.core.LazySeq(null,(function (){
var s__20810__$1 = s__20810;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20810__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20815 = cljs.core.first(xs__6360__auto__);
var map__20815__$1 = cljs.core.__destructure_map(map__20815);
var src = map__20815__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20815__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20815__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20810__$1,map__20815,map__20815__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20808,map__20808__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20809_$_iter__20811(s__20812){
return (new cljs.core.LazySeq(null,((function (s__20810__$1,map__20815,map__20815__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20808,map__20808__$1,msg,info,reload_info){
return (function (){
var s__20812__$1 = s__20812;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20812__$1);
if(temp__5804__auto____$1){
var s__20812__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20812__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20812__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20814 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20813 = (0);
while(true){
if((i__20813 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20813);
cljs.core.chunk_append(b__20814,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21099 = (i__20813 + (1));
i__20813 = G__21099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20814),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20809_$_iter__20811(cljs.core.chunk_rest(s__20812__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20814),null);
}
} else {
var warning = cljs.core.first(s__20812__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20809_$_iter__20811(cljs.core.rest(s__20812__$2)));
}
} else {
return null;
}
break;
}
});})(s__20810__$1,map__20815,map__20815__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20808,map__20808__$1,msg,info,reload_info))
,null,null));
});})(s__20810__$1,map__20815,map__20815__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20808,map__20808__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20809(cljs.core.rest(s__20810__$1)));
} else {
var G__21100 = cljs.core.rest(s__20810__$1);
s__20810__$1 = G__21100;
continue;
}
} else {
var G__21101 = cljs.core.rest(s__20810__$1);
s__20810__$1 = G__21101;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20816_21102 = cljs.core.seq(warnings);
var chunk__20817_21103 = null;
var count__20818_21104 = (0);
var i__20819_21105 = (0);
while(true){
if((i__20819_21105 < count__20818_21104)){
var map__20822_21106 = chunk__20817_21103.cljs$core$IIndexed$_nth$arity$2(null,i__20819_21105);
var map__20822_21107__$1 = cljs.core.__destructure_map(map__20822_21106);
var w_21108 = map__20822_21107__$1;
var msg_21109__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20822_21107__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20822_21107__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20822_21107__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20822_21107__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21112)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21110),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21111),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21109__$1)].join(''));


var G__21113 = seq__20816_21102;
var G__21114 = chunk__20817_21103;
var G__21115 = count__20818_21104;
var G__21116 = (i__20819_21105 + (1));
seq__20816_21102 = G__21113;
chunk__20817_21103 = G__21114;
count__20818_21104 = G__21115;
i__20819_21105 = G__21116;
continue;
} else {
var temp__5804__auto___21117 = cljs.core.seq(seq__20816_21102);
if(temp__5804__auto___21117){
var seq__20816_21118__$1 = temp__5804__auto___21117;
if(cljs.core.chunked_seq_QMARK_(seq__20816_21118__$1)){
var c__5568__auto___21119 = cljs.core.chunk_first(seq__20816_21118__$1);
var G__21120 = cljs.core.chunk_rest(seq__20816_21118__$1);
var G__21121 = c__5568__auto___21119;
var G__21122 = cljs.core.count(c__5568__auto___21119);
var G__21123 = (0);
seq__20816_21102 = G__21120;
chunk__20817_21103 = G__21121;
count__20818_21104 = G__21122;
i__20819_21105 = G__21123;
continue;
} else {
var map__20823_21124 = cljs.core.first(seq__20816_21118__$1);
var map__20823_21125__$1 = cljs.core.__destructure_map(map__20823_21124);
var w_21126 = map__20823_21125__$1;
var msg_21127__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20823_21125__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20823_21125__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20823_21125__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20823_21125__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21130)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21128),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21129),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21127__$1)].join(''));


var G__21131 = cljs.core.next(seq__20816_21118__$1);
var G__21132 = null;
var G__21133 = (0);
var G__21134 = (0);
seq__20816_21102 = G__21131;
chunk__20817_21103 = G__21132;
count__20818_21104 = G__21133;
i__20819_21105 = G__21134;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20806_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20806_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20824){
var map__20825 = p__20824;
var map__20825__$1 = cljs.core.__destructure_map(map__20825);
var msg = map__20825__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20825__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20825__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20826 = cljs.core.seq(updates);
var chunk__20828 = null;
var count__20829 = (0);
var i__20830 = (0);
while(true){
if((i__20830 < count__20829)){
var path = chunk__20828.cljs$core$IIndexed$_nth$arity$2(null,i__20830);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20940_21135 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20944_21136 = null;
var count__20945_21137 = (0);
var i__20946_21138 = (0);
while(true){
if((i__20946_21138 < count__20945_21137)){
var node_21139 = chunk__20944_21136.cljs$core$IIndexed$_nth$arity$2(null,i__20946_21138);
if(cljs.core.not(node_21139.shadow$old)){
var path_match_21140 = shadow.cljs.devtools.client.browser.match_paths(node_21139.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21140)){
var new_link_21141 = (function (){var G__20972 = node_21139.cloneNode(true);
G__20972.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21140),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20972;
})();
(node_21139.shadow$old = true);

(new_link_21141.onload = ((function (seq__20940_21135,chunk__20944_21136,count__20945_21137,i__20946_21138,seq__20826,chunk__20828,count__20829,i__20830,new_link_21141,path_match_21140,node_21139,path,map__20825,map__20825__$1,msg,updates,reload_info){
return (function (e){
var seq__20973_21142 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20975_21143 = null;
var count__20976_21144 = (0);
var i__20977_21145 = (0);
while(true){
if((i__20977_21145 < count__20976_21144)){
var map__20981_21146 = chunk__20975_21143.cljs$core$IIndexed$_nth$arity$2(null,i__20977_21145);
var map__20981_21147__$1 = cljs.core.__destructure_map(map__20981_21146);
var task_21148 = map__20981_21147__$1;
var fn_str_21149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20981_21147__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20981_21147__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21151 = goog.getObjectByName(fn_str_21149,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21150)].join(''));

(fn_obj_21151.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21151.cljs$core$IFn$_invoke$arity$2(path,new_link_21141) : fn_obj_21151.call(null,path,new_link_21141));


var G__21152 = seq__20973_21142;
var G__21153 = chunk__20975_21143;
var G__21154 = count__20976_21144;
var G__21155 = (i__20977_21145 + (1));
seq__20973_21142 = G__21152;
chunk__20975_21143 = G__21153;
count__20976_21144 = G__21154;
i__20977_21145 = G__21155;
continue;
} else {
var temp__5804__auto___21156 = cljs.core.seq(seq__20973_21142);
if(temp__5804__auto___21156){
var seq__20973_21157__$1 = temp__5804__auto___21156;
if(cljs.core.chunked_seq_QMARK_(seq__20973_21157__$1)){
var c__5568__auto___21158 = cljs.core.chunk_first(seq__20973_21157__$1);
var G__21159 = cljs.core.chunk_rest(seq__20973_21157__$1);
var G__21160 = c__5568__auto___21158;
var G__21161 = cljs.core.count(c__5568__auto___21158);
var G__21162 = (0);
seq__20973_21142 = G__21159;
chunk__20975_21143 = G__21160;
count__20976_21144 = G__21161;
i__20977_21145 = G__21162;
continue;
} else {
var map__20982_21163 = cljs.core.first(seq__20973_21157__$1);
var map__20982_21164__$1 = cljs.core.__destructure_map(map__20982_21163);
var task_21165 = map__20982_21164__$1;
var fn_str_21166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20982_21164__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20982_21164__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21168 = goog.getObjectByName(fn_str_21166,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21167)].join(''));

(fn_obj_21168.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21168.cljs$core$IFn$_invoke$arity$2(path,new_link_21141) : fn_obj_21168.call(null,path,new_link_21141));


var G__21169 = cljs.core.next(seq__20973_21157__$1);
var G__21170 = null;
var G__21171 = (0);
var G__21172 = (0);
seq__20973_21142 = G__21169;
chunk__20975_21143 = G__21170;
count__20976_21144 = G__21171;
i__20977_21145 = G__21172;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21139);
});})(seq__20940_21135,chunk__20944_21136,count__20945_21137,i__20946_21138,seq__20826,chunk__20828,count__20829,i__20830,new_link_21141,path_match_21140,node_21139,path,map__20825,map__20825__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21140], 0));

goog.dom.insertSiblingAfter(new_link_21141,node_21139);


var G__21173 = seq__20940_21135;
var G__21174 = chunk__20944_21136;
var G__21175 = count__20945_21137;
var G__21176 = (i__20946_21138 + (1));
seq__20940_21135 = G__21173;
chunk__20944_21136 = G__21174;
count__20945_21137 = G__21175;
i__20946_21138 = G__21176;
continue;
} else {
var G__21177 = seq__20940_21135;
var G__21178 = chunk__20944_21136;
var G__21179 = count__20945_21137;
var G__21180 = (i__20946_21138 + (1));
seq__20940_21135 = G__21177;
chunk__20944_21136 = G__21178;
count__20945_21137 = G__21179;
i__20946_21138 = G__21180;
continue;
}
} else {
var G__21181 = seq__20940_21135;
var G__21182 = chunk__20944_21136;
var G__21183 = count__20945_21137;
var G__21184 = (i__20946_21138 + (1));
seq__20940_21135 = G__21181;
chunk__20944_21136 = G__21182;
count__20945_21137 = G__21183;
i__20946_21138 = G__21184;
continue;
}
} else {
var temp__5804__auto___21185 = cljs.core.seq(seq__20940_21135);
if(temp__5804__auto___21185){
var seq__20940_21186__$1 = temp__5804__auto___21185;
if(cljs.core.chunked_seq_QMARK_(seq__20940_21186__$1)){
var c__5568__auto___21187 = cljs.core.chunk_first(seq__20940_21186__$1);
var G__21188 = cljs.core.chunk_rest(seq__20940_21186__$1);
var G__21189 = c__5568__auto___21187;
var G__21190 = cljs.core.count(c__5568__auto___21187);
var G__21191 = (0);
seq__20940_21135 = G__21188;
chunk__20944_21136 = G__21189;
count__20945_21137 = G__21190;
i__20946_21138 = G__21191;
continue;
} else {
var node_21192 = cljs.core.first(seq__20940_21186__$1);
if(cljs.core.not(node_21192.shadow$old)){
var path_match_21193 = shadow.cljs.devtools.client.browser.match_paths(node_21192.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21193)){
var new_link_21194 = (function (){var G__20983 = node_21192.cloneNode(true);
G__20983.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21193),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20983;
})();
(node_21192.shadow$old = true);

(new_link_21194.onload = ((function (seq__20940_21135,chunk__20944_21136,count__20945_21137,i__20946_21138,seq__20826,chunk__20828,count__20829,i__20830,new_link_21194,path_match_21193,node_21192,seq__20940_21186__$1,temp__5804__auto___21185,path,map__20825,map__20825__$1,msg,updates,reload_info){
return (function (e){
var seq__20984_21195 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20986_21196 = null;
var count__20987_21197 = (0);
var i__20988_21198 = (0);
while(true){
if((i__20988_21198 < count__20987_21197)){
var map__20992_21199 = chunk__20986_21196.cljs$core$IIndexed$_nth$arity$2(null,i__20988_21198);
var map__20992_21200__$1 = cljs.core.__destructure_map(map__20992_21199);
var task_21201 = map__20992_21200__$1;
var fn_str_21202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20992_21200__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20992_21200__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21204 = goog.getObjectByName(fn_str_21202,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21203)].join(''));

(fn_obj_21204.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21204.cljs$core$IFn$_invoke$arity$2(path,new_link_21194) : fn_obj_21204.call(null,path,new_link_21194));


var G__21205 = seq__20984_21195;
var G__21206 = chunk__20986_21196;
var G__21207 = count__20987_21197;
var G__21208 = (i__20988_21198 + (1));
seq__20984_21195 = G__21205;
chunk__20986_21196 = G__21206;
count__20987_21197 = G__21207;
i__20988_21198 = G__21208;
continue;
} else {
var temp__5804__auto___21209__$1 = cljs.core.seq(seq__20984_21195);
if(temp__5804__auto___21209__$1){
var seq__20984_21210__$1 = temp__5804__auto___21209__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20984_21210__$1)){
var c__5568__auto___21211 = cljs.core.chunk_first(seq__20984_21210__$1);
var G__21212 = cljs.core.chunk_rest(seq__20984_21210__$1);
var G__21213 = c__5568__auto___21211;
var G__21214 = cljs.core.count(c__5568__auto___21211);
var G__21215 = (0);
seq__20984_21195 = G__21212;
chunk__20986_21196 = G__21213;
count__20987_21197 = G__21214;
i__20988_21198 = G__21215;
continue;
} else {
var map__20993_21216 = cljs.core.first(seq__20984_21210__$1);
var map__20993_21217__$1 = cljs.core.__destructure_map(map__20993_21216);
var task_21218 = map__20993_21217__$1;
var fn_str_21219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20993_21217__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20993_21217__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21221 = goog.getObjectByName(fn_str_21219,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21220)].join(''));

(fn_obj_21221.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21221.cljs$core$IFn$_invoke$arity$2(path,new_link_21194) : fn_obj_21221.call(null,path,new_link_21194));


var G__21222 = cljs.core.next(seq__20984_21210__$1);
var G__21223 = null;
var G__21224 = (0);
var G__21225 = (0);
seq__20984_21195 = G__21222;
chunk__20986_21196 = G__21223;
count__20987_21197 = G__21224;
i__20988_21198 = G__21225;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21192);
});})(seq__20940_21135,chunk__20944_21136,count__20945_21137,i__20946_21138,seq__20826,chunk__20828,count__20829,i__20830,new_link_21194,path_match_21193,node_21192,seq__20940_21186__$1,temp__5804__auto___21185,path,map__20825,map__20825__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21193], 0));

goog.dom.insertSiblingAfter(new_link_21194,node_21192);


var G__21226 = cljs.core.next(seq__20940_21186__$1);
var G__21227 = null;
var G__21228 = (0);
var G__21229 = (0);
seq__20940_21135 = G__21226;
chunk__20944_21136 = G__21227;
count__20945_21137 = G__21228;
i__20946_21138 = G__21229;
continue;
} else {
var G__21230 = cljs.core.next(seq__20940_21186__$1);
var G__21231 = null;
var G__21232 = (0);
var G__21233 = (0);
seq__20940_21135 = G__21230;
chunk__20944_21136 = G__21231;
count__20945_21137 = G__21232;
i__20946_21138 = G__21233;
continue;
}
} else {
var G__21234 = cljs.core.next(seq__20940_21186__$1);
var G__21235 = null;
var G__21236 = (0);
var G__21237 = (0);
seq__20940_21135 = G__21234;
chunk__20944_21136 = G__21235;
count__20945_21137 = G__21236;
i__20946_21138 = G__21237;
continue;
}
}
} else {
}
}
break;
}


var G__21238 = seq__20826;
var G__21239 = chunk__20828;
var G__21240 = count__20829;
var G__21241 = (i__20830 + (1));
seq__20826 = G__21238;
chunk__20828 = G__21239;
count__20829 = G__21240;
i__20830 = G__21241;
continue;
} else {
var G__21242 = seq__20826;
var G__21243 = chunk__20828;
var G__21244 = count__20829;
var G__21245 = (i__20830 + (1));
seq__20826 = G__21242;
chunk__20828 = G__21243;
count__20829 = G__21244;
i__20830 = G__21245;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20826);
if(temp__5804__auto__){
var seq__20826__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20826__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20826__$1);
var G__21246 = cljs.core.chunk_rest(seq__20826__$1);
var G__21247 = c__5568__auto__;
var G__21248 = cljs.core.count(c__5568__auto__);
var G__21249 = (0);
seq__20826 = G__21246;
chunk__20828 = G__21247;
count__20829 = G__21248;
i__20830 = G__21249;
continue;
} else {
var path = cljs.core.first(seq__20826__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20994_21250 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20998_21251 = null;
var count__20999_21252 = (0);
var i__21000_21253 = (0);
while(true){
if((i__21000_21253 < count__20999_21252)){
var node_21254 = chunk__20998_21251.cljs$core$IIndexed$_nth$arity$2(null,i__21000_21253);
if(cljs.core.not(node_21254.shadow$old)){
var path_match_21255 = shadow.cljs.devtools.client.browser.match_paths(node_21254.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21255)){
var new_link_21256 = (function (){var G__21026 = node_21254.cloneNode(true);
G__21026.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21255),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21026;
})();
(node_21254.shadow$old = true);

(new_link_21256.onload = ((function (seq__20994_21250,chunk__20998_21251,count__20999_21252,i__21000_21253,seq__20826,chunk__20828,count__20829,i__20830,new_link_21256,path_match_21255,node_21254,path,seq__20826__$1,temp__5804__auto__,map__20825,map__20825__$1,msg,updates,reload_info){
return (function (e){
var seq__21027_21257 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21029_21258 = null;
var count__21030_21259 = (0);
var i__21031_21260 = (0);
while(true){
if((i__21031_21260 < count__21030_21259)){
var map__21035_21261 = chunk__21029_21258.cljs$core$IIndexed$_nth$arity$2(null,i__21031_21260);
var map__21035_21262__$1 = cljs.core.__destructure_map(map__21035_21261);
var task_21263 = map__21035_21262__$1;
var fn_str_21264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21035_21262__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21035_21262__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21266 = goog.getObjectByName(fn_str_21264,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21265)].join(''));

(fn_obj_21266.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21266.cljs$core$IFn$_invoke$arity$2(path,new_link_21256) : fn_obj_21266.call(null,path,new_link_21256));


var G__21267 = seq__21027_21257;
var G__21268 = chunk__21029_21258;
var G__21269 = count__21030_21259;
var G__21270 = (i__21031_21260 + (1));
seq__21027_21257 = G__21267;
chunk__21029_21258 = G__21268;
count__21030_21259 = G__21269;
i__21031_21260 = G__21270;
continue;
} else {
var temp__5804__auto___21271__$1 = cljs.core.seq(seq__21027_21257);
if(temp__5804__auto___21271__$1){
var seq__21027_21272__$1 = temp__5804__auto___21271__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21027_21272__$1)){
var c__5568__auto___21273 = cljs.core.chunk_first(seq__21027_21272__$1);
var G__21274 = cljs.core.chunk_rest(seq__21027_21272__$1);
var G__21275 = c__5568__auto___21273;
var G__21276 = cljs.core.count(c__5568__auto___21273);
var G__21277 = (0);
seq__21027_21257 = G__21274;
chunk__21029_21258 = G__21275;
count__21030_21259 = G__21276;
i__21031_21260 = G__21277;
continue;
} else {
var map__21036_21278 = cljs.core.first(seq__21027_21272__$1);
var map__21036_21279__$1 = cljs.core.__destructure_map(map__21036_21278);
var task_21280 = map__21036_21279__$1;
var fn_str_21281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21036_21279__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21036_21279__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21283 = goog.getObjectByName(fn_str_21281,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21282)].join(''));

(fn_obj_21283.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21283.cljs$core$IFn$_invoke$arity$2(path,new_link_21256) : fn_obj_21283.call(null,path,new_link_21256));


var G__21284 = cljs.core.next(seq__21027_21272__$1);
var G__21285 = null;
var G__21286 = (0);
var G__21287 = (0);
seq__21027_21257 = G__21284;
chunk__21029_21258 = G__21285;
count__21030_21259 = G__21286;
i__21031_21260 = G__21287;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21254);
});})(seq__20994_21250,chunk__20998_21251,count__20999_21252,i__21000_21253,seq__20826,chunk__20828,count__20829,i__20830,new_link_21256,path_match_21255,node_21254,path,seq__20826__$1,temp__5804__auto__,map__20825,map__20825__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21255], 0));

goog.dom.insertSiblingAfter(new_link_21256,node_21254);


var G__21288 = seq__20994_21250;
var G__21289 = chunk__20998_21251;
var G__21290 = count__20999_21252;
var G__21291 = (i__21000_21253 + (1));
seq__20994_21250 = G__21288;
chunk__20998_21251 = G__21289;
count__20999_21252 = G__21290;
i__21000_21253 = G__21291;
continue;
} else {
var G__21292 = seq__20994_21250;
var G__21293 = chunk__20998_21251;
var G__21294 = count__20999_21252;
var G__21295 = (i__21000_21253 + (1));
seq__20994_21250 = G__21292;
chunk__20998_21251 = G__21293;
count__20999_21252 = G__21294;
i__21000_21253 = G__21295;
continue;
}
} else {
var G__21296 = seq__20994_21250;
var G__21297 = chunk__20998_21251;
var G__21298 = count__20999_21252;
var G__21299 = (i__21000_21253 + (1));
seq__20994_21250 = G__21296;
chunk__20998_21251 = G__21297;
count__20999_21252 = G__21298;
i__21000_21253 = G__21299;
continue;
}
} else {
var temp__5804__auto___21300__$1 = cljs.core.seq(seq__20994_21250);
if(temp__5804__auto___21300__$1){
var seq__20994_21301__$1 = temp__5804__auto___21300__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20994_21301__$1)){
var c__5568__auto___21302 = cljs.core.chunk_first(seq__20994_21301__$1);
var G__21303 = cljs.core.chunk_rest(seq__20994_21301__$1);
var G__21304 = c__5568__auto___21302;
var G__21305 = cljs.core.count(c__5568__auto___21302);
var G__21306 = (0);
seq__20994_21250 = G__21303;
chunk__20998_21251 = G__21304;
count__20999_21252 = G__21305;
i__21000_21253 = G__21306;
continue;
} else {
var node_21307 = cljs.core.first(seq__20994_21301__$1);
if(cljs.core.not(node_21307.shadow$old)){
var path_match_21308 = shadow.cljs.devtools.client.browser.match_paths(node_21307.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21308)){
var new_link_21309 = (function (){var G__21037 = node_21307.cloneNode(true);
G__21037.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21308),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21037;
})();
(node_21307.shadow$old = true);

(new_link_21309.onload = ((function (seq__20994_21250,chunk__20998_21251,count__20999_21252,i__21000_21253,seq__20826,chunk__20828,count__20829,i__20830,new_link_21309,path_match_21308,node_21307,seq__20994_21301__$1,temp__5804__auto___21300__$1,path,seq__20826__$1,temp__5804__auto__,map__20825,map__20825__$1,msg,updates,reload_info){
return (function (e){
var seq__21038_21310 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21040_21311 = null;
var count__21041_21312 = (0);
var i__21042_21313 = (0);
while(true){
if((i__21042_21313 < count__21041_21312)){
var map__21046_21314 = chunk__21040_21311.cljs$core$IIndexed$_nth$arity$2(null,i__21042_21313);
var map__21046_21315__$1 = cljs.core.__destructure_map(map__21046_21314);
var task_21316 = map__21046_21315__$1;
var fn_str_21317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21046_21315__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21046_21315__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21319 = goog.getObjectByName(fn_str_21317,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21318)].join(''));

(fn_obj_21319.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21319.cljs$core$IFn$_invoke$arity$2(path,new_link_21309) : fn_obj_21319.call(null,path,new_link_21309));


var G__21320 = seq__21038_21310;
var G__21321 = chunk__21040_21311;
var G__21322 = count__21041_21312;
var G__21323 = (i__21042_21313 + (1));
seq__21038_21310 = G__21320;
chunk__21040_21311 = G__21321;
count__21041_21312 = G__21322;
i__21042_21313 = G__21323;
continue;
} else {
var temp__5804__auto___21324__$2 = cljs.core.seq(seq__21038_21310);
if(temp__5804__auto___21324__$2){
var seq__21038_21325__$1 = temp__5804__auto___21324__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21038_21325__$1)){
var c__5568__auto___21326 = cljs.core.chunk_first(seq__21038_21325__$1);
var G__21327 = cljs.core.chunk_rest(seq__21038_21325__$1);
var G__21328 = c__5568__auto___21326;
var G__21329 = cljs.core.count(c__5568__auto___21326);
var G__21330 = (0);
seq__21038_21310 = G__21327;
chunk__21040_21311 = G__21328;
count__21041_21312 = G__21329;
i__21042_21313 = G__21330;
continue;
} else {
var map__21047_21331 = cljs.core.first(seq__21038_21325__$1);
var map__21047_21332__$1 = cljs.core.__destructure_map(map__21047_21331);
var task_21333 = map__21047_21332__$1;
var fn_str_21334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21047_21332__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21047_21332__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21336 = goog.getObjectByName(fn_str_21334,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21335)].join(''));

(fn_obj_21336.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21336.cljs$core$IFn$_invoke$arity$2(path,new_link_21309) : fn_obj_21336.call(null,path,new_link_21309));


var G__21337 = cljs.core.next(seq__21038_21325__$1);
var G__21338 = null;
var G__21339 = (0);
var G__21340 = (0);
seq__21038_21310 = G__21337;
chunk__21040_21311 = G__21338;
count__21041_21312 = G__21339;
i__21042_21313 = G__21340;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21307);
});})(seq__20994_21250,chunk__20998_21251,count__20999_21252,i__21000_21253,seq__20826,chunk__20828,count__20829,i__20830,new_link_21309,path_match_21308,node_21307,seq__20994_21301__$1,temp__5804__auto___21300__$1,path,seq__20826__$1,temp__5804__auto__,map__20825,map__20825__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21308], 0));

goog.dom.insertSiblingAfter(new_link_21309,node_21307);


var G__21341 = cljs.core.next(seq__20994_21301__$1);
var G__21342 = null;
var G__21343 = (0);
var G__21344 = (0);
seq__20994_21250 = G__21341;
chunk__20998_21251 = G__21342;
count__20999_21252 = G__21343;
i__21000_21253 = G__21344;
continue;
} else {
var G__21345 = cljs.core.next(seq__20994_21301__$1);
var G__21346 = null;
var G__21347 = (0);
var G__21348 = (0);
seq__20994_21250 = G__21345;
chunk__20998_21251 = G__21346;
count__20999_21252 = G__21347;
i__21000_21253 = G__21348;
continue;
}
} else {
var G__21349 = cljs.core.next(seq__20994_21301__$1);
var G__21350 = null;
var G__21351 = (0);
var G__21352 = (0);
seq__20994_21250 = G__21349;
chunk__20998_21251 = G__21350;
count__20999_21252 = G__21351;
i__21000_21253 = G__21352;
continue;
}
}
} else {
}
}
break;
}


var G__21353 = cljs.core.next(seq__20826__$1);
var G__21354 = null;
var G__21355 = (0);
var G__21356 = (0);
seq__20826 = G__21353;
chunk__20828 = G__21354;
count__20829 = G__21355;
i__20830 = G__21356;
continue;
} else {
var G__21357 = cljs.core.next(seq__20826__$1);
var G__21358 = null;
var G__21359 = (0);
var G__21360 = (0);
seq__20826 = G__21357;
chunk__20828 = G__21358;
count__20829 = G__21359;
i__20830 = G__21360;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21048){
var map__21049 = p__21048;
var map__21049__$1 = cljs.core.__destructure_map(map__21049);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21049__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21050){
var map__21051 = p__21050;
var map__21051__$1 = cljs.core.__destructure_map(map__21051);
var _ = map__21051__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21051__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21052,done,error){
var map__21053 = p__21052;
var map__21053__$1 = cljs.core.__destructure_map(map__21053);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21053__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21054,done,error){
var map__21055 = p__21054;
var map__21055__$1 = cljs.core.__destructure_map(map__21055);
var msg = map__21055__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21055__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21055__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21055__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21056){
var map__21057 = p__21056;
var map__21057__$1 = cljs.core.__destructure_map(map__21057);
var src = map__21057__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21057__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21058 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21058) : done.call(null,G__21058));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21059){
var map__21060 = p__21059;
var map__21060__$1 = cljs.core.__destructure_map(map__21060);
var msg__$1 = map__21060__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21060__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21061){var ex = e21061;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21062){
var map__21063 = p__21062;
var map__21063__$1 = cljs.core.__destructure_map(map__21063);
var env = map__21063__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21063__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21064){
var map__21065 = p__21064;
var map__21065__$1 = cljs.core.__destructure_map(map__21065);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21065__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21065__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21066){
var map__21067 = p__21066;
var map__21067__$1 = cljs.core.__destructure_map(map__21067);
var svc = map__21067__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21067__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
