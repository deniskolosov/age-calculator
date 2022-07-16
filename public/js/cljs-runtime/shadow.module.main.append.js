
shadow.cljs.devtools.client.env.module_loaded('main');

try { age_calculator.frontend.app.init(); } catch (e) { console.error("An error occurred when calling (age-calculator.frontend.app/init)"); throw(e); }