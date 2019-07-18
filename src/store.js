import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        "bodydata": {
            width: '',
            height: '',
            isuploadimg: false,
            bodyimg: '',
            bgcolor: "#f1f1f1"
        },
        "actdata": [],
        "fixeddata": []
    },
    getters: {
        bodydata: state => {
            return state.bodydata;
        },
        actdata: state => {
            return state.actdata;
        },
        fixeddata(state) {
            return state.fixeddata;
        }
    },
    mutations: {
        removeppdata(state, payload) {
            return state[payload.nature].splice(payload.num, 1);
        },
        addSnData: (state, payload) => {
            let data = Object.assign({}, JSON.parse(JSON.stringify(payload)));
            let len = state[data.element.stored].length;
            state[data.element.stored].splice(len, 0, data.element.items);
        },
        unDateSnData: (state, payload) => {
            let data = Object.assign({}, JSON.parse(JSON.stringify(payload)));
            let arr = state["actdata"];
            let oldinx = data.oldinx;
            let newinx = data.newinx;
            //[arr[oldinx], arr[newinx]] = [arr[newinx], arr[oldinx]];
            //可使用splice方法来交换数组的位置
            //array.splice(index2,1,...array.splice(index1, 1 , array[index2]));
            arr.splice(newinx, 1, ...arr.splice(oldinx, 1, arr[newinx]));
        },
        editSnData(state, payload) {
            let data = Object.assign({}, JSON.parse(JSON.stringify(payload)));
            state["actdata"][data.index]["tempcont"][data.nature] = data.value;
        },
        editBtnsSnData(state, payload) {
            let data = Object.assign({}, JSON.parse(JSON.stringify(payload)));
            state["fixeddata"][data.index]["tempcont"][data.nature] = data.value;
        },
        editBtnsParamsSnData(state, payload) {
            state["fixeddata"][payload.index]["params"][payload.nature] = payload.value;
        },
        getSnData(state, payload) {
            let arrdata = state.sndata.ppdata.slice(0, payload + 1);
            let arr = arrdata.filter(item => { return item.tempprop == "pp-prop-btn"; });
            state.ppcombtn = state.sndata.ppcombtn[arr.length - 1];
        },
        unDateBodyData(state, payload) {
            let data = Object.assign({}, JSON.parse(JSON.stringify(payload)));
            state["bodydata"][data.nature] = data.value;
        },
        localdatastorage(state, payload) {
            state = Object.assign({}, JSON.parse(JSON.stringify(payload)));
        }
    },
    actions: {
        getSnData(context, payload) {
            context.commit('getSnData', payload);
        },
        removeppdata(context, payload) {
            context.commit('removeppdata', payload);
        },
        addSnData(context, payload) {
            context.commit('addSnData', payload);
        },
        unDateSnData(context, payload) {
            context.commit('unDateSnData', payload);
        },
        unDateBodyData(context, payload) {
            context.commit('unDateBodyData', payload);
        },
        editSnData(context, payload) {
            context.commit('editSnData', payload);
        },
        editBtnsSnData(context, payload) {
            context.commit('editBtnsSnData', payload);
        },
        editBtnsParamsSnData(context, payload) {
            context.commit('editBtnsParamsSnData', payload);
        },
        localdatastorage(context, payload) {
            context.commit('localdatastorage', payload);
        }
    }
})