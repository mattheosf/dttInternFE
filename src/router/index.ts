import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import VueHead from 'vue-head';
import Homepage from "../views/Homepage.vue";
import Categories from "../views/Categories.vue";
import Randomizer from "../views/Randomizer.vue";
import Festival from "../views/Festival.vue";
import Sitemap from "../components/layout/sitemap.vue";

Vue.use(VueRouter);
Vue.use(VueHead);

// Loading the CSS file elaborated with Sass
require('../assets/css/festivalproject.css');

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories
  },
  {
    path: "/randomizer",
    name: "Randomizer",
    component: Randomizer
  },
  {
    path: "/Festival",
    name: "Festival",
    component: Festival
  },
  {
    path: "/sitemap",
    name: "Sitemap",
    component: Sitemap
  },
];

const router = new VueRouter({
  routes
});

export default router;
