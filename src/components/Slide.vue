<template>
  <div class="slide" :data-duration="slide.dataDuration" style="display: block;">
      <video-content 
	      v-if="slide.slideType == 'slide--video--design-01'" 
       	      :slide="slide"
	      >
      </video-content>
      <custom-content
       	      v-if="slide.slideType == 'slide-custom-content'"
	      :content="slide.content"
	      :dataDuration="slide.dataDuration"
	      >
      </custom-content>
      <image-content
	      v-if="slide.slideType == 'slide-image-only'"
       	      :imgSrc="slide.imgSrc"
              :dataDuration="slide.dataDuration"
       	      >
      </image-content>
      <gallery-content
       	      v-if="slide.slideType == 'slide-photo-gallery'"
	      :items="slide.items"
	      :numberImages="slide.numberImages"
	      :dataDuration="10000"
	      >
      </gallery-content>
      <rss-content
	      v-if="slide.slideType == 'slide-rss-feed'"
       	      :dataDuration="slide.dataDuration"
       	      :url="slide.url"
       	      :nrColumns="slide.nrColumns"
              >
      </rss-content>
  </div>
</template>

<script>
  export default {

	  props: {
		  slide: {
			  type: Object,
			  default() {
				  return {
					  slideType: '',
					  dataDuration: 0
				  }
			  }
		  }
	  },

    data() {
	    return {
	    }
    }

  }
</script>
