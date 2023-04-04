<template>
	<div class="">
		<Menu :theme="'light'" accordion>
			<Submenu :name="sub1.id" v-for="sub1 in bookMarkJson" :key="sub1.id">
				<template #title>
					<Icon type="ios-paper" />
					{{ sub1.name }}
				</template>
				<!-- <Submenu
					:name="sub2.id"
					v-if="sub1.children"
					v-for="sub2 in item.children"
					:key="sub2.id"
				>
					<template #title>
						<Icon type="ios-paper" />
						{{ sub2.name }}
					</template>
				</Submenu> -->
        <template v-for="sub2 in sub1.children" :key="sub2.id">

          <MenuItem :name="sub2.id" 
            v-if="sub2.type === 'url' && !sub2.children">
            {{sub2.name}}
          </MenuItem>
        </template>
			</Submenu>
		</Menu>
	</div>
</template>

<script setup>
import bookMarkJson from "../public/myBookMark.json"
import { useRoute } from "vue-router"
import { onMounted, ref } from "vue"

const route = useRoute()
console.log(route)
console.log(bookMarkJson)
onMounted(() => {
	// book
})
</script>

<style scoped></style>
