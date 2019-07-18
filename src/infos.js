export default {
    comlist: [{
            stored: "actdata", //存到store仓库的节点名
            class: 'tupian',
            icon: '/static/images/icon/tupian.png',
            name: '图片',
            pagetype: [1, 2, 3, 4],
            items: {
                tempname: 'ModPicComTemp',
                tempprop: "ModPicComProp",
                tempcont: {
                    width: 750,
                    height: 150,
                    maximg: "/static/images/h5logo.png",
                    bgcolor: '',
                    radius: 0,
                    statistics: 'beijing_' + String(Math.random()).substring(3, 9),
                    tj_id: '',
                    tjname: '图片',
                    ext_info: "",
                    description: '用于上传活动页的背景图',
                    count: 0
                }
            }
        },
        {
            stored: "actdata", //存到store仓库的节点名
            class: 'banner',
            icon: '/static/images/icon/banner.png',
            name: '轮播图',
            items: {
                tempname: 'ModBannerTemp',
                tempprop: "ModBannerProp",
                tempcont: {

                }
            }
        }
    ],
    lotlist: [{
            stored: "fixeddata", //存到store仓库的节点名
            class: 'jiugongge',
            icon: '/static/images/icon/jiugongge.png',
            name: '九宫格',
            items: {
                tempname: 'ModLotComTemp',
                tempprop: "ModLotComProp",
                tempcont: {
                    width: 315,
                    height: 270,
                    top: 20,
                    left: 10,
                    minw: 101,
                    minh: 75,
                    margin: 5,
                    mleft: 5,
                    mtop: 5,
                    isupimg: false,
                    eventid: "default",
                    rewardid: ["ths1", "ths2", "ths3", "ths4", "ths5", "ths6", "ths7", "ths8"],
                    lotitems: [],
                    lotdefimg: '',
                    lotactimg: '',
                    isown: false,
                    hotwidth: 101,
                    hotheight: 75,
                    hottop: 80,
                    hotleft: 106,
                    hotdefimg: '',
                    hotactimg: '',
                    hotendimg: '',
                    fontsize: 14,
                    fontcolor: '#333333',
                    chancesize: 17,
                    chancecolor: '#ff0000',
                    textbottom: 20,
                    textalign: 'left',
                    lotpostion: 'relative',
                    cwidth: 300,
                    cheight: 30,
                    ctop: 0,
                    cleft: 0,
                    animate: "default",
                    btnstatis: '',
                    radius: 0,
                    statistics: 'jggbutton_' + String(Math.random()).substring(3, 9),
                    tj_id: '',
                    tjname: '九宫格',
                    ext_info: "",
                    description: '九宫格抽奖模块，可配置不同类型的奖品',
                    count: 0
                }
            }
        },
        {
            stored: "fixeddata", //存到store仓库的节点名
            class: 'zhuanpan',
            icon: '/static/images/icon/zhuanpan.png',
            name: '转盘抽奖',
            items: {
                tempname: 'ModRouleComTemp',
                tempprop: "ModRouleComProp",
                tempcont: {

                }
            }
        },
        {
            stored: "fixeddata", //存到store仓库的节点名
            class: 'cards',
            icon: '/static/images/icon/cards.png',
            name: '卡牌',
            items: {
                tempname: 'ModCardsTemp',
                tempprop: "ModCardsProp",
                tempcont: {

                }
            }
        },
        {
            stored: "fixeddata", //存到store仓库的节点名
            class: 'listaward',
            icon: '/static/images/icon/listaward.png',
            name: '中奖名单',
            items: {
                tempname: 'ModAwardListTemp',
                tempprop: "ModAwardListProp",
                tempcont: {

                }
            }
        },
        {
            stored: "fixeddata", //存到store仓库的节点名
            class: 'myaward',
            icon: '/static/images/icon/myaward.png',
            name: '我的奖品',
            items: {
                tempname: 'ModMyAwardTemp',
                tempprop: "ModMyAwardProp",
                tempcont: {

                }
            }
        },
        {
            stored: "fixeddata", //存到store仓库的节点名
            class: 'chance',
            icon: '/static/images/icon/chance.png',
            name: '剩余机会',
            items: {
                tempname: 'ModChanceTemp',
                tempprop: "ModChanceProp",
                tempcont: {

                }
            }
        }
    ],
    movlist: [{
            stored: "fixeddata", //存到store仓库的节点名
            class: 'film',
            icon: '/static/images/icon/film.png',
            name: '播放器',
            items: {
                tempname: 'ModMovieTemp',
                tempprop: "ModMovieProp",
                tempcont: {

                }
            }
        },
        {
            stored: "fixeddata", //存到store仓库的节点名
            class: 'movie',
            icon: '/static/images/icon/movie.png',
            name: '多部影片',
            items: {
                tempname: 'ModFilmsTemp',
                tempprop: "ModFilmsProp",
                tempcont: {

                }
            }
        },
        {
            stored: "fixeddata", //存到store仓库的节点名
            class: 'music',
            icon: '/static/images/icon/music.png',
            name: '音乐',
            items: {
                tempname: 'ModMusicTemp',
                tempprop: "ModMusicProp",
                tempcont: {

                }
            }
        }
    ],
    btnlist: [{
            stored: "fixeddata", //存到store仓库的节点名
            class: 'anniu',
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
                    bgcolor: "#67C23A",
                    radius: 0,
                    color: "",
                    link: "",
                    text: null,
                    isvid: false,
                    vid: '',
                    opacity: false,
                    animate: 'default',
                    statistics: 'diantiaozhuan_' + String(Math.random()).substring(3, 9),
                    tj_id: '',
                    tjname: '点击跳转',
                    ext_info: "",
                    description: '在活动背景图上添加此按钮，点击按钮后可跳转至h5页面或站内视频播放页',
                    count: 0
                }

            }
        },
        {
            stored: "fixeddata", //存到store仓库的节点名
            class: 'jiage',
            icon: '/static/images/icon/jiage.png',
            name: '价格包',
            items: {
                tempname: 'ModBtnPayTemp',
                tempprop: "ModBtnPayProp",
                tempcont: {

                }

            }
        }
    ],
    elslist: [{
            stored: "fixeddata", //存到store仓库的节点名
            class: 'login',
            icon: '/static/images/icon/login.png',
            name: '登录',
            items: {
                tempname: 'ModLoginTemp',
                tempprop: "ModLoginProp",
                tempcont: {

                }

            }
        },
        {
            stored: "fixeddata", //存到store仓库的节点名
            class: 'share',
            icon: '/static/images/icon/share.png',
            name: '分享',
            items: {
                tempname: 'ModShareTemp',
                tempprop: "ModShareProp",
                tempcont: {

                }

            }
        },
        {
            stored: "fixeddata", //存到store仓库的节点名
            class: 'countdown',
            icon: '/static/images/icon/countdown.png',
            name: '倒计时',
            items: {
                tempname: 'ModCountDownTemp',
                tempprop: "ModCountDownProp",
                tempcont: {

                }

            }
        }
    ],
    tablist: [{
        stored: "fixeddata", //存到store仓库的节点名
        class: 'tab',
        icon: '/static/images/icon/tab.png',
        name: '选项卡',
        items: {
            tempname: 'ModTabComTemp',
            tempprop: "ModTabComProp",
            tempcont: {

            }

        }
    }]
}
// export default {
//     pagetype: 1, //全局变量 <=>[./basics.js] => pagetype (用于判断终端类型：1:pc,2:h5,3:ios); 
//     

// }