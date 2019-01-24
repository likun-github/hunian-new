<template>
	<view class="container">
			<Login v-if="status==1" @changeStatus="changeStatus"></Login>
			<Register v-if="status==2" @changeStatus="changeStatus"></Register>
	</view>

</template>
		
		
		
		



<script>
	import Login from '@/components/login.vue';
	import Register from '@/components/register.vue';
	
	
	export default{
		data:function(){
			return {
				status:1
			}
		},
		
		components:{Login,Register},
		methods: {
			login: function (e) {
				console.log(this.account)
			},
			changeStatus: function (index) {
				this.status=index;
			},
			
		}
	}
</script>
<style>
	.container{
		position: absolute;
		width: 100%;
		height: 100%;
	}
	
</style>