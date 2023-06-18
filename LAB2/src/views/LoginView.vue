<script setup>
	import { reactive, ref } from 'vue'
	import { useRouter } from 'vue-router'
	import { useUserStore } from '@/stores/UserStore'

	const userStore = useUserStore();

	const router = useRouter()

	const formState = reactive({
		username: '',
		password: '',
	});

	const validRequestForm = ref(true);

	const onFinish = values => {
		console.log('Success:', values);
		validRequestForm.value = userStore.loginForm(values)
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

	const rules = {
		password: [{required: true, validator: validRequestForm, trigger: 'change'}],
	};
</script>


<template>
	<a-form
		style="width: 100%"
		:model="formState"
		name="basic"
		:label-col="{ span: 4 }"
		:wrapper-col="{ span: 20 }"
		autocomplete="off"
		@finish="onFinish"
		@finishFailed="onFinishFailed"
		:rules="rules"
	>
		<a-form-item
			label="Логін"
			name="username"
			:rules="[{ required: true, message: 'Введіть e-mail!' }]"
		>
			<a-input v-model:value="formState.username" data-cy="ilogin" autocomplete="off"/>
		</a-form-item>

		<a-form-item
			label="Пароль"
			name="password"
			style="margin: 0;"
			:rules="[{ required: true, message: 'Введіть пароль!' }]"
		>
			<a-input-password v-model:value="formState.password" data-cy="ipass" autocomplete="off"/>
		</a-form-item>

		<a-form-item :wrapper-col="{ offset: 4, span: 20 }" style="margin: 0;">
			<div v-show="!validRequestForm" role="alert" class="ant-form-item-explain-error" >
				<span>Неправильний e-mail або пароль</span>
			</div>
		</a-form-item>
		
		<a-form-item :wrapper-col="{
			xs: { span: 24, offset: 0 },
			sm: { span: 20, offset: 4 },
		}">
			<div style="display: flex; justify-content: space-between; width: 100%;">
				<a-button id="reg" html-type="button" @click="router.push({name: 'register'})">Регистрація</a-button>
				<a-button id="input" type="primary" html-type="submit">Вхід</a-button>
			</div>
		</a-form-item>
	</a-form>
</template>


<style scoped>

</style>