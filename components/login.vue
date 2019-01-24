<template>
	<view class="container">
		<view class="title" @tap="back()">
			<image src="../../static/back-black.png" style="width: 30%;height: 25%;padding: 50upx;opacity: 0.4;"></image>
		</view>
		<view class="top">
			<view style="position: relative;padding: 25upx;margin-left: 25upx;">登陆</view>
		</view>
		<view class="medium">
			<view class="null"></view>
			<view class="account">账号</view>
			<input  v-model="account" placeholder-style="color:#000" />
			<view class="line"></view>
			<view class="password">密码</view>
			<input  password v-model="password" placeholder-style="color:#ccc" />
			<view class="line"></view>
		</view>
		<view class="bottom" @tap="changeStatus()">
			<view style="position: absolute;margin-top: -75upx;font-size: 38upx;">注册</view>
			<image src="../../static/right.png"></image>
		</view>
		<button class="primary" @tap="login"> 登录 </button>

	</view>
</template>
<script>
	export default {
		data: function() {
			return {
				account: '',
				password: ''
			}
		},
		mounted: function() {
			try {
				const account = uni.getStorageSync('account');
				const password = uni.getStorageSync('password');
				if (account) {
					this.account = account;
					if (password) {
						this.password = password;
					}
				}
			} catch (e) {
				// error
			}
		},
		methods: {
			login: function(e) {
				if (this.account == '' || this.password == '') {
					uni.showToast({
						title: '账号或密码不能为空',
						duration: 2000,
						icon: 'none'
					});
					return;
				}

				uni.request({
					url: 'https://xiaoyibang.top/calm/login',
					data: {
						username: this.account,
						password: this.password,
					},
					success: (res) => {
						console.log(res.data.success)
						if (res.data.success) {
							try {
								uni.setStorageSync('account', this.account);
								uni.setStorageSync('password', this.password);
								uni.setStorageSync('autoLogin', true);
								uni.redirectTo({
									url: '/pages/index/index'
								});
							} catch (e) {
								uni.redirectTo({
									url: '/pages/index/index'
								});
							}
						} else {
							uni.showToast({
								title: '密码错误',
								duration: 2000,
								icon: 'none'
							});
						}
					},
					fail: () => {
						uni.showToast({
							title: '网络故障',
							duration: 2000,
							icon: 'none'
						});
						uni.redirectTo({
							url: '/pages/index/index'
						});
					}
				});

			},
			changeStatus: function() {
				this.$emit('changeStatus', 2);
			},
			back: function() {
			
				uni.navigateBack({
					delta: 1
				});
			},
		}
	}
</script>

<style>
	.container {
		position: absolute;
		width: 100%;
		height: 100%;
		background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(185, 198, 227, 1) 50%, rgba(255, 255, 255, 0) 100%);
	}

	.title {
		position: relative;
		width: 200upx;
		height: 200upx;
	}

	.top {
		position: relative;
		margin-left: 125upx;
		margin-top: 250upx;
		width: 100px;
		height: 0;
		border-bottom: 50px solid #FEFEFE;
		border-right: 50px solid transparent;
		opacity: 0.4;
		font-size: 38upx;
	}

	.medium {
		position: relative;
		margin-left: 125upx;
		border-bottom-left-radius: 25upx;
		border-top-right-radius: 25upx;
		width: 500upx;
		height: 400upx;
		background-color: #FEFEFE;
	}

	.medium .account {
		position: relative;
		margin-left: 50upx;
		font-family: PingFangSC-Thin, sans-serif;
		font-size: 35upx;
	}

	.medium .password {
		margin-top: 20upx;
		position: relative;
		margin-left: 50upx;
		font-size: 35upx;
		font-family: PingFangSC-Thin, sans-serif;
	}

	.medium .null {
		position: relative;
		height: 50upx;
	}

	.medium .line {
		position: relative;
		width: 400upx;
		height: 2upx;
		margin-left: 50upx;
		background-color: #000000;
	}

	input {
		margin-left: 50upx;
		position: relative;
		font-size: 30upx;
		width: 400upx;
		height: 80upx;
		background: #ffffff;
		color: #000000;
	}

	.bottom {
		margin-left: 325upx;
		height: 0;
		width: 100px;
		border-top: 50px solid #FEFEFE;
		opacity: 0.4;
		border-left: 50px solid transparent;
	}

	.bottom image {
		position: absolute;
		width: 65upx;
		height: 30upx;
		margin-top: -60upx;
		margin-left: 85upx;
	}

	.primary {
		position: relative;
		width: 500upx;
		margin-top: 150upx;
		background-color: #EB6F67;
		color: #EFEFEF;
	}
</style>
