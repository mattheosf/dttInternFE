<template>

  <main>
    <section id="festival-random">

      <div class="random-top">
        <h2 class="page-name">Find your festival!</h2>
          <p class="page-comment">Click on the button down there and find a random festival : maybe it's the one you dreamed about ?</p>
      </div>

      <div class="random-festival">
        <button id="random-btn" @click="picking">Show a random festival</button>

        <div class="rdfestival-box">
          <p class="rd-comment">
            3... 2... 1...
          Your selected festival is...
          </p>
          <h3 class="festival-name rdfestival-name">{{festivalName}}</h3>
          <p class="festival-location">This festival is held in {{festivalCity}}, {{festivalCountry}}</p>
          <p class="festival-desc desconrd">{{festivalDescription}}</p>
          <router-link class="seemore-btn seemoreonrd" :to="`festival?festival=${festivalHref}`">See more</router-link>

          <p class="btn-comment">You can make appear an other festival by clicking up on the "Show a random festival" button! :)</p>
        </div>

      </div>

    </section>
  </main>

</template>

<script>
import Vue from "vue";
import $ from 'jquery';
export default {
  name: "Randomizer",
  head: 
  {
    title: { inner: 'Abra Festival!' },
  },
  data() 
  {
    return { // The Balaton Sound is showed by default until the user click on the random button to get an other one.
    listing: [this.$Balaton, this.$Tomorrowland, this.$Creamfields, this.$Untold, this.$TomorrowlandUnite, this.$TomorrowlandWinter, this.$Mysteryland, this.$LesVieillesCharues, this.$Parookaville, this.$Sziget],
    choosenFestival: this.$Balaton,
    festivalName: this.$Balaton.Name,
    festivalCity: this.$Balaton.City,
    festivalCountry: this.$Balaton.Country,
    festivalDescription: this.$Balaton.Description,
    festivalHref: this.$Balaton.href,
    }
  },
  methods:
  {
    picking: function(){ // The function picks a number from the listing of festival and use this to update all the data
      const Numbering = Math.floor(Math.random() * this.listing.length);
      this.choosenFestival = this.listing[Numbering];
      this.festivalName = this.choosenFestival.Name;
      this.festivalCity = this.choosenFestival.City;
      this.festivalCountry = this.choosenFestival.Country;
      this.festivalDescription = this.choosenFestival.Description;
      this.festivalHref = this.choosenFestival.href;
    }
  }
}

</script>