<template>
	<view class="like_item">
		<image src="https://pic1.ajkimg.com/display/anjuke/b3e5c015f89f1b78fbf2e7be364bf0e5/240x180c.jpg" mode=""></image>
		<view class="info">
			<view class="title">
				【Loft41】北京路/上下九/沙发上干撒
			</view>
			<view class="desc">
				整租.1室厅.1张床.宜住2人
			</view>
			<view class="tag">
				<u-tag class="item" text="速订" border-color="#999" color="#999" size="24" mode="plain" />
				<u-tag class="item" text="有车位" border-color="#999" color="#999" size="24" mode="plain" />
			</view>
			<view class="tag">
				<u-tag class="item" text="早鸟特惠" border-color="#e56587" color="#e56587" size="24" mode="plain" />
				<u-tag class="item" text="新房速销" border-color="#e56587" color="#e56587" size="24" mode="plain" />
				<u-tag class="item" text="连住" border-color="#e56587" color="#e56587" size="24" mode="plain" />
			</view>
			<view class="price-comment">
				<view class="comment">
					<text>5.0</text>
					<text>分</text>
					<text>1点评</text>
				</view>
				<view class="price">
					<text>￥200</text>
					<text>￥</text>
					<text>160</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.like_item{
		display: flex;
		box-shadow: 0 4px 30px 0 rgba(4, 59, 85, 0.1);
		border-radius: 20rpx;
		image{
			width: 40%;
			height: 250rpx;
			border-radius: 20rpx;
		}
		.info{
			width: 60%;
			padding: 10rpx;
			margin-left: 5rpx;
			.title{
				font-weight: 600;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.desc{
				font-size: 24rpx;
				color: #999999;
			}
			.tag{
				margin-top: 10rpx;
				font-size: 24rpx;
				.item{
					padding: 5rpx 10rpx;
					margin-right: 8rpx;
				}
			}
			.price-comment{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 20rpx;
				.comment{
					text{
						&:nth-child(1){
							font-weight: 600;
							font-size: 36rpx;
						}
						&:nth-child(2){
							color: #999;
							font-size: 24rpx;
						}
						&:nth-child(3){
							color: #999;
							font-size: 24rpx;
						}
					}
				}
				.price{
					text{
						&:nth-child(1){
							font-size: 24rpx;
							color: #999;
							text-decoration: line-through;
						}
						&:nth-child(2){
							font-size: 24rpx;
							color: #e56587;
						}
						&:nth-child(3){
							font-size: 36rpx;
							color: #e56587;
							font-weight: 600;
						}
					}
				}
			}
		}
	}
</style>
