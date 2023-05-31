<template>
    <navbar />
    <form @submit.prevent="postUser">
  
        <div class="role"><button class="student">
      <router-link to="/signup">Signup as Student</router-link></button></div>
  
      <label>Admin ID Number:</label>
      <input type="prof_ID" required v-model="prof_ID">
  
      <label>Email:</label>
      <input type="Email" required v-model="Email">

      <label>Name:</label>
      <input type="Name" required v-model="Name">

      <label>Program:</label>
      <input type="Prog" required v-model="Prog">
  
      <label>Password:</label>
      <input type="Password" required v-model="Password">
      <div v-if="passwordError" class="error">{{ passwordError }}</div>
  
      <label>Confirm Password:</label>
      <input type="password" required v-model="confirmPassword">
      <div v-if="errorMessage" style="color:red" class="error">{{ errorMessage }}</div>
  
      <div class="terms">
        <input type="checkbox" v-model="terms" required>
        <label>Accept terms and conditions</label>
      </div>
  
      <div class="submit">
        <button>Sign up</button>
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
        prof_ID: "",
        Email: "",
        Password: "",
        Name: "",
        Prog: "",
        confirmPassword: "",
        terms: false,
        passwordError: "",
        errorMessage: "",
        showModal: false, // add a new data property for the modal
      };
    },
    methods: {
  
      validateForm() {
        if (this.Password != this.confirmPassword) {
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
      axios.post("http://localhost:8000/profDetails/signup", {prof_ID: this.prof_ID, Name: this.Name, Prog: this.Prog, 
        Email: this.Email, Password: this.Password})
      .then((response) => {
        console.log(response);
        this.passwordError =
        this.Password.length > 7 ? "" : "Password must be at least 8 chars long";
  
        //validate confirm password
        if (!this.validateForm()) {
          return;
        }
  
        if (!this.passwordError) {
          console.log("email: ", this.Email);
          console.log("password: ", this.Password);
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
        margin: 25 px 0 15px;
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
    .submit {
        text-align: center;
        position: relative;
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
        left: 25%;
        bottom: 58px;
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
  .student {
    background: #f8fc39;
      border: 0;
      padding: 10px 20px;
      margin-top: 20px;
      color: rgb(0, 0, 0);
      border-radius: 20px;
  }
  .student {
    background: #ffdd00;
      border: 0;
      padding: 10px 20px;
      margin-top: 20px;
      color: rgb(0, 0, 0);
      border-radius: 20px;
      position: relative;
      top: 470px;
      left: 30%;
  }
    </style>