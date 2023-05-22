<style scoped>
.container {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 12px;
}

.container .item {
	padding: 12px 20px;
	font-weight: bold;
	position: relative;
	text-align: center;
	cursor: pointer;
}

.item::after {
	content: '';
	position: absolute;
	widows: 100%;
	height: 100%;
	left: 0;
	right: 0;
	border-radius: 6px;
	bottom: 0;
	background: var(--vp-home-hero-name-color);
	opacity: 0.2;
	z-index: -1;
	transition: all linear 0.2s;
}

.item:hover::after {
	opacity: 0.4;
}
</style>

<template>
	<div class="container">
		<section v-for="(ele, idx) in list" class="item" @click.stop="handleClick($event, ele)" :key="idx">
			{{ ele?.name ?? '' }}
		</section>
	</div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'

const props = defineProps({
	list: {
		type: Array<any>,
		default() {
			return []
		}
	}
})

const { list } = toRefs(props)

const handleClick = (e: MouseEvent, ele) => {
	if (ele?.link) window.open(ele?.link)
}
</script>
