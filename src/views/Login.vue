<script setup>
import { ref } from 'vue';
import { useUserStore } from '../store/user'
// import { useRouter } from 'vue-router'

const userStore = useUserStore()
// const router = useRouter()
const email = ref('')
const password = ref('')
const handleSubmit = async() => {
    if (!email.value || password.value.length < 6) {
        return alert('Llena los perros campos por favor!!!')
    }
    await userStore.loginUser(email.value, password.value)
    // router.push('/')
}
</script>

<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Ingrese email" v-model.trim="email" class="me-2" />
            <input type="password" placeholder="Ingrese contraseña" v-model.trim="password" class="me-2">
            <button type="submit" class="btn btn-success" :disabled="userStore.loadingUser">Iniciar sesion</button>
        </form>
    </div>
</template>