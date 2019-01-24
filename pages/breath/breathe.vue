<template>
	<view class="container">
		<image src="../../static/bre.png"></image>
		<view class="title" @tap="back()">
			<image src="/static/back.png" style="width: 35%;height: 35%;position: absolute;"></image>
		</view>
		<view style="position: relative; text-align: center;color:#FEFEFE ;">{{minute}}:{{second}}</view>
		<view  v-if="begin"  class="lopp">
			<image src="/static/circle.png" mode="scaleToFill" ></image>
		</view>
		
		<view v-if="begin" class="textsize">{{word}}</view>

		<view v-if="begin==false"  class="btn1" @tap="restart()">
			<image src="../../static/brea.png" style="width: 100%;height: 100%;"></image>
		</view>
		<view v-if="begin" class="btn2" @tap="stop()">
			<image src="../../static/stop.png" style="width: 100%;height: 100%;"></image>
		</view>
		



	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	var self;
	const breatheaudio = uni.createInnerAudioContext();

	export default {
		data() {
			self = this
			return {
				
				begin: false,
				word: '',
				minute: '00',
				second: '00',
				timer: null,
				
			};
		},
		computed: {
			...mapState(["index"]),
		},
		onShow: function() {
			breatheaudio.src = '/static/new.mp3';
			breatheaudio.play();
			breatheaudio.pause();

			
		},
		onHide: function() {
			console.log('定时器关闭');
			breatheaudio.stop();
			if (self.timer) {
				clearInterval(self.timer);	
			}

		},
		methods: {
			back: function() {
				uni.navigateBack({
					delta: 1
				});
			},
			restart:function(){
				var oldmusicstatus = 0;
				var newmusicstatus = 0;
				breatheaudio.play();
				var i = 0;
				var myDate = new Date();
				var oldminute = myDate.getMinutes();
				var oldsecond = myDate.getSeconds();
				self.timer = setInterval(function() {
					self.begin = true;
					var newDate = new Date();
					var newminute = newDate.getMinutes();
					var newsecond = newDate.getSeconds();
					if (oldmusicstatus != newmusicstatus) {
						if (breatheaudio.paused) {
							breatheaudio.play();
						} else {
							breatheaudio.seek(0);
						}
						console.log('newmusicstatus=' + newmusicstatus);
						console.log('oldmusicstatus' + oldmusicstatus);
						newmusicstatus = oldmusicstatus;
					}
					//时间判断
					if (newminute >= oldminute) {
						i = 60 * newminute + newsecond - 60 * oldminute - oldsecond;
					} else {
						oldminute = oldminute + 60;
						i = 60 * newminute + newsecond - 60 * oldminute - oldsecond;
						console.log('i=' + i);
					}
					//分秒判断
					if(Math.floor(i / 60)<10){
						self.minute='0'+String(Math.floor(i / 60));
					}
					else{
						self.minute =String(Math.floor(i / 60));
					}
					if(Math.floor(i - Math.floor(i / 60) * 60)<10){
						self.second='0'+String(Math.floor(i - Math.floor(i / 60) * 60));
					}
					else{
						self.second =String(Math.floor(i - Math.floor(i / 60) * 60));
					}
					var record = Math.floor(i - Math.floor(i / 60) * 60) % 10;
					//呼吸判断
					if (record <= 3) {
						self.word = '吸气';
						oldmusicstatus = 1;
					}
					if (record > 3 && record < 6) {
						self.word = '屏息';
						oldmusicstatus = 2;
					}
					if (record >= 6) {
						self.word = '呼气';
						oldmusicstatus = 3;
					}

				}, 5);

			},
			stop: function() {
				breatheaudio.stop();
				self.begin = false;
				clearInterval(self.timer);
			},
	
		}

	}
</script>

<style>
	.container {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	
	.container image {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.title {
		position: relative;
		margin-top: 100upx;
		margin-left: 50upx;
		width: 150upx;
		height: 100upx;

	}
	@keyframes circlechangge {
		0% {
			-webkit-transform: scale(0.6);
		}

		30%,
		60% {
			-webkit-transform: scale(1);
		}

		100% {
			-webkit-transform: scale(0.6);
		}
	}

	.lopp {
		position: relative;
		width: 700upx;
		height: 700upx;
		margin-left: 25upx;
		animation: circlechangge 10s infinite ;
	}

	@keyframes fontchanghe {
		0% {
			-webkit-transform: scale(0.6);
		}

		30%,
		60% {
			-webkit-transform: scale(1);
		}

		100% {
			-webkit-transform: scale(0.6);
		}

	}

	.textsize {
		position: relative;
		width: 750upx;
		height: 50upx;
		text-align: center;
		margin-top: -360upx;
		font-family: PingFangSC-Thin, sans-serif;
		color: #ffffff;
		animation: fontchanghe 10s infinite ;
	}

	.btn1{
		position: absolute;
		bottom: 200upx;
		width:240upx;
		height: 130upx;
		margin-left: 255upx;
	}
	.btn2{
		position: absolute;
		bottom: 200upx;
		width:178upx;
		height: 130upx;
		margin-left: 286upx;
	}
	

	

</style>
