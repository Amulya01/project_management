<template>
  <v-app class="grey lighten-4">
    <login />

    <v-content class="mx-4 mb-4"> <router-view></router-view> </v-content>
  </v-app>
</template>

<script>
import login from "./views/login";
export default {
  components: { login },
  name: "App",
  data() {
    return {};
  }
};
</script>
