import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import ProductPage from "./pages/ProductPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/productPage", component: ProductPage },
  ],
});
