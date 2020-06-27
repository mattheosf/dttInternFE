<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layout/header.vue";
import Footer from "./components/layout/footer.vue";

import $ from 'jquery';
import Vue from "vue";

export default {
  name: "festivalApp",
  components: {
   Header,
   Footer,
  },
  mounted () {
    /* This is some JQuery line to manage the opening/closing of the menu */
    const Burger = $("#burgermenu");
    const Close = $("#closingmenu");
    const Menu = $(".nav-boxing");
    const IconLink = $(".menu-linking")

  // For opening the menu
    Burger.click(function()
    {
      Menu.fadeToggle("medium");
    });

    IconLink.click(function()
    {
      Menu.fadeToggle("medium");
    });
  // And for closing the menu
    Close.click(function()
    {
      Menu.fadeOut("medium");
      Burger.fadeIn("medium");
    });
  },
}

/* This is a lot of lines in order to get the data from the festival in the Fest class.
My first thinking was to get all of this on a other file but It didn't worked well.
I see it was better to get those Vue.prototype on the App.vue file in order to access them on all parts 
of the app. Anyway: the class is imported from assets */
import Fest from './assets/js/dataFest.js';
// 1-- Balaton Sound Festival
Vue.prototype.$Balaton= new Fest(
    "Balaton Sound", 
    "Zamardi", 
    "Hungary", 
    "balatonsound.jpg", 
    "July",
    "Balaton",
    "46.884264",
    "17.932227",
    "Enjoy this festival with cheap prices, starting from 35€ up to 215€ for the full duration of the festival... You could also buy a VIP Package for the whole duration of the festival!",
    "Along the Balaton Lake : enjoy the fine melody of many musics genres such as Pop, EDM, Hip-Hop and many more... Live the Hungarian spirit for party under a 30 degree temperature during July...");

// 2-- Tommorrowland Festival
Vue.prototype.$Tomorrowland= new Fest(
    "Tomorrowland", 
    "Boom", 
    "Belgium", 
    "tomorrowland.jpg",
    "July",
    "Tomorrowland", 
    "51.088790",
    "4.377527",
    "Prepare your wallet : you can enjoy the magic of Tomorrowland by being the quickest to buy the tickets which are usually from at least 500€.",
    "One of the most famous festival in the world, and probably the biggest one. At Tomorrowland : live the world of Tomorrow and listen quality live DJ set.");

// 3-- Tommorrowland Festival
Vue.prototype.$TomorrowlandUnite= new Fest(
    "Tomorrowland Unite", 
    "Barcelona", 
    "Spain", 
    "tomorrowlandunite.jpg", 
    "July",
    "TomorrowlandUnite",
    "41.457248",
    "2.196006",
    "You can experience the spirit of Tomorrowland for only the price of an classical admission, usually from 60€.",
    "Unite with the World of Tomorrowland everywhere in the world and mostly under the sun of Barcelona in an 'caliente' ambiance.");

// 4-- Tommorrowland Winter Festival
Vue.prototype.$TomorrowlandWinter= new Fest(
    "Tomorrowland Winter", 
    "Alpes d'Huez", 
    "France", 
    "tomorrowlandwinter.jpg", 
    "March",
    "TomorrowlandWinter",
    "45.088798",
    "6.075683",
    "As same of the classical Tomorrowland : here too the price won't be cheap and you can expect to have a ticket from 500€ at least.",
    "Go out the limits and live the spirit of the World of Tomorrowland over the French Mountains : no need for snow cannons here.");

// 5-- Dreamland Festival
Vue.prototype.$Mysteryland= new Fest(
    "Mysteryland", 
    "Amsterdam", 
    "Netherlands", 
    "mysteryland.jpg", 
    "August",
    "Mysteryland",
    "52.330976",
    "4.672840",
    "Grab your stuff and enjoy Mysteryland from 169€, the ticket also include a camping spot.",
    "Enjoy your Summer in Mysteryland, no so far from the city of Amsterdam : live for the best EDM Music by dutch DJs and many more.");

// 6-- Untold Festival
Vue.prototype.$Untold= new Fest(
    "Untold", 
    "Cluj-Napoca", 
    "Roumania", 
    "untold.jpg", 
    "August",
    "Untold",
    "46.768075",
    "23.573199",
    "Enjoy this amazing experience with tickets starting from 120€, depending on how many days you would like to attend the festival.",
    "Let's vibe the Stadium, at Untold : you can experience the best music moments of your live, like an 7hr DJ set from Armin van Buuren. As they say: learn from the Master himself");

// 7-- Creamfields Festival
Vue.prototype.$Creamfields= new Fest(
    "Creamfields", 
    "Daresbury", 
    "United-Kingdom", 
    "creamfields.jpg", 
    "August",
    "Creamfields",
    "53.346814",
    "-2.626643",
    "Grab your Entrance and Camping ticket to enjoy this British Festival, from 60£!",
    "Even with a cloudy sky and maybe some rain : join the biggest british party at Creamfields under the sound of top quality musicians and DJs.");

// 8-- Les Vieilles Charues Festival
Vue.prototype.$LesVieillesCharues= new Fest(
    "Les Vieilles Charues", 
    "Rennes",
    "France", 
    "vieillescharues.jpg", 
    "July",
    "LesVieillesCharues",
    "48.271327",
    "-3.550495",
    "Should it be the price of a baguette? No way! Try to dance a la francaise from 44€ depending on how many days you'll attend.",
    "Explore the French festival, an 100% caritative festival along high values of durability, sociability and others...");

// 9-- Parookaville Festival
Vue.prototype.$Parookaville= new Fest(
    "Parookaville", 
    "Weeze", 
    "Germany", 
    "parookaville.jpg", 
    "July",
    "Parookaville",
    "51.606753",
    "6.122034",
    "Being a new citizen of Parooka isn't that expensive : get your new nationality from around 150€!",
    "Become a new citizen: a citizen of the City of Parooka... Take your flight, you arrive directly there because this event is held at Weeze Airport");

// 10-- Sziget Festival
Vue.prototype.$Sziget= new Fest(
    "Sziget", 
    "Budapest", 
    "Hungary", 
    "sziget.jpg", 
    "August",
    "Sziget",
    "47.552088",
    "19.054702",
    "Live your best life in Budapest from only 50€ depending on your attendance days.",
    "One of the best festival in Europe, where the sunshine shine. Experience your best life in the festive Budapest.");
</script>
