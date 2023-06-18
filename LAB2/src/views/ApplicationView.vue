<template>
    <div>
        <h2>Введіть числа через кому:</h2>
        <input v-model="numberString" type="text" />
        <div style="display: flex; justify-content: space-between; width: 100%">
            <a-button type="primary" html-type="submit" @click="clearNumbers">Очистити</a-button>
		</div>
    </div>
    
    <div>
        <h2>Введені числа:</h2>
        <ul data-cy="input">
            <li v-for="(value, index) in inputNumbers" :key="index">{{ value }}</li>
        </ul>
    </div>
    
    <div>
        <h2>Відсортовані числа:</h2>
        <ul data-cy="output">
            <li v-for="(value, index) in sortedNumbers" :key="index">{{ value }}</li>
        </ul>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                numberString: '',
            };
        },
        computed: {
            inputNumbers() {
                if (this.numberString === '') {
                    return [];
                }
                    return this.numberString.split(',').map(Number);
            },
            sortedNumbers() {
                const sorted = this.inputNumbers.slice().sort((a, b) => a - b);
                return sorted;
            },
        },
        methods: {
            clearNumbers() {
                this.numberString = '';
            },
        },
    };
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
    }
</style>
