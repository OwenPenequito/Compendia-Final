<template>
    <Loggednav />
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
  </template>
  
  <script>
  import Loggednav from '@/views/loggednav.vue';
  
  export default {
    components: { Loggednav }
      }
    
  </script>
  
  <style>
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
  </style>
  