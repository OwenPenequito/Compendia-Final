<template>
    <div class="rectangle">
      <nav>
        <router-link to="/ProfHome">Home</router-link> |
        <router-link to="/ProfAbout">About</router-link> |
        <router-link to="/ProfArticle">Articles</router-link> |
        <a href="#" @click="showModal = true">Logout</a>
        <div class="settings">
          <RouterLink to="/ProfSettings">
        <img src="../assets/settings.png" alt="Settings" />
      </RouterLink>
      </div>
      </nav>
    </div>
  
    <router-view />
  
    <div v-if="showModal" class="modal">
      <div class="Modal-content">
        <p>Are you sure you want to log out?</p>
        <div class="modal-buttons">
          <button @click="showModal = false">Cancel</button>
          <button>
            <RouterLink to="/login">Logout</RouterLink>
        </button>
        </div>
      </div>
    </div>
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    data() {
      return {
        showModal: false
      }
    },
    methods: {
      logout() {
        // Your logout logic here
        console.log('Logged out!')
        this.showModal = false
      }
    }
  }
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
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.Modal-content {
  background-color: #e7e6e0;
  padding: 20px;
  border-radius: 5px;
  height: auto;
}

.modal-buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.modal-buttons button {
  margin-left: 10px;
}
.modal-router-link-exact-active{
    color: rgb(222, 213, 38);
}
.route-enter-from, .route-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active, .route-leave-active {
  transition: all 0.3s ease-out;
}
.settings {
  height: 25px;
  width: 25px;
  position: absolute;
  top: 25px;
  right: 60px;
}

.settings img {
  height: 100%;
  width: 100%;
}

</style>
