<template>
	<div class="image" :style="bgImage">
	</div>
</template>

<script>

import { bus } from '../main'

export default {

	props: {
		imgSrc: {
			type: String,
			required: true
		},
		dataDuration: {
			type: Number,
			required: true
		}
	},

	created() {
		setTimeout( () => {
			console.log('fired')
			bus.$emit('slideFinished')
		}, this.dataDuration )
	},

	computed: {
		bgImage() {
			return 'background-image: url(' + this.imgSrc + ')'
		}
	}

}

</script>
