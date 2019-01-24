<template>
	<view class="container1">
		<view class="back" @tap="back">
			<image src="/static/back-black.png" style="width: 50%;height: 50%;"></image>
		</view>
		<view style="position: absolute;bottom: halfheight;">
		<view class="top">
			<view class="day1">
				<view style="position: absolute;left: 420upx;top: 43upx;  font-size: 20upx;">月</view>
				<view style="position: relative;font-size: 60upx;">{{month}}</view>
			</view>
			<view class="day2" style="margin-top: 50upx;font-size: 80upx;">+{{aday}}</view>
			<view style="position: absolute;left: 450upx;top: 155upx;  font-size: 55upx;">天</view>
			
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
		
         <text style="position: absolute;bottom:420upx;left: 50upx;">正念指数</text>
		<canvas canvas-id="myCanvas" style="border: 0upx solid;position: absolute; width: 750upx;height: 250upx; bottom:150upx;"/>
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
				x1:20.5,
				x2:80.5,
				x3:57.5,
				x4:80.5,
				x5:90.5,
				
			};
		},
		computed: {
			halfheight(){
				return uni.upx2px(750/2)+'px';
			},
			...mapState(["usetime","x11","x22","x33","x44"]),
		},
		onReady:function(e){
            var wid=uni.getSystemInfoSync().windowWidth;

			
	        console.log(this.usetime);
			 self.x5=this.usetime;
			 
			
			
			
			
			var m=Math.floor((wid/375)*63);
			
			var Date1=new Date();

			this.mydate=Date1.getDate();
            

			//d取值40至100越大越差
			 d1=Math.floor(70+(50-self.x1)*3/5);
			 d2=Math.floor(70+(50-self.x2)*3/5);
			 d3=Math.floor(70+(50-self.x3)*3/5);
			 d4=Math.floor(70+(50-self.x4)*3/5);
			 d5=Math.floor(70+(50-self.x5)*3/5);

			//找到最大值
			var dm;
			dm=Math.min(d1,d2,d3,d4,d5);


			var ctx=uni.createCanvasContext('myCanvas')
			
			ctx.beginPath();
			ctx.moveTo(0,dm);
			
			ctx.setLineDash([2, 4], 5);
			ctx.lineTo(7*m, dm);
			ctx.stroke();
			
			ctx.setLineDash([1, 0], 5);
			ctx.beginPath()
			ctx.setLineWidth(3);
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
		   
		  
		  ctx.fillText('(avg)',0,80)

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
		margin-top: 0upx;
	}
	.top .day1{
		position: relative;
		text-align: center;
		color: #000000;
		


	}
	.dat{
		
		width: 640upx;
		height: 150upx;
		position: absolute;
        bottom:30upx;
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
	    bottom:-10upx;
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
		position: relative;
		margin-left: 100upx;
		width: 80%;
		display: flex;
        margin-top: 60upx;
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
