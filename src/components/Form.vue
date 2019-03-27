<template>
  <div>
    <div><span>Form</span></div>
    <form @submission-succeeded="nextScreen">
      <fieldset>
        <legend>
          Confirm Payment
        </legend>
        <div>
          <label>
            <input
              type="checkbox"
              name="confirmations"
              value="1checked"
              v-model="confirmations"
              v-validate="{ required: true, length: 3 }"
            />
            <span>
              check 1 please
            </span> </label
          ><br />
          <label>
            <input
              type="checkbox"
              name="confirmations"
              value="2checked"
              v-model="confirmations"
              v-validate="{ required: true, length: 3 }"
            />
            <span>
              check 2 please
            </span> </label
          ><br />
          <label>
            <input
              type="checkbox"
              name="confirmations"
              value="3checked"
              v-model="confirmations"
              v-validate="{ required: true, length: 3 }"
            />
            <span>
              check 3 please
            </span> </label
          ><br />
        </div>
      </fieldset>
    </form>

    <button @click="cancelForm">Cancel</button>
    <button @click="previousForm">Previous</button>
    <button @click="submitForm">Submit</button>

    <ul>
      <li v-for="(error, index) in errors.all()" :key="index">{{ error }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    someprop: { type: Number, default: 43 }
  },
  data() {
    return {
      somedata: 42,
      confirmations: []
    };
  },
  methods: {
    say(...args) {
      console.log(...args);
    },
    cancelForm() {
      this.say("cancelForm");
    },
    previousForm() {
      this.say("previousForm");
    },
    submitForm() {
      this.say("submitForm");
      this.$validator.validate().then(valid => {
        console.log("validate", valid);
        if (!valid) {
          return;
        }
        console.log("commit to store and emit submission-succeeded");
        this.$emit("submission-succeeded");
      });
    },
    nextScreen() {
      this.say("nextScreen called in Form");
    }
  },
  computed: {
    someComputed: function() {
      return 44;
    }
  }
};
</script>
