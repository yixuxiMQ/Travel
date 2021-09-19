import Vue from "vue";
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    actions: {
        changeCityName(ctx, city){
            ctx.commit('changeCityName', city);
        }
    },
    mutations
})