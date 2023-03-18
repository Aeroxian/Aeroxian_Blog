<template>
	_你好， {{ msg }}_

	<button @click="count++">点我！</button>
</template>

<script setup>
import { h, ref } from "vue"

const msg = "Markdown 中的 Vue"
const count = ref(0)
</script>

<style>
.red-div {
	color: red;
}
</style>
