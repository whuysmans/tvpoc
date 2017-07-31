<template>
	<div :class="getClass">
		<gallery-item v-for="item in items" :item="item" :itemClass="getClass" :key="item.name"></gallery-item>
	</div>
</template>

<script>
import { bus } from '../main.js'

export default {

	props: ['items', 'dataDuration', 'numberImages'],

	created() {
		setTimeout( () => {
			bus.$emit('slideFinished')
		}, this.dataDuration )
	},

	computed: {
		getClass() {
			return 'slide-photo-gallery-' + this.numberImages + '-images'
		}
	}

}

</script>
