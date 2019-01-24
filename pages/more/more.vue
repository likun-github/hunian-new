<template>
	<view class="container1">
		<view class="back" @tap="back">
			<image src="/static/back-black.png" style="width: 50%;height: 50%;"></image>
		</view>
		<view class="top">
			<view class="day1">
				<view style="position: absolute;left: 420upx;top: 43upx;  font-size: 20upx;">月</view>
				<view style="position: relative;font-size: 60upx;">{{month}}</view>
			</view>
			<view class="day2" style="margin-top: 50upx;font-size: 80upx;">+{{aday}}</view>
			<view style="position: absolute;left: 450upx;top: 155upx;  font-size: 55upx;">天</view>
			<view class="day3" style="">{{yday}}天</view>
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
         <text style="position: absolute;top:800upx;left: 50upx;">正念指数</text>
		<canvas canvas-id="myCanvas" style="border: 0upx solid;width: 750upx;height: 260upx; top:250upx;"/>
	<view class='dat'>
               <view class="dat_item" >{{x1}}</view>
               <view class="dat_item" >{{x2}}</view>
               <view class="dat_item" >{{x3}}</view>
               <view class="dat_item" >{{x4}}</view>
			   <view class="dat_item" >{{x5}}</view>
	</view>
		<view class='dat1'>
	           <view class="dat_item1">{{month}}月{{mydate-4}}日</view>
	           <view class="dat_item1">{{month}}月{{mydate-3}}日</view>
	           <view class="dat_item1">{{month}}月{{mydate-2}}日</view>
	           <view class="dat_item1">{{month}}月{{mydate-1}}日</view>
			   <view class="dat_item1">{{month}}月{{mydate}}日</view>
	</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	var self;
     var d1=100;
	 var d2=80;
	 var d3=70;
	 var d4=85;
	 var d5=40;
	 
	export default {
		data() {
			self=this
			return {
				month:0,
				aday:15,
				yday:255,
				mydate:0,
				x1:76.1,
				x2:80.1,
				x3:85.1,
				x4:80.5,
				x5:100,
				
			};
		},
		computed: {
			...mapState([""]),
		},
		onReady:function(e){
            var wid=uni.getSystemInfoSync().windowWidth;
			console.log('wid='+wid);
			
			var m=Math.floor((wid/375)*63);
			var Date1=new Date();

			this.mydate=Date1.getDate();
			//d取值40至100越大越差
			 d1=90;
			 d2=60;
			 d3=60;
			 d4=85;
			 d5=42;
			
			
			
			//正念指数
            self.x1=(100-d1)+40;
			self.x1=self.x1.toFixed(1);
			self.x2=(100-d2)+40;
			self.x2=self.x2.toFixed(1);
			self.x3=(100-d3)+40;
			self.x3=self.x3.toFixed(1);
			self.x4=(100-d4)+40;
			self.x4=self.x4.toFixed(1);
			self.x5=(100-d5)+40;
			self.x5=self.x5.toFixed(1);

			var ctx=uni.createCanvasContext('myCanvas')
			
            ctx.beginPath();
            ctx.moveTo(0,40);
			ctx.setLineDash([2, 4], 5);
            ctx.lineTo(7*m, 40);
            ctx.stroke();
			
           ctx.beginPath()
           ctx.arc(m, d1, 2, 0, 2 * Math.PI)
           ctx.setFillStyle('black')
           ctx.fill()
		   
		   ctx.beginPath()
		   ctx.arc(2*m, d2, 2, 0, 2 * Math.PI)
		   ctx.setFillStyle('black')
		   ctx.fill()
		   
		   ctx.beginPath()
		   ctx.arc(3*m, d3, 2, 0, 2 * Math.PI)
		   ctx.setFillStyle('black')
		   ctx.fill()
		   
		   ctx.beginPath()
		   ctx.arc(4*m, d4, 2, 0, 2 * Math.PI)
		   ctx.setFillStyle('black')
		   ctx.fill()
		   
		   ctx.beginPath()
		   ctx.arc(5*m, d5, 2, 0, 2 * Math.PI)
		   ctx.setFillStyle('black')
		   ctx.fill()
		   
		   ctx.setLineDash([1, 0], 5);
		   ctx.beginPath()
		   ctx.moveTo(0,80)
		   ctx.lineTo(m, d1)
		   ctx.setStrokeStyle('#FFFFFF')
           ctx.stroke()
		   
		   ctx.beginPath()
		   ctx.moveTo(m,d1)
		   ctx.lineTo(2*m, d2)
		   
		   ctx.stroke()
		   
		   ctx.beginPath()
		   ctx.moveTo(2*m,d2)
		   ctx.lineTo(3*m, d3)
		   
		   ctx.stroke()
		   
		   ctx.beginPath()
		   ctx.moveTo(3*m,d3)
		   ctx.lineTo(4*m, d4)
		   
		   ctx.stroke()
		   ctx.beginPath()
		   ctx.moveTo(4*m,d4)
		   ctx.lineTo(5*m, d5)
		  
		   ctx.stroke()

		   ctx.draw()
			
			
		},
		onShow: function() {
			var date1= new Date();
			this.month=date1.getMonth()+1;
		},
		methods: {
			back:function(){
				uni.navigateBack({
					delta: 1
				});
				
			}
		
		},
	}
</script>

<style>
	.container1 {
		background: -webkit-linear-gradient(top,#FEFEFE 40%,#B9C6E3);
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.back{
		position: relative;
		margin-top: 40upx;
		margin-left: 30upx;
		width: 100upx;
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
		margin-top: 20upx;


	}
	.dat{
		
		width: 640upx;
		height: 150upx;
		position: absolute;
        bottom:60upx;
		font-size: 30upx;
        
		left:72upx;
        color: #000000;
		display: flex;
		
	}
	.dat_item{
		flex: 1;

		margin: 0upx 20upx;
		
	}
	.dat1{
		
		width: 640upx;
		height: 150upx;
		position: absolute;
	    bottom:20upx;
		font-size: 20upx;
		left:65upx;
	color: #9B9B9B;
		display: flex;
		
	}
		.dat_item1{
		flex: 1;
		margin: 0upx 20upx;
		
	}
	.top .day2{
		position: relative;
		text-align: center;
		font-size: 30upx;
		margin-left: -60upx;
		color: #000000;
	}
	.top .day3{
		position: relative;
		text-align: center;
		font-size: 30upx;
		color: #000000;
	}
	.medium{
		margin-top: 100upx;
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
