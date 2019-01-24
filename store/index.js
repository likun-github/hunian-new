import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		music:{
			name: '',
			src: '',
			minute:0,
			second:0,
			time:300,
		},
		index:0,
		usetime:0,
		x11:0,
		x22:0,
		x33:0,
		x44:0,
		x55:0,
    	
    },
    mutations: {
		changeindex(state,provider){
			console.log("provider"+provider)
			state.index=provider;
		},
		choosemusic(state,provider){
			state.music=provider
		},
		actime(state){
			state.usetime=state.usetime+1;	
		}

    }
})

export default store