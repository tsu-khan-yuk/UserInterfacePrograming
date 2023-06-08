<script setup>
	import { reactive } from 'vue'
	import { useRouter } from 'vue-router'

	const router = useRouter()

	const formState = reactive({
		email: '',
		password: '',
		gender: '',
		dateOfBirth: '',
		name: ''
	});

	const onFinish = values => {
		console.log('Success:', values);

		localStorage[`${ values.email }-UIP-calculation`] = JSON.stringify({
			email: values.email,
			name: values.name,
			password: values.password,
			gender: values.gender,
			dateOfBirth: values.dateOfBirth
		})
		router.push({name: 'login'})
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};
</script>


<template>
	<a-form
			style="width: 100%"
			:model="formState"
			name="basic"
			:label-col="{ span: 7 }"
			:wrapper-col="{ span: 17 }"
			autocomplete="off"
			@finish="onFinish"
			@finishFailed="onFinishFailed"
	>
		<a-form-item
				label="Ім'я"
				name="name"
				:rules="[{ required: true, message: 'Вкажіть своє ім\'я!' }]"
		>
			<a-input v-model:value="formState.name"/>
		</a-form-item>

		<a-form-item
				label="Email"
				name="email"
				:rules="[{type: 'email', required: true, message: 'Вкажіть email для входу!' }]"
		>
			<a-input v-model:value="formState.email" autocomplete="off"/>
		</a-form-item>

		<a-form-item
				label="Пароль"
				name="password"
				:rules="[{ required: true, message: 'Вкажіть пароль!' }]"
		>
			<a-input-password v-model:value="formState.password" autocomplete="off"/>
		</a-form-item>

		<a-form-item
				label="Стать"
				name="gender"
				:rules="[{ required: true, message: 'Оберіть стать!' }]"
		>
			<a-select
					ref="select"
					v-model:value="formState.gender"
					style="width: 100%"

			>
				<a-select-option value="Чоловік">Чоловік</a-select-option>
				<a-select-option value="Жінка">Жінка</a-select-option>
			</a-select>
		</a-form-item>
		<a-form-item
				label="Дата народження"
				name="dateOfBirth"
				:rules="[{ required: true, message: 'Please input your dateOfBirth!' }]"
		>
			<a-date-picker v-model:value="formState.dateOfBirth" style="width: 100%;"/>
		</a-form-item>

		<a-form-item :wrapper-col="{
				xs: { span: 24, offset: 0 },
				sm: { span: 17, offset: 7 },
			}">
			<div style="display: flex; justify-content: space-between; width: 100%;">
				<a-button html-type="button" @click="router.push({name: 'login'})">Повернутися</a-button>
				<a-button type="primary" html-type="submit">Зберегти</a-button>
			</div>
		</a-form-item>
	</a-form>
</template>


<style scoped>

</style>