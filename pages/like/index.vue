<template>
	<view class="like">
		<u-tabs :list="tabList" active-color="#222222" :bar-width="60" :bar-style="barStyle" :is-scroll="false"
			:current="current" @change="handleTabChange"></u-tabs>
		<!--没有收藏提示 -->
		<!-- 入住时间 -->
		<view class="check_in_time" @click="handleClickTime">
			<view class="left">
				<text class="start_time">6月25日</text>
				<text class="in">入住</text>
				<text class="line">-</text>
				<text class="end_time">6月27日</text>
				<text class="leave">离开</text>
			</view>
			<view class="right">
				<text>共2晚</text>
				<u-icon size="24" name="arrow-down"></u-icon>
			</view>
		</view>
		<!-- 城市tag -->
		<view class="city">
			<view class="item active">
				全部
			</view>
			<view class="item">
				上海
			</view>
			<view class="item">
				广州
			</view>
		</view>
		<!-- 收藏房子列表 -->
		<view class="like-house-list">
			<like-house-item></like-house-item>
		</view>

		<!-- 推荐房子 -->
		<RecommendHouseList></RecommendHouseList>
		<!-- 选房时间组件 -->
		<u-calendar v-model="showCalendar" range-color="#fff" range-bg-color="rgba(255,95,123,0.3)" :mode="calendarMode" active-bg-color="rgb(255,95,123)">

			<view slot="tooltip">
				<view class="calendar-title">
					选择入住离开日期
				</view>
			</view>
		</u-calendar>
	</view>
</template>

<script>
	import LikeHouseItem from '../../components/likeHouseItem.vue'
	import RecommendHouseList from '../../components/recommendHouseList.vue'
	export default {
		components: {
			LikeHouseItem,
			RecommendHouseList
		},
		data() {
			return {
				showCalendar: false,
				calendarMode: 'range',
				current: 0,
				barStyle: {
					backgroundColor: 'red',
				},
				tabList: [{
						name: '收藏房源'
					},
					{
						name: '收藏笔记'
					}
				]
			}
		},
		methods: {
			handleTabChange(value) {
				this.current = value;
			},
			// 选时间
			handleClickTime() {
				this.showCalendar = true;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.like {

		// 入住时间
		.check_in_time {
			border-radius: 15rpx;
			padding: 20rpx;
			margin: 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-shadow: 0 4px 30px 0 rgba(4, 59, 85, 0.1);

			.left {

				.start_time,
				.end_time {
					font-weight: 600;
				}

				.in,
				.leave {
					margin: 0 10rpx;
					color: #999;
					font-size: 24rpx;
				}

				.line {
					font-weight: 600;
					margin-right: 10rpx;
				}
			}

			.right {
				font-size: 24rpx;
				color: #999;
			}
		}

		// 收藏城市列表
		.city {
			padding: 0 10rpx;
			display: flex;

			.item {
				position: relative;
				padding: 10rpx 20rpx;
				margin-left: 20rpx;
				background-color: #FFFFFF;
				box-shadow: 0 4px 30px 0 rgba(4, 59, 85, 0.1);
			}

			.active {
				background-color: #000;
				color: #FFFFFF;

				&::after {
					content: "";
					position: absolute;
					width: 0rpx;
					height: 0rpx;
					border-left: 15rpx solid transparent;
					border-right: 15rpx solid transparent;
					border-top: 20rpx solid #000;
					left: 50%;
					transform: translateX(-50%);
					bottom: -15rpx;
				}
			}
		}

		// 收藏房子列表
		.like-house-list {
			margin-top: 20rpx;
			padding: 20rpx;
		}
		.calendar-title{
			text-align: center;
			padding: 10px;
		}
	}
</style>
