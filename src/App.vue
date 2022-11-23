<script setup>
import {useUserStore} from './store/user'
const userStore = useUserStore()
</script>
<template>
  <div>
    <h1>App Firebase</h1>
    <nav v-if="!userStore.loadingSession">
      <div class="btn btn-group">
        <router-link to="/" class="btn btn-outline-success me-1" v-if="userStore.userData">Home</router-link>
        <router-link to="Login" class="btn btn-outline-success me-1" v-if="!userStore.userData">Login</router-link>
        <router-link to="/Register" class="btn btn-outline-success me-1" v-if="!userStore.userData">Register</router-link>
        <button class="btn btn-outline-danger" @click="userStore.logoutUser" v-if="userStore.userData">Cerrar sesion boludo</button>
      </div>
    </nav>
    <div v-else> Loading user... </div>
    <router-view></router-view>
  </div>
</template>
