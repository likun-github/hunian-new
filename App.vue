<script>
	export default {
		onLaunch: function () {
			console.log('App Launch');
			plus.navigator.setFullscreen(true);
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
		.container {
		position: absolute;
		width: 100%;
		height: 100%;
		background: #000000;
	}
</style>
