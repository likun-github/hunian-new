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
	import homeList from '../../common/home.js';
	var self;
	export default {
		data() {
			allList1: [];
			allList2: [];
			allList3: [];
			allList4: [];
			self=this
			return {
				title: 'Hello',
				year: '',
				month: '',
				date: '',
				day: '',
			}
		},
		onShow: function() {
			
// 			allList1 = uni.getStorageSync('home_key1');
// 			if (allList) {
// 				console.log('是');
// 				self.getdailymusic(self.dailyList);
// 			} else {
// 				console.log('否');
// 				self.getdailymusic(homeList);
// 				for (var i=0;i<4;i++) {
// 					console.log('i='+i);
// 					self.allhomemusic(i);
// 				}
// 			}
			self.allList1= uni.getStorageSync('home_key1');
			if(self.allList1){
				console.log("是");
			}
			else{
				self.allList1=homeList[0];
				
			}
			self.allList2= uni.getStorageSync('home_key2');
			self.allList3= uni.getStorageSync('home_key3');
			self.allList4= uni.getStorageSync('home_key4');
			self.allList1=homeList[0];
			self.allList2=homeList[1];
			self.allList3=homeList[2];
			self.allList4=homeList[3];
			
			console.log("self.allList1"+self.allList1.url);
			
 			
			
			
			
			
			
			var date = new Date();
			this.month = date.getMonth() + 1;
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
			allhomemusic:function(i){
							uni.downloadFile({
								url: self.List[i],
								success: (res) => {
									if (res.statusCode === 200) {
										console.log('下载完成');
										var newFile = res.tempFilePath;
										uni.saveFile({
											tempFilePath: newFile,
											success: function(res) {
												homeList[i].url = res.savedFilePath;
												homenumber++;
												self.getdailymusic(homeList);
												if (homenumber == 4) {
													
													uni.setStorage({
														key: 'home_key',
														data: homeList,
														success: function() {
															console.log('success');
														}
													});
												}
												console.log('节点三');
											},
											fail: function() {
												console.log('保存失败');
											},
											complete: function() {
												console.log('保存完成');
							
											}
										});
							
							
									}
								},
								fail: function() {
									console.log('失败i'+i);
								}
							});
						
			},
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

			...mapMutations(["changeindex","choosemusic"])
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
