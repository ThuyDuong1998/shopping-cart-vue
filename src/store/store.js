import Vue from 'vue'
import Vuex from 'vuex'
import list from './list/index'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        list
    },
})

export default store