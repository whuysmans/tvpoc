<template>
	<div class="content">
		<div class="rss-feed__wrapper">
			<rss-item v-for="(item, i) in items" class="active read" :item="item" :name="getName(i + 1)" key="item.id">test</rss-item>
		</div>
	</div>
</template>

<script>

import { bus } from '../main'
import axios from 'axios'

export default {

	props: ['dataDuration', 'url', 'nrColumns'],

	data() {
		return {
			items: []
		}
	},

	created() {
		this.fetchFeed(this.url)
		setTimeout( () => {
			bus.$emit('slideFinished')
		}, this.dataDuration)
	},

	methods: {
		fetchFeed(url) {
			const rootURL = 'https://query.yahooapis.com/v1/public/yql?q='
			const query = 'select * from xml where url="' + url + '"'
			const proxyURL = rootURL + encodeURIComponent(query) + 
				'&format=json&diagnostics=false'
			axios.get(proxyURL).then( (response) => {
				const result = response.data.query.results.feed.entry
				const size = this.nrColumns
				this.items = result.slice(0, size)
				console.log(this.items)
			} )
		},
		getName(nr) {
			return 'item' + nr
		}

	}
}

</script>
