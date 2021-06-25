<template>
	<view class="home">
		<view class="swiper-wrap">
			<u-swiper height="800" :list="bannerList" :border-radius="0"></u-swiper>
			<!-- 搜索 -->
			<view class="search-bar">
				<view class="left">
					<text class="city">广州</text>
					<u-icon name="arrow-down"></u-icon>
				</view>
				<view class="line"></view>
				<view class="middle">
					景点/地标/关键词
				</view>
				<view class="right">
					<u-icon size="32" name="search"></u-icon>
					<text class="search-text">
						搜民宿
					</text>
				</view>
			</view>
			<!-- nav -->
			<view class="navbar">
				<view class="item">
					<u-icon size="50" name="home-fill"></u-icon>
					<text>美宿套餐</text>
				</view>
				<view class="item">
					<u-icon size="50" name="red-packet-fill"></u-icon>
					<text>首单慧选</text>
				</view>
				<view class="item">
					<u-icon size="50" name="integral-fill"></u-icon>
					<text>优选好房</text>
				</view>
				<view class="item">
					<u-icon size="50" name="bag-fill"></u-icon>
					<text>天天特惠</text>
				</view>
			</view>
		</view>
		<!-- 热门入住地 -->
		<view class="hot-check-in-city">
			<view class="title">
				热门入住地
			</view>
			<scroll-view class="city-scroll-view" scroll-x="true" scroll-left="120">
				<view class="list">
					<view v-for="(item, index) in 10" :key="item" @click="handleTabCity(index)" :class="cityTagActive == index ? 'item active': 'item'">
						广州长隆
					</view>
				</view>
			</scroll-view>
			<!-- 房源列表 -->
			<house-list></house-list>
		</view>
	</view>
</template>

<script>
	import HouseList from '../../components/houseList.vue'
	import bannerImg from '../../static/images/banner1.jpg'
	export default {
		components: {
			HouseList
		},
		data() {
			return {
				cityTagActive: 0,
				bannerList: [{
					image: bannerImg
				}],
			}
		},
		onLoad() {},
		methods: {
			// 点击切换城市
			handleTabCity(index){
				this.cityTagActive = index;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.home {
		.swiper-wrap {
			position: relative;

			// 搜索框
			.search-bar {
				background-color: #f7fcfd;
				left: 20rpx;
				right: 20rpx;
				position: absolute;
				bottom: 200rpx;
				display: flex;
				border-radius: 100rpx;
				overflow: hidden;
				box-sizing: border-box;

				.left {
					padding: 30rpx 40rpx;
					background-color: #f7f8f3;
					color: #2e2e31;
					font-weight: bold;

					.city {
						margin-right: 15rpx;
					}
				}

				.line {
					margin: 20rpx 0;
					width: 3rpx;
					background-color: #dee3e4;
				}

				.middle {
					padding: 30rpx;
					color: #64696a;
					flex: 1;
				}

				.right {
					background-color: #FFFFFF;
					margin: 10rpx 15rpx;
					display: flex;
					border-radius: 100rpx;
					padding: 10px;
					align-items: center;
					justify-content: center;
					color: #e56587;
					box-shadow: 0 4px 30px 0 rgba(4, 59, 85, 0.2);
					font-size: 28rpx;
					font-weight: bold;

					.search-text {
						margin-left: 10rpx;
					}

				}
			}

			.navbar {
				position: absolute;
				bottom: 50rpx;
				left: 10rpx;
				right: 10rpx;
				display: flex;
				align-items: center;
				color: #FFFFFF;

				.item {
					width: 25%;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					text{
						margin-top: 5rpx;
						font-size: 24rpx;
					}
				}
			}
		}

		.hot-check-in-city {
			padding: 50rpx 20rpx 0;
			
			.title {
				font-size: 36rpx;
				font-weight: bold;
			}

			.city-scroll-view {
				margin-top: 20rpx;
				margin-bottom: 15rpx;
				white-space: nowrap;

				.list {
					display: flex;
					flex-wrap: nowrap;

					.item {
						padding: 10rpx 20rpx;
						border-radius: 15rpx;
						margin-right: 20rpx;
						font-weight: 600;
						border: 2rpx solid #e0e0e0;
					}
					.active{
						border: 1rpx solid #6f6f6f;
					}
				}

			}
		}
	}
</style>
