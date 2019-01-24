<template>
	<view class="container">
		<image src="../../static/expect.jpg" style="position: absolute;width: 100%;height: 100%;"></image>
		<view class="title">
			<text>{{date}}</text>
			<image src="../../static/more.png" @tap="more()"></image>
		</view>
		<view class="title1">{{month}}月 {{year}} {{day}}</view>
		<view class="cicle" @tap="breathe()">
			<view class="triangle"></view>
			<view style="position: absolute;color: #aaaaaa;font-size: 32upx;margin-left:95upx;margin-top: 28upx;">开始呼吸</view>
		</view>
		<view class="line"></view>
		<scroll-view class="scroll-view_H" scroll-x style="width: 100%" scroll-with-animation>
			<view class="title_wrap">
				<image src="../../static/morning.png" @tap="choosecategory(0)"></image>
				<image src="../../static/focus.png" @tap="choosecategory(1)"></image>
				<image src="../../static/lunch.png" @tap="choosecategory(2)"></image>
				<image src="../../static/night.png" @tap="choosecategory(3)"></image>
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
				title: 'Hello',
				year: '',
				month: '',
				date: '',
				day: '',
			}
		},
		onShow: function() {
			// 获取当前日期
			var date = new Date();

			// 获取当前月份
			this.month = date.getMonth() + 1;

			// 获取当前是几号
			this.date = date.getDate();
			var day = date.getDay();
			this.year = date.getFullYear();
			switch (day) {
				case 0:
					this.day = "星期日";
					break;
				case 1:
					this.day = "星期一";
					break;
				case 2:
					this.day = "星期二";
					break;
				case 3:
					this.day = "星期三";
					break;
				case 4:
					this.day = "星期四";
					break;
				case 5:
					this.day = "星期五";
					break;
				case 6:
					this.day = "星期六";
					break;
				default:
					this.day = "系统错误！"
			}
			// 对月份进行处理，1-9月在前面添加一个“0”
			if (this.month >= 1 &&this.month <= 9) {
				this.month = "0" + this.month ;
			}

			// 对月份进行处理，1-9号在前面添加一个“0”
			if (this.date >= 0 && this.date <= 9) {
				this.date = "0" + this.date;
			}
		},
		methods: {
			choosecategory: function(provider) {
				this.changeindex(provider);
				uni.navigateTo({
					url: '/pages/player/player',
				});
			},
			breathe: function() {
				uni.navigateTo({
					url: '/pages/breath/breathe',
				});
			},
			more: function() {
				uni.navigateTo({
					url: '/pages/more/more',
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
		position: relative;
		display: flex;
		margin-left: 30upx;
		margin-top: 150upx;
	}

	.title text {
		font-size: 80upx;
		font-family: ;
		color: #ffffff;
		margin-left: 50upx;
		font-family: PingFangSC-Thin, sans-serif;
	}

	.title image {
		margin-left: 450upx;
		width: 60upx;
		height: 40upx;
		margin-top: -80upx;
	}

	.title1 {

		font-size: 26upx;
		color: #ffffff;
		position: relative;
		margin-top: 10upx;
		margin-left: 80upx;
		font-family: PingFangSC-Thin, sans-serif;
	}

	.cicle {
		position: relative;
		margin-top: 570upx;
		margin-left: 50upx;
		width: 280upx;
		border-radius: 50upx;
		height: 100upx;
		background-color: #FEFEFE;
	}

	.cicle .triangle {
		position: absolute;
		margin-left: 40upx;
		margin-top: 30upx;
		width: 0;
		height: 0;
		border: 20upx solid transparent;
		border-left: 30upx solid rgb(200, 200, 200);
		border-radius: 8upx;

	}

	.line {
		position: relative;
		width: 700upx;
		margin-top: 40upx;
		margin-left: 25upx;
		margin-bottom: 40upx;
		height: 2upx;
		background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(2, 4,2,0.7) 50%, rgba(0, 0, 0, 0) 100%);
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
