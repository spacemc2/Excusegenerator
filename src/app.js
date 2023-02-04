/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  //write your code here
  var whoValue = who[Math.floor(Math.random() * who.length)];
  var mssg =
    whoValue +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)];
  document.getElementById("first").innerHTML =
    "You may think I'm not serious but...";
  console.log("Miguel Project!");
  document.getElementById("excuse").innerHTML = mssg;
  console.log("Miguel Project!");

  if (whoValue == "His turtle") {
    document.getElementById("who").src =
      "https://img.freepik.com/free-vector/cute-turtle-sit-cartoon-animal-love-icon-concept-isolated-flat-cartoon-style_138676-2196.jpg";
  } else if (whoValue == "The dog") {
    document.getElementById("who").src =
      "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg";
  } else if (whoValue == "My grandma") {
    document.getElementById("who").src =
      "https://as2.ftcdn.net/v2/jpg/02/66/85/51/1000_F_266855106_mmJPXHbTqzFwOGo7EdXJfiowZ77It0hV.jpg";
  } else {
    document.getElementById("who").src =
      "https://img.freepik.com/premium-vector/cute-bird-cartoon_33070-3817.jpg";
  }

  console.log(who.length);
};
