<template>
	<view class="container">
		<image src="../../static/expect.jpg" style="position: absolute;width: 100%;height: 100%;"></image>
	    <view class="title" @tap="back()">
			<image src="/static/back.png" style="width: 50%;height: 50%;position: absolute;"></image>
		</view>
		<view class="cicle"> 
			<image src="../../static/bth.gif" style="width: 100%;height: 100%;"></image>
		</view>
		<view class="clock">{{minute}}:{{second}}</view>
	</view>
</template>

<script>
	    var self;
		export default {
			data() {
				self=this
				return {
					minute:'00',
					second:'00',
				};
			},
			onLoad:function () {
				    var time=0;
				    self.timer = setInterval(function() {
					time++;
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
					}, 1000);
			},
		onUnload: function() {
			console.log('定时器关闭');
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
			}
	
		}
</script>

<style>
	.clock{
		color: #FFFFFF;
		position: absolute;
		width: 100upx;
		height: 60upx;
		left: 325upx;
		top:200upx;
		
	}
		.title{
		position: absolute;
		margin-top: 50upx;
		margin-left: 50upx;
		width: 100upx;
		height: 100upx;
		
	}
	.container{
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.cicle{
		position: absolute;
		width: 500upx;
		height: 500upx;
		left: 120upx;
		top: 350upx;
	}
</style>
