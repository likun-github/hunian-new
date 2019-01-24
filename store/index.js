import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		music:{
			name: '',
			url: '',
			minute:0,
			second:0,
			time:300,
		},
		firsttime:true,
		oldday:0,
		usetime:0,
		index:0,
		lastday:0,
		course:0,
		meditatetime:0,
		x11:50,
		x22:30,
		x33:45,
		x44:50,
		x55:50,
    	
    },
    mutations: {
		first(state){
			state.firsttime=false;
		},
		changeindex(state,provider){
			console.log("provider"+provider)
			state.index=provider;
		},
		choosemusic(state,provider){
			state.music=provider;
			console.log("state.music"+state.music.url);
		},
		addcourse(state){
			var date = new Date();
			var date = date.getDate();
			state.lastday=uni.getStorageSync('lastday');
			var olddate=uni.getStorageSync('date');
			if(!state.lastday){
				uni.setStorage({
					key: 'lastday',
					data:  0,
					success: function() {
						console.log('success');
					}
				});
			}
			if(date-olddate>1){
				uni.setStorage({
					key: 'lastday',
					data:  0,
					success: function() {
						console.log('success');
					}
				});
			}
			else if(date-olddate==1){
				state.lastday+=1;
				uni.setStorage({
					key: 'lastday',
					data:  state.lastday,
					success: function() {
						console.log('success');
					}
				});
			}
			uni.setStorage({
				key: 'date',
				data:  date,
				success: function() {
					console.log('success');
				}
			});
			 var cr=uni.getStorageSync('course');
			 if(cr){
				 state.course=cr;
			 }
			state.course+=1;
			uni.setStorage({
					key: 'course',
					data:  state.course,
					success: function() {
					console.log('success');
					}
				});
			
		},
		addmeditatetime(state,provider){
			var cd=uni.getStorageSync('meditate');
			 if(cd){
				 state.meditatetime=cd;
			 }
			state.meditatetime+=provider;
			uni.setStorage({
					key: 'meditate',
					data:  state.meditatetime,
					success: function() {
					console.log('success');
					}
				});
			
		},

    }
})

export default store