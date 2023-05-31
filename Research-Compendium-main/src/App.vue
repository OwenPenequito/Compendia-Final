<template>
  <meta name="viewport" content="width = device-width, initial-scale=1"> 
  
  
  <router-view/>

  <div class="footer">
    <div class="ftext">
      <p>Contact us:</p>
      <p>T.I.P. Website</p>
      <a href="https://dru.tip.edu.ph">
      <img src="../src/assets/T.I.P._Logo.png">
      </a>
    </div>

    <div class="socials">
      <p>T.I.P. Social Links</p>
      <div class="email">
        <a href="https://www.gmail.com">
          <img src="../src/assets/gmail.png">
        </a>
      </div>

      <div class="fbook">
        <a href="https://www.facebook.com/TIP1962official/">
          <img src="../src/assets/facebook.png">
        </a>
      </div>

      <div class="instag">
        <a href="https://www.instagram.com/tip1962official/">
          <img src="../src/assets/instagram.png">
        </a>
      </div>

      <div class="twtr">
        <a href="https://twitter.com/TIP1962official">
          <img src="../src/assets/twitter.png">
        </a>
      </div>
    </div>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #959595;

}

body {
  background-color: #ffffff;
  background-image: url("../src/assets/2.png");
  background-repeat: no-repeat;
  overflow-x: hidden;
}

nav {
  padding: 30px;
  position: relative;
  left: -25px;
  top: 5px;
  font-size: 15px;
  word-spacing: 10px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: rgb(222, 213, 38);
}

.rectangle {
  height: 75px;
  width: 105%;
  background: #4a4a4a;
  position: relative;
  left: -20px;
  top: -10px;
}

.footer{
  height: 200px;
  width: 105%;
  background: #4a4a4a;
  position: relative;
  top: 10px;
  left: -10px;
  padding: 25px;
  display: flex;
}

.ftext {
  text-align: left;
  font-style: bold;
  color: #eee;

}

.ftext img {
  height: 135px;
  width: 200px;

}

.socials p{
  position: relative;
  top: 35px;
  left: 900px;
  color: #fff;
}

.email img{
  height: 30px;
  width: 30px;
  position: relative;
  top: 30px;
  left: 850px;
}

.fbook img{
  height: 25px;
  width: 25px;
  position: relative;
  top: -2px;
  left: 890px;
}

.instag img{
  height: 25px;
  width: 25px;
  position: relative;
  top: -32px;
  left: 925px;
}

.twtr img {
  height: 25px;
  width: 25px;
  position: relative;
  top: -62px;
  left: 960px;
}

</style>
