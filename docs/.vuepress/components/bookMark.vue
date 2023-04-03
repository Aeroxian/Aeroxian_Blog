<template>
  <div class=''>
    13123
  </div>
</template>
  
<script setup>
import bookMarkJson from '../public/myBookMark.json'
import { useRoute } from 'vue-router'
import { onMounted , ref} from 'vue'
const route = useRoute()
console.log(route);
console.log(bookMarkJson);
</script>

<style scoped>
</style>