import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/pages/home/home.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/pages/products/products.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/pages/cart/cart.vue"),
  },
  {
    path: "/orders",
    name: "Orders",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/pages/orders/orders.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/pages/profile/profile.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
