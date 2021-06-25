<template>
	<view class="like">
		<u-tabs :list="tabList" active-color="#222222" :bar-width="60" :bar-style="barStyle" :is-scroll="false" :current="current" @change="handleTabChange"></u-tabs>
		<!--没有收藏提示 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				barStyle:{
					backgroundColor: 'red',
				},
				tabList:[
					{
						name: '收藏房源'
					},
					{
						name: '收藏笔记'
					}
				]
			}
		},
		methods:{
			handleTabChange(value){
				this.current = value;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.like{
		
	}
</style>
