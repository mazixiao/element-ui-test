import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'



// 概览

// 订单数据分析
import overviewOrderForm from '@/views/overview/orderForm'
// 防伪数据分析
import overviewUser from '@/views/overview/user'
// 营销数据分析
import overviewMarketing from '@/views/overview/marketing'


// 赋码印刷

// 生码规则
import printingRawCodeRule from '@/views/printing/rawCode/rule'
import printingRawCodeRuleAdd from '@/views/printing/rawCode/ruleAdd'
// 生码订单
import printingRawCodeOrde from '@/views/printing/rawCode/order'
import printingRawCodeOrdeAdd from '@/views/printing/rawCode/orderAdd'

// 生产管理(测试用)
import product from '@/views/product/product'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: index,
			meta: {
				title: '首页'
			},
		},
		{
			path: '/overview/orderForm',
			name: 'overviewOrderForm',
			component: overviewOrderForm,
			meta: {
				title: '订单数据分析'
			},
		},
		{
			path: '/overview/user',
			name: 'overviewUser',
			component: overviewUser,
			meta: {
				title: '防伪数据分析'
			},
		},
		{
			path: '/overview/marketing',
			name: 'overviewMarketing',
			component: overviewMarketing,
			meta: {
				title: '营销数据分析'
			},
		},
		{
			path: '/printing/rawCode/rule',
			name: 'printingRawCodeRule',
			component: printingRawCodeRule,
			props:true,
			value: "100",
			meta: {
				title: '生码规则'
			}
		},
		{
			path: '/printing/rawCode/ruleAdd/:num',
			name: 'printingRawCodeRuleAdd',
			component: printingRawCodeRuleAdd,
			meta: {
				title: '新增客户生码规则'
			},
		},

		{
			path: '/printing/rawCode/orde',
			name: 'printingRawCodeOrde',
			component: printingRawCodeOrde,
			meta: {
				title: '生码订单'
			},
		},
		{
			path: '/printing/rawCode/orderAdd/:num',
			name: 'printingRawCodeOrdeAdd',
			component: printingRawCodeOrdeAdd,
			meta: {
				title: '新增生码订单'
			},
		},
		{
			path: '/product/product',
			name: 'product',
			component: product,
			meta: {
				title: '生产管理'
			},
		},

		



	],
	mode: "history"
})
