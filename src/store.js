import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        "bodydata": {
            "width": "",
            "height": "",
            "isuploadimg": false,
            "bodyimg": "",
            "bgcolor": "#f1f1f1"
        },
        "actdata": [{
                "tempname": "ModPicComTemp",
                "tempprop": "ModPicComProp",
                "tempcont": {
                    "width": 374,
                    "height": 653,
                    "maximg": "http://sr4.pplive.cn/cms/54/20/10ee5812efcc176a075b5129a18e500e.png"
                }
            },
            {
                "tempname": "ModPicComTemp",
                "tempprop": "ModPicComProp",
                "tempcont": {
                    "width": 374,
                    "height": 473,
                    "maximg": "http://sr2.pplive.cn/cms/41/62/e481d44b9fd1caaab3b652c092ae1ff2.png"
                }
            },
            {
                "tempname": "ModPicComTemp",
                "tempprop": "ModPicComProp",
                "tempcont": {
                    "width": 373,
                    "height": 666,
                    "maximg": "http://sr2.pplive.cn/cms/28/16/a4264c8df5ce2433c2918f7cf3cb48ab.png"
                }
            }
        ],
        "fixeddata": [{
                "tempname": "ModBtnComTemp",
                "tempprop": "ModBtnComProp",
                "tempcont": {
                    "width": 137,
                    "height": 141,
                    "top": 309,
                    "left": 77,
                    "maximg": "",
                    "bgcolor": "#344361",
                    "color": "#fff",
                    "link": "",
                    "text": "sss",
                    "isvid": false,
                    "vid": "",
                    "opacity": false,
                    "animate": "pulse"
                }
            },
            {
                "tempname": "ModBtnPayTemp",
                "tempprop": "ModBtnPayProp",
                "tempcont": {
                    "width": 117,
                    "height": 144,
                    "top": 670,
                    "left": 227,
                    "img": "",
                    "bgcolor": "#451025",
                    "fontsize": 12,
                    "color": "",
                    "opacity": false,
                    "price": "yinfawuzhe_pc",
                    "detail": "one_year",
                    "text": null,
                    "animate": "default"
                }
            },
            {
                "tempname": "ModBtnPayTemp",
                "tempprop": "ModBtnPayProp",
                "tempcont": {
                    "width": 150,
                    "height": 49,
                    "top": 968,
                    "left": 196,
                    "img": "",
                    "bgcolor": "#451025",
                    "fontsize": 12,
                    "color": "",
                    "opacity": false,
                    "price": "yinfawuzhe_pc",
                    "detail": "one_year",
                    "text": null,
                    "animate": "default"
                }
            },
            {
                "tempname": "ModBtnPayTemp",
                "tempprop": "ModBtnPayProp",
                "tempcont": {
                    "width": 151,
                    "height": 45,
                    "top": 973,
                    "left": 31,
                    "img": "",
                    "bgcolor": "#451025",
                    "fontsize": 12,
                    "color": "",
                    "opacity": false,
                    "price": "yinfawuzhe_pc",
                    "detail": "one_year",
                    "text": null,
                    "animate": "default"
                }
            },
            {
                "tempname": "ModMovComTemp",
                "tempprop": "ModMovComProp",
                "tempcont": {
                    "width": 136,
                    "height": 196,
                    "top": 1134,
                    "left": 208,
                    "vid": 9046672
                }
            }
        ]
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
            console.log(len);
            state[data.element.stored].splice(len, 0, data.element.items);
            console.log('addSnData', payload);
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
            let data = Object.assign({}, JSON.parse(JSON.stringify(payload)));
            state = data;
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