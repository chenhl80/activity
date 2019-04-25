var pagetype = 1;
export default {
    comlist: [{
        stored: "actdata", //存到store仓库的节点名
        icon: '/static/images/icon/tupian.png',
        name: '图片',
        items: {
            tempname: 'ModPicComTemp',
            tempprop: "ModPicComProp",
            tempcont: {
                width: 1920,
                height: 150,
                maximg: "/static/images/logo.png"
            }
        }
    }],
    lotlist: [{
        stored: "fixeddata", //存到store仓库的节点名
        icon: '/static/images/icon/jiugongge.png',
        name: '九宫格',
        items: {
            tempname: 'ModLotComTemp',
            tempprop: "ModLotComProp",
            tempcont: {
                width: pagetype == 1 ? 897 : 300,
                height: pagetype == 1 ? 408 : 300,
                top: pagetype == 1 ? 200 : 20,
                left: pagetype == 1 ? 100 : 10,
                maximg: pagetype == 1 ? "/vue/images/logo.png" : "/vue/images/h5logo.png"
            }
        }
    }],
    movlist: [{
        stored: "fixeddata", //存到store仓库的节点名
        icon: '/static/images/icon/weibiaoti-.png',
        name: '播放器',
        items: {
            tempname: 'ModMovComTemp',
            tempprop: "ModMovComProp",
            tempcont: {
                width: pagetype == 1 ? 600 : 300,
                height: pagetype == 1 ? 480 : 240,
                top: pagetype == 1 ? 100 : 10,
                left: pagetype == 1 ? 100 : 10,
                vid: 8085993
            }
        }
    }],
    btnlist: [{
            stored: "fixeddata", //存到store仓库的节点名
            icon: '/static/images/icon/anniu.png',
            name: '按钮',
            items: {
                tempname: 'ModBtnComTemp',
                tempprop: "ModBtnComProp",
                tempcont: {
                    width: 100,
                    height: 100,
                    top: 10,
                    left: 10,
                    maximg: "",
                    bgcolor: "#" + String(Math.random()).substring(3, 9).toString(16),
                    color: "",
                    link: "",
                    text: null,
                    isvid: false,
                    vid: '',
                    opacity: false,
                    animate: 'default'
                }

            }
        },
        {
            stored: "fixeddata", //存到store仓库的节点名
            icon: '/static/images/icon/anniu.png',
            name: '购买价格包',
            items: {
                tempname: 'ModBtnPayTemp',
                tempprop: "ModBtnPayProp",
                tempcont: {
                    width: 100,
                    height: 100,
                    top: 10,
                    left: 10,
                    img: "",
                    bgcolor: "#" + String(Math.random()).substring(3, 9).toString(16),
                    fontsize: 12,
                    color: "",
                    opacity: false,
                    price: "",
                    detail: "",
                    text: null,
                    animate: "default"
                }

            }
        }
    ]
}
// export default {
//     pagetype: 1, //全局变量 <=>[./basics.js] => pagetype (用于判断终端类型：1:pc,2:h5,3:ios); 
//     

// }