<template>
  <main>
    <section id="main-content">

      <div class="main-title">
        <img id="sunset-logo" src="../assets/img/sunset.png" alt="Sunset Logo Type">
        <h1 class="app-title">European Festivals</h1>
          <p class="app-comment">Looking to have some summer (or Winter) fun ? Check all the festival you could attend in Europe!</p>
      </div>

      <div class="content-app"> 
        <span id="sorting-btn" @click="sortList()">Sort A-Z</span>
          
          <div class="festival-box" v-for="data in festivalList" v-bind:data="data.fname" v-bind:key="data.id">
            <h2 class="festival-name homepage-fn">{{ data.fname }}</h2>
            <h3 class="festival-location">{{ data.flocation }}</h3>
              <p class="festival-desc">{{ data.fdescription }}</p>
                <router-link class="seemore-btn" :to="`festival?festival=${data.href}`">See more</router-link>
              <hr class="hr-bar"> 
          </div>

      </div>
      
      <div id="seemore-div">See more festivals</div>

    </section>
  </main>

</template>

<script>
import Vue from "vue";
import Fest from '../assets/js/dataFest.js';
import $ from 'jquery';

export default {
  name: "Homepage",
  head: /* Using vue-head to manage the title of the page and some stuff like SEO etc... */
  {
    title: { inner: 'Homepage' },
    meta: [
        { name: 'description', c: 'Discover all your european life has to offer on the level of festivals: where you will be partying like never and enjoy the purest music from world DJs ?', id: 'desc' }
      ],
  },
  props: ["data"],
  data() 
  {
    return {
    festivalList: // List of data showed in v-for and taking from all the class created
    [
      { id: "Bal", fname: this.$Balaton.Name, flocation: this.$Balaton.City + ", " + this.$Balaton.Country, fdescription: this.$Balaton.Description, href: "Balaton" },
      { id: "ToA", fname: this.$Tomorrowland.Name, flocation: this.$Tomorrowland.City + ", " + this.$Tomorrowland.Country, fdescription: this.$Tomorrowland.Description, href: "Tomorrowland"},
      { id: "ToB", fname: this.$TomorrowlandUnite.Name, flocation: this.$TomorrowlandUnite.City + ", " + this.$TomorrowlandUnite.Country, fdescription: this.$TomorrowlandUnite.Description, href: "TomorrowlandUnite"},
      { id: "ToC", fname: this.$TomorrowlandWinter.Name, flocation: this.$TomorrowlandWinter.City + ", " + this.$TomorrowlandWinter.Country, fdescription: this.$TomorrowlandWinter.Description, href: "TomorrowlandWinter"},
      { id: "Mys", fname: this.$Mysteryland.Name, flocation: this.$Mysteryland.City + ", " + this.$Mysteryland.Country, fdescription: this.$Mysteryland.Description, href: "Mysteryland"},
      { id: "Unt", fname: this.$Untold.Name, flocation: this.$Untold.City + ", " + this.$Untold.Country, fdescription: this.$Untold.Description, href: "Untold"},
      { id: "Cre", fname: this.$Creamfields.Name, flocation: this.$Creamfields.City + ", " + this.$Creamfields.Country, fdescription: this.$Creamfields.Description, href: "Creamfields"},
      { id: "Les", fname: this.$LesVieillesCharues.Name, flocation: this.$LesVieillesCharues.City + ", " + this.$LesVieillesCharues.Country, fdescription: this.$LesVieillesCharues.Description, href: "LesVieillesCharues"},
      { id: "Par", fname: this.$Parookaville.Name, flocation: this.$Parookaville.City + ", " + this.$Parookaville.Country, fdescription: this.$Parookaville.Description, href: "Parookaville"},
      { id: "Szi", fname: this.$Sziget.Name, flocation: this.$Sziget.City + ", " + this.$Sziget.Country, fdescription: this.$Sziget.Description, href: "Sziget"},
    ]
    }
  },
  methods: 
  {
    sortList: function () // For sorting the list A-Z while clicking on the target button
    {
      this.festivalList.sort(this.sortbyName);
    },
    sortbyName: function (a,b) 
    {
      const reA = /[^a-zA-Z]/g;
      const reN = /[^0-9]/g;
      const aA = a.fname.replace(reA, "");
      const bA = b.fname.replace(reA, "");
      if(aA === bA) 
      {
          const aN = parseInt(a.fname.replace(reN, ""), 10);
          const bN = parseInt(b.fname.replace(reN, ""), 10);
          return aN === bN ? 0 : aN > bN ? 1 : -1;
      } else 
      {
          return aA > bA ? 1 : -1;
      }
    }
  },
  mounted () 
  {
    // This is for handling how are showing the lines between each box
    const shorBar = $(".festival-box:nth-child(2) > .hr-bar");
    const horBar = $(".festival-box:nth-child(n+3) > .hr-bar");
    horBar.hide();

    // To make it more fluid, I inserted a see more button that the user can click for seeing all the festivals 
    $("#seemore-div").click(function()
    {
      console.log("test");
      const buttonSee = $("#seemore-div");
      const festivalBox = $(".festival-box:nth-child(n+4)");
      let text = "";
      
      if(festivalBox.is(":hidden"))
      {
        text = "See less festivals";

      }
      else
      { 
        text = "See more festivals";
      }
      buttonSee.html(text); 

      festivalBox.fadeToggle("medium");
      horBar.fadeToggle("fast");

      if ($(window).width() > 900) {
         shorBar.fadeToggle("fast");
      }
    });
  }
}

</script>
