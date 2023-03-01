import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import NBC from "../views/NBC.vue";
import OrderReset from '../views/OrderReset.vue'
import OrderTracking from '../views/OrderTracking.vue'
import About from '../views/About'
import Contact from '../views/Contact'
import Profile from '../views/Profile'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/",
    name: "About",
    component: About,
    meta: {
      title: "About",
    },
  },
  {
    path: "/",
    name: "Profile",
    component: Profile,
    meta: {
      title: "Profile",
    },
  },
  {
    path: "/",
    name: "Contact",
    component: Contact,
    meta: {
      title: "Contact",
    },
  },
  {
    path: "/",
    name: "NBC",
    component: NBC,
    meta: {
      title: "NBC",
    },
  },
  {
    path: "/",
    name: "OrderReset",
    component: OrderReset,
    meta: {
      title: "OrderReset",
    },
  },
    {
        path: "/",
        name: "OrderTracking",
        component: OrderTracking,
        meta: {
            title: "OrderTracking",
        },
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | MMS`;
  next();
});

export default router
