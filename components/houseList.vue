<template>
	<view class="house">
		<view class="item" v-for="item in 6" :key="item">
			<image src="https://pic1.ajkimg.com/display/anjuke/b3e5c015f89f1b78fbf2e7be364bf0e5/240x180c.jpg" mode=""></image>
			<view class="info">
				<text class="price">
					￥215
				</text>
				<text class="dot"></text>
				<text class="tips">
					宜住2人
				</text>
			</view>
			<view class="title">
				【豪宅】广州鱼人岛码头家沙发沙发
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.house{
		display: flex;
		flex-wrap: wrap;
		.item{
			padding: 10rpx 20rpx 10rpx 0;
			width: 50%;
			image{
				width: 100%;
				height: 220rpx;
				overflow: hidden;
				border-radius: 10rpx;
			}
			.info{
				display: flex;
				align-items: center;
				.dot{
					margin-left: 10rpx;
					width: 8rpx;
					height: 8rpx;
					background-color: #222222;
					border-radius: 50%;
				}
				.price{
					font-weight: bold;
					font-size: 30rpx;
				}
				.tips{
					font-size: 24rpx;
					margin-left: 10rpx;
					color: #7d7e79;
				}
			}
			.title{
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
</style>
