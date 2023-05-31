<template>
    <div>
      <ProfNavbar />
      <form @submit.prevent="postArticle">
        <div>
          <label for="Title">Research Title:</label>
          <input type="text" id="Title" required v-model="form.Title" />
        </div>
        <div>
          <label for="Date">Publication Date:</label>
          <input type="date" id="Date" required v-model="form.Date" />
        </div>
        <div>
          <label for="Author">Author:</label>
          <input type="text" id="Author" required v-model="form.Author" />
        </div>
        <div>
          <label for="Program">Program:</label>
          <input type="text" id="Program" required v-model="form.Program" />
        </div>
        <div>
          <label for="Keywords">Keywords:</label>
          <input type="text" id="Keywords" required v-model="form.Keywords" />
        </div>
        <div>
          <label for="Content">content:</label>
          <input type="text" id="Content" required v-model="form.Content" />
        </div>
        <div style="position: relative;">
          <label for="DOI">DOI:</label>
          <input type="text" id="DOI" required v-model="form.DOI" />
        </div>
        <button class="publish-button" type="submit">Publish</button>

      </form>
    </div>
  </template>
  
  <script>
import axios from 'axios';
import ProfNavbar from './ProfNavbar.vue';
  
  export default {
    name: "AddingArticles",
    components: { ProfNavbar },
    data() {
      return {
        form: {
          Title: '',
          Date: '',
          Author: '',
          Program: '',
          Keywords: '',
          Content:'',
          DOI: '',
        },
        showModal: false,
      };
    },
    methods: {
      hideModal() {
        this.showModal = false;
      },
      postArticle() {
        axios.post("http://localhost:8000/docuDetails/add", {Title: this.form.Title, Date: this.form.Date, Author: this.form.Author,
        Program: this.form.Program, Keywords: this.form.Keywords, Content: this.form.Content, DOI: this.form.DOI})
        .then((response) => {
          console.log(response);
        });
      }
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
  
  .publish-button {
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #b9b4b4;
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
  
