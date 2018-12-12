<template>
  <v-dialog max-width="600px">
    <v-btn flat slot="activator">Message me!</v-btn>
    <v-card>
      <v-card-title> <h2>Post Message</h2> </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field
            v-model="title"
            label="subject"
            prepend-icon="folder"
          ></v-text-field>
          <v-textarea
            v-model="content"
            label="Information"
            prepend-icon="edit"
          ></v-textarea>
          <v-spacer></v-spacer>
          <v-btn flat @click="submit" class="success mx-0 mt-3"
            >send message</v-btn
          >

          <v-alert v-show="submitted" :value="true" type="success">
            Message has been sent
          </v-alert>
          <v-alert v-show="failure" :value="true" type="error">
            Enter information to send msg!
          </v-alert>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      submitted: false,
      failure: false
    };
  },
  methods: {
    submit() {
      if (this.content.length > 0) {
        this.submitted = true;
        this.failure = false;
      } else {
        this.failure = true;
        this.submitted = false;
      }
      console.log(this.title, this.content);
    }
  }
};
</script>
