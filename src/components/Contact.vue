<template>
  <div class="hello">
    <h5>Contact Me</h5>
    <b-row>
      <b-col sm="12" md="4" class="text-left">
        <p><a href="tel:+15855033719">(585) 503-3719</a></p>
        <p>sleepynguyener@gmail.com</p>
      </b-col>
      <b-col sm="12" md="8">
        <b-form @submit="onSubmit" @reset="onReset">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>

            <b-form-textarea
              id="input-2"
              v-model="form.stuff"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {},
  data() {
    return {
      form: {
        email: "",
        stuff: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.stuff = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
}
</style>
