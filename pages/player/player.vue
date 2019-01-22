<template>
	<view class="container">
		<image src="../../static/expect.jpg"></image>
		<view class="title" @tap="back()">
			<image src="/static/back.png" style="width: 50%;height: 50%;position: absolute;"></image>
		</view>
		<view class="lopp"></view>
		<view :class="{daily_right:status==1}">
			<view class="shake1"></view>
			<view class="shake2"></view>
			<view class=" shake3"></view>
		</view>
		<view class="medium">
			<view>{{name}}</view>
			<view style="margin-top: 20upx;">{{minute}}:{{second}}</view>
		</view>
		
		<view v-if="status==0" class="cicle" @tap="changestatus(1)">
			<view class="triangle"></view>
			<view class="word">开始专注</view>
		</view>
		<view v-if="status==1" class="cicle1" @tap="changestatus(2)">
			<view class="word1">暂停</view>
		</view>
		<view v-if="status==2" class="cicle2" @tap="changestatus(1)">

			<view class="word2">继续</view>
		</view>
		<view v-if="status==2" class="cicle3" @tap="changestatus(0)">

			<view class="word3">放弃</view>
		</view>



	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	var self;
	const musicplayer = uni.createInnerAudioContext();
	musicplayer.autoplay = false;
	export default {
		data() {
			self=this
			return {
				status: 0,
				music: [
					"https://xiaoyibang.top/uploads/uploads/morning.mp3",
					"https://xiaoyibang.top/uploads/uploads/focus.mp3",
					"https://xiaoyibang.top/uploads/uploads/lunch.mp3",
					"https://xiaoyibang.top/uploads/uploads/night.mp3",
					
				],
				muscicminute:[
					"05",
					"07",
					"07",
					"08",
					
					
				],
				musicsecond:[
					"28",
					"35",
					"25",
					"34",
					
					
				],
				musicname:[
					"晨起",
					"专注",
					"午休",
					"晚眠",
					
				],
				musicduration:[
					328,
					455,
					445,
					514,
				],
				name:'',
				minute:'',
				second:'',
				duration:0,
			};
		},
		computed: {
			...mapState(["index"]),
		},
		onShow: function() {
			musicplayer.src = this.music[this.index];
			
			this.minute=this.muscicminute[this.index];
			this.second=this.musicsecond[this.index];
			this.name=this.musicname[this.index];
			this.duration=this.musicduration[this.index];
		},
		methods: {
			back: function() {
			
				uni.navigateBack({
					delta: 1
				});
			},
			changestatus: function(provider) {
				this.status = provider;
				console.log("this.status" + this.status)
				if (this.status == 1) {
					musicplayer.play();
					let interval = setInterval(function() {
						var time =self.duration-musicplayer.currentTime;
						if (self.duration<= musicplayer.currentTime) {
							self.status= 0;
						}
						if (self.status!=1) {
							clearInterval(interval);
						}
						var minute1=Math.floor(time/60);
						console.log("minute1"+ minute1)
						var second1=Math.floor(time-minute1*60);
						if(minute1<10){
							self.minute='0'+String(minute1);
						}
						else{
							self.minute=String(minute1);
						}
						if(second1<10){
							self.second='0'+String(second1);
						}
						else{
							self.second=String(second1);
						}
						console.log("self.minute"+self.minute)
						console.log("self.second"+self.second)
// 						self.minute='03';
// 						self.second=Math.floor(currenttime-self.minute*60);
						
					}, 1000);
				} else if (this.status == 2) {
					musicplayer.pause();
				} else if (this.status == 0) {
					musicplayer.stop();

				}
			}


		}

	}
</script>

<style>
	.container {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.title{
		position: absolute;
		margin-top: 50upx;
		margin-left: 50upx;
		width: 100upx;
		height: 100upx;
		
	}
	.daily_right {
		position: absolute;
		width: 750upx;
		height: 600upx;

	}

	@keyframes shake {
		0% {
			 opacity:1;
			-webkit-transform: scale(0.6);
		}

		100% {
			 opacity:0;
			-webkit-transform: scale(1);
		}
	}

	.daily_right view {
		position: absolute;
		width: 600upx;
		height: 600upx;
		margin-left: 75upx;
		/*move left 100px*/
		margin-top: 200upx;
		border-radius: 300upx;
		background-color: transparent;
		border-color: #FFFFFF;
		border-style: solid;
		border-width: 2upx;
	}

	.shake1 {
		animation: shake 5s 0s infinite;
		animation-timing-function: ease;
	}

	.shake2 {
		animation: shake 6s 2s infinite;
		animation-timing-function: ease;
	}

	.shake3 {
		animation: shake 8s 3s infinite;
		animation-timing-function: ease;
	}

	.lopp {
		position: absolute;
		width: 360upx;
		height: 360upx;
		margin-left: 195upx;
		/*move left 100px*/
		margin-top: 320upx;
		border-radius: 300upx;
		background-color: transparent;
		border-color: #FFFFFF;
		border-style: solid;
		border-width: 2upx;
	}
	.medium{
		position: relative;
		margin-top: 460upx;
		text-align: center;
		font-size: 30upx;
		color: #ffffff;
		width: 100%;
		height: 300upx;
		
	}
	
	.container image {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.cicle {
		position: absolute;
		margin-left: 265upx;
		margin-top: 200upx;
		width: 225upx;
		height: 75upx;
		background-color: #FFFFFF;
		border-radius: 50upx;
	}

	.cicle .triangle {
		position: absolute;
		margin-left: 35upx;
		margin-top: 20upx;
		width: 0;
		height: 0;
		border: 18upx solid transparent;
		border-left: 25upx solid rgba(100, 100, 100, 1);
	}

	.cicle .word {
		position: relative;
		margin-left: 75upx;
		line-height: 75upx;
		font-size: 30upx;
		color: #000000;
	}

	.cicle1 {
		position: absolute;
		margin-left: 300upx;
		margin-top: 200upx;
		width: 150upx;
		height: 75upx;
		background-color: transparent;
		border-color: #FFFFFF;
		border-style: solid;
		border-width: 5upx;
		border-radius: 50upx;
	}

	.cicle1 .word1 {
		position: relative;
		text-align: center;
		line-height: 75upx;
		font-size: 30upx;
		color: #FFFFFF;
	}

	.cicle2 {
		position: absolute;
		margin-left: 175upx;
		margin-top: 200upx;
		width: 150upx;
		height: 75upx;
		background-color: #FFFFFF;
		border-radius: 50upx;
	}

	.cicle2 .word2 {
		position: relative;
		text-align: center;
		line-height: 75upx;
		font-size: 30upx;
		color: #000000;
	}

	.cicle3 {
		position: absolute;
		margin-left: 425upx;
		margin-top: 200upx;
		width: 150upx;
		height: 75upx;
		background-color: transparent;
		border-color: #FFFFFF;
		border-style: solid;
		border-width: 2upx;
		border-radius: 50upx;
	}

	.cicle3 .word3 {
		position: relative;
		text-align: center;
		line-height: 75upx;
		font-size: 30upx;
		color: #FFFFFF;
	}
</style>
