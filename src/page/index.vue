<template>
	<div>
		<y-header></y-header>
		<router-view class="main"></router-view>
	</div>
</template>

<script>
	import YHeader from '/common/header'
	export default {
		name: 'app',
		data () {
			return {

			}
		},
		components: {
			YHeader
		}
	}
</script>

<style lang="scss">
	
</style>