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
                    width: 750,
                    height: 350,
                    radius: 0,
                    list: [{
                        img: 'https://sr4.pplive.cn/cms/36/28/fa1b7235c07e6e7a691577e1136f8ea1.jpg.webp',
                        imgw: 750,
                        imgh: 350,
                        link: '',
                        bgcolor: 'rgb(93, 218, 223)',
                        sort: 0,
                        kind: 0,
                        vid: ''
                    }],
                    pinx: 0,
                    time: 3000,
                    statistics: 'huandeng_' + String(Math.random()).substring(3, 9),
                    tj_id: '',
                    tjname: '幻灯',
                    ext_info: "",
                    description: '该模块可展示多个图片进行轮播',
                    count: 0
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
                    width: 332,
                    height: 332,
                    top: 20,
                    left: 0,
                    eventid: "default",
                    rewardid: ["ths1", "ths2", "ths3", "ths4", "ths5", "ths6", "ths7", "ths8"],
                    roulepic: '/vue/images/lott.png',
                    handpic: '/vue/images/alots.png',
                    handw: 136,
                    handh: 136,
                    hleft: 0,
                    htop: 0,
                    angle: 30,
                    mode: "turntable",
                    number: 6,
                    speed: 3,
                    radius: 0,
                    statistics: 'zpbutton_' + String(Math.random()).substring(3, 9),
                    tj_id: '',
                    tjname: '转盘抽奖',
                    ext_info: "",
                    description: '转盘抽奖模块，可配置不同类型的奖品',
                    count: 0,
                    animate: 'default'
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
                    width: 300,
                    height: 20,
                    top: 10,
                    left: 10,
                    radius: 0,
                    awardlist: [],
                    eventid: "default",
                    number: 40,
                    fontsize: 17,
                    color: "#ffffff",
                    awardcolor: "#f30101",
                    roll: "top",
                    rollnum: 1,
                    lineheight: 30,
                    radio: 1,
                    fontfamily: "'宋体'",
                    statistics: 'zjmd_' + String(Math.random()).substring(3, 9),
                    tj_id: '',
                    tjname: '中奖名单',
                    ext_info: "",
                    description: '可在活动页面中实时展示中奖名单，用于吸引用户参与活动',
                    count: 0
                }
            }
        },
        {
            stored: "fixeddata", //存到store仓库的节点名
            class: 'guaguale',
            icon: '/static/images/icon/guaguale.png',
            name: '刮刮乐',
            items: {
                tempname: 'ModScratchCardTemp',
                tempprop: "ModScratchCardProp",
                tempcont: {
                    width: 332,
                    height: 332,
                    top: 20,
                    left: 0,
                    eventid: "default",
                    rewardid: ["ths1", "ths2", "ths3", "ths4", "ths5", "ths6", "ths7", "ths8"],
                    roulepic: '/vue/images/lott.png',
                    handpic: '/vue/images/alots.png',
                    handw: 136,
                    handh: 136,
                    hleft: 0,
                    htop: 0,
                    angle: 30,
                    mode: "turntable",
                    number: 6,
                    speed: 3,
                    radius: 0,
                    statistics: 'zpbutton_' + String(Math.random()).substring(3, 9),
                    tj_id: '',
                    tjname: '转盘抽奖',
                    ext_info: "",
                    description: '转盘抽奖模块，可配置不同类型的奖品',
                    count: 0,
                    animate: 'default'
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
                    width: 100,
                    height: 100,
                    top: 10,
                    left: 10,
                    img: "",
                    bgcolor: "#909399",
                    radius: 0,
                    fontsize: 12,
                    color: "",
                    opacity: false,
                    text: null,
                    animate: "default",
                    eventid: "default",
                    statistics: 'wdjp_' + String(Math.random()).substring(3, 9),
                    tj_id: '',
                    tjname: '我的奖品',
                    ext_info: "",
                    description: '供用户抽奖后查看自己的抽中的奖品以及填写中奖信息',
                    count: 0
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
                    width: 300,
                    height: 30,
                    top: 10,
                    left: 10,
                    bgimg: "",
                    radius: 4,
                    color: "#333333",
                    fontsize: 12,
                    chancesize: 17,
                    chancecolor: '#ff0000',
                    bgcolor: "",
                    fontfamily: "'宋体'",
                    opacity: false,
                    text: null,
                    animate: "default",
                    eventid: "default",
                    statistics: 'syjh_' + String(Math.random()).substring(3, 9),
                    tj_id: 'vipactbi_syjh_' + String(Math.random()).substring(3, 9),
                    tjname: '剩余机会',
                    ext_info: "",
                    description: '供用户查看剩余的抽奖次数',
                    count: 0
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
                    width: 300,
                    height: 240,
                    top: 10,
                    left: 10,
                    radius: 0,
                    vid: 8085993,
                    statistics: 'danbofangqi_' + String(Math.random()).substring(3, 9),
                    tj_id: '',
                    tjname: '单个播放器',
                    ext_info: "",
                    description: '用于放置单个影片，pc和h5页面均可配置',
                    count: 0
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
                    width: 375,
                    height: 175,
                    top: 50,
                    left: 0,
                    radius: 0,
                    list: [{
                        sort: 1,
                        vid: 23811741,
                        img: 'http://vipac.pptv.com/uploads/image/page_background/2018/10/26/20181026141711604.jpg'
                    }],
                    statistics: 'h5duoping_' + String(Math.random()).substring(3, 9),
                    tj_id: '',
                    tjname: 'h5多个播放器',
                    ext_info: "",
                    description: '可放置多个影片，并进行切换，仅支持h5页面',
                    count: 0
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
                    width: 375,
                    height: 175,
                    top: 10,
                    left: 10,
                    img: "",
                    bgcolor: "#" + String(Math.random()).substring(3, 9).toString(16),
                    fontsize: 12,
                    radius: 0,
                    color: "",
                    opacity: false,
                    price: "",
                    detail: "",
                    text: null,
                    animate: "default",
                    statistics: 'denglu_' + String(Math.random()).substring(3, 9),
                    tj_id: '',
                    tjname: '登录',
                    ext_info: "",
                    description: '在活动背景图上添加此按钮，点击后可直接登录',
                    count: 0
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
                    width: 100,
                    height: 100,
                    top: 10,
                    left: 10,
                    img: "",
                    bgcolor: "#FF6633",
                    radius: 0,
                    fontsize: 12,
                    color: "",
                    opacity: false,
                    price: "",
                    detail: "",
                    text: null,
                    animate: "default",
                    isaddrecord: false,
                    record: "1",
                    eventid: "default",
                    codeprice: "",
                    statistics: 'jiujiagebao_' + String(Math.random()).substring(3, 9),
                    tj_id: '',
                    tjname: '购买价格包',
                    ext_info: "",
                    description: '在活动背景图上添加此按钮，点击后可跳转至购买页面。该按钮仅支持旧的订单系统',
                    count: 0
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
                    width: 375,
                    height: 175,
                    top: 10,
                    left: 10,
                    img: "",
                    bgcolor: "#" + String(Math.random()).substring(3, 9).toString(16),
                    fontsize: 12,
                    radius: 0,
                    color: "",
                    opacity: false,
                    price: "",
                    detail: "",
                    text: null,
                    animate: "default",
                    statistics: 'denglu_' + String(Math.random()).substring(3, 9),
                    tj_id: '',
                    tjname: '登录',
                    ext_info: "",
                    description: '在活动背景图上添加此按钮，点击后可直接登录',
                    count: 0
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
                    width: 375,
                    height: 175,
                    top: 10,
                    left: 10,
                    img: "",
                    bgcolor: "#" + String(Math.random()).substring(3, 9).toString(16),
                    fontsize: 12,
                    radius: 0,
                    color: "",
                    opacity: false,
                    price: "",
                    detail: "",
                    text: null,
                    animate: "default",
                    statistics: 'denglu_' + String(Math.random()).substring(3, 9),
                    tj_id: '',
                    tjname: '登录',
                    ext_info: "",
                    description: '在活动背景图上添加此按钮，点击后可直接登录',
                    count: 0
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
                    width: 375,
                    height: 175,
                    top: 10,
                    left: 10,
                    img: "",
                    bgcolor: "#" + String(Math.random()).substring(3, 9).toString(16),
                    fontsize: 12,
                    radius: 0,
                    color: "",
                    opacity: false,
                    price: "",
                    detail: "",
                    text: null,
                    animate: "default",
                    statistics: 'denglu_' + String(Math.random()).substring(3, 9),
                    tj_id: '',
                    tjname: '登录',
                    ext_info: "",
                    description: '在活动背景图上添加此按钮，点击后可直接登录',
                    count: 0
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
                width: 375,
                height: 175,
                top: 10,
                left: 10,
                img: "",
                bgcolor: "#" + String(Math.random()).substring(3, 9).toString(16),
                fontsize: 12,
                radius: 0,
                color: "",
                opacity: false,
                price: "",
                detail: "",
                text: null,
                animate: "default",
                statistics: 'denglu_' + String(Math.random()).substring(3, 9),
                tj_id: '',
                tjname: '登录',
                ext_info: "",
                description: '在活动背景图上添加此按钮，点击后可直接登录',
                count: 0
            }

        }
    }]
}