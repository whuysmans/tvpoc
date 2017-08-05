<template>
	<div :class="'slide ' + slide.slideType">
		<video ref="video" 
			:class="getClass" 
			controls autoplay poster="" muted 
		     @timeupdate="checkElementVisibility()"
			@ended="videoHasEnded()">
			<source :src="slide.videoSrc" :type="slide.videoType" />
		</video>
		<video-element v-if="showElement" :element="slide.videoElement"></video-element>
	</div>
</template>

<script>

import { bus } from '../main'

export default {

	props: ['slide'],

	data() {
		return {
			showElement: false
		}
	},

	created() {
	},

	methods: {
		videoHasEnded() {
			console.log(this.$refs.video.played)
			//bus.$emit('slideFinished')
		},
		checkElementVisibility() {
			if( this.$refs.video.currentTime > this.slide.videoElement.startElement &&
				this.$refs.video.currentTime < this.slide.videoElement.endElement ) {
				this.showElement = true
			} else {
				this.showElement = false
			}
		}
	},

	computed: {
		getClass() {
			return this.slide.slideType + '__video'
		}
	}
}

</script>
