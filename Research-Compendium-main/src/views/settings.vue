<template>
    <div>
      <loggednav />
      <form ref="personalInfoForm" @submit.prevent="submitForm('personalInfoForm')">        
        <label>Personal Information:</label>
        <div>
          <label for="full-name">Full Name:</label>
          <input type="text" id="full-name" v-model="form.stu_Name" />
        </div>
        <div>
          <label for="gender">Gender:</label>
          <input type="text" id="gender" v-model="form.gender" />
        </div>
        <div>
          <label for="account-number">Account Number:</label>
          <input type="text" id="account-number" v-model="form.stu_ID" />
        </div>
        <div>
          <label for="course">Program:</label>
          <input type="text" id="course" v-model="form.stu_program" />
        </div>
        <div>
          <label for="telephone">Telephone Number:</label>
          <input type="text" id="telephone" v-model="form.Telnum" />
        </div>
      </form>
  
      <form ref="accountDetailsForm" @submit.prevent="submitForm('accountDetailsForm')">
        <label>Account Details:</label>
        <div>
          <label for="email">Email:</label>
          <input type="text" id="email" required v-model="form.stu_email" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="text" id="password" required v-model="form.password" />
        </div>
        <div style="position: relative;">
          <label for="email-recovery">Email Recovery:</label>
          <input type="text" id="email-recovery" required v-model="form.email_Recov" />
          <button class="save-button" type="submit">Save</button>
        </div>
      </form>
  
      <div class="modal" v-if="showModal" @click.self="hideModal">
        <div class="modal-content" @click.stop>
          <p>Saved Changes!</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import loggednav from "@/views/loggednav.vue";
  import axios from "axios";
  
  export default {
    name: "settings",
    components: { loggednav },
    data() {
      return {
        form: {
          stu_Name: "",
          gender: "",
          stu_ID: "",
          stu_program: "",
          Telnum: '',
          stu_email: "",
          password: "",
          email_Recov: ""
        },
        showModal: false,
      };
    },
    methods: {
      submitForm(formnName) {
        console.log(this.form);
        const form = this.$refs[formnName];
        const stu_ID = this.form.stu_ID;
        axios.put(`http://localhost:8000/stuDetails/update/${stu_ID}`, this.form)
        .then(response => {
          console.log(response.data);
        this.showModal = true;
        })
        .catch(error => {
          console.error(error);
        });
      },
      hideModal() {
        this.showModal = false;
      },
    },
  };
  </script>

<style scoped>
  form {
    max-width: 100%;
    max-height: 100%;
    margin: 1in;
    background: rgb(42, 42, 42);
    text-align: left;
    padding: 50px;
    border-radius: 10px;
  }
  
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  
  input,
  select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  
  .save-button {
      background: #ffdd00;
      border: 0;
      padding: 10px 20px;
      margin-top: 20px;
      color: rgb(0, 0, 0);
      border-radius: 20px;
      position: relative;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
  }
  .modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(53, 52, 52, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}

.modal p {
  color: #000000;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
}
  </style>