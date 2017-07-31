<template>
	<div :class="getClass">
		<h3 class="custom-rss">{{ item.nstag }}</h3>
		<h2>{{ item.title }}</h2>
		<p>{{ item.summary }}</p>
	</div>
</template>

<script>

export default {

	props: ['item', 'name'],

	computed: {
		getClass() {
			return 'rss-feed__wrapper__item ' + this.name
		}
	}

}

</script>
