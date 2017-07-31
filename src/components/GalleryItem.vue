<template>
	<div :class="getItemClass" :style="getUrl">
		<div v-if="item.isWrapper" :class="getWrapperClass">
			<div :class="getWrapperContentClass" :style="item.wrapperContentStyle">
				<h1 :style="item.wrapperHeadingStyle">{{ item.wrapperHeadingContent }}</h1>
				<hr :style="item.wrapperLineStyle" />
				{{ item.wrapperContent }}
			</div>
		</div>
	</div>
</template>

<script>

export default {

	props: [ 'item', 'itemClass' ],

	computed: {
		getUrl() {
			return 'background-image: url(' + this.item.url + ')'
		},
		getItemClass() {
			return this.itemClass + '--' + this.item.name
		},
		getWrapperClass() {
			return this.itemClass + '--wrapper'
		},
		getWrapperContentClass() {
			return this.itemClass + '--wrapper--content'
		}
	}

}

</script>
