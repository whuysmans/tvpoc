<template>
  <div class="slide" :data-duration="slide.dataDuration" style="display: block;">
    <div :class="slide.slideType">
      {{ slide.content }}
      <video-content 
	      v-if="slide.slideType == 'slide-video'" 
	      :src="slide.videoSrc"
	      :type="slide.videoType" 
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
  </div>
</template>

<script>
  export default {

    props: ['slide'],

    data() {
	    return {
	    }
    }

  }
</script>
