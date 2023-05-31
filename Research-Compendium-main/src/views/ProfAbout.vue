<template>
    <ProfNavbar />
    <div class="rect">
      <div class="about">
        <h1>ABOUT TIP</h1>
        <br>
        <img src="../assets/TIP_Arlegui.jpg">
        <p>The Technological Institute of the Philippines (T.I.P.) is one of the country’s premier technological, engineering,
          and computing higher educational institutions.  It is a private non-sectarian stock school founded on February 8, 1962 by
          a group of educators headed by Engineer Demetrio A. Quirino, Jr. and Dr. Teresita U. Quirino. Using an outcomes-based educational
          model with its locally and globally accredited programs, T.I.P. allows students to acquire industry-desired qualities and essential
          experiences that better equip them to be effective as soon as they enter the workforce or set up their own business.</p>
        <br>
        <h1>ABOUT US</h1>
        <p>The Archive is a T.I.P. exclusive web-based research compendium which aims to provide access on various resources published by its
          students for different studies.</p>
        <p>We aim to bridge the lack of access  to academic information and the availability of related literature for its students.</p>
      </div>
    </div>

    <button class="plus-btn" @click="showModal = true">+</button>

      <!-- Modal -->
      <div v-if="showModal" class="modal" style="right: calc(50% - 200px); top: 0px;">
        <div class="modal-content">
          <span class="close" @click="showModal = false">&times;</span>
          <div class="modal-actions">
            <router-link to="/addingarticles">
              <button>Publish a new article</button>
            </router-link>
            <router-link to="/article">
              <button>Edit an existing article</button>
            </router-link>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  import ProfNavbar from './ProfNavbar.vue';
  
  export default {
    components: { ProfNavbar },
    data () {
      return {
      showModal: false
      }
    }
      }
    
  </script>
  
  <style scoped>
  .rect {
    height: 550px;
    width: 1415px;
    background: #eee;
    padding: 25px;
    opacity: 0.8;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #ccc;
  }
  .about {
    text-align: left;
    color: black;
    font-weight: bold;
  }
  .about p {
    font-size: larger;
    font-weight: lighter;
  }
  .about img {
    height: 300px;
    width: 400px;
    float: right;
  }

  button{
  margin: 0px 0px 200px ;
  height: 25px;
  width: 150px;
  border-radius: 10px;
  background-color: rgb(255, 255, 106);
}
  .plus-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: yellow;
  border: none;
  position: fixed;
  bottom: 20px; 
  right: calc(20px + 5%); 
  z-index: 9999;
}
.modal {

  position: fixed; /* Stay in place */
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  padding: 10px;
  border-radius: 5px;
  max-width: 300px;
  max-height: 50px;
}
  </style>
  