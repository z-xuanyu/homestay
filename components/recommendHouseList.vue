<template>
	<view class="house-wrap">
		<view class="house-item" v-for="item in 6" :key="item">
			
			<view class="item">
				<image src="https://pic1.ajkimg.com/display/anjuke/b3e5c015f89f1b78fbf2e7be364bf0e5/240x180c.jpg" mode=""></image>
				<view class="info">
					<view class="title">
						【八戒】天门山火车站/豪华公寓车站/豪华公
					</view>
					<view class="tips">
						<text>整体.</text>
						<text>1室.</text>
						<text>宜住2人</text>
					</view>
					<view class="price">
						<text>￥198</text>
						<text>￥298</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.house-wrap{
		display: flex;
		flex-wrap: wrap;
		.house-item{
			width: 50%;
			box-sizing: border-box;
			padding: 10rpx;
		}
		.item{
			box-shadow: 0 4px 30px 0 rgba(4, 59, 85, 0.1);
			padding: 20rpx;
			border-radius: 20rpx;
			image{
				border-radius: 20rpx;
				width: 100%;
				height: 300rpx;
			}
			.info{
				.title{
					@include text-ellipsis-1;
					font-weight: 600;
				}
				.tips{
					font-size: $font-size-sm;
					color: $text-color-grey;
					margin: $spacing-row-sm;
					margin-top: 0;
				}
				.price{
					text{
						&:nth-child(1){
							font-size: $font-size-xl;
							font-weight: 500;
							color: $text-color-primary;
							margin-right: 10rpx;
						}
						&:last-child{
							font-size: $font-size-sm;
							color: $text-color-grey;
							text-decoration: line-through;
						}
					}
				}
			}
		}
	}
</style>
