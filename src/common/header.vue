<template>
	<div class="header-box">
		<div>
			<header class="w">
				<div class="w-box">
					<div class="nav-logo">
						<h1>
							<router-link to="/" title="锤子科技官网">Smartisan</router-link>
						</h1>
					</div>
					<div class="right-box">
						<div class="nav-list">
							<!-- <router-link to="goods">全部商品</router-link>
							<router-link to="goods">全部商品</router-link> -->
							<router-link to="goods">全部商品</router-link>
						</div>
						<div class="nav-aside">
							<div class="user pr">
								<router-link to="user">个人中心</router-link>
							</div>
							<div class="shop pr">
								<router-link></router-link>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data () {
			return {

			}
		}
	}
</script>

<style lang="scss">
	@import '../assets/style/mixin.scss';
	.header-box {
		background: #1a1a1a;
		width: 100%;
		background-image: linear-gradient(#000, #121212);
	}
	header {
		height: 100px;
		z-index: 30;
		position: relative;
	}
	.w-box {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: space-between;
		h1 {
			height: 100%;
			display: flex;
			align-items: center;
			> a {
				background: url(/static/images/global-logo-red@2x.png) no-repeat 50%;
				background-size: cover;
				background-position: 0 0;
				text-indent: -9999px;
				@include wh(50px, 40px);
			}
		}
		.nav-list {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 22px;
			a {
				color: #c8c8c8;
				display: block;
				padding: 0 25px;
				&:hover {
					color: #fff;
				}
			}
		}
		.right-box {
			display: flex;
		}
		.nav-aside {
			display: flex;
		}
		.user {
			margin-left: 41px;
			width: 36px;
			> a {
				position: relative;
				@include wh(36px, 20px);
				display: block;
				text-indent: -9999px;
				&:before {
					content: ' ';
					position: absolute;
					left: 8px;
					top: 0;
					background: url(/static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png) -155px 0;
					background-size: 240px 107px;
					@include wh(20px);
					transition: none;
				}
			}
		}
	}
</style>