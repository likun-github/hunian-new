<template>
	<view class="container">
		<view class="title" @tap="back()">
			<image src="../../static/back-black.png" style="width: 30%;height: 25%;padding: 50upx;opacity: 0.4;"></image>
		</view>
		<view class="top">
			<view style="position: relative;padding: 25upx;margin-left: 25upx;">注册</view>
		</view>
		<view class="medium">
			<view class="null"></view>
			<view class="account">账号</view>
			<input  v-model="account" placeholder-style="color:#000" />
			<view class="line"></view>
			<view class="password">密码</view>
			<input password v-model="password" placeholder-style="color:#ccc" />
			<view class="line"></view>
			<view class="password">确认密码</view>
			<input  password v-model="password1" placeholder-style="color:#ccc" />
			<view class="line"></view>
		</view>
		<view class="bottom" @tap="changeStatus()">
			<view style="position: absolute;margin-top: -75upx;font-size: 38upx;">登陆</view>
			<image src="../../static/right.png"></image>
		</view>
		<button class="primary" @tap="register"> 注册账号 </button>

	</view>
</template>
<script>
	export default {
		data: function() {
			return {
				account: '',
				password: '',
				password1:'',
			}
		},
		mounted: function() {
			
		},
		methods: {
			register: function (e) {
				if(this.account==''||this.password==''||this.password1==''){
					uni.showToast({
						title: '账号或密码不能为空',
						duration: 2000,
						icon:'none'
					});
					return;
				}
				if(this.password!=this.password1){
					uni.showToast({
						title: '确认密码不相等',
						duration: 2000,
						icon:'none'
					});
					return;
				}
				uni.request({
					url:'https://xiaoyibang.top/calm/register',
					data:{
						username:this.account,
						password:this.password,
					},
					success: (res) => {
						console.log(res.data.success)
						if(res.data.success){
							uni.showToast({
								title: '账号创建成功',
								duration: 2000,
								icon:'none'
							});	
						}},
							
					fail: () => {
						uni.showToast({
							title: '网络故障',
							duration: 2000,
							icon:'none'
						});	
					}
				});
				console.log(this.account)
			},
		changeStatus: function() {
			this.$emit('changeStatus', 1);
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
		margin-top: 100upx;
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
		height: 550upx;
		background-color: #FEFEFE;
	}

	.medium .account {
		position: relative;
		margin-left: 50upx;
		font-family: PingFangSC-Thin, sans-serif;
		font-size: 35upx;
	}

	.medium .password {
		margin-top: 40upx;
		position: relative;
		margin-left: 50upx;
		font-family: PingFangSC-Thin, sans-serif;
		font-size: 35upx;
	}

	.medium .null {
		position: relative;
		height: 65upx;
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
		height: 60upx;
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
