<template>

  <main>
    <section id="sitemap">
      <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
          <url>
            <loc>http://mattheosauli.fr/InternFestivalProject/</loc>
            <lastmod>2020-06-16T23:16:37+00:00</lastmod>
            <priority>1.00</priority>
          </url>
          <url>
            <loc>http://mattheosauli.fr/InternFestivalProject/index</loc>
            <lastmod>2020-06-16T23:16:37+00:00</lastmod>
            <priority>0.80</priority>
          </url>
          <url>
            <loc>http://mattheosauli.fr/InternFestivalProject/categories</loc>
            <lastmod>2020-06-16T23:16:37+00:00</lastmod>
            <priority>0.80</priority>
          </url>
          <url>
            <loc>http://mattheosauli.fr/InternFestivalProject/random</loc>
            <lastmod>2020-06-16T23:16:37+00:00</lastmod>
            <priority>0.80</priority>
          </url>

    </section>
  </main>

</template>

<script>
import Vue from "vue";
export default {
  name: "Sitemap"
}
</script>


<style scoped>
#sitemap {
  height: 90vh;
  padding-top: 150px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
url {
display: block;
}
@media screen and (min-width: 901px) {
  #sitemap {
    height: 90vh;
    padding-top: 250px;
    padding-left: 100px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
}
</style>
