import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Projects from "./views/Projects.vue";
import Team from "./views/Team.vue";
import Navbar from "./components/Navbar.vue";
import login from "./views/login.vue";
import signup from "./views/signup.vue";
import landing from "./components/Landing";
import Home from "./components/Home.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/dash",
      name: "dashboard",
      component: Dashboard
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
      component: login
    },
    {
      path: "/home",
      name: "home",
      component: Home
    }
  ]
});
