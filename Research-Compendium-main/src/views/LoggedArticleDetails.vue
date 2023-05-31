<template>
    <Loggednav />
    <div class="Details">
      <table class="table">
        <tbody>
      <tr v-for="doc in doc_details" :key="doc.ID">
        <td>
           <h1>{{ doc.Title }}</h1>
          <div class="content"><h3>{{ doc.Content }}</h3></div>
        </td>
      </tr>
      </tbody>
      </table>
  
      <div class="block">
        <h3 class="Records">Records:</h3>
        <h3 class="References">References: 9</h3>
        <h3 class="Internal">Internal Citations: 6</h3>
        <h3 class="Views">Views: 8</h3>
        <h2 class="helpful">Is the document helpful?</h2>
        <div class="Like">
          <button class="button" :class="{ liked: isLiked }" @click="toggleLike">
            <img src="@/assets/like.png" alt="Like Button" width="15" height="15">
            <p class="like-text">Like</p>
          </button>
        </div>
        <button class="Download" :class="{ click: isclicked}" @click="openModal">Request to Download</button>
      </div>
    </div>  
    <!-- Modal -->
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Your file is ready to download</h2>
        <a href="https://drive.google.com/uc?export=download&id=1qN_Xn9PnTXPiTdzZU-E91MhdIsApm83w.png" download="GFG"></a>
        <button class="modal-button">
          <a href="@/assets/dl.png" download>
          <img src="@/assets/dl.png" alt="Download Button" width="100" height="60">
        </a>
        </button>
      </div>
    </div>
  </template>
  
  <script>
import Loggednav from "./loggednav.vue";
import axios from "axios";
  export default {
    components: { Loggednav },
    props: ['id'],
    data() {
      return {
        doc: null,
        isLiked: false,
        isclicked: false,
        showModal: false,
        doc_details: []
      };
    },
    async mounted() {
        this.getArticledetails();
    },
    methods: {
      getArticledetails(){
          const documentId = this.id;

          axios.get(`http://localhost:8000/docuDetails/viewID/${documentId}`)
            .then((response) => {
                this.formatArticleDetails(response.data);
            });
        },
        formatArticleDetails(docs){
            for (let doc in docs){
                this.doc_details.push({...docs[doc], id: doc });
            }
        console.log(this.doc_details);
        },
      toggleLike() {
        this.isLiked = !this.isLiked;
      },
      openModal() {
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .Details {
    height: auto;
    width: 1600px;
    background: #ffffff;
    background-size: cover;
    padding: 25px;
    position: relative;
    top: -10px;
    left: -10px;
    background-size: 4000px;
  }
  
  body {
    background-color: #ffffff;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
  }
  
  .block {
  position: relative;
  top: 0;
  right: 0;
  width: 100%;
  max-height: 150px;
  background-color: rgb(107, 103, 103);
  padding: 10px;
  color: black;
  font-weight: lighter;
  border-radius: 10px;
  height: 700px;
  z-index: 999;
}
  
  .Records {
    text-align: center;
    margin-top: 0;
  }
  
  .References {
    text-align: left;
    position: relative;
    top: -10px;
  }
  
  .Internal {
    text-align: left;
    position: relative;
    top: -25px;
  }
  
  .Views {
    text-align: left;
    position: relative;
    top: -40px;
  }
  
  .helpful {
    text-align: center;
    font-size: small;
    position: relative;
    top: -60px;
  }
  
  .Like {
    display: flex;
    align-items: center;
    position: relative;
    top: -65px;
    left: 770px;
  }

  .Like button {
    display: flex;
    align-items: center;
  }
  
  .Like img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
  
  .Like .like-text {
    margin: 0;
  }
  
  .button {
    margin: 0px 0px 20px;
    height: 25px;
    width: 60px;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
  }
  
  .button.liked {
    box-shadow: 0 0 5px 2px yellow;
    background-color: rgb(14, 217, 231);
  }
  .Download.click {
    box-shadow: 0 0 5px 2px yellow;
    transition: box-shadow 0.3s ease-in-out; /* Add transition property */
  }
  .Download {
    text-align: left;
    border-radius: 10px;
    position: relative;
    top: -180px;
    left: center;
    font-size: larger;
    color: blue;
  }
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    position: relative;
    padding: 20px;
    background-color: #fefefe;
    border-radius: 10px;
    max-height: 200px;
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #aaa;
    cursor: pointer;
  }
  
  .modal-button {
    cursor: pointer;
  }

  .content {
    margin-top: 100px;
    margin-right: 8%;
    align-items: center;
    justify-content: center;
  }
  </style>