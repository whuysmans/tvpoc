<template>
  <div id="globalSlider" class="global-slider" data-animation="">
    <div class="slides">
      <tv-slide :slide="currentSlide"></tv-slide>
      current: {{ currentSlide }}
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import { bus } from '../main'

  export default {
    data() {
      return {
	slides: [] 
      }
    },
    created() {
	    this.initSlides().then( response => {
		    this.slides = this.getSlides
		    let current = this.getCurrent
		    const length = this.slides.length
		    bus.$on('slideFinished', () => {
			    let next = ++current % length
			    current = next
			    console.log(next)
			    this.updateCurrent(next).then( () => {
				    if( this.skipSlide ) {
					    console.log('between fired')
					    bus.$emit('slideFinished')
				    }
			    } )
		    })
	    }
		    )
    },
    methods: {
	    ...mapActions([
		    'initSlides',
		    'updateCurrent'
		    ])
    },

    computed: {
	    ...mapGetters([
		    'getCurrent',
		    'getSlides'
		]),
	    currentSlide() {
		    return this.getSlides[this.getCurrent]
	    },
	    skipSlide() {
		    let currentSlide = this.getSlides[this.getCurrent]
		    if( currentSlide.start && currentSlide.end ) {
			    console.log('has dates')
			    const start = new Date( currentSlide.start ).getTime()
			    const end = new Date( currentSlide.end ).getTime()
			    const now = new Date().getTime()
			    
			    if( start <= now  && now <= end ) {
				    return false
			    } else {
				    return true
			    }
		    } else {
			    return false
		    }
	    }
    }

  }
</script>
