<template>
	<div :id="element.id">
		<h1>{{ element.title }}</h1>
		<p>{{ element.content }}</p>
		<div class="interactive">
			<div class="interactive__text">
				<div class="interactive__text__text">
					<p>{{ element.interactiveElement.interactiveText }}</p>
				</div>
				<div class="interactive__text__link">
					<div class="interactive__text__link__icon">
						<i :class="element.interactiveElement.interactiveIcon" aria-hidden="true"></i>
					</div>
					<div class="interactive__text__link__url">
						{{ element.interactiveElement.interactiveLink }}
					</div>
				</div>
			</div>
			<div class="interactive__action">
				<div class="interactive__action__qr-code">
					<img :src="element.interactiveElement.interactiveQR" :alt="element.interactiveElement.interactiveQRAlt">
				</div>
				<div class="interactive__action__button">
					Button
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

	props: ['element'],

	methods: {

	}

}
</script>
