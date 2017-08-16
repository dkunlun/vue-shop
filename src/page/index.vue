<template>
	<div>
		<y-header></y-header>
		<router-view class="main"></router-view>
	</div>
</template>

<script>
	import Vue from 'vue'
	import YHeader from '/common/header'
	export default {
		name: 'app',
		data () {
			return {

			}
		},
		components: {
			YHeader
		},
		methods: {

		},
		created () {
			
		}
	}
</script>

<style lang="scss">
	
</style>