(ns age-calculator.frontend.app
  (:require
   [reagent.dom :as d]
   [reagent.core :as r]))


(def age (r/atom ""))

(defn age-input []
  [:input {:type        "text"
           :placeholder "Age"
           :value       @age
           :on-change #(reset! age (-> % .-target .-value))}])

(defn calc-button []
  [:button
   {:on-click #(js/alert (str "Your age is: " (js/parseInt @age)))}
   "Calculate"])

(defn home-page []
  [:div "Calculate your age!"
   [:br]
   [age-input]
   [calc-button]])

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init []
  (mount-root))
