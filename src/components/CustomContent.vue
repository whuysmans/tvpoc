<template>
	<div class="slide-custom-content--wrapper">
		<div class="slide-custom-content--wrapper--content">
			{{ content }}
		</div>
	</div>
</template>

<script>

import { bus } from '../main'

export default {

	props: ['content', 'dataDuration'],

	created() {
		setTimeout( () => {
			bus.$emit('slideFinished')
		}, this.dataDuration )
	}

}

</script>
