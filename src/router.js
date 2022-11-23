import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from './store/user'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

const requireAuth = async (to, from, next) => {
    const useStore = useUserStore()
    useStore.loadingSession = true
    const user = await useStore.currentUser()
if(user){
    next()
}else{
    next('/login')
}
useStore.loadingSession = false
}

const routes = [
    { path: '/', component: Home, beforeEnter: requireAuth },
    { path: '/Login', component: Login },
    { path: '/Register', component: Register },
]

const history = createWebHistory()

const router = createRouter({
    routes,
    history,
})

export default router;