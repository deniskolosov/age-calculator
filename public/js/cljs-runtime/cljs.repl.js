goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19081){
var map__19086 = p__19081;
var map__19086__$1 = cljs.core.__destructure_map(map__19086);
var m = map__19086__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19086__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19086__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19100_19400 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19101_19401 = null;
var count__19102_19402 = (0);
var i__19103_19403 = (0);
while(true){
if((i__19103_19403 < count__19102_19402)){
var f_19404 = chunk__19101_19401.cljs$core$IIndexed$_nth$arity$2(null,i__19103_19403);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19404], 0));


var G__19405 = seq__19100_19400;
var G__19406 = chunk__19101_19401;
var G__19407 = count__19102_19402;
var G__19408 = (i__19103_19403 + (1));
seq__19100_19400 = G__19405;
chunk__19101_19401 = G__19406;
count__19102_19402 = G__19407;
i__19103_19403 = G__19408;
continue;
} else {
var temp__5804__auto___19410 = cljs.core.seq(seq__19100_19400);
if(temp__5804__auto___19410){
var seq__19100_19411__$1 = temp__5804__auto___19410;
if(cljs.core.chunked_seq_QMARK_(seq__19100_19411__$1)){
var c__5568__auto___19412 = cljs.core.chunk_first(seq__19100_19411__$1);
var G__19413 = cljs.core.chunk_rest(seq__19100_19411__$1);
var G__19414 = c__5568__auto___19412;
var G__19415 = cljs.core.count(c__5568__auto___19412);
var G__19416 = (0);
seq__19100_19400 = G__19413;
chunk__19101_19401 = G__19414;
count__19102_19402 = G__19415;
i__19103_19403 = G__19416;
continue;
} else {
var f_19417 = cljs.core.first(seq__19100_19411__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19417], 0));


var G__19418 = cljs.core.next(seq__19100_19411__$1);
var G__19419 = null;
var G__19420 = (0);
var G__19421 = (0);
seq__19100_19400 = G__19418;
chunk__19101_19401 = G__19419;
count__19102_19402 = G__19420;
i__19103_19403 = G__19421;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19422 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19422], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19422)))?cljs.core.second(arglists_19422):arglists_19422)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19131_19423 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19132_19424 = null;
var count__19133_19425 = (0);
var i__19134_19426 = (0);
while(true){
if((i__19134_19426 < count__19133_19425)){
var vec__19172_19428 = chunk__19132_19424.cljs$core$IIndexed$_nth$arity$2(null,i__19134_19426);
var name_19429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19172_19428,(0),null);
var map__19175_19430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19172_19428,(1),null);
var map__19175_19431__$1 = cljs.core.__destructure_map(map__19175_19430);
var doc_19432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19175_19431__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19175_19431__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19429], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19433], 0));

if(cljs.core.truth_(doc_19432)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19432], 0));
} else {
}


var G__19439 = seq__19131_19423;
var G__19440 = chunk__19132_19424;
var G__19441 = count__19133_19425;
var G__19442 = (i__19134_19426 + (1));
seq__19131_19423 = G__19439;
chunk__19132_19424 = G__19440;
count__19133_19425 = G__19441;
i__19134_19426 = G__19442;
continue;
} else {
var temp__5804__auto___19443 = cljs.core.seq(seq__19131_19423);
if(temp__5804__auto___19443){
var seq__19131_19444__$1 = temp__5804__auto___19443;
if(cljs.core.chunked_seq_QMARK_(seq__19131_19444__$1)){
var c__5568__auto___19446 = cljs.core.chunk_first(seq__19131_19444__$1);
var G__19448 = cljs.core.chunk_rest(seq__19131_19444__$1);
var G__19449 = c__5568__auto___19446;
var G__19450 = cljs.core.count(c__5568__auto___19446);
var G__19451 = (0);
seq__19131_19423 = G__19448;
chunk__19132_19424 = G__19449;
count__19133_19425 = G__19450;
i__19134_19426 = G__19451;
continue;
} else {
var vec__19181_19455 = cljs.core.first(seq__19131_19444__$1);
var name_19456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19181_19455,(0),null);
var map__19185_19457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19181_19455,(1),null);
var map__19185_19458__$1 = cljs.core.__destructure_map(map__19185_19457);
var doc_19459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19185_19458__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19185_19458__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19456], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19460], 0));

if(cljs.core.truth_(doc_19459)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19459], 0));
} else {
}


var G__19462 = cljs.core.next(seq__19131_19444__$1);
var G__19463 = null;
var G__19464 = (0);
var G__19465 = (0);
seq__19131_19423 = G__19462;
chunk__19132_19424 = G__19463;
count__19133_19425 = G__19464;
i__19134_19426 = G__19465;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19187 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19188 = null;
var count__19189 = (0);
var i__19190 = (0);
while(true){
if((i__19190 < count__19189)){
var role = chunk__19188.cljs$core$IIndexed$_nth$arity$2(null,i__19190);
var temp__5804__auto___19471__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19471__$1)){
var spec_19472 = temp__5804__auto___19471__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19472)], 0));
} else {
}


var G__19473 = seq__19187;
var G__19474 = chunk__19188;
var G__19475 = count__19189;
var G__19476 = (i__19190 + (1));
seq__19187 = G__19473;
chunk__19188 = G__19474;
count__19189 = G__19475;
i__19190 = G__19476;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19187);
if(temp__5804__auto____$1){
var seq__19187__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19187__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19187__$1);
var G__19478 = cljs.core.chunk_rest(seq__19187__$1);
var G__19479 = c__5568__auto__;
var G__19480 = cljs.core.count(c__5568__auto__);
var G__19481 = (0);
seq__19187 = G__19478;
chunk__19188 = G__19479;
count__19189 = G__19480;
i__19190 = G__19481;
continue;
} else {
var role = cljs.core.first(seq__19187__$1);
var temp__5804__auto___19482__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19482__$2)){
var spec_19483 = temp__5804__auto___19482__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19483)], 0));
} else {
}


var G__19484 = cljs.core.next(seq__19187__$1);
var G__19485 = null;
var G__19486 = (0);
var G__19487 = (0);
seq__19187 = G__19484;
chunk__19188 = G__19485;
count__19189 = G__19486;
i__19190 = G__19487;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19489 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__19490 = cljs.core.ex_cause(t);
via = G__19489;
t = G__19490;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19217 = datafied_throwable;
var map__19217__$1 = cljs.core.__destructure_map(map__19217);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19217__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19217__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19217__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19218 = cljs.core.last(via);
var map__19218__$1 = cljs.core.__destructure_map(map__19218);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19218__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19218__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19218__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19219 = data;
var map__19219__$1 = cljs.core.__destructure_map(map__19219);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19219__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19219__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19219__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19220 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19220__$1 = cljs.core.__destructure_map(map__19220);
var top_data = map__19220__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19220__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19238 = phase;
var G__19238__$1 = (((G__19238 instanceof cljs.core.Keyword))?G__19238.fqn:null);
switch (G__19238__$1) {
case "read-source":
var map__19243 = data;
var map__19243__$1 = cljs.core.__destructure_map(map__19243);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19243__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19243__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19247 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19247__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19247,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19247);
var G__19247__$2 = (cljs.core.truth_((function (){var fexpr__19248 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19248.cljs$core$IFn$_invoke$arity$1 ? fexpr__19248.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19248.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19247__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19247__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19247__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19247__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19254 = top_data;
var G__19254__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19254,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19254);
var G__19254__$2 = (cljs.core.truth_((function (){var fexpr__19264 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19264.cljs$core$IFn$_invoke$arity$1 ? fexpr__19264.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19264.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19254__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19254__$1);
var G__19254__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19254__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19254__$2);
var G__19254__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19254__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19254__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19254__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19254__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19289 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19289,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19289,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19289,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19289,(3),null);
var G__19292 = top_data;
var G__19292__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19292,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19292);
var G__19292__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19292__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19292__$1);
var G__19292__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19292__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19292__$2);
var G__19292__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19292__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19292__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19292__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19292__$4;
}

break;
case "execution":
var vec__19302 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19302,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19302,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19302,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19302,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19216_SHARP_){
var or__5045__auto__ = (p1__19216_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__19310 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19310.cljs$core$IFn$_invoke$arity$1 ? fexpr__19310.cljs$core$IFn$_invoke$arity$1(p1__19216_SHARP_) : fexpr__19310.call(null,p1__19216_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__19320 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19320__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19320,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19320);
var G__19320__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19320__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19320__$1);
var G__19320__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19320__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19320__$2);
var G__19320__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19320__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19320__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19320__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19320__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19238__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19338){
var map__19339 = p__19338;
var map__19339__$1 = cljs.core.__destructure_map(map__19339);
var triage_data = map__19339__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19339__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19339__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19339__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19339__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19339__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19339__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19339__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19339__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19347 = phase;
var G__19347__$1 = (((G__19347 instanceof cljs.core.Keyword))?G__19347.fqn:null);
switch (G__19347__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19348 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19349 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19350 = loc;
var G__19351 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19354_19544 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19355_19545 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19356_19546 = true;
var _STAR_print_fn_STAR__temp_val__19357_19547 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19356_19546);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19357_19547);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19335_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19335_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19355_19545);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19354_19544);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19348,G__19349,G__19350,G__19351) : format.call(null,G__19348,G__19349,G__19350,G__19351));

break;
case "macroexpansion":
var G__19362 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19363 = cause_type;
var G__19364 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19365 = loc;
var G__19366 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19362,G__19363,G__19364,G__19365,G__19366) : format.call(null,G__19362,G__19363,G__19364,G__19365,G__19366));

break;
case "compile-syntax-check":
var G__19368 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19369 = cause_type;
var G__19370 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19371 = loc;
var G__19372 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19368,G__19369,G__19370,G__19371,G__19372) : format.call(null,G__19368,G__19369,G__19370,G__19371,G__19372));

break;
case "compilation":
var G__19374 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19375 = cause_type;
var G__19376 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19377 = loc;
var G__19378 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19374,G__19375,G__19376,G__19377,G__19378) : format.call(null,G__19374,G__19375,G__19376,G__19377,G__19378));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19380 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19381 = symbol;
var G__19382 = loc;
var G__19383 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19384_19550 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19385_19551 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19386_19552 = true;
var _STAR_print_fn_STAR__temp_val__19387_19553 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19386_19552);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19387_19553);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19336_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19336_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19385_19551);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19384_19550);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19380,G__19381,G__19382,G__19383) : format.call(null,G__19380,G__19381,G__19382,G__19383));
} else {
var G__19388 = "Execution error%s at %s(%s).\n%s\n";
var G__19389 = cause_type;
var G__19390 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19391 = loc;
var G__19392 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19388,G__19389,G__19390,G__19391,G__19392) : format.call(null,G__19388,G__19389,G__19390,G__19391,G__19392));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19347__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
