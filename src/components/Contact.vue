<template>
  <div class="hello">
    <b-row>
      <b-col sm="12" md="7">
        <h5>Contact Me</h5>
        <b-form @submit="onSubmit" @reset="onReset">
            <b-form-input
              id="input-0"
              v-model="form.name"
              type="text"
              placeholder="Enter name"
              class="mt-2"
              required
            ></b-form-input>

            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              class="mt-2"
              required
            ></b-form-input>

            <b-form-textarea
              id="input-2"
              v-model="form.stuff"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
              class="mt-2"
            ></b-form-textarea>
            <div class="mt-2 float-left">
              <b-button type="reset" variant="danger" class="mr-2">Reset</b-button>
              <b-button type="submit" variant="primary">Submit</b-button>
            </div>
        </b-form>
      </b-col>
      <b-col sm="12" md="5" class="mt-4 text-left">
        <p><a href="tel:+15855033719">(585) 503-3719 <b-icon class="ml-1" icon="phone"></b-icon></a></p>
        <p>sleepynguyener@gmail.com <b-icon class="ml-1" icon="envelope"></b-icon></p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: "Contact",
  props: {},
  data() {
    return {
      form: {
        name: "",
        email: "",
        stuff: "",
      },
      errorMsg: "",
      showErrMsg: false
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(JSON.stringify(this.form));

      try {
        emailjs.sendForm('service_m97ql1k', 'template_c4t6cbg', event.target,
        'YOUR_USER_ID', {
          name: this.form.name,
          email: this.form.email,
          message: this.form.message
        })

      } catch(error) {
          console.log({error})
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.stuff = "";
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h5 {
  color:  #f8f8f2;
} 

p, a {
  color: #a6e22e;
}
</style>
