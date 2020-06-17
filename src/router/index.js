import Vue from "vue";
import VueRouter from "vue-router";
import Friend from "../views/Friend.vue"
import BlogHome from "../views/blog/BlogHome.vue"
import BlogEditor from "../views/blog/BlogEditor.vue"
import BlogDetail from "../views/blog/BlogDetail.vue"

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
    path: "/blogEditor",
    name: "BlogEditor",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BlogEditor
  },
  {
    path: "/blogDetail",
    name: "BlogDetail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BlogDetail
  }

];

const router = new VueRouter({
  routes
});

export default router;
