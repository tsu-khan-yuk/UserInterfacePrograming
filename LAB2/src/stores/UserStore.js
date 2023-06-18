import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from "@/router";

export const useUserStore = defineStore('user', {
	state: () => {
		return {
			user: null,
		}
	},
	getters: {
		getUser() {
			// console.log(this.$state.user)
			if(this.$state.user) return this.$state.user
		},
		isLogin(){
			return !!this.$state.user
		}
	},
	actions: {
		logoutUser() {
			// console.log('выход с аккаунта')
			localStorage.removeItem(`${this.user.username}-UIP-calculation`);
			localStorage.removeItem(`token-UIP-calculation`)
			this.user = null
			router.push({ name: 'login'})
		},
		loginForm(login) {
			console.log(login)
			let dataUser = localStorage[`${login.username}-UIP-calculation`]
			if (dataUser){
				dataUser = JSON.parse(dataUser)
			} else {
				return false
			}

			if(dataUser.password === login.password) {
				console.log(dataUser, 'dataUser')
				this.user = dataUser
				router.push({name: 'application'})
				localStorage[`token-UIP-calculation`] = JSON.stringify(login)
				return true
			}
		},
		loginToken(){
			let login = localStorage[`token-UIP-calculation`]
			if (login){
				this.loginForm(JSON.parse(login))
			} else {
				router.push({name: 'login'})
			}
		}
	}
})
