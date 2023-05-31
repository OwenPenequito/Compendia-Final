<template>
    <meta name="viewport" content="width = device-width, initial-scale=1">
   
      <div class="rectangle">
        <nav>
         <router-link to="/">Home</router-link> |
         <router-link to="/about">About</router-link> |
         <router-link to="/article">Articles</router-link> |
         <router-link to="/login">Login</router-link>
        </nav>
        <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
      </div>
</template>

<script>
const data = {
  name: 'navbar',
};
export default data; 
</script>

<style>
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

a:hover,
a.router-link-active {
  border-bottom: 2px solid #ffffff;
}

.rectangle {
  height: 75px;
  width: 105%;
  background: #4a4a4a;
  position: relative;
  left: -20px;
  top: -10px;
}

.route-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>