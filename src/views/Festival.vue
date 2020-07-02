<template>

  <main>
    <section id="festivalp-content">

      <div class="festival-top">
        <h2 class="pagef-name">{{ festiName }}</h2>
          <p class="pagef-location">Taking place in {{ festiCity }}, {{ festiCountry }} usually during the month of {{ festiMonth }}</p>
      	  <img id="festival-picture" :src="festiPict" :alt="`Picture of ${festiName}`">
      </div>

      <div class="festival-data">
        <div class="f-data-box data-info">
	       <h3 class="data-section-title">About this festival</h3>
	         <p class="data-section-comment">
	      	  {{ festiDesc }}
	   	     </p>
	   	  </div>

	   	  <div class="f-data-box data-price">
	       <h3 class="data-section-title">Tickets price</h3>
  	       <p class="data-section-comment">
  	      	{{ festiPrice }}
  	   	   </p>
	   	  </div>

	   	  <div class="f-data-box data-maps">
	       <h3 class="data-section-title">Maps Location</h3>
	         <div id="apimaps" ref="map">
	   	     </div>
	   	  </div>
      </div>

    </section>
  </main>

</template>

<script>
import Vue from "vue";
import $ from 'jquery';

export default {

  name: "Festival",
  head: 
  {
    title: { inner: 'Your Festival Page!' },
  },
  data() 
  {
    const page = "$"+this.$router.currentRoute.query.festival; // Getting the name of festival in the URL
    const fest = this[page];
    return { // Showing then the correct data for the correct festival
    festiName: fest.Name,
    festiCity: fest.City,
    festiCountry: fest.Country,
    festiMonth: fest.MonthHeld,
    festiPict: require('@/assets/img/'+fest.Picture+''),
    festiDesc: fest.Description,
    festiPrice: fest.Pricing,
    }
  },
  mounted() 
  {
    /* For the API side of the app, Google Maps JS is used. Showing the location with the coordinates stored in the class and parsingFloat them to adjust the map on the good location and put an marker. */
    const page = "$"+this.$router.currentRoute.query.festival;
    const fest = this[page];

      this.map = new window.google.maps.Map(this.$refs["map"], {
        center: {lat: parseFloat(fest.latmaps), lng: parseFloat(fest.lngmaps)},
        zoom: 13
      })
      this.marker = new window.google.maps.Marker({
          position: {lat: parseFloat(fest.latmaps), lng: parseFloat(fest.lngmaps)},
          map: this.map
      })
  }
}

</script>
