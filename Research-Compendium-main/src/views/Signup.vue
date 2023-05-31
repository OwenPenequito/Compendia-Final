<template>
  <navbar />
  <form @submit.prevent="postUser">

    <div class="role"><button class="prof">
      <router-link to="/ProfSignup">Signup as Professor</router-link></button></div>

    <label>Student Number:</label>
    <input type="stu_ID" required v-model="stu_ID">

    <label>Name:</label>
    <input type="stu_Name" required v-model="stu_Name">

    <label>Program:</label>
    <input type="stu_program" required v-model="stu_program">

    <label>Email:</label>
    <input type="stu_Email" required v-model="stu_email">

    <label>Password:</label>
    <input type="password" required v-model="password">
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label>Confirm Password:</label>
    <input type="password" required v-model="confirmPassword">
    <div v-if="errorMessage" style="color:red" class="error">{{ errorMessage }}</div>

    <div class="terms">
      <input type="checkbox" v-model="terms" required>
      <label>Accept terms and conditions</label>
    </div>

    <div class="submit">
      <button class="sign">Sign up</button>
    </div>
    <div class="login">
      <button>
        <router-link to="/login">Log in</router-link>
      </button>
    </div>
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <h2>Account created!</h2>
        <p>Your account has been created successfully.</p>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </form>
</template>
 
 <script>
import navbar from '@/views/navbar.vue';
import axios from 'axios';
export default {
  components: { navbar },
  data() {
    return {
      role: "",
      stu_ID: "",
      stu_Name: "",
      stu_program: "",
      stu_email: "",
      password: "",
      confirmPassword: "",
      terms: false,
      passwordError: "",
      errorMessage: "",
      showModal: false, // add a new data property for the modal
      userId: ""
    };
  },
  methods: {
    validateForm() {
      if (this.password != this.confirmPassword) {
        this.errorMessage = "Passwords do not match";
        return false;
      }

      this.errorMessage = "";
      return true;
    },

    closeModal() {
      this.showModal = false; // set the showModal property to false to hide the modal
    },
    postUser() {
      axios.post("http://localhost:8000/stuDetails/signup", {stu_ID: this.stu_ID, stu_Name: this.stu_Name, stu_program: this.stu_program, 
        stu_email: this.stu_email, password: this.password})
      .then((response) => {
        const userId = response.data.userId;
        console.log(response);
        this.passwordError =
        this.password.length > 7 ? "" : "Password must be at least 8 chars long";
  
        //validate confirm password
        if (!this.validateForm()) {
          return;
        }
  
        if (!this.passwordError) {
          console.log("email: ", this.stu_email);
          console.log("password: ", this.password);
          console.log("terms accepted: ", this.terms);
          this.showModal = true; // set the showModal property to true to display the modal
        }
      });
    },
  },
};
</script>
 
  <style scoped>
  form {
      max-width: 420px;
      margin: 40px auto;
      background: rgb(42, 42, 42);
      text-align: left;
      padding: 50px;
      border-radius: 10px;
  }
  label {
      color: #aaa;
      display: inline-block;
      margin: 50 px 0 105px;
      font-size: 0.6em;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
  }
  input, select{
      display: block;
      padding: 10px 6px;
      width: 100%;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid #ddd;
      color: #555;
  }
  input[type="checkbox"] {
      display: inline-block;
      width: 16px;
      margin: 0 10px 0 0;
      position: relative;
      top: 2px;
  }
  .pill {
      display: inline-block;
      margin: 20px 10px 0 0;
      padding: 6px 12px;
      background: #eee;
      border-radius: 20px;
      font-size: 12px;
      letter-spacing: 1px;
      font-weight: bold;
      color: #777;
      cursor: pointer;
  }
  button {
      background: #ffdd00;
      border: 0;
      padding: 10px 20px;
      margin-top: 20px;
      color: white;
      border-radius: 20px;
  }
  .prof {
    background: #ffdd00;
      border: 0;
      padding: 10px 20px;
      margin-top: 20px;
      color: rgb(0, 0, 0);
      border-radius: 20px;
      position: relative;
      top: 480px;
      left: 30%;
  }
  .submit {
      text-align: center;
      position: relative;
      top: 5px;
      right: 30%;
  }
  .error {
      color: #ff0000;
      margin-top: 10px;
      font-size: 0.8em;
      font-weight: bold;
  }
  .login {
    text-align: center;
    position: relative;
    left: 30%;
    bottom: 51px;
  }
  .modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  text-align: center;
}

  </style>