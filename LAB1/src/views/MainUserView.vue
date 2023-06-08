<script setup>
	import { reactive } from "vue";
	import { useUserStore } from '@/stores/UserStore'


	const userStore = useUserStore();
	const user = userStore.getUser
	console.log(user)
	const table = reactive({
		data: [
			{
				name: 'Ім\'я',
				value: user.name,
			},
			{
				name: 'Email',
				value: user.email,
			},
			{
				name: 'Стать',
				value: user.gender,
			},
			{
				name: 'День нарождення',
				value: new Date(user.dateOfBirth).toISOString().split('T')[0],
			},
		],
		columns: [
			{
				title: 'Поле',
				dataIndex: 'name',
			},
			{
				title: 'Значення',
				dataIndex: 'value',
			},
		],
	})
</script>


<template>
	<div style="display: flex; flex-direction: column; ">
		<div>
			<a-table
				:pagination="false"
				:dataSource="table.data"
				:columns="table.columns"
				style="width: 100%;"
			/>
		</div>
	</div>
</template>


<style scoped>

</style>