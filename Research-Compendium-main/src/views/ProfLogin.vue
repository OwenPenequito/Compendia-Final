<template>
    <navbar />
    <form @submit.prevent="submission">
      <label>Admin ID Number:</label>
      <input style="margin-bottom: 0.3in" type="adminID" required v-model="prof_ID">
      <label>Email:</label>
      <input style="margin-bottom: 0.3in" type="email" required v-model="Email" >
      <label>Password:</label>
      <input style="margin-bottom: 0.3in" type="password" required v-model="Password">
      <div v-if="passwordError" class="error">{{ passwordError }}</div>
      <div class="terms">
        <input type="checkbox" required v-model="terms">
        <label>Accept terms and conditions</label>
      </div>
      <div class="submit">
        <button type="submit" @click="LoginSubmit">Login</button>
      </div>

      <div class="signup">
        <button>
          <router-link to="/signup">Sign up</router-link>
        </button>
      </div>
      <div class="student-login">
        <button>
          <router-link to="/Login">Log in as Student</router-link>
        </button>
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
        prof_ID: '',
        Email: '',
        Password: '',
        terms: false,
        passwordError: '',
        accountCreated: false,
        successMessage: "",
        errorMessage: "",
        payload: []
      }
    },
    methods: {
      submission() {
      //validate password
      this.passwordError = this.Password.length > 7 ? 
      '': 'Password must be at least 8 chars long'

      if(!this.passwordError) {

        console.log('Email: ', this.Email)
        console.log('Password: ', this.Password)
        console.log('terms accepted: ', this.terms)
      };
    },
    LoginSubmit(){
      const payload = {
          Email: this.Email,
          Password: this.Password
        };

      axios.post ('http://localhost:8000/profDetails/login', payload)
        .then(response => {
          const {success, token} = response.data;
          if (success) {
            console.log("Login Successfully!")
            localStorage.setItem('token', token);

            this.$router.push('/ProfHome');
          } else {
            console.log('Error. Login Failure. Please Check all inputs');
          }
        })

        .catch(error => {
          console.error(error);
        });
      }
    }
  }
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
    .submit button {
        background: #ffdd00;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: rgb(0, 0, 0);
        border-radius: 20px;
        position: relative;
        top: 5px;
        left: -125px;
        text-decoration: underline;
    }
  
    .signup button {
        background: #ffdd00;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: rgb(0, 0, 0);
        border-radius: 20px;
        position: relative;
        top: -50px;
        left: 125px;
    }
  
    .submit {
        text-align: center;
    }
    .signup {
        text-align: center;
    }
    .error {
        color: #ff0000;
        margin-top: 10px;
        font-size: 0.8em;
        font-weight: bold;
    }
    .signup {
      text-align: center;
    }
    .student-login {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 0.5rem;
}
    .student-login button {
  background: #ffdd00;
  border: 0;
  padding: 10px 20px;
  margin-top: 5px;
  color: rgb(0, 0, 0);
  border-radius: 20px;
}
  
    </style>