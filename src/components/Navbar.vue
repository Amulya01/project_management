<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Awesome! You added a new project.</span>
      <v-btn color="white" flat @click="snackbar = false;">Close</v-btn>
    </v-snackbar>

    <v-toolbar flat app>
      <v-toolbar-side-icon
        @click="drawer = !drawer;"
        class="grey--text"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span> <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>
        <v-btn flat slot="activator" color="grey">
          <v-icon left>expand_more</v-icon>
          <span>Menu</span>
        </v-btn>
        <v-list>
          <v-list-tile
            v-for="link in menuItems"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-btn v-show="isAuthenticated" @click="userSignOut" flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img
              class="text-lg-center"
              src="https://uploads.codesandbox.io/uploads/user/af0d25e1-239e-4f8a-9e58-71a748fea8e5/_1k7-IMG_20180320_174351.jpg"
            />
          </v-avatar>
          <p class="white--text subheading mt-1">The Net Ninja</p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
          <Popup @projectAdded="snackbar = true;" />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile
          v-for="link in menuItems"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{
              link.text
            }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup";
export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/dash" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" }
      ],
      snackbar: false
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    menuItems() {
      if (this.isAuthenticated) {
        return this.links;
      } else {
        return [
          { text: "Sign Up", route: "/signup", icon: "face" },
          { text: "Sign In", route: "/login", icon: "lock_open" }
        ];
      }
    }
  },
  methods: {
    userSignOut() {
      this.$store.dispatch("userSignOut");
    }
  }
};
</script>

<style></style>
