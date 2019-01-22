<template>
	<view class="container">
		<image src="../../static/expect.jpg" style="position: absolute;width: 100%;height: 100%;"></image>
		<view class="title">下午好</view>
		<view class="title1">向外看的人，幻想；向内看的人，自省</view>
		<view class="cicle" @tap="breathe()">
			<view class="triangle"></view>
			<view style="position: absolute;color: #aaaaaa;font-size: 24upx;margin-left:70upx;margin-top: 25upx;">开始呼吸</view>
		</view>
		<view class="line"></view>
		<scroll-view class="scroll-view_H" scroll-x style="width: 100%" scroll-with-animation>
			<view class="title_wrap">
				<image src="../../static/morning.png"  @tap="choosecategory(0)"></image>
				<image src="../../static/focus.png"  @tap="choosecategory(1)"></image>
				<image src="../../static/lunch.png"  @tap="choosecategory(2)"></image>
				<image src="../../static/night.png"  @tap="choosecategory(3)"></image>
			</view>
		</scroll-view>


	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			choosecategory:function(provider){
				this.changeindex(provider);
				uni.navigateTo({
					url: '/pages/player/player',
				});
			},
			breathe:function(){
				uni.navigateTo({
					url: '/pages/breath/breathe',
				});
			},
			
			...mapMutations(["changeindex"])
		}
	}
</script>

<style>
	.container {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.title {
		font-size: 40upx;
		color: #ffffff;
		position: relative;
		margin-top: 50upx;
		margin-left: 50upx;
	}

	.title1 {
		font-size: 24upx;
		color: #ffffff;
		position: relative;
		margin-top: 30upx;
		margin-left: 50upx;
	}

	.cicle {
		position: relative;
		margin-top: 700upx;
		margin-left: 50upx;
		width: 200upx;
		border-radius: 50upx;
		height: 80upx;
		background-color: #eeeeee;
	}

	.cicle .triangle {
		position: absolute;
		margin-left: 40upx;
		margin-top: 25upx;
		width: 0;
		height: 0;
		border: 18upx solid transparent;
		border-left: 20upx solid rgb(200, 200, 200);
	}

	.line {
		position: relative;
		width: 700upx;
		margin-top: 50upx;
		margin-left: 25upx;
		height: 2upx;
		background-color: #dddddd;
	}

	.scroll-view_H {
		position: relative;
		overflow: hidden;
		margin-top: 20upx;
	}

	.title_wrap {
		position: relative;
		width: 150%;
		height: 250upx;
		display: flex;
	}

	.title_wrap image {
		width: 100%;
		height: 100%;
		margin-left: 30upx;
		
	}
</style>
