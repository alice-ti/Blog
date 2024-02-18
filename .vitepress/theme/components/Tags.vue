<style scoped>
.box {
	max-width: 1152px;
	margin: 0 auto;
	padding: 0 16px 0;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}

.box img {
	width: 30%;
	position: relative;
}
.box img:hover {
	cursor: pointer;
}

@media (min-width: 640px) {
	.box {
		padding: 0 32px 0;
	}
}
@media (min-width: 768px) {
	.box {
		padding: 0 48px 0;
	}
}
@media (min-width: 960px) {
	.box {
		padding: 0 64px 0;
	}
}

@media (min-width: 1440px) {
	.box {
		padding: 0;
	}
}
</style>

<template>
	<div class="box">
		<img src="/public/logo/fire.png" alt="" />
		<img src="/public/logo/grass.png" alt="" />
		<img src="/public/logo/water.png" alt="" />
	</div>
</template>
<script setup></script>
