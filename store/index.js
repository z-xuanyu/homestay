import  Vue from "vue";
import Vuex from 'vuex';
import getters from './getters.js';
import app from './modules/app.js';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules:{
		app,
	},
	getters
})

export default store;