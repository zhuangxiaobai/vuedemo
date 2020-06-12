import Vue from "vue";
import VueRouter from "vue-router";
import BlogHome from "../views/BlogHome.vue"
import Friend from "../views/Friend.vue"
import Editor from "../views/Editor.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "BlogHome",
    component: BlogHome
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/friend",
    name: "Friend",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Friend
  },
  {
    path: "/editor",
    name: "Editor",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editor
  }

];

const router = new VueRouter({
  routes
});

export default router;
