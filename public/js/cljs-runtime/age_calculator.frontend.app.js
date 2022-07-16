goog.provide('age_calculator.frontend.app');
age_calculator.frontend.app.age = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
age_calculator.frontend.app.age_input = (function age_calculator$frontend$app$age_input(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Age",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(age_calculator.frontend.app.age),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__11469_SHARP_){
return cljs.core.reset_BANG_(age_calculator.frontend.app.age,p1__11469_SHARP_.target.value);
})], null)], null);
});
age_calculator.frontend.app.handle_click = (function age_calculator$frontend$app$handle_click(){
var age = parseInt(cljs.core.deref(age_calculator.frontend.app.age));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(age,"\u0414\u0430\u0448\u0430")){
alert("\u041F\u0440\u0438\u0432\u0435\u0442, \u0414\u0430\u0448\u0430, \u0442\u0432\u043E\u0439 \u0432\u043E\u0437\u0440\u0430\u0441\u0442: 23");
} else {
}

var G__11470 = age;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__11470)){
return alert("Error input");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u0414\u0430\u0448\u0430",G__11470)){
return alert("\u041F\u0440\u0438\u0432\u0435\u0442, \u0414\u0430\u0448\u0430, \u0442\u0432\u043E\u0439 \u0432\u043E\u0437\u0440\u0430\u0441\u0442: 23");
} else {
return alert("Your age is: ",age);

}
}
});
age_calculator.frontend.app.calc_button = (function age_calculator$frontend$app$calc_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),age_calculator.frontend.app.handle_click], null),"Calculate"], null);
});
age_calculator.frontend.app.home_page = (function age_calculator$frontend$app$home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Calculate your age!",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [age_calculator.frontend.app.age_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [age_calculator.frontend.app.calc_button], null)], null);
});
age_calculator.frontend.app.mount_root = (function age_calculator$frontend$app$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [age_calculator.frontend.app.home_page], null),document.getElementById("app"));
});
age_calculator.frontend.app.init = (function age_calculator$frontend$app$init(){
return age_calculator.frontend.app.mount_root();
});
goog.exportSymbol('age_calculator.frontend.app.init', age_calculator.frontend.app.init);

//# sourceMappingURL=age_calculator.frontend.app.js.map
