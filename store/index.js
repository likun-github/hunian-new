import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		index:0,
    	
    },
    mutations: {
		changeindex(state,provider){
			console.log("provider"+provider)
			state.index=provider;
		}
		
		
		
		
		
		
    }
})

export default store