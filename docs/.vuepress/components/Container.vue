<template>
	<div class="container">
		<div class="side">
			<slot name="side"></slot>
		</div>
		<div class="content">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.container {
	object-fit: cover;
	height: 100%;
	width: 100%;
	background: url("../public/images/the_ring.jpg") no-repeat
		rgba(255, 255, 255, 0.5);
	background-position: center center;
	background-size: 100% 100%;
	position: fixed;
}
.side {
	max-height: 100%;
	height: inherit;

	overflow-y: scroll;
}
</style>
