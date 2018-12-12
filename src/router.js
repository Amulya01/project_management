import Vue from "vue";
import Router from "vue-router";
import dashboard from "./views/Dashboard.vue";
import Projects from "./views/Projects.vue";
import Team from "./views/Team.vue";
import Navbar from "./components/Navbar.vue";
import login from "./views/login.vue";
import signup from "./views/signup.vue";
import landing from "./components/Landing";
import Home from "./components/Home.vue";
import firebase from "firebase";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/dash",
      name: "dashboard",
      component: dashboard
    },
    {
      path: "/",
      name: "landing",
      component: landing
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/team",
      name: "team",
      component: Team
    },
    {
      path: "/nav",
      name: "nav",
      component: Navbar
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/signup",
      name: "signup",
      component: signup
    },
    {
      path: "/home",
      name: "home",
      component: Home
    }
  ]
});
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    //console.log("not authenticated");
    next("/login");
  } else {
    next();
  }
});
export default router;
