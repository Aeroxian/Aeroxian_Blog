---
title: 条件类型
author: 冴羽
date: "2021-12-12"
---

## 123111

aa
<Test text="sd"></Test>
aa
_你好， {{ msg }}_
<RedDiv>

当前计数 {{ count }}\_

</RedDiv>

<button @click="count++">点我！</button>

<script setup>
import { h, ref } from 'vue'

const RedDiv = (_, ctx) => h(
  'div',
  {
    class: 'red-div',
  },
  ctx.slots.default()
)
const msg = 'Markdown 中的 Vue'
const count = ref(0)
</script>

<style>
.red-div {
  color: red;
}
</style>
<!-- <Badge text="演示"/> -->
