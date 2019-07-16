var pagetype = 1;
export default {
    comlist: [{
            stored: "actdata", //存到store仓库的节点名
            class: 'tupian',
            icon: '/static/images/icon/tupian.png',
            name: '图片',
            items: {
                tempname: 'ModPicComTemp',
                tempprop: "ModPicComProp",
                tempcont: {

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
    }]
}
// export default {
//     pagetype: 1, //全局变量 <=>[./basics.js] => pagetype (用于判断终端类型：1:pc,2:h5,3:ios); 
//     

// }