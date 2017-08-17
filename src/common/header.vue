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
								<!-- <div class="nav-user-wrapper pa">
									<div class="nav-user-list">
										<ul>
											<li class="nav-user-avatar">
												<div>
													<span class="avatar" style="background-image: url('http://ouibvkb9c.bkt.clouddn.com/avatar/1502855989768.png');"></span>
												</div>
												<p class="name">陈二狗</p>
											</li>
											<li>
												<router-link to="/user/orderList">我的订单</router-link>
											</li>
											<li>
												<router-link to="/user/information">账号资料</router-link>
											</li>
											<li>
												<router-link to="/user/addressList">收货地址</router-link>
											</li>
											<li>
												<router-link to="/user/support">售后服务</router-link>
											</li>
											<li>
												<router-link to="/user/coupon">我的优惠</router-link>
											</li>

											<li>
												<a href="javascript:;" @click="_loginOut">退出</a>
											</li>
										</ul>
									</div>
								</div> -->
							</div>
							<div class="shop pr">
								<router-link to="cart"></router-link>
								<span class="cart-num"><i class="no">1</i></span>
								<div class="nav-user-wrapper pa active">
									<div class="nav-user-list">
										<!-- <div class="full"></div> -->
										<div class="cart-con" style="height: 313px;text-align: center">
											<p>你的购物车竟然是空的!</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div class="nav-sub">
				<div class="nav-sub-bg"></div>
				<div class="nav-sub-wrapper">
					<div class="w">
						<ul class="nav-list">
							<li>
							  <router-link to="/">首页</router-link>
							</li>
							<li>
							  <router-link to="/goods">全部商品</router-link>
							</li>
						</ul>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data () {
			return {
			}
		},
		computed: {
		},
		methods: {
			_loginOut () {

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
			&:hover {
			  a:before {
			    background-position: -5px 0;
			  }
			  .nav-user-wrapper {
			    top: 18px;
			    visibility: visible;
			    opacity: 1;
			    -webkit-transition: opacity .15s ease-out;
			    transition: opacity .15s ease-out;
			  }
			}
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
			li + li {
				text-align: center;
				border-top: 1px solid #f5f5f5;
				height: 44px;
				line-height: 44px;
				color: #616161;
				font-size: 12px;
				&:hover {
					background: #fafafa;
				}
				a {
					display: block;
					color: #616161;
				}
			}
			.nav-user-avatar {
				> div {
					position: relative;
					@include wh(46px);
					margin: 0 auto 8px;
					text-align: center;
					&:before {
						content: ' ';
						position: absolute;
						left: 0;
						right: 0;
						top: 0;
						bottom: 0;
						border-radius: 50%;
						box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .06);
					}
					.avatar {
						@include wh(100%);
						display: block;
						background-repeat: no-repeat;
						background-size: contain;
						border-radius: 50%;
					}
				}
				.name {
					line-height: 1.5;
					text-align: center;
					margin-bottom: 16px;
					font-size: 12px;
					color: #757575;
				}
			}
			.nav-user-wrapper {
				width: 168px;
				transform: translate(-50%);
				left: 50%;
			}
			.nav-user-list {
				width: 168px;
				&:before {
					left: 50%;
				}
			}
		}
		.shop {
			position: relative;
			float: left;
			width: 61px;
			margin-left: 21px;
			z-index: 99;
			&:hover {
				a:before {
					content: " ";
					background-position: 0 -22px;
				}
			}
			> a {
				position: absolute;
				left: 0;
				bottom: 0;
				right: 0;
				top: 0;
				display: block;
				z-index: 1;
				&:before {
					display: block;
					@include wh(30px, 100%);
					content: " ";
					background: url(/static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png) 0 -22px;
					background-size: 240px 107px;
					background-position: -150px -22px;
				}
			}
		}
		.cart-num {
			position: relative;
			display: block;
			margin-left: 31px;
			margin-top: -1px;
			min-width: 30px;
			text-indent: 0;
			line-height: 20px;
			> i {
				background: #eb746b;
				background-image: -webkit-linear-gradient(#eb746b, #e25147);
				background-image: linear-gradient(#eb746b, #e25147);
				box-shadow: inset 0 0 1px hsla(0, 0%, 100%, .15), 0 1px 2px hsla(0, 0%, 100%, .15);
				text-align: center;
				font-style: normal;
				display: inline-block;
				@include wh(20px);
				line-height: 20px;
				border-radius: 10px;
				color: #fff;
				font-size: 12px;
				&.no {
					background: #969696;
					background-image: -webkit-linear-gradient(#A4A4A4, #909090);
					background-image: linear-gradient(#A4A4A4, #909090);
					box-shadow: inset 0 0 1px #838383, 0 1px 2px #838383;
				}
			}
		}
		.nav-user-wrapper {
			right: 0;
			width: 360px;
			.nav-user-list {
				&:before {
					right: 34px;
				}
			}
		}
	}
	//用户信息弹出
	.nav-user-wrapper {
		position: absolute;
		padding-top: 18px;
		// visibility: hidden;
		// top: -3000px;
		// opacity: 0;
		z-index: 30;
		.nav-user-list {
			position: relative;
			padding-top: 20px;
			background: #fff;
			border: 1px solid #d6d6d6;
			border-color: rgba(0, 0, 0, .08);
			border-radius: 8px;
			box-shadow: 0 20px 40px rgba(0, 0, 0, .15);
			z-index: 10;
			&:before {
				position: absolute;
				content: ' ';
				background: url(/static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png) no-repeat -49px -43px;
				background-size: 240px 107px;
				@include wh(20px, 8px);
				top: -8px;
				margin-left: -10px;
			}
		}
	}

	.nav-sub {
		position: relative;
		height: 90px;
		background: #f7f7f7;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .04);
		.nav-sub-wrapper {
			padding: 31px 0;
			height: 90px;
			position: relative;
		}
		.w {
			display: flex;
			justify-content: space-between;
		}
		.nav-list {
			height: 28px;
			line-height: 28px;
			display: flex;
			align-items: center;
			li:first-child {
				padding-left: 0;
				a {
					padding-left: 10px;
				}
			}
			li {
				float: left;
				position: relative;
				padding-left: 2px;
				a {
					display: block;
					padding: 0 20px;
					color: #666;
				}
			}
			li:before {
				content: ' ';
				position: absolute;
				left: 0;
				top: 13px;
				width: 2px;
				height: 2px;
				background: #bdbdbd;
			}
		}
	}

	.cart-con {
		text-align: center;
		position: relative;
		p {
			padding-top: 185px;
			color: #333333;
			font-size: 16px;
		}
		&:before {
			content: ' ';
			position: absolute;
			transform: translate(-50%, -70%);
			width: 76px;
			height: 62px;
			left: 50%;
			top: 50%;
			background: url("/static/images/cart-empty-new.png") no-repeat;
			background-size: cover;
		}
	}
</style>