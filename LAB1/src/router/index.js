import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import MainUserView from "@/views/MainUserView.vue";
import ApplicationView from "@/views/ApplicationView.vue";
import DescriptionView from "@/views/DescriptionView.vue";


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'login',
			component: LoginView
		},
		{
			path: '/register',
			name: 'register',
			component: RegisterView
		},
		{
			path: '/main',
			name: 'main',
			component: MainUserView
		},
		{
			path: '/application',
			name: 'application',
			component: ApplicationView
		},
		{
			path: '/description',
			name: 'description',
			component: DescriptionView
		},
	]
})

export default router
