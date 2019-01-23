<template>
	<view class="container">
		<view class="back">
			<image src="../../static/back-black.png" style="width: 50%;height: 50%;"></image>
		</view>
		<view class="top">
			<view class="day1">
				<view style="position: absolute;font-size: 20upx;">月</view>
				<view style="position: relative;font-size: 88upx;">1</view>
			</view>
			<view class="day2" style="margin-top: 20upx;">+15天</view>
			<view class="day3" style="">255天</view>
		</view>
		<view class="medium">
			<view class="triangle">
				<view class="cicle"></view>
				<view>25天</view>
				<view>持续天数</view>
			</view>
			<view class="triangle">
				<view class="cicle"></view>
				<view>25天</view>
				<view>总课程数</view>
			</view>
			<view class="triangle">
				<view class="cicle"></view>
				<view>25天</view>
				<view>冥想时长</view>
			</view>
			
		</view>
		

	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	var self;
	export default {
		data() {
			self=this
			return {
				
			};
		},
		computed: {
			...mapState(["index"]),
		},
		onShow: function() {
			
		},
		methods: {
			}

	}
</script>

<style>
	.container {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.back{
		position: relative;
		margin-top: 20upx;
		margin-left: 20upx;
		width: 150upx;
		height: 100upx;
	}
	.top{
		position: relative;
		width: 750upx;
	}
	.top .day1{
		position: relative;
		text-align: center;
		color: #000000;
	}
	.top .day2{
		position: relative;
		text-align: center;
		font-size: 30upx;
		color: #000000;
	}
	.top .day3{
		position: relative;
		text-align: center;
		font-size: 30upx;
		color: #000000;
	}
	.medium{
		margin-top: 300upx;
		position: relative;
		margin-left: 100upx;
		width: 80%;
		display: flex;
	}
	.medium .triangle{
		width: 200upx;
		position: relative;
		text-align: center;
		font-size: 24upx;
		display: block;
		margin-right: 50upx;
	}
	.triangle .cicle{
		width: 20upx;
		height: 20upx;
		border-radius:15upx;
		background-color: transparent;
		border-color: #000000;
		border-style: solid;
		border-width: 2upx;
	}
</style>
