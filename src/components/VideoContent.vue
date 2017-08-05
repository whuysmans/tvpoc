<template>
	<video controls autoplay poster="" muted @ended="videoHasEnded()">
		<source src="videoSrc" type="videoType" />
	</video>
</template>

<script>

import { bus } from '../main'

export default {

	props: ['videoSrc', 'videoType'],

	methods: {
		videoHasEnded() {
			bus.$emit('slideFinished')
		}
	}
}

</script>
