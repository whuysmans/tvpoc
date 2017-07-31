import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		currentSlide: 0,
		slides: []
	},
	getters: {
		getCurrent: state => {
			return state.currentSlide
		},
		getSlides: state => {
			return state.slides
		}
	},
	mutations: {
		UPDATECURRENT: (state, number) => {
			state.currentSlide = number
		},
		INITSLIDES: (state, slides) => {
			state.slides = slides
		},
		INSERTSLIDES: (state, args) => {
			if(args.position < state.slides.length)
				state.slides.splice( args.position, 0, args.slides )
		}
	},
	actions: {
		updateCurrent: (context, number) => {
			return new Promise( ( resolve, reject ) => {
				context.commit('UPDATECURRENT', number)
				resolve()
			} )
		},
		initSlides: (context, slides) => {
			return new Promise((resolve, reject) => {
				axios.get('http://pushdev.dev/wp-json/tivie/v1/slides')
					.then(response => {
						context.commit('INITSLIDES', response.data)
						resolve(response)
					}, error => {
						reject(error)
					})

				})
		},
		insertSlides: (context, args) => {
			context.commit('insertSlides', args)
		}
	}

})
