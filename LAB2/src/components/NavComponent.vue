<script setup>
import { useUserStore } from '@/stores/UserStore'
import { useRouter, useRoute } from 'vue-router'

const userStore = useUserStore();
const router = useRouter()
const route = useRoute()

const menu = [
	{
		type: 'primary',
		nameLink: 'application',
		name: 'Застосунок'
	},
	{
		type: 'default',
		nameLink: 'main',
		name: 'Профіль'
	},
	{
		type: 'dashed',
		nameLink: 'description',
		name: 'Опис',
		'data-cy':'desc'
		
	},
]


</script>


<template>
	<div style="display: flex; justify-content: space-between">
		<div style="display: flex; gap: 10px">
			<template
					v-for="btn of menu"
					:key="btn.nameLink"
			>
				<a-button
						v-if="route.name !== btn.nameLink"
						:type="btn.type"
						@click="router.push({name: btn.nameLink})"
						:data-cy="btn['data-cy']"
				>
					{{ btn.name }}
				</a-button>
			</template>
		</div>
		<a-button danger @click="userStore.logoutUser()">Вихід</a-button>
	</div>
</template>

<style scoped>

</style>