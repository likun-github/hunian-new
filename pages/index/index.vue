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
		computed: {
			...mapState(["firsttime"]),
			
		},
		onShow: function() {
			if(this.firsttime){
			console.log("show");
			self.allList1= uni.getStorageSync('home_key1');
			if(self.allList1){
				console.log("是");
			}
			else{
				console.log("否");
				self.allList1=homeList[0];
				self.downloadmusic1();
			}
			
			self.allList2= uni.getStorageSync('home_key2');
			if(self.allList2){
				console.log("是");
			}
			else{
				console.log("否");
				self.allList2=homeList[1];
				self.downloadmusic2();
			}
			
			self.allList3= uni.getStorageSync('home_key3');
			if(self.allList3){
				console.log("是");
			}
			else{
				console.log("否");
				self.allList3=homeList[2];
				self.downloadmusic3();
			}
			
			self.allList4= uni.getStorageSync('home_key4');
			if(self.allList4){
				console.log("是");
			}
			else{
				console.log("否");
				self.allList4=homeList[3];
				self.downloadmusic4();
			}
			self.first();
			}
 			
			
			
			
			
			
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
			downloadmusic1:function(){
				console.log("正在下载");
							uni.downloadFile({
								url: self.allList1.url,
								success: (res) => {
									if (res.statusCode === 200) {
										console.log('下载成功');
										var newFile = res.tempFilePath;
										uni.saveFile({
											tempFilePath: newFile,
											success: function(res) {
												self.allList1.url = res.savedFilePath;	
													uni.setStorage({
														key: 'home_key1',
														data: self.allList1,
														success: function() {
															console.log('success');
														}
													});
												
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
									console.log("下载失败");
								},complete:function(){
									console.log("下载完成");
								}
							});
						
			},
			downloadmusic2:function(){
							uni.downloadFile({
								url: self.allList2.url,
								success: (res) => {
									if (res.statusCode === 200) {
										console.log('下载完成');
										var newFile = res.tempFilePath;
										uni.saveFile({
											tempFilePath: newFile,
											success: function(res) {
												self.allList2.url = res.savedFilePath;	
													uni.setStorage({
														key: 'home_key2',
														data: self.allList2,
														success: function() {
															console.log('success');
														}
													});
												
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
									
								}
							});
						
			},
			downloadmusic3:function(){
							uni.downloadFile({
								url: self.allList3.url,
								success: (res) => {
									if (res.statusCode === 200) {
										console.log('下载完成');
										var newFile = res.tempFilePath;
										uni.saveFile({
											tempFilePath: newFile,
											success: function(res) {
												self.allList3.url = res.savedFilePath;	
													uni.setStorage({
														key: 'home_key3',
														data: self.allList3,
														success: function() {
															console.log('success');
														}
													});
												
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
									
								}
							});
						
			},
			downloadmusic4:function(i){
							uni.downloadFile({
								url: self.allList4.url,
								success: (res) => {
									if (res.statusCode === 200) {
										console.log('下载完成');
										var newFile = res.tempFilePath;
										uni.saveFile({
											tempFilePath: newFile,
											success: function(res) {
												self.allList4.url = res.savedFilePath;	
													uni.setStorage({
														key: 'home_key4',
														data: self.allList4,
														success: function() {
															console.log('success');
														}
													});
												
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
									
								}
							});
						
			},
			choosecategory: function(provider) {
				this.changeindex(provider);
				
				switch (provider) {
					case 0:
						self.choosemusic(self.allList1);
						break;
					case 1:
						self.choosemusic(self.allList2)
						break;
					case 2:
						self.choosemusic(self.allList3)
						break;
					case 3:
						self.choosemusic(self.allList4)
						break;
					default:
						break;
				}
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

			...mapMutations(["changeindex","choosemusic","first"])
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
