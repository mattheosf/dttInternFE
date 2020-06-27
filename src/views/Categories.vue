<template>

  <main>
    <section id="festival-countries">
    
      <div class="countries-top">
        <h2 class="page-name">Festivals per country</h2>
        <hr class="hrbar-ct">
      </div>

      <div class="content-app-countries">
          <div class="festivalCT-box" v-for="data in festivalCountries" v-bind:key="data.id">
            <h2 class="festivalCT-location">{{data.fcountry}}</h2>
            <h3 class="festivalCT-name">
              <router-link class="CTF-link" :to="`festival?festival=${data.href}`">{{data.fname}}</router-link>
            </h3>
          </div>
      </div>

    </section>
  </main>

</template>

<script>
import $ from 'jquery';
import Vue from "vue";
export default {
  name: "Categories",
  head: 
  {
    title: { inner: 'Your Festivals in Europe' },
  },
  props: ["data"],
  data() 
  {
    return {
      festivalCountries: // Showing country plus festival name on the list. I still need to learn how to "mix" duplicate country on this
      [
        { id: "Bal", fcountry: this.$Balaton.Country, fname: this.$Balaton.Name, href: "Balaton" },
        { id: "ToA", fcountry: this.$Tomorrowland.Country, fname: this.$Tomorrowland.Name, href: "Tomorrowland"},
        { id: "ToB", fcountry: this.$TomorrowlandUnite.Country, fname: this.$TomorrowlandUnite.Name, href: "TomorrowlandUnite"},
        { id: "ToC", fcountry: this.$TomorrowlandWinter.Country, fname: this.$TomorrowlandWinter.Name, href: "TomorrowlandWinter"},
        { id: "Mys", fcountry: this.$Mysteryland.Country, fname: this.$Mysteryland.Name, href: "Mysteryland"},
        { id: "Unt", fcountry: this.$Untold.Country, fname: this.$Untold.Name, href: "Untold"},
        { id: "Cre", fcountry: this.$Creamfields.Country, fname: this.$Creamfields.Name, href: "Creamfields"},
        { id: "Les", fcountry: this.$LesVieillesCharues.Country, fname: this.$LesVieillesCharues.Name, href: "LesVieillesCharues"},
        { id: "Par", fcountry: this.$Parookaville.Country, fname: this.$Parookaville.Name, href: "Parookaville"},
        { id: "Szi", fcountry: this.$Sziget.Country, fname: this.$Sziget.Name, href: "Sziget"},
      ]
    }
  }
}
</script>