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

(defn handle-click []
  (let [input-age (js/parseInt @age)]
    (if (= @age "Даша")
      (js/alert "Привет, Даша, твой возраст: 23")
      (if (js/isNaN input-age)
        (js/alert "Error input")
        (js/alert (str "Your age is: " @age))))))

(defn calc-button []
  [:button
   {:on-click handle-click}
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
